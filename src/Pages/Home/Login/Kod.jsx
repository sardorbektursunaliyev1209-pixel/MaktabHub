import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Kod() {
  const navigate = useNavigate();

  return (
    <>
      <div className="Kod">
        <div className="container px-6 py-10">
          <button
            onClick={() => navigate("/")}
            className="w-11 h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center"
          >
            <FaAngleLeft size={20} />
          </button>

          <div className="mt-8">
            <h1 className="text-3xl font-bold">Kodni kiriting</h1>
            <p className="text-gray-500 mt-2">
              +998 93 855 12 09 raqamiga 6 xonali kod yubordik.
            </p>
            <Link to="/" className="block mt-1 text-blue-600 text-sm font-medium">
              Raqamni o'zgartirish
            </Link>
          </div>

          <div className="flex gap-2 mt-8">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <input
                key={i}
                type="tel"
                maxLength={1}
                className="w-12 h-14 text-center text-xl font-bold bg-white border-2 border-gray-200 rounded-xl outline-none focus:border-blue-600"
              />
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-4">
            Kodni qayta yuborish: 0:42
          </p>

          <button className="w-full h-12 mt-8 rounded-xl bg-blue-600 text-white font-semibold">
            Tasdiqlash
          </button>

          <p className="text-gray-500 text-sm mt-10">
            Kod kelmadimi? Raqam maktabda ro'yxatdan o'tgan bo'lishi kerak.
            Muammo bo'lsa, sinf rahbariga murojaat qiling.
          </p>
        </div>
      </div>
    </>
  );
}

export default Kod;