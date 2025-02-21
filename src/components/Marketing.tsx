import React, { useState } from 'react';
import { TrendingUp, Search, Filter, Target, Users, Hash, Megaphone } from 'lucide-react';
import type { Product } from '../types';

// Mock data for marketing suggestions
const marketingSuggestions = {
  'Eletrônicos': {
    seoTerms: [
      'melhor smartphone 2024',
      'comparativo celulares',
      'smartphone custo benefício',
      'review técnico celular',
      'smartphone premium features'
    ],
    targetAudience: [
      { age: '18-34', percentage: 45 },
      { age: '35-44', percentage: 30 },
      { age: '45-54', percentage: 15 },
      { age: '55+', percentage: 10 }
    ],
    channels: [
      'Instagram',
      'YouTube',
      'Google Ads',
      'Tech Blogs',
      'Email Marketing'
    ],
    campaignIdeas: [
      {
        title: 'Upgrade Tecnológico',
        description: 'Campanha focada em destacar as inovações tecnológicas e recursos únicos do produto.',
        estimatedROI: '250%',
        duration: '30 dias'
      },
      {
        title: 'Cashback Digital',
        description: 'Programa de recompensas para compras recorrentes de tecnologia.',
        estimatedROI: '180%',
        duration: '60 dias'
      },
      {
        title: 'Tech Influencer Partnership',
        description: 'Parcerias com influenciadores tech para reviews e demonstrações.',
        estimatedROI: '300%',
        duration: '45 dias'
      }
    ]
  },
  'Computadores': {
    seoTerms: [
      'notebook para trabalho',
      'melhor computador custo benefício',
      'pc gamer 2024',
      'notebook para estudante',
      'computador para home office'
    ],
    targetAudience: [
      { age: '18-24', percentage: 25 },
      { age: '25-34', percentage: 35 },
      { age: '35-44', percentage: 25 },
      { age: '45+', percentage: 15 }
    ],
    channels: [
      'LinkedIn',
      'YouTube',
      'Tech Forums',
      'Professional Networks',
      'Email Marketing'
    ],
    campaignIdeas: [
      {
        title: 'Home Office Setup',
        description: 'Campanha focada em soluções completas para trabalho remoto.',
        estimatedROI: '200%',
        duration: '45 dias'
      },
      {
        title: 'Student Tech',
        description: 'Descontos especiais para estudantes com ID verificado.',
        estimatedROI: '150%',
        duration: '90 dias'
      },
      {
        title: 'Gaming Evolution',
        description: 'Campanha focada no público gamer com bundles especiais.',
        estimatedROI: '280%',
        duration: '30 dias'
      }
    ]
  }
};

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Smartphone Galaxy S23',
    sku: 'SMG-S23-256-BLK',
    quantity: 45,
    minStock: 10,
    category: 'Eletrônicos',
    lastUpdated: '2024-03-15',
    marketingEnabled: true,
    productType: 'Smartphone Premium',
    targetAudience: ['Jovens Adultos', 'Profissionais']
  },
  {
    id: '2',
    name: 'Notebook Dell XPS',
    sku: 'DELL-XPS-15-SLV',
    quantity: 8,
    minStock: 5,
    category: 'Computadores',
    lastUpdated: '2024-03-14',
    marketingEnabled: true,
    productType: 'Notebook Premium',
    targetAudience: ['Profissionais', 'Criativos']
  }
];

export function Marketing() {
  const [products] = useState<Product[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter(product =>
    product.marketingEnabled &&
    (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getMarketingSuggestions = (product: Product) => {
    return marketingSuggestions[product.category as keyof typeof marketingSuggestions] || null;
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Megaphone className="w-6 h-6" />
          Marketing
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Products List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    selectedProduct?.id === product.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Marketing Suggestions */}
        <div className="lg:col-span-2">
          {selectedProduct ? (
            <div className="space-y-6">
              {/* Product Overview */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">{selectedProduct.name}</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Categoria</p>
                    <p className="font-medium">{selectedProduct.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tipo de Produto</p>
                    <p className="font-medium">{selectedProduct.productType}</p>
                  </div>
                </div>
              </div>

              {/* Marketing Analysis */}
              {getMarketingSuggestions(selectedProduct) && (
                <>
                  {/* SEO Terms */}
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Hash className="w-5 h-5 text-blue-500" />
                      <h3 className="text-lg font-semibold">Termos SEO Recomendados</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {getMarketingSuggestions(selectedProduct)?.seoTerms.map((term, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {term}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="w-5 h-5 text-green-500" />
                      <h3 className="text-lg font-semibold">Público-Alvo</h3>
                    </div>
                    <div className="space-y-4">
                      {getMarketingSuggestions(selectedProduct)?.targetAudience.map((audience, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-gray-700">{audience.age}</span>
                          <div className="flex-1 mx-4">
                            <div className="h-2 bg-gray-200 rounded-full">
                              <div
                                className="h-2 bg-green-500 rounded-full"
                                style={{ width: `${audience.percentage}%` }}
                              />
                            </div>
                          </div>
                          <span className="text-gray-700">{audience.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Marketing Channels */}
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="w-5 h-5 text-purple-500" />
                      <h3 className="text-lg font-semibold">Canais Recomendados</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {getMarketingSuggestions(selectedProduct)?.channels.map((channel, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                        >
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Campaign Ideas */}
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-orange-500" />
                      <h3 className="text-lg font-semibold">Sugestões de Campanhas</h3>
                    </div>
                    <div className="space-y-4">
                      {getMarketingSuggestions(selectedProduct)?.campaignIdeas.map((campaign, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-gray-900">{campaign.title}</h4>
                              <p className="text-sm text-gray-500 mt-1">{campaign.description}</p>
                            </div>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                              ROI: {campaign.estimatedROI}
                            </span>
                          </div>
                          <div className="mt-2 text-sm text-gray-500">
                            Duração: {campaign.duration}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center h-full">
              <div className="text-center">
                <Megaphone className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">
                  Selecione um produto para ver sugestões de marketing
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}