import Sidebar from "../components/Sidebar";
import OrganizationTabs from "../components/OrganizationTabs";
import DepartmentTable from "../components/DepartmentTable";

export default function OrganizationSetup() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold mb-6">
          Organization Setup
        </h1>

        <OrganizationTabs />

        <DepartmentTable />

      </div>

    </div>
  );
}