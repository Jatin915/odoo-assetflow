const departments = [
  {
    department: "Engineering",
    head: "Aditi Rao",
    parent: "--",
    status: "Active",
  },
  {
    department: "Facilities",
    head: "Rohan Mehta",
    parent: "--",
    status: "Active",
  },
  {
    department: "Field Ops (East)",
    head: "Sana Iqbal",
    parent: "Field Ops",
    status: "Inactive",
  },
];

export default function DepartmentTable() {
  return (

    <div className="bg-white rounded-xl shadow p-6">

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left py-3">
              Department
            </th>

            <th className="text-left">
              Head
            </th>

            <th className="text-left">
              Parent Dept
            </th>

            <th className="text-left">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {departments.map((item, index) => (

            <tr
              key={index}
              className="border-b"
            >

              <td className="py-4">
                {item.department}
              </td>

              <td>
                {item.head}
              </td>

              <td>
                {item.parent}
              </td>

              <td>

                <span
                  className={`px-4 py-1 rounded-full text-white text-sm ${
                    item.status === "Active"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {item.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <p className="text-gray-500 mt-6">
        Editing a department here also drives the picklists in Assets &
        Allocation screens.
      </p>

    </div>

  );
}