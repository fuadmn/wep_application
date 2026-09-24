import React, { useState } from "react";

function App() {
  const today = new Date().toISOString().split("T")[0];

  const emptyForm = {
    accountCode: "",
    accountName: "",
    accountType: "",
    balance: "",
    description: "",
    date: today,
  };

  const [formData, setFormData] = useState(emptyForm);
  const [accounts, setAccounts] = useState([]);
  const [editingCode, setEditingCode] = useState(null);

  // =========================
  // ACCOUNT CODE
  // =========================
  const typeCodes = {
    Asset: 100,
    Liability: 200,
    Equity: 300,
    Revenue: 400,
    Expense: 600,
  };

  const getNextCode = (accountType) => {
    const prefix = typeCodes[accountType];

    if (!prefix) return "";

    const sameTypeAccounts = accounts.filter(
      (account) => account.accountType === accountType
    );

    if (sameTypeAccounts.length === 0) {
      return String(prefix);
    }

    const maxCode = Math.max(
      ...sameTypeAccounts.map((account) =>
        Number(account.accountCode)
      )
    );

    return String(maxCode + 1);
  };

  // =========================
  // INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "accountType") {
      setFormData({
        ...formData,
        accountType: value,
        accountCode: editingCode
          ? formData.accountCode
          : getNextCode(value),
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // =========================
  // SAVE / UPDATE
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.accountType || !formData.accountName) {
      return;
    }

    if (editingCode) {
      setAccounts((prev) =>
        prev.map((account) =>
          account.accountCode === editingCode
            ? {
                ...formData,
                accountCode: editingCode,
                balance: Number(formData.balance || 0),
              }
            : account
        )
      );

      setEditingCode(null);

      setFormData({
        ...emptyForm,
        date: today,
      });

      return;
    }

    const newCode = getNextCode(formData.accountType);

    const newAccount = {
      ...formData,
      accountCode: newCode,
      balance: Number(formData.balance || 0),
    };

    setAccounts((prev) => [...prev, newAccount]);

    setFormData({
      ...emptyForm,
      date: today,
    });
  };

  // =========================
  // EDIT
  // =========================
  const handleEdit = (account) => {
    setFormData({
      accountCode: account.accountCode,
      accountName: account.accountName,
      accountType: account.accountType,
      balance: account.balance,
      description: account.description,
      date: account.date,
    });

    setEditingCode(account.accountCode);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================
  // DELETE
  // =========================
  const handleDelete = (accountCode) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this account?"
    );

    if (!confirmDelete) return;

    setAccounts((prev) =>
      prev.filter(
        (account) => account.accountCode !== accountCode
      )
    );

    if (editingCode === accountCode) {
      setEditingCode(null);

      setFormData({
        ...emptyForm,
        date: today,
      });
    }
  };

  // =========================
  // CANCEL
  // =========================
  const handleCancel = () => {
    setEditingCode(null);

    setFormData({
      ...emptyForm,
      date: today,
    });
  };

  // =========================
  // TYPE COLORS
  // =========================
  const getTypeColor = (type) => {
    switch (type) {
      case "Asset":
        return "bg-blue-100 text-blue-700";

      case "Liability":
        return "bg-red-100 text-red-700";

      case "Equity":
        return "bg-yellow-100 text-yellow-700";

      case "Revenue":
        return "bg-green-100 text-green-700";

      case "Expense":
        return "bg-purple-100 text-purple-700";

      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-[1600px]">

        {/* ================= HEADER ================= */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-800">
            Chart of Accounts
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your business accounts
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* ================= FORM ================= */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-white shadow-lg">

              <div className="border-b border-slate-200 px-6 py-5">
                <h2 className="text-xl font-bold text-slate-800">
                  {editingCode
                    ? "Update Account"
                    : "New Account"}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {editingCode
                    ? `Editing account ${editingCode}`
                    : "Create a new account"}
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="p-6"
              >
                <div className="space-y-5">

                  {/* Account Type */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Account Type
                      <span className="ml-1 text-red-500">
                        *
                      </span>
                    </label>

                    <select
                      name="accountType"
                      value={formData.accountType}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="">
                        Select account type
                      </option>

                      <option value="Asset">
                        Asset
                      </option>

                      <option value="Liability">
                        Liability
                      </option>

                      <option value="Equity">
                        Equity
                      </option>

                      <option value="Revenue">
                        Revenue
                      </option>

                      <option value="Expense">
                        Expense
                      </option>
                    </select>
                  </div>

                  {/* Account Code */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Account Code
                    </label>

                    <input
                      type="text"
                      value={formData.accountCode}
                      readOnly
                      placeholder="Auto generated"
                      className="w-full cursor-not-allowed rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-bold text-slate-600 outline-none"
                    />

                    {formData.accountType &&
                      !editingCode && (
                        <p className="mt-1 text-xs text-slate-400">
                          {formData.accountType} starts from{" "}
                          {typeCodes[formData.accountType]}
                        </p>
                      )}
                  </div>

                  {/* Account Name */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Account Name
                      <span className="ml-1 text-red-500">
                        *
                      </span>
                    </label>

                    <input
                      type="text"
                      name="accountName"
                      value={formData.accountName}
                      onChange={handleChange}
                      placeholder="e.g. Cash"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Balance */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Balance
                    </label>

                    <input
                      type="number"
                      name="balance"
                      value={formData.balance}
                      onChange={handleChange}
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Date
                      <span className="ml-1 text-red-500">
                        *
                      </span>
                    </label>

                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Description
                    </label>

                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Enter account description..."
                      rows="5"
                      className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3 border-t border-slate-200 pt-5">

                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className={`flex-1 rounded-lg px-4 py-3 text-sm font-semibold text-white transition ${
                      editingCode
                        ? "bg-orange-500 hover:bg-orange-600"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    {editingCode
                      ? "Update Account"
                      : "Save Account"}
                  </button>

                </div>
              </form>
            </div>
          </div>

          {/* ================= TABLE ================= */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg">

              <div className="border-b border-slate-200 px-6 py-5">
                <h2 className="text-xl font-bold text-slate-800">
                  Accounts
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Total Accounts: {accounts.length}
                </p>
              </div>

              <div className="overflow-x-auto">

                <table className="w-full min-w-[1100px]">

                  {/* ================= TABLE HEADER ================= */}
                  <thead className="bg-black">
                    <tr>

                      <th className="px-5 py-4 text-left text-xs font-bold uppercase text-white">
                        Code
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-bold uppercase text-white">
                        Date
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-bold uppercase text-white">
                        AccountName
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-bold uppercase text-white">
                        Type
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-bold uppercase text-white">
                        Description
                      </th>

                      <th className="px-5 py-4 text-right text-xs font-bold uppercase text-white">
                        Balance
                      </th>

                      <th className="px-5 py-4 text-right text-xs font-bold uppercase text-white">
                        Actions
                      </th>

                    </tr>
                  </thead>

                  {/* ================= TABLE BODY ================= */}
                  <tbody className="divide-y divide-slate-200">

                    {accounts.length === 0 ? (

                      <tr>
                        <td
                          colSpan="7"
                          className="px-5 py-14 text-center"
                        >
                          <div className="text-4xl">
                            📋
                          </div>

                          <p className="mt-3 text-sm font-semibold text-slate-600">
                            No accounts found
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            Create your first account
                            using the form
                          </p>
                        </td>
                      </tr>

                    ) : (

                      accounts.map((account) => (

                        <tr
                          key={account.accountCode}
                          className="transition hover:bg-slate-50"
                        >

                          {/* Code */}
                          <td className="px-5 py-4">
                            <span className="font-bold text-blue-600">
                              {account.accountCode}
                            </span>
                          </td>

                          {/* Date */}
                          <td className="px-5 py-4 text-sm text-slate-600">
                            {account.date}
                          </td>

                          {/* Account Name */}
                          <td className="px-5 py-4">
                            <span className="font-semibold text-slate-800">
                              {account.accountName}
                            </span>
                          </td>

                          {/* Type */}
                          <td className="px-5 py-4">
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold ${getTypeColor(
                                account.accountType
                              )}`}
                            >
                              {account.accountType}
                            </span>
                          </td>

                          {/* Description */}
                          <td className="px-5 py-4">
                            <span className="block max-w-[220px] truncate text-sm text-slate-500">
                              {account.description || "-"}
                            </span>
                          </td>

                          {/* Balance */}
                          <td className="px-5 py-4 text-right">
                            <span className="font-bold text-slate-800">
                              $
                              {Number(
                                account.balance || 0
                              ).toFixed(2)}
                            </span>
                          </td>

                          {/* Actions */}
                          <td className="px-5 py-4">
                            <div className="flex justify-end gap-2">

                              <button
                                type="button"
                                onClick={() =>
                                  handleEdit(account)
                                }
                                className="rounded-lg bg-black px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
                              >
                                Update
                              </button>

                              <button
                                type="button"
                                onClick={() =>
                                  handleDelete(
                                    account.accountCode
                                  )
                                }
                                className="rounded-lg bg-black px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
                              >
                                Delete
                              </button>

                            </div>
                          </td>

                        </tr>

                      ))
                    )}

                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;