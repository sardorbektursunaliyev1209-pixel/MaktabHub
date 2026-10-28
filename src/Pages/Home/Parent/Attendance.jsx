import { Link } from "react-router-dom";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import { useState } from "react";
import useNow from "../../../hooks/useNow";
import {months} from "../../../utils/Data.js"

const statusStyles = {
  present: { label: "keldi", cell: "bg-green-100 text-green-700" },
  late: { label: "kechikdi", cell: "bg-amber-100 text-amber-700" },
  absent: { label: "kelmadi", cell: "bg-red-100 text-red-700" },
  off: { label: "dam olish", cell: "bg-slate-100 text-slate-500" },
  future: { label: "kelgusi kun", cell: "text-slate-400" },
};

const weekDays = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"];

const stats = [
  { label: "Keldi", value: 16, color: "text-green-700" },
  { label: "Kechikdi", value: 1, color: "text-amber-700" },
  { label: "Kelmadi", value: 1, color: "text-red-700" },
];

const legend = [
  { label: "Keldi", color: "bg-green-100 border-green-700" },
  { label: "Kechikdi", color: "bg-amber-100 border-amber-700" },
  { label: "Kelmadi", color: "bg-red-100 border-red-700" },
  { label: "Dam olish", color: "bg-slate-100 border-slate-400" },
];

const exceptions = [
  {
    day: 13,
    type: "absent",
    title: "Kelmadi — sababli",
    sub: "Kasallik · ma'lumotnoma yuklangan",
    action: false,
  },
  {
    day: 16,
    type: "late",
    title: "15 daqiqa kechikdi",
    sub: "08:15 da kirdi · 1-dars",
    action: true,
  },
];

// Hozircha taqvim oktabr 2026 uchun: 1-oktabr payshanba, boshida 3 ta bo'sh katak
function buildCells() {
  const cells = [];

  for (let i = 0; i < 3; i++) {
    cells.push({ id: `empty-${i}`, empty: true });
  }

  for (let d = 1; d <= 31; d++) {
    const col = (d + 2) % 7; // 6 = yakshanba
    let status = "present";

    if (col === 6 || d === 1) status = "off";
    else if (d > 22) status = "future";
    else if (d === 13) status = "absent";
    else if (d === 16) status = "late";

    cells.push({ id: d, d, status, today: d === 22 });
  }

  return cells;
}

const cells = buildCells();

function Attendance() {
  const now = useNow();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());

  const monthName = months[month].charAt(0).toUpperCase() + months[month].slice(1);

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div className="Attendance">
      <div className="container px-4 pt-6 flex flex-col gap-4">
        <header className="flex items-center gap-3">
          <Link
            to="/parent"
            aria-label="Orqaga"
            className="w-11 h-11 rounded-xl border border-gray-200 bg-white text-slate-900 flex items-center justify-center shrink-0"
          >
            <TbChevronLeft size={22} />
          </Link>
          <div>
            <h1 className="text-[22px] leading-7 font-bold">Davomat</h1>
            <div className="text-xs font-medium text-slate-500">
              Aziz · 7-B · {monthName} {year}
            </div>
          </div>
        </header>

        <section className="grid grid-cols-3 gap-2">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-gray-200 rounded-[14px] p-3"
            >
              <div className="text-xs font-medium text-slate-600">
                {s.label}
              </div>
              <div className={`text-[22px] leading-7 font-bold ${s.color}`}>
                {s.value}
              </div>
            </div>
          ))}
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <button
              onClick={prevMonth}
              aria-label="Oldingi oy"
              className="w-9 h-9 border border-gray-200 rounded-[10px] bg-white flex items-center justify-center"
            >
              <TbChevronLeft size={18} />
            </button>
            <h2 className="text-base font-semibold">
              {monthName} {year} · 94%
            </h2>
            <button
              onClick={nextMonth}
              aria-label="Keyingi oy"
              className="w-9 h-9 border border-gray-200 rounded-[10px] bg-white flex items-center justify-center"
            >
              <TbChevronRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-slate-500">
            {weekDays.map((w) => (
              <span key={w}>{w}</span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {cells.map((c) =>
              c.empty ? (
                <span key={c.id} className="h-10"></span>
              ) : (
                <span
                  key={c.id}
                  aria-label={`${c.d}-oktabr, ${statusStyles[c.status].label}`}
                  className={`h-10 rounded-[10px] flex items-center justify-center text-sm ${
                    statusStyles[c.status].cell
                  } ${c.today ? "font-bold border-2 border-blue-600" : "font-medium"}`}
                >
                  {c.d}
                </span>
              ),
            )}
          </div>

          <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-600">
            {legend.map((l) => (
              <span key={l.label} className="flex items-center gap-1.5">
                <span
                  className={`w-2.5 h-2.5 rounded-[3px] border ${l.color}`}
                ></span>
                {l.label}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl px-4 py-1">
          {exceptions.map((e, i) => (
            <div
              key={e.day}
              className={`flex gap-3 items-center py-3 ${
                i > 0 ? "border-t border-gray-200" : ""
              }`}
            >
              <span
                className={`w-9 h-9 rounded-[10px] shrink-0 flex items-center justify-center text-sm font-semibold ${
                  statusStyles[e.type].cell
                }`}
              >
                {e.day}
              </span>
              <span className="flex-1">
                <span className="block text-sm font-medium">{e.title}</span>
                <span className="block text-xs text-slate-500">{e.sub}</span>
              </span>
              {e.action && (
                <Link to="#" className="text-xs font-medium text-blue-600">
                  Sabab yozish
                </Link>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Attendance;