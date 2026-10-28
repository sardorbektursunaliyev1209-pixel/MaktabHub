import { Link, useParams } from "react-router-dom";
import { TbChevronLeft } from "react-icons/tb";

const gradeColors = {
  5: "bg-green-100 text-green-700",
  4: "bg-blue-100 text-blue-700",
  3: "bg-amber-100 text-amber-700",
  2: "bg-red-100 text-red-700",
};

const subjects = {
  matematika: {
    name: "Matematika",
    teacher: "Karimova Nodira",
    avg: "4.6",
    count: 12,
    rank: "4 / 28",
    trend: [4, 3, 4, 5, 4, 5, 5, 5],
    history: [
      {
        id: 1,
        grade: 5,
        type: "Darsdagi javob",
        topic: "Kasrlarni qo'shish va ayirish",
        date: "22-okt",
        note: "Misollarni doskada to'g'ri yechdi, tushuntirishi aniq.",
      },
      {
        id: 2,
        grade: 5,
        type: "Uy vazifasi",
        topic: "108–111-misollar",
        date: "20-okt",
        note: "",
      },
      {
        id: 3,
        grade: 4,
        type: "Nazorat ishi",
        topic: "Oddiy kasrlar · 4/5 topshiriq",
        date: "17-okt",
        note: "3-topshiriqda hisoblash xatosi. Takrorlash tavsiya etiladi.",
      },
      {
        id: 4,
        grade: 5,
        type: "Darsdagi javob",
        topic: "Kasrlarni taqqoslash",
        date: "13-okt",
        note: "",
      },
    ],
  },
};

function SubjectDetail() {
  const { subject } = useParams();
  const data = subjects[subject];

  if (!data) {
    return (
      <div className="container px-4 pt-6">
        <Link to="/grades" className="text-sm font-medium text-blue-600">
          ← Baholarga qaytish
        </Link>
        <p className="mt-4 text-slate-500">Bu fan uchun ma'lumot hali yo'q.</p>
      </div>
    );
  }

  const stats = [
    { label: "O'rtacha", value: data.avg },
    { label: "Baholar", value: data.count },
    { label: "Sinfda o'rni", value: data.rank },
  ];

  return (
    <div className="SubjectDetail">
      <div className="container px-4 pt-6 flex flex-col gap-4">
        <header className="flex items-center gap-3">
          <Link
            to="/grades"
            aria-label="Orqaga"
            className="w-11 h-11 rounded-xl border border-gray-200 bg-white text-slate-900 flex items-center justify-center shrink-0"
          >
            <TbChevronLeft size={22} />
          </Link>
          <div>
            <h1 className="text-[22px] leading-7 font-bold">{data.name}</h1>
            <div className="text-xs font-medium text-slate-500">
              {data.teacher} · 2-chorak · Aziz, 7-B
            </div>
          </div>
        </header>

        <section className="grid grid-cols-3 gap-2">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-gray-200 rounded-[14px] p-3"
            >
              <div className="text-xs font-medium text-slate-600">{s.label}</div>
              <div className="text-[22px] leading-7 font-bold">{s.value}</div>
            </div>
          ))}
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col gap-2.5">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-semibold">Dinamika</h2>
            <span className="text-xs font-medium text-green-700">
              ↑ barqaror o'sish
            </span>
          </div>

          <div
            role="img"
            aria-label="Oxirgi 8 ta baho ustunli diagrammada"
            className="flex items-end gap-2 h-[72px]"
          >
            {data.trend.map((g, i) => (
              <span
                key={i}
                style={{ height: g * 14 }}
                className={`flex-1 rounded-t-md rounded-b-sm ${
                  i === data.trend.length - 1 ? "bg-blue-600" : "bg-blue-200"
                }`}
              ></span>
            ))}
          </div>

          <div className="flex justify-between text-xs text-slate-500">
            <span>1-okt</span>
            <span>22-okt</span>
          </div>
        </section>

        <h2 className="mt-1 text-base font-semibold">Baholar tarixi</h2>
        <section className="bg-white border border-gray-200 rounded-2xl py-1">
          {data.history.map((h, i) => (
            <div
              key={h.id}
              className={`flex items-start gap-3 px-4 py-3 ${
                i > 0 ? "border-t border-gray-200" : ""
              }`}
            >
              <span
                className={`w-9 h-9 rounded-[10px] shrink-0 flex items-center justify-center text-base font-semibold ${gradeColors[h.grade]}`}
              >
                {h.grade}
              </span>

              <span className="flex-1 min-w-0">
                <span className="block text-sm font-medium">{h.type}</span>
                <span className="block text-xs text-slate-500">{h.topic}</span>
                {h.note && (
                  <span className="block mt-1.5 px-2.5 py-2 rounded-lg bg-[#F5F7FB] text-xs leading-4 text-slate-600">
                    {h.note}
                  </span>
                )}
              </span>

              <span className="text-xs font-medium text-slate-500 whitespace-nowrap">
                {h.date}
              </span>
            </div>
          ))}
        </section>
        
      </div>
    </div>
  );
}

export default SubjectDetail;