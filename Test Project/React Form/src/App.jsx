import React, { useState } from "react";

const GeneralJournalForm = () => {
  const [date, setDate] = useState("");
  const [rows, setRows] = useState([
    { account: "", ref: "", debit: "", credit: "", note: "" },
  ]);

  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const addRow = () => {
    setRows([...rows, { account: "", ref: "", debit: "", credit: "", note: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const totalDebit = rows.reduce((sum, r) => sum + Number(r.debit || 0), 0);
    const totalCredit = rows.reduce((sum, r) => sum + Number(r.credit || 0), 0);

    if (totalDebit !== totalCredit) {
      alert("❌ Debit and Credit must be equal!");
      return;
    }

    console.log({
      date,
      rows,
      totalDebit,
      totalCredit,
    });

    // reset
    setDate("");
    setRows([{ account: "", ref: "", debit: "", credit: "", note: "" }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">

      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden">

        {/* HEADER */}
        <div className="bg-blue-600 text-white flex justify-between items-center px-4 py-3 font-bold">
          <span>GENERAL JOURNAL</span>
          <span>J2</span>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">

          {/* DATE */}
          <input
            type="text"
            placeholder="Date (e.g Oct 31)"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />

          {/* TABLE HEADER */}
          <div className="grid grid-cols-5 gap-2 font-semibold bg-gray-200 p-2 text-sm">
            <div>Date</div>
            <div>Account Title</div>
            <div>Ref</div>
            <div>Debit</div>
            <div>Credit</div>
          </div>

          {/* ROWS */}
          {rows.map((row, index) => (
            <div key={index} className="grid grid-cols-5 gap-2 items-center">

              {/* Account */}
              <input
                type="text"
                placeholder="Account Title"
                value={row.account}
                onChange={(e) =>
                  handleChange(index, "account", e.target.value)
                }
                className="border p-2 rounded"
                required
              />

              {/* Ref */}
              <input
                type="text"
                placeholder="Ref"
                value={row.ref}
                onChange={(e) =>
                  handleChange(index, "ref", e.target.value)
                }
                className="border p-2 rounded"
              />

              {/* Debit */}
              <input
                type="number"
                placeholder="Debit"
                value={row.debit}
                onChange={(e) =>
                  handleChange(index, "debit", e.target.value)
                }
                className="border p-2 rounded"
              />

              {/* Credit */}
              <input
                type="number"
                placeholder="Credit"
                value={row.credit}
                onChange={(e) =>
                  handleChange(index, "credit", e.target.value)
                }
                className="border p-2 rounded"
              />

              {/* Note */}
              <input
                type="text"
                placeholder="Note"
                value={row.note}
                onChange={(e) =>
                  handleChange(index, "note", e.target.value)
                }
                className="border p-2 rounded"
              />
            </div>
          ))}

          {/* BUTTONS */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={addRow}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              + Add Row
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save Journal
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default GeneralJournalForm;