import { useState } from "react";
import { TbAlertCircle } from "react-icons/tb";
import BottomNav from "../../../Components/Navbar/BottomNav";

const teachers = {
  Matematika: "Karimova N.",
  "Ona tili": "Sobirova G.",
  "Ingliz tili": "Tursunova D.",
  Fizika: "Rasulov B.",
  Tarix: "Qodirov A.",
  "Jismoniy tarbiya": "Hasanov S.",
  Biologiya: "Nurmatova L.",
  Adabiyot: "Sobirova G.",
  Informatika: "Aliyev J.",
  Geografiya: "Ergasheva M.",
  "Rus tili": "Petrova O.",
  Tarbiya: "Yusupova M.",
};

const rooms = {
  Matematika: "214-xona",
  "Ona tili": "108-xona",
  "Ingliz tili": "305-xona",
  Fizika: "Lab-2",
  Tarix: "201-xona",
  "Jismoniy tarbiya": "Sport zal",
  Biologiya: "Lab-1",
  Adabiyot: "108-xona",
  Informatika: "IT-xona",
  Geografiya: "203-xona",
  "Rus tili": "302-xona",
  Tarbiya: "214-xona",
};

const times = [
  "08:00–08:45",
  "09:00–09:45",
  "10:00–10:45",
  "11:00–11:45",
  "12:00–12:45",
  "13:00–13:45",
];

const week = [
  { wd: "Du", n: "19", subj: ["Matematika", "Ona tili", "Ingliz tili", "Tarix", "Biologiya", "Tarbiya"] },
  { wd: "Se", n: "20", subj: ["Fizika", "Matematika", "Adabiyot", "Informatika", "Rus tili"] },
  { wd: "Ch", n: "21", subj: ["Ona tili", "Geografiya", "Matematika", "Ingliz tili", "Jismoniy tarbiya", "Tarix"] },
  { wd: "Pa", n: "22", today: true, subj: ["Ona tili", "Ingliz tili", "Matematika", "Fizika", "Tarix", "Jismoniy tarbiya"] },
  { wd: "Ju", n: "23", note: "Ertaga 1-dars: Fizika nazorat ishi", subj: ["Fizika", "Matematika", "Biologiya", "Adabiyot", "Rus tili"] },
  { wd: "Sh", n: "24", subj: ["Informatika", "Ingliz tili", "Geografiya", "Matematika"] },
];

function Schedule() {
  const [day, setDay] = useState(3);
  const cur = week[day];

  return (
    <div className="Schedule">
      <div className="container px-4 pt-6 flex flex-col gap-4">
        <header>
          <h1 className="text-[22px] leading-7 font-bold">Dars jadvali</h1>
          <div className="text-xs font-medium text-slate-500">
            Aziz · 7-B · 2-chorak, 19–24-oktabr
          </div>
        </header>

        <div className="grid grid-cols-6 gap-1.5">
          {week.map((d, i) => {
            const sel = i === day;
            return (
              <button
                key={d.n}
                onClick={() => setDay(i)}
                className={`h-[60px] rounded-xl flex flex-col items-center justify-center gap-0.5 ${
                  sel
                    ? "bg-blue-600 text-white"
                    : d.today
                    ? "bg-white text-slate-900 border-2 border-blue-600"
                    : "bg-white text-slate-900 border border-gray-200"
                }`}
              >
                <span
                  className={`text-xs font-medium ${
                    sel ? "text-blue-100" : "text-slate-500"
                  }`}
                >
                  {d.wd}
                </span>
                <span className="text-base font-semibold">{d.n}</span>
              </button>
            );
          })}
        </div>

        {cur.note && (
          <section className="bg-amber-100 rounded-[14px] px-3.5 py-3 flex gap-2.5 items-center">
            <TbAlertCircle size={20} className="text-amber-700 shrink-0" />
            <span className="text-sm font-medium">{cur.note}</span>
          </section>
        )}

        <section className="bg-white border border-gray-200 rounded-2xl py-1">
          {cur.subj.map((s, i) => {
            const now = cur.today && i === 2;
            return (
              <div
                key={i}
                className={`flex items-center gap-3 px-4 py-3 ${
                  i > 0 ? "border-t border-gray-200" : ""
                } ${now ? "bg-blue-50" : ""}`}
              >
                <span
                  className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs font-semibold ${
                    now ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {i + 1}
                </span>

                <span className="flex-1 min-w-0">
                  <span className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{s}</span>
                    {now && (
                      <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[11px] font-semibold">
                        Hozir
                      </span>
                    )}
                  </span>
                  <span className="block text-xs text-slate-500 mt-0.5">
                    {teachers[s]} · {rooms[s]}
                  </span>
                </span>

                <span className="text-xs font-medium text-slate-600 text-right whitespace-nowrap">
                  {times[i]}
                </span>
              </div>
            );
          })}
        </section>
        <BottomNav/>
      </div>
    </div>
  );
}

export default Schedule;