"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { User, Lock } from "lucide-react";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (user === "admin" && pass === "1234") {
      router.push("/dashboard");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="flex h-screen bg-[#080616] items-center justify-center">

      {/* Card */}
      <div className="relative w-[360px]">

        {/* Avatar */}
        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
          <div className="bg-[#2F2FE4] p-5 rounded-full shadow-lg border-4 border-white">
            <User size={28} className="text-white" />
          </div>
        </div>

        {/* Contenedor */}
        <div className="bg-white rounded-3xl shadow-xl p-8 pt-20">

          {/* 🔥 NUEVO TEXTO */}
          <div className="text-center mb-6">
            <h2 className="text-lg font-bold text-[#1A1953]">
              Sistema de Automatización de Compras
            </h2>
            <p className="text-sm text-gray-500">
              Panel Administrativo
            </p>
          </div>

          {/* Usuario */}
          <div className="flex items-center bg-gray-200 rounded-full px-4 py-3 mb-4 focus-within:ring-2 focus-within:ring-[#2F2FE4] transition">
            <User size={18} className="text-gray-500 mr-3" />
            <input
              placeholder="Usuario"
              className="bg-transparent outline-none w-full text-sm"
              onChange={(e) => setUser(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="flex items-center bg-gray-200 rounded-full px-4 py-3 mb-4 focus-within:ring-2 focus-within:ring-[#2F2FE4] transition">
            <Lock size={18} className="text-gray-500 mr-3" />
            <input
              type="password"
              placeholder="Contraseña"
              className="bg-transparent outline-none w-full text-sm"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          {/* Opciones */}
          <div className="flex justify-between text-xs text-gray-500 mb-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Recordarme
            </label>
            <span className="cursor-pointer hover:text-[#2F2FE4]">
              ¿Olvidaste tu contraseña?
            </span>
          </div>

          {/* Botón */}
          <button
            onClick={handleLogin}
            className="w-full bg-[#2F2FE4] text-white py-3 rounded-full font-semibold hover:bg-[#162E93] transition-all shadow-md hover:shadow-lg"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}