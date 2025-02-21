import React, { useState } from 'react';
import { Truck, MapPin, Calendar, Package, ArrowRight, Plus, Edit2, Trash2, X } from 'lucide-react';
import type { Truck as TruckType } from '../types';

const initialTrucks: TruckType[] = [
  {
    id: '1',
    licensePlate: 'ABC-1234',
    model: 'Volvo FH 460',
    year: 2022,
    capacity: '30 toneladas',
    status: 'available',
    driver: {
      name: 'João Silva',
      license: '123456789',
      phone: '(11) 98765-4321',
      email: 'joao.silva@email.com'
    },
    lastMaintenance: '2024-02-15',
    nextMaintenance: '2024-04-15',
    fuelType: 'diesel',
    fuelEfficiency: 3.5,
    mileage: 50000,
    documents: {
      insurance: '2025-03-15',
      inspection: '2024-09-15',
      registration: '2024-12-31'
    }
  }
];

const deliveries = [
  {
    id: '1',
    order: '#12345',
    customer: 'João Silva',
    address: 'Rua das Flores, 123 - São Paulo, SP',
    date: '2024-03-15',
    status: 'Em Rota',
    items: 3
  },
  {
    id: '2',
    order: '#12346',
    customer: 'Maria Santos',
    address: 'Av. Paulista, 1000 - São Paulo, SP',
    date: '2024-03-15',
    status: 'Agendado',
    items: 1
  },
  {
    id: '3',
    order: '#12347',
    customer: 'Pedro Oliveira',
    address: 'Rua Augusta, 789 - São Paulo, SP',
    date: '2024-03-16',
    status: 'Pendente',
    items: 2
  }
];

export function Logistics() {
  const [trucks, setTrucks] = useState<TruckType[]>(initialTrucks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTruck, setEditingTruck] = useState<TruckType | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'trucks' | 'deliveries'>('overview');
  
  const [truckForm, setTruckForm] = useState<Partial<TruckType>>({
    licensePlate: '',
    model: '',
    year: new Date().getFullYear(),
    capacity: '',
    status: 'available',
    driver: {
      name: '',
      license: '',
      phone: '',
      email: ''
    },
    lastMaintenance: '',
    nextMaintenance: '',
    fuelType: 'diesel',
    fuelEfficiency: 0,
    mileage: 0,
    documents: {
      insurance: '',
      inspection: '',
      registration: ''
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('driver.')) {
      const driverField = name.split('.')[1];
      setTruckForm(prev => ({
        ...prev,
        driver: {
          ...prev.driver,
          [driverField]: value
        }
      }));
    } else if (name.startsWith('documents.')) {
      const documentField = name.split('.')[1];
      setTruckForm(prev => ({
        ...prev,
        documents: {
          ...prev.documents,
          [documentField]: value
        }
      }));
    } else {
      setTruckForm(prev => ({
        ...prev,
        [name]: name === 'year' || name === 'fuelEfficiency' || name === 'mileage'
          ? Number(value)
          : value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTruck: TruckType = {
      id: editingTruck?.id || Date.now().toString(),
      licensePlate: truckForm.licensePlate || '',
      model: truckForm.model || '',
      year: truckForm.year || new Date().getFullYear(),
      capacity: truckForm.capacity || '',
      status: truckForm.status || 'available',
      driver: {
        name: truckForm.driver?.name || '',
        license: truckForm.driver?.license || '',
        phone: truckForm.driver?.phone || '',
        email: truckForm.driver?.email || ''
      },
      lastMaintenance: truckForm.lastMaintenance || new Date().toISOString().split('T')[0],
      nextMaintenance: truckForm.nextMaintenance || '',
      fuelType: truckForm.fuelType || 'diesel',
      fuelEfficiency: truckForm.fuelEfficiency || 0,
      mileage: truckForm.mileage || 0,
      documents: {
        insurance: truckForm.documents?.insurance || '',
        inspection: truckForm.documents?.inspection || '',
        registration: truckForm.documents?.registration || ''
      }
    };

    if (editingTruck) {
      setTrucks(trucks.map(t => t.id === editingTruck.id ? newTruck : t));
    } else {
      setTrucks([...trucks, newTruck]);
    }

    handleCloseModal();
  };

  const handleEdit = (truck: TruckType) => {
    setEditingTruck(truck);
    setTruckForm(truck);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este veículo?')) {
      setTrucks(trucks.filter(t => t.id !== id));
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTruck(null);
    setTruckForm({
      licensePlate: '',
      model: '',
      year: new Date().getFullYear(),
      capacity: '',
      status: 'available',
      driver: {
        name: '',
        license: '',
        phone: '',
        email: ''
      },
      lastMaintenance: '',
      nextMaintenance: '',
      fuelType: 'diesel',
      fuelEfficiency: 0,
      mileage: 0,
      documents: {
        insurance: '',
        inspection: '',
        registration: ''
      }
    });
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Truck className="w-6 h-6" />
          Logística
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Novo Veículo
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-6 inline-flex items-center gap-2 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Package className="w-4 h-4" />
              Visão Geral
            </button>
            <button
              onClick={() => setActiveTab('trucks')}
              className={`py-4 px-6 inline-flex items-center gap-2 border-b-2 font-medium text-sm ${
                activeTab === 'trucks'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Truck className="w-4 h-4" />
              Frota
            </button>
            <button
              onClick={() => setActiveTab('deliveries')}
              className={`py-4 px-6 inline-flex items-center gap-2 border-b-2 font-medium text-sm ${
                activeTab === 'deliveries'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <MapPin className="w-4 h-4" />
              Entregas
            </button>
          </nav>
        </div>
      </div>

      {activeTab === 'overview' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Entregas Hoje</p>
                  <p className="text-2xl font-bold mt-1">12</p>
                </div>
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Truck className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Em Rota</p>
                  <p className="text-2xl font-bold mt-1">5</p>
                </div>
                <div className="bg-green-500 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Agendadas</p>
                  <p className="text-2xl font-bold mt-1">8</p>
                </div>
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total de Itens</p>
                  <p className="text-2xl font-bold mt-1">45</p>
                </div>
                <div className="bg-purple-500 p-3 rounded-lg">
                  <Package className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Mapa da Frota</h2>
            </div>
            <div className="h-96 bg-gray-100 flex items-center justify-center">
              <p className="text-gray-500">Mapa com localização em tempo real dos veículos</p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'trucks' && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Veículo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Motorista</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Próxima Manutenção</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {trucks.map((truck) => (
                  <tr key={truck.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{truck.model}</div>
                      <div className="text-sm text-gray-500">{truck.licensePlate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{truck.driver.name}</div>
                      <div className="text-sm text-gray-500">{truck.driver.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        truck.status === 'available'
                          ? 'bg-green-100 text-green-800'
                          : truck.status === 'in_route'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {truck.status === 'available' ? 'Disponível' :
                         truck.status === 'in_route' ? 'Em Rota' : 'Manutenção'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(truck.nextMaintenance).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(truck)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(truck.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'deliveries' && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="divide-y divide-gray-200">
            {deliveries.map((delivery) => (
              <div key={delivery.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-medium">{delivery.order}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{delivery.customer}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{delivery.address}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm text-gray-500">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {new Date(delivery.date).toLocaleDateString('pt-BR')}
                      </span>
                      <span className="text-sm text-gray-500">
                        <Package className="w-4 h-4 inline mr-1" />
                        {delivery.items} {delivery.items === 1 ? 'item' : 'itens'}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {delivery.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal for Create/Edit Truck */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {editingTruck ? 'Editar Veículo' : 'Novo Veículo'}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Placa
                  </label>
                  <input
                    type="text"
                    name="licensePlate"
                    value={truckForm.licensePlate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Modelo
                  </label>
                  <input
                    type="text"
                    name="model"
                    value={truckForm.model}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ano
                  </label>
                  <input
                    type="number"
                    name="year"
                    value={truckForm.year}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Capacidade
                  </label>
                  <input
                    type="text"
                    name="capacity"
                    value={truckForm.capacity}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    name="status"
                    value={truckForm.status}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="available">Disponível</option>
                    <option value="in_route">Em Rota</option>
                    <option value="maintenance">Manutenção</option>
                  </select>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="text-lg font-medium mb-4">Informações do Motorista</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="driver.name"
                      value={truckForm.driver?.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CNH
                    </label>
                    <input
                      type="text"
                      name="driver.license"
                      value={truckForm.driver?.license}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="driver.phone"
                      value={truckForm.driver?.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="driver.email"
                      value={truckForm.driver?.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="text-lg font-medium mb-4">Manutenção e Documentação</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Última Manutenção
                    </label>
                    <input
                      type="date"
                      name="lastMaintenance"
                      value={truckForm.lastMaintenance}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Próxima Manutenção
                    </label>
                    <input
                      type="date"
                      name="nextMaintenance"
                      value={truckForm.nextMaintenance}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Seguro (Validade)
                    </label>
                    <input
                      type="date"
                      name="documents.insurance"
                      value={truckForm.documents?.insurance}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Inspeção (Validade)
                    </label>
                    <input
                      type="date"
                      name="documents.inspection"
                      value={truckForm.documents?.inspection}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Licenciamento (Validade)
                    </label>
                    <input
                      type="date"
                      name="documents.registration"
                      value={truckForm.documents?.registration}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="text-lg font-medium mb-4">Informações de Consumo</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo de Combustível
                    </label>
                    <select
                      name="fuelType"
                      value={truckForm.fuelType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="diesel">Diesel</option>
                      <option value="gas">Gasolina</option>
                      <option value="electric">Elétrico</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Consumo (km/L)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      name="fuelEfficiency"
                      value={truckForm.fuelEfficiency}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quilometragem
                    </label>
                    <input
                      type="number"
                      name="mileage"
                      value={truckForm.mileage}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {editingTruck ? 'Salvar Alterações' : 'Cadastrar Veículo'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}