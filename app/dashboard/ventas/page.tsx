export default function Ventas() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-secondary mb-6">
        Gestión de Ventas
      </h1>

      <div className="bg-white rounded-2xl shadow-md p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-secondary text-lg">
            Historial de ventas
          </h2>

          <button className="text-sm bg-highlight text-white px-4 py-2 rounded-lg hover:bg-accent transition">
            Exportar
          </button>
        </div>

        {/* Tabla */}
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full text-sm">

            {/* Encabezado */}
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
              <tr>
                <th className="text-left px-6 py-3">ID</th>
                <th className="text-left px-6 py-3">Cliente</th>
                <th className="text-left px-6 py-3">Fecha</th>
                <th className="text-left px-6 py-3">Total</th>
                <th className="text-left px-6 py-3">Método</th>
                <th className="text-left px-6 py-3">Estado</th>
              </tr>
            </thead>

            {/* Cuerpo */}
            <tbody className="text-gray-700">

              <tr className="border-t hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium">#001</td>
                <td className="px-6 py-4">Cliente 1</td>
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
                <td className="px-6 py-4">Cliente 2</td>
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

              <tr className="border-t hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium">#003</td>
                <td className="px-6 py-4">Cliente 3</td>
                <td className="px-6 py-4">17 Abr 2026</td>
                <td className="px-6 py-4 font-semibold">$250</td>
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
                <td className="px-6 py-4 font-medium">#004</td>
                <td className="px-6 py-4">Cliente 4</td>
                <td className="px-6 py-4">17 Abr 2026</td>
                <td className="px-6 py-4 font-semibold">$60</td>
                <td className="px-6 py-4">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
                    Efectivo
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">
                    Pendiente
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