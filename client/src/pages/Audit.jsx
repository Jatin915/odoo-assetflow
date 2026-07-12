import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AuditTable from "../components/AuditTable";

export default function Audit() {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Header title="Asset Audit" />

        <div className="p-8">

          <div className="bg-yellow-100 border border-yellow-300 rounded-xl p-5">

            <h2 className="text-xl font-semibold">
              Q3 Audit
            </h2>

            <p className="mt-2 text-gray-700">
              Engineering Department
            </p>

            <p className="text-gray-600">
              1 July - 15 July
            </p>

            <p className="text-gray-600">
              Auditors : A. Rao, S. Iqbal
            </p>

          </div>

          <AuditTable />

          <div className="mt-6 bg-orange-100 border border-orange-300 rounded-xl p-5">

            <h3 className="font-semibold">
              2 Assets Flagged
            </h3>

            <p>
              Discrepancy report generated automatically.
            </p>

          </div>

          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg">

            Close Audit Cycle

          </button>

        </div>

      </div>

    </div>
  );
}