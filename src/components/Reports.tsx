import React from 'react';
import { BarChart, TrendingUp, PieChart, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function Reports() {
  return (
    <div className="p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <BarChart className="w-6 h-6" />
          Relatórios
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Vendas Mensais</h2>
            <div className="flex items-center text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-sm font-medium">12.5%</span>
            </div>
          </div>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            Gráfico de Vendas
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Produtos Mais Vendidos</h2>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            Gráfico de Produtos
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Faturamento</h2>
            <div className="flex items-center text-green-600">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-sm font-medium">8.3%</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Este Mês</span>
              <span className="text-lg font-semibold">R$ 45.678,00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Mês Anterior</span>
              <span className="text-lg font-semibold">R$ 42.156,00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Este Ano</span>
              <span className="text-lg font-semibold">R$ 523.897,00</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Pedidos</h2>
            <div className="flex items-center text-red-600">
              <ArrowDownRight className="w-4 h-4" />
              <span className="text-sm font-medium">3.2%</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Concluídos</span>
              <span className="text-lg font-semibold">234</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Em Processamento</span>
              <span className="text-lg font-semibold">45</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Cancelados</span>
              <span className="text-lg font-semibold">12</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Categorias</h2>
            <PieChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Eletrônicos</span>
              <span className="text-lg font-semibold">45%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Computadores</span>
              <span className="text-lg font-semibold">30%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Acessórios</span>
              <span className="text-lg font-semibold">25%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}