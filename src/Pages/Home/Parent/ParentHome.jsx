import { FaRegBell } from "react-icons/fa";
import {
  TbBook,
  TbCalendar,
  TbCheck,
  TbChevronRight,
  TbCreditCard,
  TbMessage,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import { TbAlertCircle } from "react-icons/tb";
import BottomNav from "../../../Components/Navbar/BottomNav";
import useNow from "../../../hooks/useNow";
import {months, weekdays} from "../../../utils/Data.js"
const grades = [
  {
    id: 1,
    grade: 5,
    subject: "Matematika",
    meta: "3-dars · Karimova N.",
    color: "bg-green-100 text-green-700",
    link: "#",
  },
  
  {
    id: 2,
    grade: 4,
    subject: "Ona tili",
    meta: "1-dars · Sobirova G.",
    color: "bg-blue-100 text-blue-700",
    link: null,
  },
];

function ParentHome() {
  const now = useNow()
  return (
    <>
      <div className="ParentHome">
        <div className="container px-6 py-6 pb-23">
          <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center shrink-0">
                DA
              </div>
              <div>
                <h4 className="text-xs text-slate-500">Assalomu alaykum,</h4>
                <h1 className="text-lg font-bold text-slate-900">
                  Dilnoza Ahmedova
                </h1>
              </div>
            </div>

            <div className="relative w-11 h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center shrink-0">
              <FaRegBell size={20} />
              <span className="absolute top-2.5 right-3 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-5">
            <div className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full">
              Aziz · 7-B
            </div>
            <div className="bg-white border border-gray-200 text-slate-700 text-sm font-medium px-4 py-2 rounded-full">
              Madina · 3-A
            </div>
          </div>

          <section className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col gap-3 mt-5">
            <div className="flex justify-between items-center">
              <h2 className="text-base font-semibold">Bugun,  {now.getDate()}-{months[now.getMonth()]}</h2>
              <span className="text-xs text-slate-500">{weekdays[now.getDay()]}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                <TbCheck size={20} />
              </div>
              <div>
                <Link to="/attendance" className="text-sm font-medium text-slate-900">
                  Maktabda · davomat →
                </Link>
                <div className="text-xs text-slate-600">
                  07:52 da kirdi · 6 darsdan 3 tasi o'tdi
                </div>
              </div>
            </div>

            <div className="h-px bg-gray-200"></div>

            <div className="text-[11px] font-semibold tracking-[0.6px] text-slate-500">
              BUGUNGI BAHOLAR
            </div>

            {grades.map((g) => (
              <div key={g.id} className="flex items-center gap-3">
                <span
                  className={`w-9 h-9 rounded-[10px] text-base font-semibold flex items-center justify-center shrink-0 ${g.color}`}
                >
                  {g.grade}
                </span>
                <div className="flex-1">
                  {g.link ? (
                    <Link
                      to={g.link}
                      className="text-sm font-medium text-slate-900"
                    >
                      {g.subject}
                    </Link>
                  ) : (
                    <div className="text-sm font-medium">{g.subject}</div>
                  )}
                  <div className="text-xs text-slate-500">{g.meta}</div>
                </div>
                <TbChevronRight size={16} className="text-slate-500" />
              </div>
            ))}
          </section>
          <section className="bg-amber-100 rounded-2xl p-4 flex gap-3 mt-3">
            <TbAlertCircle size={22} className="text-amber-700 shrink-0" />
            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium">
                Fizika: 2 ta uy vazifa topshirilmagan
              </div>
              <div className="text-xs text-slate-600">
                Muddat 24-oktabr · O'qituvchi: Rasulov B.
              </div>
              <Link to="#" className="text-sm font-medium text-blue-600">
                Batafsil ko'rish →
              </Link>
            </div>
          </section>
          <section className="grid grid-cols-4 gap-2 mt-3">
            <Link to={"/schedule"} className="flex flex-col items-center gap-1 bg-white border border-gray-200 rounded-xl py-3">
              <TbCalendar size={25} color="blue" />
              <span>Jadval</span>
            </Link>
            <div className="flex flex-col items-center gap-1 bg-white border border-gray-200 rounded-xl py-3">
              <TbBook size={25} color="blue" />
              <span>Vazifalar</span>
            </div>
            <Link to={"/messages"} className="flex flex-col items-center gap-1 bg-white border border-gray-200 rounded-xl py-3">
              <TbMessage size={25} color="blue" />
              <span>Xabar</span>
            </Link>
            <div className="flex flex-col items-center gap-1 bg-white border border-gray-200 rounded-xl py-3">
              <TbCreditCard size={25} color="blue" />
              <span>To'lov</span>
            </div>
          </section>
          <section className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3 ">
              
            <div className="bg-blue-100 p-3 w-11 h-11 rounded-full flex items-center justify-center">
              <TbCreditCard size={26} color="blue" />
            </div>
              <div>
                <h1 className="text-[17px] ">Oshxona to'lovi</h1>
                <p className="text-gray-500 text-[13px]">120 000 so'm · 30-Oktabrgacha </p>
              </div>
            </div>
            <button className="h-11 px-[18px] rounded-xl bg-blue-50 text-blue-600 text-sm font-medium ">
              To'lash 
            </button>
          </section>
          <BottomNav/>
        </div>
      </div>
    </>
  );
}
export default ParentHome;









