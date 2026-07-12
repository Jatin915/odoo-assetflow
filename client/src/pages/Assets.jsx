import Sidebar from "../components/Sidebar";
import AssetSearch from "../components/AssetSearch";
import AssetFilters from "../components/AssetFilters";
import AssetTable from "../components/AssetTable";

export default function Assets() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8">

        <div className="flex justify-between mb-6">
          <AssetSearch />

          <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
            + Register Asset
          </button>
        </div>

        <AssetFilters />

        <AssetTable />

      </div>
    </div>
  );
}