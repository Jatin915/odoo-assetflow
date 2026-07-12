import Sidebar from "../components/Sidebar";
import NotificationTabs from "../components/NotificationTabs";
import NotificationList from "../components/NotificationList";

const Notifications = () => {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <NotificationTabs />
        <NotificationList />
      </div>
    </div>
  );
};

export default Notifications;