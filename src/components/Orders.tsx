import React from 'react';
import { ShoppingCart, Search, Filter, Package, Truck, CheckCircle, Clock } from 'lucide-react';
import type { Order } from '../types';

const mockOrders: Order[] = [
  {
    id: '1',
    status: 'pending',
    customer: 'João Silva',
    items: [{ productId: '1', quantity: 2 }],
    createdAt: '2024-03-15T10:30:00',
    total: 2499.98
  },
  {
    id: '2',
    status: 'processing',
    customer: 'Maria Santos',
    items: [{ productId: '2', quantity: 1 }],
    createdAt: '2024-03-14T15:45:00',
    total: 8999.99
  },
  {
    id: '3',
    status: 'shipped',
    customer: 'Pedro Oliveira',
    items: [{ productId: '3', quantity: 1 }],
    createdAt: '2024-03-13T09:15:00',
    total: 4599.99
  }
];

const statusConfig = {
  pending: { icon: Clock, color: 'text-yellow-500 bg-yellow-100', label: 'Pendente' },
  processing: { icon: Package, color: 'text-blue-500 bg-blue-100', label: 'Em Processamento' },
  shipped: { icon: Truck, color: 'text-purple-500 bg-purple-100', label: 'Enviado' },
  delivered: { icon: CheckCircle, color: 'text-green-500 bg-green-100', label: 'Entregue' }
};

export function Orders() {
  return (
    <div className="p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <ShoppingCart className="w-6 h-6" />
          Pedidos
        </h1>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Buscar pedidos..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          <button className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            Filtros
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pedido</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockOrders.map((order) => {
                const status = statusConfig[order.status];
                const StatusIcon = status.icon;
                
                return (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">#{order.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{order.customer}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex items-center gap-1 rounded-full ${status.color}`}>
                        <StatusIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">{status.label}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order.total)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}