
import { NavLink } from "react-router-dom";
import { TbHome, TbChartLine, TbCalendar, TbMessage, TbUser } from "react-icons/tb";

const items = [
  { id: 1, label: "Asosiy", icon: TbHome, to: "/parent" },
  { id: 2, label: "Baholar", icon: TbChartLine, to: "/grades" },
  { id: 3, label: "Jadval", icon: TbCalendar, to: "/schedule" },
  { id: 4, label: "Xabarlar", icon: TbMessage, to: "/messages" },
  { id: 5, label: "Profil", icon: TbUser, to: "/profile" },
];

function BottomNav() {
  return (
    <nav className="fixed bottom-0 inset-x-0 max-w-[420px] mx-auto bg-white border-t border-gray-200 flex justify-around py-2">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.id}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 text-xs font-medium px-2 ${
                isActive ? "text-blue-600" : "text-slate-500"
              }`
            }
          >
            <Icon size={22} />
            {item.label}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default BottomNav;