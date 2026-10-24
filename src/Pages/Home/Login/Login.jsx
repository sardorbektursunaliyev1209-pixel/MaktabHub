import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
  const [phone, setPhone] = useState("");
 const navigate = useNavigate()
  return (
    <>
      <div className="Login">
        <div className="container px-6 py-10">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 w-11 h-11 rounded-xl flex items-center justify-center">
              <FaBook size={23} color="white" />
            </div>
            <h1 className="text-2xl font-bold">MaktabHub</h1>
          </div>

          <div className="mt-10">
            <h1 className="text-3xl font-bold">Xush kelibsiz</h1>
            <p className="text-gray-500 text-[16px] mt-2">
              Telefon raqamingizni kiriting - rolingizni
              (ota-ona, o'quvchi, o'qituvchi) tizim o'zi aniqlaydi.
            </p>
          </div>

          <div className="mt-8">
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Telefon raqam
            </label>

            <div className="flex items-center h-[52px] bg-white border-2 border-blue-600 rounded-xl px-4">
              <span className="font-medium">+998</span>
              <div className="w-px h-6 bg-gray-300 mx-3"></div>
              <input
                id="phone"
                type="tel"
                maxLength={9}
                placeholder="90 123 45 67"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                className="flex-1 outline-none"
              />
            </div>

            <p className="text-gray-500 text-sm mt-2">
              6 xonali kod SMS orqali yuboriladi
            </p>
          </div>

          <button 
          onClick={()=>navigate("/kod")}
            disabled={phone.length !== 9}
            className="w-full h-12 mt-8 rounded-xl bg-blue-600 text-white font-semibold disabled:bg-gray-300"
          >
            Davom etish
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;