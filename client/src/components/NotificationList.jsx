const notifications = [
  {
    color: "bg-blue-500",
    text: "Laptop AF-0014 assigned to Priya Shah",
    time: "2m ago",
  },
  {
    color: "bg-green-500",
    text: "Maintenance request AF-0055 approved",
    time: "18m ago",
  },
  {
    color: "bg-blue-500",
    text: "Booking confirmed : Room B2 : 2 PM – 3 PM",
    time: "1h ago",
  },
  {
    color: "bg-red-500",
    text: "Transfer approved : AF-0033 to Facilities Dept",
    time: "3h ago",
  },
  {
    color: "bg-yellow-500",
    text: "Overdue return : AF-0021 was due 3 days ago",
    time: "1d ago",
  },
  {
    color: "bg-orange-500",
    text: "Audit discrepancy flagged : AF-0088 damaged",
    time: "2d ago",
  },
];

const NotificationList = () => {
  return (
    <div className="bg-white rounded-xl shadow">

      {notifications.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center px-6 py-5 border-b last:border-none"
        >
          <div className="flex items-center gap-4">

            <div className={`w-3 h-3 rounded-full ${item.color}`}></div>

            <p className="text-lg">{item.text}</p>

          </div>

          <span className="text-gray-500">{item.time}</span>
        </div>
      ))}

    </div>
  );
};

export default NotificationList;