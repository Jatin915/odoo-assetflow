const assets = [
  {
    id: "AF-003",
    name: "Dell Laptop",
    location: "Desk E12",
    status: "Verified",
  },
  {
    id: "AF-9921",
    name: "Office Chair",
    location: "Desk E14",
    status: "Missing",
  },
  {
    id: "AF-9838",
    name: "Monitor",
    location: "Desk E15",
    status: "Damaged",
  },
];

export default function AuditTable() {
  return (
    <div className="bg-white rounded-xl shadow p-6 mt-6">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="pb-3">Asset</th>
            <th className="pb-3">Expected Location</th>
            <th className="pb-3">Verification</th>
          </tr>
        </thead>

        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id} className="border-b">
              <td className="py-4">
                {asset.id} - {asset.name}
              </td>

              <td>{asset.location}</td>

              <td>
                {asset.status === "Verified" && (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Verified
                  </span>
                )}

                {asset.status === "Missing" && (
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                    Missing
                  </span>
                )}

                {asset.status === "Damaged" && (
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                    Damaged
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}