export default function Productos() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-secondary mb-6">
        Gestión de Productos
      </h1>

      <div className="bg-white rounded-2xl shadow-md p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-secondary text-lg">
            Inventario
          </h2>

          <button className="text-sm bg-highlight text-white px-4 py-2 rounded-lg hover:bg-accent transition">
            + Nuevo producto
          </button>
        </div>

        {/* Tabla */}
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full text-sm">

            {/* Encabezado */}
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
              <tr>
                <th className="text-left px-6 py-3">Producto</th>
                <th className="text-left px-6 py-3">Precio</th>
                <th className="text-left px-6 py-3">Stock</th>
                <th className="text-left px-6 py-3">Estado</th>
              </tr>
            </thead>

            {/* Cuerpo */}
            <tbody className="text-gray-700">

              <tr className="border-t hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium">Chocolate</td>
                <td className="px-6 py-4">$50</td>
                <td className="px-6 py-4">20</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                    Disponible
                  </span>
                </td>
              </tr>

              <tr className="border-t hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium">Galletas</td>
                <td className="px-6 py-4">$30</td>
                <td className="px-6 py-4">15</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                    Disponible
                  </span>
                </td>
              </tr>

              <tr className="border-t hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium">Refresco</td>
                <td className="px-6 py-4">$25</td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">
                    Agotado
                  </span>
                </td>
              </tr>

              <tr className="border-t hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium">Agua</td>
                <td className="px-6 py-4">$20</td>
                <td className="px-6 py-4">50</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                    Disponible
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