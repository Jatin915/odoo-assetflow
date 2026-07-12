export default function OrganizationTabs() {
  return (

    <div className="flex gap-4 mb-6">

      <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
        Departments
      </button>

      <button className="border px-6 py-2 rounded-lg">
        Categories
      </button>

      <button className="border px-6 py-2 rounded-lg">
        Employees
      </button>

      <button className="ml-auto bg-green-600 text-white px-6 py-2 rounded-lg">
        + Add
      </button>

    </div>

  );
}