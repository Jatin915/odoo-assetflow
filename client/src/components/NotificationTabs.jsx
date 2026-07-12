const NotificationTabs = () => {
  const tabs = ["All", "Alerts", "Approvals", "Bookings"];

  return (
    <div className="flex gap-4 mb-8">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`px-6 py-2 rounded-lg font-semibold ${
            index === 0
              ? "bg-green-600 text-white"
              : "bg-slate-700 text-white hover:bg-slate-800"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default NotificationTabs;