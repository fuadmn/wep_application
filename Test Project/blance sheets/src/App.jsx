import React from "react";

export default function BalanceSheet() {
  const formatAmount = (amount) => {
    if (amount < 0) {
      return `(${Math.abs(amount).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })})`;
    }

    return Number(amount).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f5f4] px-4 py-8 font-sans md:px-10 lg:px-20">
      <div className="mx-auto max-w-5xl bg-[#f8f8f7] px-6 py-10 md:px-10">
        
        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-[#1d1d1d]">
            Balance Sheet
          </h1>

          <div className="mt-8 flex items-end justify-between border-b border-gray-400 pb-2">
            <h2 className="text-xl font-semibold text-gray-800">
              As of December 31, 2020
            </h2>

            <span className="text-xs font-semibold uppercase text-gray-600">
              DEC 31, 2020
            </span>
          </div>
        </div>

        {/* ASSETS */}
        <section>
          <h2 className="border-b-2 border-gray-400 py-2 text-base font-bold text-gray-800">
            Assets
          </h2>

          {/* CURRENT ASSETS */}
          <div className="mt-3">
            <h3 className="border-b border-gray-400 px-3 py-1 text-sm font-semibold text-gray-700">
              Current Assets
            </h3>

            <Row name="Cash and Cash Equivalents" amount={4228.77} />
            <Row
              name="Total Current Assets"
              amount={4228.77}
              bold
            />
          </div>

          {/* FIXED ASSETS */}
          <div className="mt-5">
            <h3 className="border-b border-gray-400 px-3 py-1 text-sm font-semibold text-gray-700">
              Fixed Assets
            </h3>

            <Row name="Accum. Amort - FF" amount={-15000} />
            <Row name="Accumulated Depreciation" amount={-10642} />
            <Row name="Franchise Fee & Renewal" amount={15000} />
            <Row name="Furniture & Fixtures" amount={14900} />
            <Row name="Leasehold Improvements" amount={50000} />
            <Row name="Machinery & Equipment" amount={38648.91} />
            <Row name="Vehicles" amount={9590} />

            <Row
              name="Total Fixed Assets"
              amount={6406.91}
              bold
            />
          </div>

          {/* LONG TERM ASSETS */}
          <div className="mt-5">
            <h3 className="border-b border-gray-400 px-3 py-1 text-sm font-semibold text-gray-700">
              Long Term Assets
            </h3>

            <Row
              name="Shareholder's Loan [175]"
              amount={9338}
            />

            <Row
              name="Total Long Term Assets"
              amount={9338}
              bold
            />
          </div>

          <div className="mt-3 border-t border-gray-300">
            <Row
              name="Total Assets"
              amount={1973.68}
              bold
              large
            />
          </div>
        </section>

        {/* LIABILITIES AND EQUITY */}
        <section className="mt-6">
          <h2 className="border-b-2 border-gray-400 py-2 text-base font-bold text-gray-800">
            Liabilities and Equity
          </h2>

          {/* LIABILITIES */}
          <div className="mt-3">
            <h3 className="border-b border-gray-400 px-3 py-1 text-sm font-semibold text-gray-700">
              Liabilities
            </h3>

            {/* CURRENT LIABILITIES */}
            <div className="mt-2">
              <h4 className="border-b border-gray-300 px-3 py-1 text-sm font-semibold text-gray-700">
                Current Liabilities
              </h4>

              <Row name="Net Payroll" amount={139.28} />

              <Row
                name="Total Current Liabilities"
                amount={139.28}
                bold
              />
            </div>

            {/* LONG TERM LIABILITIES */}
            <div className="mt-5">
              <h4 className="border-b border-gray-300 px-3 py-1 text-sm font-semibold text-gray-700">
                Long Term Liabilities
              </h4>

              <Row name="SBA Loan" amount={16857} />
              <Row
                name="Shareholder's Loan [261]"
                amount={20092.95}
              />

              <Row
                name="Total Long Term Liabilities"
                amount={36949.95}
                bold
              />
            </div>

            <div className="mt-3">
              <Row
                name="Total Liabilities"
                amount={37089.23}
                bold
                large
              />
            </div>
          </div>

          {/* EQUITY */}
          <div className="mt-6">
            <h3 className="border-b-2 border-gray-400 px-3 py-2 text-base font-bold text-gray-800">
              Equity
            </h3>

            <Row name="Beginning Equity" amount={5562.35} />
            <Row name="Common Stock" amount={5000} />
            <Row name="Current Year Earnings" amount={-27677.9} />

            <Row
              name="Total Equity"
              amount={-17115.55}
              bold
            />
          </div>

          {/* FINAL TOTAL */}
          <div className="mt-5 border-t border-gray-300">
            <Row
              name="Total Liabilities and Equity"
              amount={1973.68}
              bold
              large
            />
          </div>
        </section>

        {/* FOOTER */}
        <div className="mt-28 flex items-center justify-between text-sm text-gray-500">
          <div className="flex gap-3">
            <span>Balance Sheet</span>
            <span className="text-gray-300">|</span>
            <span>Prepared by</span>
          </div>

          <div className="text-right">
            <span className="text-xl font-bold text-gray-600">
              Advisors
            </span>
            <span className="ml-1 text-xs font-bold text-green-700">
              BLOCK
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


/* =========================
   ROW COMPONENT
========================= */

function Row({ name, amount, bold = false, large = false }) {
  const formatAmount = (value) => {
    if (value < 0) {
      return `(${Math.abs(value).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })})`;
    }

    return Number(value).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div
      className={`
        flex items-center justify-between
        border-b border-gray-200
        px-3 py-1.5
        text-sm
        ${bold ? "font-semibold" : "font-normal"}
        ${large ? "py-3 font-bold" : ""}
      `}
    >
      <span className="text-gray-700">
        {name}
      </span>

      <span className="min-w-[130px] text-right text-gray-800">
        {formatAmount(amount)}
      </span>
    </div>
  );
}