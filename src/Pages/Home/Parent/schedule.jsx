import { useState } from "react";
import { TbAlertCircle } from "react-icons/tb";
import useNow from "../../../hooks/useNow";
import { months, weekdaysShort } from "../../../utils/Data";
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

const lessonTimes = [
  { start: 480, end: 525, label: "08:00–08:45" },
  { start: 540, end: 585, label: "09:00–09:45" },
  { start: 600, end: 645, label: "10:00–10:45" },
  { start: 660, end: 705, label: "11:00–11:45" },
  { start: 720, end: 765, label: "12:00–12:45" },
  { start: 780, end: 825, label: "13:00–13:45" },
];

// Indeks: 0 = dushanba ... 5 = shanba. Keyin backend'dan keladi.
const lessonsByDay = [
  ["Matematika", "Ona tili", "Ingliz tili", "Tarix", "Biologiya", "Tarbiya"],
  ["Fizika", "Matematika", "Adabiyot", "Informatika", "Rus tili"],
  ["Ona tili", "Geografiya", "Matematika", "Ingliz tili", "Jismoniy tarbiya", "Tarix"],
  ["Ona tili", "Ingliz tili", "Matematika", "Fizika", "Tarix", "Jismoniy tarbiya"],
  ["Fizika", "Matematika", "Biologiya", "Adabiyot", "Rus tili"],
  ["Informatika", "Ingliz tili", "Geografiya", "Matematika"],
];

// Kun bo'yicha eslatma. Keyin backend'dan keladi.
const notesByDay = {
  4: "Ertaga 1-dars: Fizika nazorat ishi",
};

function Schedule() {
  const now = useNow();

  // 0 = dushanba ... 6 = yakshanba
  const todayIndex = (now.getDay() + 6) % 7;
  const isSunday = todayIndex === 6;

  // Yakshanba bo'lsa, keyingi hafta jadvali ko'rsatiladi
  const offset = isSunday ? 1 : -todayIndex;
  const monday = new Date(now);
  monday.setDate(now.getDate() + offset);

  const weekDates = [0, 1, 2, 3, 4, 5].map((i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });

  const [day, setDay] = useState(isSunday ? 0 : todayIndex);

  const first = weekDates[0];
  const last = weekDates[5];
  const range =
    first.getMonth() === last.getMonth()
      ? `${first.getDate()}–${last.getDate()}-${months[first.getMonth()]}`
      : `${first.getDate()}-${months[first.getMonth()]} – ${last.getDate()}-${months[last.getMonth()]}`;

  const lessons = lessonsByDay[day];
  const note = notesByDay[day];
  const selectedIsToday = weekDates[day].toDateString() === now.toDateString();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  return (
    <div className="Schedule">
      <div className="container px-4 pt-6 flex flex-col gap-4">
        <header>
          <h1 className="text-[22px] leading-7 font-bold">Dars jadvali</h1>
          <div className="text-xs font-medium text-slate-500">
            Aziz · 7-B · 2-chorak, {range}
          </div>
        </header>

        {isSunday && (
          <section className="bg-blue-50 rounded-[14px] px-3.5 py-3 flex gap-2.5 items-center">
            <TbAlertCircle size={20} className="text-blue-600 shrink-0" />
            <span className="text-sm font-medium">
              Bugun yakshanba, dars yo'q. Keyingi hafta jadvali ko'rsatilmoqda.
            </span>
          </section>
        )}

        <div className="grid grid-cols-6 gap-1.5">
          {weekDates.map((d, i) => {
            const sel = i === day;
            const today = d.toDateString() === now.toDateString();
            return (
              <button
                key={i}
                onClick={() => setDay(i)}
                className={`h-[60px] rounded-xl flex flex-col items-center justify-center gap-0.5 ${
                  sel
                    ? "bg-blue-600 text-white"
                    : today
                    ? "bg-white text-slate-900 border-2 border-blue-600"
                    : "bg-white text-slate-900 border border-gray-200"
                }`}
              >
                <span
                  className={`text-xs font-medium ${
                    sel ? "text-blue-100" : "text-slate-500"
                  }`}
                >
                  {weekdaysShort[d.getDay()]}
                </span>
                <span className="text-base font-semibold">{d.getDate()}</span>
              </button>
            );
          })}
        </div>

        {note && (
          <section className="bg-amber-100 rounded-[14px] px-3.5 py-3 flex gap-2.5 items-center">
            <TbAlertCircle size={20} className="text-amber-700 shrink-0" />
            <span className="text-sm font-medium">{note}</span>
          </section>
        )}

        <section className="bg-white border border-gray-200 rounded-2xl py-1">
          {lessons.map((s, i) => {
            const t = lessonTimes[i];
            const current =
              selectedIsToday && nowMinutes >= t.start && nowMinutes < t.end;
            return (
              <div
                key={i}
                className={`flex items-center gap-3 px-4 py-3 ${
                  i > 0 ? "border-t border-gray-200" : ""
                } ${current ? "bg-blue-50" : ""}`}
              >
                <span
                  className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs font-semibold ${
                    current
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {i + 1}
                </span>

                <span className="flex-1 min-w-0">
                  <span className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{s}</span>
                    {current && (
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
                  {t.label}
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