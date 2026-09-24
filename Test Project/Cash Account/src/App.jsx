
import { useState } from "react";

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  // ACCOUNTING VALUES
  const assets = 25000;
  const liabilities = 8500;
  const ownersEquity = 16500;
  const revenue = 45000;
  const expenses = 12000;

  // ACCOUNTING EQUATION
  const totalEquityAndLiabilities = liabilities + ownersEquity;
  const isBalanced = assets === totalEquityAndLiabilities;

  const formatCurrency = (amount) =>
    `$${amount.toLocaleString()}`;

  const accounts = [
    {
      title: "Assets",
      amount: formatCurrency(assets),
      icon: "💰",
      description: "Total business assets",
      color: "bg-blue-500",
    },
    {
      title: "Liabilities",
      amount: formatCurrency(liabilities),
      icon: "📉",
      description: "Total business liabilities",
      color: "bg-red-500",
    },
    {
      title: "Owner's Equity",
      amount: formatCurrency(ownersEquity),
      icon: "👤",
      description: "Business owner's equity",
      color: "bg-purple-500",
    },
    {
      title: "Revenue",
      amount: formatCurrency(revenue),
      icon: "📈",
      description: "Total business revenue",
      color: "bg-green-500",
    },
    {
      title: "Expenses",
      amount: formatCurrency(expenses),
      icon: "💸",
      description: "Total business expenses",
      color: "bg-orange-500",
    },
  ];

  const menuItems = [
    "Dashboard",
    "Assets",
    "Liabilities",
    "Owner's Equity",
    "Revenue",
    "Expenses",
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 text-white">
        <div className="border-b border-slate-700 p-6">
          <h1 className="text-2xl font-bold">
            Accounting<span className="text-blue-500">Pro</span>
          </h1>
        </div>

        <nav className="p-4">
          <p className="mb-3 px-4 text-xs uppercase text-gray-400">
            Main Menu
          </p>

          <div className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveMenu(item)}
                className={`w-full rounded-xl px-4 py-3 text-left transition ${
                  activeMenu === item
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {item === "Dashboard" && "🏠 "}
                {item === "Assets" && "💰 "}
                {item === "Liabilities" && "📉 "}
                {item === "Owner's Equity" && "👤 "}
                {item === "Revenue" && "📈 "}
                {item === "Expenses" && "💸 "}
                {item}
              </button>
            ))}
          </div>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1">

        {/* HEADER */}
        <header className="flex items-center justify-between bg-white px-8 py-5 shadow-sm">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {activeMenu}
            </h2>

            <p className="text-sm text-gray-500">
              Business Accounting Overview
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="rounded-lg p-2 hover:bg-gray-100">
              🔔
            </button>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
              N
            </div>
          </div>
        </header>

        <section className="p-8">

          <h1 className="mb-2 text-3xl font-bold text-gray-800">
            Financial Dashboard
          </h1>

          <p className="mb-8 text-gray-500">
            Overview of your business financial accounts.
          </p>

          {/* ACCOUNT CARDS */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {accounts.map((account) => (
              <div
                key={account.title}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${account.color}`}
                >
                  {account.icon}
                </div>

                <p className="mt-5 text-sm text-gray-500">
                  {account.title}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-gray-800">
                  {account.amount}
                </h3>

                <p className="mt-2 text-xs text-gray-400">
                  {account.description}
                </p>
              </div>
            ))}
          </div>

          {/* ACCOUNTING EQUATION */}
          <div className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Accounting Equation
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Assets = Liabilities + Owner's Equity
                </p>
              </div>

              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  isBalanced
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {isBalanced ? "✓ Balanced" : "✗ Not Balanced"}
              </span>
            </div>

            <div className="grid items-center gap-4 text-center md:grid-cols-5">

              {/* LIABILITIES */}
              <div className="rounded-xl bg-red-50 p-5">
                <p className="text-sm text-gray-500">
                  Liabilities
                </p>

                <h3 className="mt-2 text-2xl font-bold text-red-500">
                  {formatCurrency(liabilities)}
                </h3>
              </div>

              {/* PLUS */}
              <div className="text-3xl font-bold text-gray-400">
                +
              </div>

              {/* OWNER'S EQUITY */}
              <div className="rounded-xl bg-purple-50 p-5">
                <p className="text-sm text-gray-500">
                  Owner's Equity
                </p>

                <h3 className="mt-2 text-2xl font-bold text-purple-600">
                  {formatCurrency(ownersEquity)}
                </h3>
              </div>

              {/* EQUAL */}
              <div className="text-3xl font-bold text-gray-400">
                =
              </div>

              {/* ASSETS */}
              <div className="rounded-xl bg-blue-50 p-5">
                <p className="text-sm text-gray-500">
                  Assets
                </p>

                <h3 className="mt-2 text-2xl font-bold text-blue-600">
                  {formatCurrency(assets)}
                </h3>
              </div>
            </div>

            {/* EQUATION RESULT */}
            <div
              className={`mt-6 rounded-xl p-5 text-center ${
                isBalanced ? "bg-green-50" : "bg-red-50"
              }`}
            >
              <p className="text-lg font-medium text-gray-600">
                {formatCurrency(liabilities)} +{" "}
                {formatCurrency(ownersEquity)}
              </p>

              <h3
                className={`mt-2 text-3xl font-bold ${
                  isBalanced ? "text-green-600" : "text-red-600"
                }`}
              >
                = {formatCurrency(totalEquityAndLiabilities)}
              </h3>

              <p className="mt-2 text-sm font-medium text-gray-700">
                {formatCurrency(liabilities)} Liabilities +{" "}
                {formatCurrency(ownersEquity)} Owner's Equity ={" "}
                {formatCurrency(assets)} Assets
              </p>

              <p
                className={`mt-3 font-semibold ${
                  isBalanced ? "text-green-700" : "text-red-700"
                }`}
              >
                {isBalanced
                  ? "✓ Accounting Equation Balanced"
                  : "✗ Accounting Equation Not Balanced"}
              </p>
            </div>
          </div>

          {/* REVENUE AND EXPENSES */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">

            {/* REVENUE */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Revenue
                  </h2>

                  <p className="text-sm text-gray-500">
                    Total income generated
                  </p>
                </div>

                <span className="text-3xl">📈</span>
              </div>

              <h3 className="mt-8 text-4xl font-bold text-green-600">
                {formatCurrency(revenue)}
              </h3>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-3/4 rounded-full bg-green-500" />
              </div>
            </div>

            {/* EXPENSES */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Expenses
                  </h2>

                  <p className="text-sm text-gray-500">
                    Total business expenses
                  </p>
                </div>

                <span className="text-3xl">💸</span>
              </div>

              <h3 className="mt-8 text-4xl font-bold text-red-500">
                {formatCurrency(expenses)}
              </h3>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[40%] rounded-full bg-red-500" />
              </div>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}
