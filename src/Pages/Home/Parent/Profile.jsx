import { useState } from "react";
import { Link } from "react-router-dom";
import { TbPlus } from "react-icons/tb";
import BottomNav from "../../../Components/Navbar/BottomNav";

const children = [
  { ini: "AA", name: "Aziz Abdullayev", sub: "45-maktab · 7-B · sinf rahbari Yusupova M.", color: "bg-green-100 text-green-700" },
  { ini: "MA", name: "Madina Abdullayeva", sub: "45-maktab · 3-A · sinf rahbari Rahimova S.", color: "bg-amber-100 text-amber-700" },
];

const toggleDefs = [
  { id: "grades", title: "Yangi baholar", sub: "Har bir baho qo'yilganda" },
  { id: "att", title: "Davomat", sub: "Maktabga kirish va kechikish" },
  { id: "ann", title: "E'lonlar", sub: "Maktab va sinf e'lonlari" },
  { id: "quiet", title: "Tungi rejim", sub: "22:00–07:00 jim (shoshilinchlardan tashqari)" },
];

function Profile() {
  const [on, setOn] = useState({ grades: true, att: true, ann: true, quiet: false });

  return (
    <div className="Profile">
      <div className="container px-4 pt-6 flex flex-col gap-4">
        <h1 className="text-[22px] leading-7 font-bold">Profil</h1>

        <section className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center gap-3.5">
          <span className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 text-lg font-semibold flex items-center justify-center shrink-0">
            DA
          </span>
          <span className="flex-1">
            <span className="block text-base font-semibold">Dilnoza Ahmedova</span>
            <span className="block text-xs font-medium text-slate-500">
              +998 90 123 45 67 · Ota-ona
            </span>
          </span>
          <Link to="/rol" className="text-sm font-medium text-blue-600">
            Rolni almashtirish
          </Link>
        </section>

        <h2 className="text-base font-semibold">Farzandlarim</h2>
        <section className="bg-white border border-gray-200 rounded-2xl px-4 py-1">
          {children.map((c) => (
            <div key={c.ini} className="flex items-center gap-3 py-3 border-b border-gray-200">
              <span className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-sm font-semibold ${c.color}`}>
                {c.ini}
              </span>
              <span className="flex-1">
                <span className="block text-sm font-medium">{c.name}</span>
                <span className="block text-xs text-slate-500">{c.sub}</span>
              </span>
            </div>
          ))}

          <button className="w-full flex items-center gap-3 py-3 text-blue-600 text-sm font-medium text-left">
            <span className="w-10 h-10 rounded-full border-2 border-dashed border-blue-200 flex items-center justify-center shrink-0">
              <TbPlus size={18} />
            </span>
            Farzand qo'shish (maktab bergan kod bilan)
          </button>
        </section>

        <h2 className="text-base font-semibold">Bildirishnomalar</h2>
        <section className="bg-white border border-gray-200 rounded-2xl px-4 py-1">
          {toggleDefs.map((t, i) => (
            <div
              key={t.id}
              className={`flex items-center gap-3 py-3 ${
                i > 0 ? "border-t border-gray-200" : ""
              }`}
            >
              <span className="flex-1">
                <span className="block text-sm font-medium">{t.title}</span>
                <span className="block text-xs text-slate-500">{t.sub}</span>
              </span>
              <button
                role="switch"
                aria-checked={on[t.id]}
                aria-label={t.title}
                onClick={() => setOn({ ...on, [t.id]: !on[t.id] })}
                className={`w-12 h-7 p-[3px] rounded-[14px] shrink-0 flex ${
                  on[t.id] ? "justify-end bg-blue-600" : "justify-start bg-slate-300"
                }`}
              >
                <span className="w-[22px] h-[22px] rounded-full bg-white shadow"></span>
              </button>
            </div>
          ))}
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl px-4 py-1">
          <Link to="#" className="flex items-center justify-between py-3.5 text-sm font-medium">
            Til
            <span className="text-slate-500 font-normal">O'zbekcha (lotin) ›</span>
          </Link>
          <div className="h-px bg-gray-200"></div>
          <Link to="#" className="flex items-center justify-between py-3.5 text-sm font-medium">
            Yordam va savollar
            <span className="text-slate-500">›</span>
          </Link>
          <div className="h-px bg-gray-200"></div>
          <Link to="/" className="flex items-center py-3.5 text-sm font-medium text-red-700">
            Chiqish
          </Link>
        </section>
        <BottomNav/>
      </div>
    </div>
  );
}

export default Profile;