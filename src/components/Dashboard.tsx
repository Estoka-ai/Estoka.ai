import React from 'react';
import { Package, ShoppingCart, TrendingUp, AlertTriangle } from 'lucide-react';

const stats = [
  {
    title: 'Total Produtos',
    value: '1,234',
    icon: Package,
    color: 'bg-blue-500',
  },
  {
    title: 'Estoque Baixo',
    value: '15',
    icon: AlertTriangle,
    color: 'bg-yellow-500',
  },
  {
    title: 'Pedidos Pendentes',
    value: '23',
    icon: ShoppingCart,
    color: 'bg-purple-500',
  },
  {
    title: 'Receita Mensal',
    value: 'R$ 45.678',
    icon: TrendingUp,
    color: 'bg-green-500',
  },
];

export function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 flex-1">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Produtos Mais Vendidos</h2>
          <div className="space-y-4">
            {/* Placeholder for chart/data */}
            <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
              Gráfico de Produtos
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Últimos Pedidos</h2>
          <div className="space-y-4">
            {/* Placeholder for orders list */}
            <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
              Lista de Pedidos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}