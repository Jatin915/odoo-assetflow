import {
  FaHome,
  FaBuilding,
  FaLaptop,
  FaExchangeAlt,
  FaCalendarCheck,
  FaTools,
  FaClipboardCheck,
  FaChartBar,
  FaBell,
} from "react-icons/fa";

const Sidebar = () => {
  const menu = [
    { icon: <FaHome />, name: "Dashboard" },
    { icon: <FaBuilding />, name: "Organization Setup" },
    { icon: <FaLaptop />, name: "Assets" },
    { icon: <FaExchangeAlt />, name: "Allocation & Transfer" },
    { icon: <FaCalendarCheck />, name: "Resource Booking" },
    { icon: <FaTools />, name: "Maintenance" },
    { icon: <FaClipboardCheck />, name: "Audit" },
    { icon: <FaChartBar />, name: "Reports" },
    { icon: <FaBell />, name: "Notifications" },
  ];

  return (
    <div className="w-64 bg-[#0F172A] text-white min-h-screen">

      <div className="text-3xl font-bold p-6 border-b border-slate-700">
        AssetFlow
      </div>

      <div className="mt-6">

        {menu.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-6 py-3 cursor-pointer transition hover:bg-blue-600 ${
              index === 0 ? "bg-blue-600" : ""
            }`}
          >
            {item.icon}
            {item.name}
          </div>
        ))}

      </div>

    </div>
  );
};

export default Sidebar;