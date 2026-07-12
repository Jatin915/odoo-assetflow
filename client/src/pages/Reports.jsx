import Sidebar from "../components/Sidebar";
import ReportsCharts from "../components/ReportsCharts";
import ReportsSummary from "../components/ReportsSummary";
import MaintenanceAlerts from "../components/MaintenanceAlerts";

const Reports = () => {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">

        <ReportsCharts />

        <ReportsSummary />

        <MaintenanceAlerts />

      </div>
    </div>
  );
};

export default Reports;