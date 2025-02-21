import React, { useState } from 'react';
import { Link2, Store, Truck, CreditCard, CheckCircle2, XCircle, Settings2 } from 'lucide-react';

interface Integration {
  id: string;
  name: string;
  logo: string;
  status: 'connected' | 'disconnected';
  lastSync?: string;
}

const ecommerceIntegrations: Integration[] = [
  { id: 'yampi', name: 'Yampi', logo: 'https://yampi.com.br/assets/images/logo.svg', status: 'connected', lastSync: '2024-03-15 14:30' },
  { id: 'shopify', name: 'Shopify', logo: 'https://cdn.shopify.com/s/files/1/0557/9535/9804/files/shopify-logo.svg', status: 'connected', lastSync: '2024-03-15 15:45' },
  { id: 'lojaintegrada', name: 'Loja Integrada', logo: 'https://lojaintegrada.com.br/assets/images/logo.svg', status: 'disconnected' },
  { id: 'nuvemshop', name: 'NuvemShop', logo: 'https://nuvemshop.com.br/assets/images/logo.svg', status: 'connected', lastSync: '2024-03-15 12:20' },
  { id: 'tray', name: 'Tray', logo: 'https://tray.com.br/assets/images/logo.svg', status: 'disconnected' },
  { id: 'baggy', name: 'Baggy', logo: 'https://baggy.com.br/assets/images/logo.svg', status: 'disconnected' },
  { id: 'woocommerce', name: 'WooCommerce', logo: 'https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce.svg', status: 'connected', lastSync: '2024-03-15 13:15' },
  { id: 'wordpress', name: 'WordPress', logo: 'https://wordpress.org/images/wordpress-logo-32.png', status: 'connected', lastSync: '2024-03-15 13:15' },
];

const shippingIntegrations: Integration[] = [
  { id: 'correios', name: 'Correios', logo: 'https://correios.com.br/logo.svg', status: 'connected', lastSync: '2024-03-15 14:00' },
  { id: 'fedex', name: 'FedEx', logo: 'https://fedex.com/logo.svg', status: 'connected', lastSync: '2024-03-15 15:30' },
  { id: 'loggi', name: 'Loggi', logo: 'https://loggi.com/logo.svg', status: 'disconnected' },
  { id: 'jadlog', name: 'JadLog', logo: 'https://jadlog.com.br/logo.svg', status: 'connected', lastSync: '2024-03-15 11:45' },
  { id: 'melhorenvio', name: 'Melhor Envio', logo: 'https://melhorenvio.com.br/logo.svg', status: 'connected', lastSync: '2024-03-15 13:20' },
  { id: 'mandae', name: 'Mandaê', logo: 'https://mandae.com.br/logo.svg', status: 'disconnected' },
  { id: 'frenet', name: 'Frenet', logo: 'https://frenet.com.br/logo.svg', status: 'connected', lastSync: '2024-03-15 12:10' },
  { id: 'gologgy', name: 'GoLoggy', logo: 'https://gologgy.com/logo.svg', status: 'disconnected' },
];

const paymentIntegrations: Integration[] = [
  { id: 'appmax', name: 'Appmax', logo: 'https://appmax.com.br/logo.svg', status: 'connected', lastSync: '2024-03-15 14:15' },
  { id: 'pagarme', name: 'Pagar.me', logo: 'https://pagar.me/logo.svg', status: 'connected', lastSync: '2024-03-15 15:00' },
  { id: 'mercadopago', name: 'MercadoPago', logo: 'https://mercadopago.com.br/logo.svg', status: 'connected', lastSync: '2024-03-15 13:45' },
];

export function Integrations() {
  const [activeTab, setActiveTab] = useState('ecommerce');

  const renderIntegrationCard = (integration: Integration) => (
    <div key={integration.id} className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <Store className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">{integration.name}</h3>
            {integration.status === 'connected' && integration.lastSync && (
              <p className="text-sm text-gray-500">Última sincronização: {integration.lastSync}</p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {integration.status === 'connected' ? (
            <>
              <span className="flex items-center text-green-600">
                <CheckCircle2 className="w-5 h-5 mr-1" />
                Conectado
              </span>
              <button className="ml-4 text-gray-400 hover:text-gray-600">
                <Settings2 className="w-5 h-5" />
              </button>
            </>
          ) : (
            <>
              <span className="flex items-center text-gray-400">
                <XCircle className="w-5 h-5 mr-1" />
                Desconectado
              </span>
              <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Conectar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Link2 className="w-6 h-6" />
          Integrações
        </h1>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('ecommerce')}
              className={`py-4 px-6 inline-flex items-center gap-2 border-b-2 font-medium text-sm ${
                activeTab === 'ecommerce'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Store className="w-4 h-4" />
              E-commerce
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`py-4 px-6 inline-flex items-center gap-2 border-b-2 font-medium text-sm ${
                activeTab === 'shipping'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Truck className="w-4 h-4" />
              Envios
            </button>
            <button
              onClick={() => setActiveTab('payment')}
              className={`py-4 px-6 inline-flex items-center gap-2 border-b-2 font-medium text-sm ${
                activeTab === 'payment'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              Pagamentos
            </button>
          </nav>
        </div>
      </div>

      {/* Integration Cards */}
      <div className="space-y-4">
        {activeTab === 'ecommerce' && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Plataformas de E-commerce</h2>
              <span className="text-sm text-gray-500">
                {ecommerceIntegrations.filter(i => i.status === 'connected').length} de {ecommerceIntegrations.length} conectadas
              </span>
            </div>
            {ecommerceIntegrations.map(renderIntegrationCard)}
          </>
        )}

        {activeTab === 'shipping' && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Serviços de Envio</h2>
              <span className="text-sm text-gray-500">
                {shippingIntegrations.filter(i => i.status === 'connected').length} de {shippingIntegrations.length} conectados
              </span>
            </div>
            {shippingIntegrations.map(renderIntegrationCard)}
          </>
        )}

        {activeTab === 'payment' && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Gateways de Pagamento</h2>
              <span className="text-sm text-gray-500">
                {paymentIntegrations.filter(i => i.status === 'connected').length} de {paymentIntegrations.length} conectados
              </span>
            </div>
            {paymentIntegrations.map(renderIntegrationCard)}
          </>
        )}
      </div>
    </div>
  );
}