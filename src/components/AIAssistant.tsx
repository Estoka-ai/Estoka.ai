import React, { useState } from 'react';
import { Bot, MapPin, MessageSquare, TrendingUp, Truck, RotateCcw } from 'lucide-react';

// Mock data for vehicle locations
const vehicles = [
  { id: 'V001', location: { lat: -23.550520, lng: -46.633308 }, driver: 'Carlos Silva', status: 'Em entrega' },
  { id: 'V002', location: { lat: -23.555994, lng: -46.639416 }, driver: 'Ana Santos', status: 'Retornando' },
  { id: 'V003', location: { lat: -23.548147, lng: -46.628756 }, driver: 'Pedro Lima', status: 'Em rota' },
];

// Mock data for route suggestions
const routeSuggestions = [
  {
    id: 'R001',
    origin: 'Centro de Distribuição - SP',
    destinations: ['Vila Mariana', 'Moema', 'Itaim Bibi'],
    metrics: {
      distance: '15.4 km',
      time: '45 min',
      fuel: '3.2 L',
      cost: 'R$ 28,50'
    },
    optimization: '12% mais eficiente que a rota anterior'
  },
  {
    id: 'R002',
    origin: 'Centro de Distribuição - SP',
    destinations: ['Pinheiros', 'Vila Madalena', 'Perdizes'],
    metrics: {
      distance: '12.8 km',
      time: '38 min',
      fuel: '2.8 L',
      cost: 'R$ 24,30'
    },
    optimization: '15% mais eficiente que a rota anterior'
  }
];

// Mock data for automated messages
const automatedMessages = [
  {
    id: 'M001',
    type: 'Promoção',
    content: '🎉 Super promoção de frete grátis para entregas hoje! Use o código FRETEOFF',
    status: 'Enviado',
    metrics: {
      sent: 150,
      opened: 89,
      converted: 23
    }
  },
  {
    id: 'M002',
    type: 'Localização',
    content: '🚚 Seu pedido está a caminho! Acompanhe em tempo real: [link]',
    status: 'Agendado',
    metrics: {
      sent: 85,
      opened: 72,
      converted: 0
    }
  }
];

export function AIAssistant() {
  const [activeTab, setActiveTab] = useState('suggestions');

  return (
    <div className="p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Bot className="w-6 h-6" />
          Assistente IA
        </h1>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('suggestions')}
              className={`py-4 px-6 inline-flex items-center gap-2 border-b-2 font-medium text-sm ${
                activeTab === 'suggestions'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              Sugestões de Rotas
            </button>
            <button
              onClick={() => setActiveTab('tracking')}
              className={`py-4 px-6 inline-flex items-center gap-2 border-b-2 font-medium text-sm ${
                activeTab === 'tracking'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <MapPin className="w-4 h-4" />
              Rastreamento em Tempo Real
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`py-4 px-6 inline-flex items-center gap-2 border-b-2 font-medium text-sm ${
                activeTab === 'messages'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              Mensagens Automáticas
            </button>
          </nav>
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'suggestions' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Sugestões de Rotas Otimizadas</h2>
              <button className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                Recalcular
              </button>
            </div>
            <div className="space-y-6">
              {routeSuggestions.map((route) => (
                <div key={route.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Rota {route.id}</h3>
                      <p className="text-sm text-gray-500 mt-1">De: {route.origin}</p>
                      <div className="mt-2">
                        <p className="text-sm font-medium text-gray-700">Destinos:</p>
                        <ul className="list-disc list-inside text-sm text-gray-600 ml-2">
                          {route.destinations.map((dest, index) => (
                            <li key={index}>{dest}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <span className="text-green-600 text-sm font-medium bg-green-50 px-2.5 py-0.5 rounded-full">
                      {route.optimization}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t">
                    <div>
                      <p className="text-sm text-gray-500">Distância</p>
                      <p className="font-medium">{route.metrics.distance}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Tempo Est.</p>
                      <p className="font-medium">{route.metrics.time}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Combustível</p>
                      <p className="font-medium">{route.metrics.fuel}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Custo Est.</p>
                      <p className="font-medium">{route.metrics.cost}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tracking' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Localização dos Veículos</h2>
            <div className="bg-gray-100 rounded-lg h-96 mb-6 flex items-center justify-center">
              <p className="text-gray-500">Mapa com localização em tempo real</p>
            </div>
            <div className="space-y-4">
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Truck className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">{vehicle.id}</h3>
                      <p className="text-sm text-gray-500">Motorista: {vehicle.driver}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {vehicle.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'messages' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Mensagens Automáticas</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Nova Mensagem
              </button>
            </div>
            <div className="space-y-4">
              {automatedMessages.map((message) => (
                <div key={message.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {message.type}
                      </span>
                      <h3 className="mt-2 font-medium">{message.content}</h3>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      message.status === 'Enviado' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {message.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-3 border-t">
                    <div>
                      <p className="text-sm text-gray-500">Enviados</p>
                      <p className="font-medium">{message.metrics.sent}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Abertos</p>
                      <p className="font-medium">{message.metrics.opened}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Conversões</p>
                      <p className="font-medium">{message.metrics.converted}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}