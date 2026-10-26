import { useState } from "react";
import { Link } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import BottomNav from "../../../Components/Navbar/BottomNav";

const threads = [
  { ini: "NK", name: "Karimova Nodira", role: "Matematika o'qituvchisi", last: "Aziz bugun darsda juda faol bo'ldi.", time: "10:48", unread: 1, kind: 1 },
  { ini: "YM", name: "Yusupova Malika", role: "Sinf rahbari · 7-B", last: "Ertangi ekskursiya 09:00 da boshlanadi.", time: "09:12", unread: 2, kind: 1 },
  { ini: "45", name: "45-maktab ma'muriyati", role: "Rasmiy e'lon", last: "26-oktabr soat 17:00 da ota-onalar yig'ilishi.", time: "Kecha", unread: 0, kind: 2 },
  { ini: "RB", name: "Rasulov Botir", role: "Fizika o'qituvchisi", last: "Siz: Rahmat, ertaga topshiradi.", time: "Kecha", unread: 0, kind: 1 },
  { ini: "7B", name: "7-B ota-onalari", role: "Guruh · 31 a'zo", last: "Sevara opa: Ekskursiya to'lovi kimga beriladi?", time: "Du", unread: 0, kind: 3 },
];

const tabs = ["Hammasi", "O'qituvchilar", "E'lonlar"];

const avatarColors = {
  1: "bg-blue-50 text-blue-600",
  2: "bg-blue-600 text-white",
  3: "bg-amber-100 text-amber-700",
};

function Messages() {
  const [tab, setTab] = useState(0);
  const [query, setQuery] = useState("");

  const list = threads.filter(
    (m) =>
      (tab === 0 || (tab === 1 ? m.kind === 1 : m.kind === 2)) &&
      (m.name + " " + m.role).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="Messages">
      <div className="container px-4 pt-6 flex flex-col gap-4">
        <h1 className="text-[22px] leading-7 font-bold">Xabarlar</h1>

        <label className="h-11 px-3 border border-gray-200 rounded-xl bg-white flex items-center gap-2 text-slate-500">
          <TbSearch size={18} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ism yoki fan bo'yicha qidirish"
            className="flex-1 min-w-0 bg-transparent outline-none text-sm text-slate-900"
          />
        </label>

        <div className="flex gap-2">
          {tabs.map((label, i) => (
            <button
              key={label}
              onClick={() => setTab(i)}
              className={`h-9 px-3.5 rounded-full text-sm font-medium ${
                tab === i
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-600 border border-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <section className="bg-white border border-gray-200 rounded-2xl py-1">
          {list.map((m, i) => (
            <Link
              key={m.name}
              to="#"
              className={`flex gap-3 px-4 py-3 ${
                i > 0 ? "border-t border-gray-200" : ""
              }`}
            >
              <span
                className={`w-11 h-11 rounded-full shrink-0 flex items-center justify-center text-sm font-semibold ${avatarColors[m.kind]}`}
              >
                {m.ini}
              </span>

              <span className="flex-1 min-w-0">
                <span className="flex justify-between gap-2">
                  <span className="text-sm font-semibold text-slate-900 truncate">
                    {m.name}
                  </span>
                  <span className="text-xs font-medium text-slate-500 shrink-0">
                    {m.time}
                  </span>
                </span>
                <span className="block text-xs font-medium text-slate-500">
                  {m.role}
                </span>
                <span className="flex justify-between items-center gap-2 mt-0.5">
                  <span
                    className={`text-sm truncate ${
                      m.unread
                        ? "text-slate-900 font-medium"
                        : "text-slate-600"
                    }`}
                  >
                    {m.last}
                  </span>
                  {m.unread > 0 && (
                    <span className="min-w-5 h-5 px-1.5 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center">
                      {m.unread}
                    </span>
                  )}
                </span>
              </span>
            </Link>
          ))}
        </section>
        <BottomNav/>
      </div>
    </div>
  );
}

export default Messages;