export default function AssetFilters() {
  return (
    <div className="flex gap-4 mb-8">

      <select className="border rounded-lg px-4 py-2">
        <option>Category</option>
      </select>

      <select className="border rounded-lg px-4 py-2">
        <option>Status</option>
      </select>

      <select className="border rounded-lg px-4 py-2">
        <option>Department</option>
      </select>

    </div>
  );
}