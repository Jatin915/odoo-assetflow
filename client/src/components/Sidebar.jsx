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

import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    {
      icon: <FaHome />,
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <FaBuilding />,
      name: "Organization Setup",
      path: "/organization",
    },
    {
      icon: <FaLaptop />,
      name: "Assets",
      path: "/assets",
    },
    {
      icon: <FaExchangeAlt />,
      name: "Allocation & Transfer",
      path: "/allocation",
    },
    {
      icon: <FaCalendarCheck />,
      name: "Resource Booking",
      path: "/booking",
    },
    {
      icon: <FaTools />,
      name: "Maintenance",
      path: "/maintenance",
    },
    {
      icon: <FaClipboardCheck />,
      name: "Audit",
      path: "/audit",
    },
    {
      icon: <FaChartBar />,
      name: "Reports",
      path: "/reports",
    },
    {
      icon: <FaBell />,
      name: "Notifications",
      path: "/notifications",
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-[#0F172A] text-white shadow-xl">
      <div className="text-3xl font-bold p-6 border-b border-slate-700">
        AssetFlow
      </div>

      <div className="mt-6 flex flex-col">
        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-6 py-3 transition-all duration-200 ${
              location.pathname === item.path
                ? "bg-green-600 text-white"
                : "hover:bg-slate-800 text-slate-300"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;