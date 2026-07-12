const assets = [
  {
    tag: "AF-0012",
    name: "Dell Laptop",
    category: "Electronics",
    status: "Allocated",
    location: "Bengaluru",
  },
  {
    tag: "AF-0062",
    name: "Projector",
    category: "Electronics",
    status: "Maintenance",
    location: "HQ Floor 2",
  },
  {
    tag: "AF-0201",
    name: "Office Chair",
    category: "Furniture",
    status: "Available",
    location: "Warehouse",
  },
];

export default function AssetTable() {
  return (
    <div className="bg-white rounded-xl shadow">

      <table className="w-full">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Tag</th>
            <th>Name</th>
            <th>Category</th>
            <th>Status</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          {assets.map((item, index) => (
            <tr key={index} className="border-t">

              <td className="p-4">{item.tag}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>

              <td>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {item.status}
                </span>
              </td>

              <td>{item.location}</td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}