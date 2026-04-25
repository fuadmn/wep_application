export default function ChartOfAccounts() {
  const accounts = [
    { id: 1, name: "Hanti", type: "Category" },
    { id: 2, name: "Lacag Caddaan ah", type: "Asset" },
    { id: 3, name: "Bangiga", type: "Asset" },
    { id: 4, name: "Deyn", type: "Category" },
    { id: 5, name: "Amaah", type: "Liability" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Liiska Xisaabaadka</h1>

      <div className="bg-white shadow rounded-lg">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Magaca</th>
              <th className="p-3 text-left">Nooca</th>
            </tr>
          </thead>

          <tbody>
            {accounts.map((acc) => (
              <tr key={acc.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{acc.name}</td>
                <td className="p-3">{acc.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}