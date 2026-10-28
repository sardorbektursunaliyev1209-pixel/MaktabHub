// import { useState } from "react";
// import { TbUsers } from "react-icons/tb";
// import { useNavigate } from "react-router-dom";

// const Roles = [
//   {
//     id: "parent",
//     title: "Ota-ona",
//     sub: "Aziz 7-B, Madina 3-A 13-Maktab",
//   },
//   {
//     id: "teacher",
//     title: "O'qituvchi",
//     sub: "45-maktab · Matematika · 4 ta sinf",
//   },
// ];

// function Rol() {
//   const navigate = useNavigate();
//   const [sel, setSel] = useState("parent");

//   return (
//     <>
//       <div className="rol">
//         <div className="container px-6 py-10">
//           <div>
//             <h1 className="text-3xl font-bold">Kim sifatida kirasiz?</h1>
//             <p className="text-gray-500 mt-2">
//               Bu raqamga ikkita rol bog'langan. Keyin profil sahifadan bir
//               bosishda almashtirish mumkin.
//             </p>
//           </div>

//           <div className="mt-8">
//             {Roles.map((r) => (
//               <button
//                 key={r.id}
//                 onClick={() => setSel(r.id)}
//                 className={`flex items-center gap-4 mt-3 text-left bg-white w-full p-4 border-2 rounded-xl ${
//                   sel === r.id ? "border-blue-600" : "border-gray-200"
//                 }`}
//               >
//                 <div className="bg-blue-600 w-11 h-11 shrink-0 flex items-center justify-center rounded-xl">
//                   <TbUsers size={23} color="white" />
//                 </div>
//                 <div className="flex-1">
//                   <h2 className="font-semibold">{r.title}</h2>
//                   <p className="text-gray-500 text-sm">{r.sub}</p>
//                 </div>
//                 <div
//                   className={`w-5 h-5 shrink-0 border-2 rounded-full ${
//                     sel === r.id
//                       ? "bg-blue-600 border-blue-600"
//                       : "border-gray-300"
//                   }`}
//                 ></div>{" "}
//               </button>
//             ))}
//           </div>

//           <div className="flex items-center gap-2 mt-6">
//             <input
//               type="checkbox"
//               id="eslash"
//               className="w-5 h-5 accent-blue-600"
//             />
//             <label htmlFor="eslash" className="text-sm">
//               Shu tanlovni eslab qolish
//             </label>
//           </div>

//           <button
//            onClick={()=> sel === "parent" ? navigate("/Parent"): navigate("")}
//           className="w-full h-12 mt-6 rounded-xl bg-blue-600 text-white font-semibold">
//             {sel === "parent" ? "Ota-ona " : "O'qituvchi "}
//             sifatida davom etish
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Rol;
