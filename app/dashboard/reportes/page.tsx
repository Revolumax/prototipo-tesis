"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";

const ventasData = [
  { dia: "Lun", ventas: 120 },
  { dia: "Mar", ventas: 200 },
  { dia: "Mié", ventas: 150 },
  { dia: "Jue", ventas: 300 },
  { dia: "Vie", ventas: 250 },
  { dia: "Sáb", ventas: 400 },
];

const productosData = [
  { nombre: "Chocolate", cantidad: 40 },
  { nombre: "Galletas", cantidad: 30 },
  { nombre: "Refresco", cantidad: 20 },
  { nombre: "Agua", cantidad: 50 },
];

export default function Reportes() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-secondary mb-6">
        Reportes del Sistema
      </h1>

      <div className="grid grid-cols-2 gap-6">

        {/* Ventas */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-secondary font-semibold mb-4">
            Ventas por día
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={ventasData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dia" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="ventas" stroke="#2F2FE4" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Productos */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-secondary font-semibold mb-4">
            Productos más vendidos
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productosData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nombre" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="cantidad" fill="#162E93" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}