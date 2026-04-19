"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  BarChart3,
  LogOut,
} from "lucide-react";

export default function Layout({ children }: any) {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Ventas", icon: ShoppingCart, path: "/dashboard/ventas" },
    { name: "Productos", icon: Package, path: "/dashboard/productos" },
    { name: "Reportes", icon: BarChart3, path: "/dashboard/reportes" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 🔥 SIDEBAR MEJORADO */}
      <aside className="w-64 bg-primary text-white p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-10 tracking-wide">SmartStore</h1>

        <nav className="flex flex-col gap-3">
          {menu.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl
                  transition-all duration-200
                  ${
                    active
                      ? "bg-highlight text-white shadow-md"
                      : "text-gray-400 hover:bg-secondary hover:text-white"
                  }
                `}
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <Link
          href="/login"
          className="mt-auto flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-500 transition"
        >
          <LogOut size={20} />
          <span>Cerrar sesión</span>
        </Link>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 bg-gray-100 overflow-y-auto">{children}</main>
    </div>
  );
}
