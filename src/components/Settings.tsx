import React from 'react';
import { Settings as SettingsIcon, User, Bell, Lock, Globe, CreditCard, HelpCircle } from 'lucide-react';

const settingsSections = [
  {
    icon: User,
    title: 'Perfil',
    description: 'Atualize suas informações pessoais e preferências'
  },
  {
    icon: Bell,
    title: 'Notificações',
    description: 'Configure suas preferências de notificação'
  },
  {
    icon: Lock,
    title: 'Segurança',
    description: 'Gerencie senha e configurações de segurança'
  },
  {
    icon: Globe,
    title: 'Idioma e Região',
    description: 'Defina seu idioma e fuso horário'
  },
  {
    icon: CreditCard,
    title: 'Faturamento',
    description: 'Gerencie métodos de pagamento e assinatura'
  },
  {
    icon: HelpCircle,
    title: 'Ajuda e Suporte',
    description: 'Entre em contato com nossa equipe de suporte'
  }
];

export function Settings() {
  return (
    <div className="p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <SettingsIcon className="w-6 h-6" />
          Configurações
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsSections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.title} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-100">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                  <p className="text-gray-500 mt-1">{section.description}</p>
                  <button className="mt-4 text-blue-600 font-medium hover:text-blue-700">
                    Configurar
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}