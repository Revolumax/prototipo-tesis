import { DollarSign, ShoppingBag, Package, TrendingUp } from "lucide-react";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-secondary mb-6">
        Dashboard
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <Card icon={<DollarSign />} title="Ingresos" value="$5,200" />
        <Card icon={<ShoppingBag />} title="Ventas" value="120" />
        <Card icon={<Package />} title="Productos" value="45" />
        <Card icon={<TrendingUp />} title="Ventas Hoy" value="12" />
      </div>

      {/* Tabla */}
<div className="bg-white rounded-2xl shadow-md p-6">
  <div className="flex justify-between items-center mb-4">
    <h2 className="font-semibold text-secondary text-lg">
      Ventas recientes
    </h2>

    <button className="text-sm bg-highlight text-white px-4 py-2 rounded-lg hover:bg-accent transition">
      Ver todas
    </button>
  </div>

  <div className="overflow-hidden rounded-xl border border-gray-200">
    <table className="w-full text-sm">
      
      {/* Header */}
      <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
        <tr>
          <th className="text-left px-6 py-3">ID</th>
          <th className="text-left px-6 py-3">Fecha</th>
          <th className="text-left px-6 py-3">Total</th>
          <th className="text-left px-6 py-3">Método</th>
          <th className="text-left px-6 py-3">Estado</th>
        </tr>
      </thead>

      {/* Body */}
      <tbody className="text-gray-700">
        
        <tr className="border-t hover:bg-gray-50 transition">
          <td className="px-6 py-4 font-medium">#001</td>
          <td className="px-6 py-4">18 Abr 2026</td>
          <td className="px-6 py-4 font-semibold">$120</td>
          
          <td className="px-6 py-4">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
              Tarjeta
            </span>
          </td>

          <td className="px-6 py-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
              Completado
            </span>
          </td>
        </tr>

        <tr className="border-t hover:bg-gray-50 transition">
          <td className="px-6 py-4 font-medium">#002</td>
          <td className="px-6 py-4">18 Abr 2026</td>
          <td className="px-6 py-4 font-semibold">$80</td>
          
          <td className="px-6 py-4">
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
              Efectivo
            </span>
          </td>

          <td className="px-6 py-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
              Completado
            </span>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</div>
    </div>
  );
}

function Card({ icon, title, value }: any) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md flex items-center gap-4 hover:shadow-lg transition">
      <div className="bg-highlight text-white p-3 rounded-xl">
        {icon}
      </div>
      <div>
        <p className="text-gray-500">{title}</p>
        <h2 className="text-xl font-bold text-secondary">{value}</h2>
      </div>
    </div>
  );
}