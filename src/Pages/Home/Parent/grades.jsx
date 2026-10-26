import { useState } from "react";
import { Link } from "react-router-dom";
import { TbChevronRight } from "react-icons/tb";
import BottomNav from "../../../Components/Navbar/BottomNav";

const tabs = ["1-chorak", "2-chorak", "Yillik"];

const gradeColors = {
  5: "bg-green-100 text-green-700",
  4: "bg-blue-100 text-blue-700",
  3: "bg-amber-100 text-amber-700",
  2: "bg-red-100 text-red-700",
  NB: "bg-slate-100 text-slate-600",
};
const quarters = [
  {
    avg: "4.2",
    delta: "Boshlang'ich chorak",
    att: "98%",
    attNote: "1 kun kelmagan",
    subjects: [
      { name: "Matematika", avg: 4.4, count: 14, grades: [4, 5, 4] },
      { name: "Ona tili", avg: 4.1, count: 10, grades: [4, 4, 5] },
      { name: "Ingliz tili", avg: 4.6, count: 11, grades: [5, 4, 5] },
      { name: "Fizika", avg: 3.8, count: 9, grades: [4, 3, 4] },
      { name: "Tarix", avg: 4.3, count: 7, grades: [4, 5, 4] },
    ],
  },
  {
    avg: "4.4",
    delta: "↑ 0.2 o'tgan chorakka nisbatan",
    att: "96%",
    attNote: "2 kun kelmagan (sababli)",
    subjects: [
      { name: "Matematika", avg: 4.6, count: 12, grades: [5, 4, 5] },
      { name: "Ona tili", avg: 4.3, count: 9, grades: [4, 5, 4] },
      { name: "Ingliz tili", avg: 4.8, count: 10, grades: [5, 5, 4] },
      { name: "Fizika", avg: 3.4, count: 8, grades: [2, 4, 3] },
      { name: "Tarix", avg: 4.5, count: 6, grades: [4, "NB", 5] },
    ],
  },
  {
    avg: "4.3",
    delta: "Yil davomida barqaror",
    att: "97%",
    attNote: "3 kun kelmagan",
    subjects: [
      { name: "Matematika", avg: 4.5, count: 26, grades: [5, 4, 5] },
      { name: "Ona tili", avg: 4.2, count: 19, grades: [4, 5, 4] },
      { name: "Ingliz tili", avg: 4.7, count: 21, grades: [5, 5, 4] },
      { name: "Fizika", avg: 3.6, count: 17, grades: [2, 4, 3] },
      { name: "Tarix", avg: 4.4, count: 13, grades: [4, "NB", 5] },
    ],
  },
];

function Grades() {
  const [tab, setTab] = useState(1);
  const q = quarters[tab];

  return (
    <div className="Grades">
      <div className="container px-4 pt-6 pb-24 flex flex-col gap-4">
        <header>
          <h1 className="text-[22px] leading-7 font-bold">Baholar</h1>
          <div className="text-xs font-medium text-slate-500">
            Aziz Abdullayev · 7-B sinf
          </div>
        </header>

        <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-slate-100">
          {tabs.map((label, i) => (
            <button
              key={label}
              onClick={() => setTab(i)}
              className={`h-10 rounded-[9px] text-sm ${
                tab === i
                  ? "bg-white text-slate-900 font-medium shadow-sm"
                  : "text-slate-600"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <section className="bg-white border border-gray-200 rounded-2xl px-4 py-5 flex gap-4">
          <div className="flex-1 flex flex-col gap-1">
            <div className="text-xs font-medium text-slate-600">
              O'rtacha baho
            </div>
            <div className="text-[28px] leading-[34px] font-bold">{q.avg}</div>
            <div className="text-xs font-medium text-green-700">{q.delta}</div>
          </div>
          <div className="w-px bg-gray-200"></div>
          <div className="flex-1 flex flex-col gap-1">
            <div className="text-xs font-medium text-slate-600">Davomat</div>
            <div className="text-[28px] leading-[34px] font-bold">{q.att}</div>
            <div className="text-xs font-medium text-slate-500">
              {q.attNote}
            </div>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl py-1">
          {q.subjects.map((s, i) => {
            const warn = s.avg < 3.7;
            return (
              <Link
                key={s.name}
                to="/grades/:subject"
                className={`flex items-center gap-3 py-3 pr-3 pl-4 ${
                  i > 0 ? "border-t border-gray-200" : ""
                }`}
              >
                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-medium text-slate-900">
                    {s.name}
                  </span>
                  <span
                    className={`block text-xs font-medium ${
                      warn ? "text-amber-700" : "text-slate-500"
                    }`}
                  >
                    {warn
                      ? `O'rtacha ${s.avg} · e'tibor bering`
                      : `O'rtacha ${s.avg} · ${s.count} baho`}
                  </span>
                </span>
                <span className="flex gap-1.5">
                  {s.grades.map((g, j) => (
                    <span
                      key={j}
                      className={`w-9 h-9 rounded-[10px] flex items-center justify-center font-semibold ${
                        g === "NB" ? "text-xs" : "text-base"
                      } ${gradeColors[g]}`}
                    >
                      {g}
                    </span>
                  ))}
                </span>

                <TbChevronRight size={16} className="text-slate-500 shrink-0" />
              </Link>
            );
          })}
        </section>
      </div>
      <BottomNav />
    </div>
  );
}

export default Grades;
