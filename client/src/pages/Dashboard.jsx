import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import AlertBanner from "../components/AlertBanner";
import ActionButtons from "../components/ActionButtons";
import RecentActivity from "../components/RecentActivity";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <Header />

        <div className="grid grid-cols-3 gap-6">

          <StatCard title="Available Assets" value="128" />

          <StatCard title="Allocated" value="76" />

          <StatCard title="Available Rooms" value="4" />

          <StatCard title="Active Bookings" value="9" />

          <StatCard title="Pending Transfers" value="3" />

          <StatCard title="Upcoming Returns" value="12" />

        </div>

        <AlertBanner />

        <ActionButtons />

        <RecentActivity />

      </div>

    </div>
  );
};

export default Dashboard;