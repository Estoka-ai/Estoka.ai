import React from 'react';
import { LayoutDashboard, Package, ShoppingCart, Truck as TruckDelivery, BarChart, Settings, Bot, Link2, Users, Megaphone, Sun, Moon } from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Package, label: 'Estoque', path: '/inventory' },
  { icon: ShoppingCart, label: 'Pedidos', path: '/orders' },
  { icon: Users, label: 'Clientes', path: '/customers' },
  { icon: TruckDelivery, label: 'Logística', path: '/logistics' },
  { icon: Bot, label: 'Assistente IA', path: '/ai-assistant' },
  { icon: Link2, label: 'Integrações', path: '/integrations' },
  { icon: Megaphone, label: 'Marketing', path: '/marketing' },
  { icon: BarChart, label: 'Relatórios', path: '/reports' },
  { icon: Settings, label: 'Configurações', path: '/settings' },
];

interface SidebarProps {
  onNavigate: (path: string) => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="w-64 bg-white dark:bg-gray-800 h-screen shadow-lg">
      <div className="p-6 flex justify-between items-center">
        <img 
          src="https://cdn.shopify.com/s/files/1/0897/0112/2411/files/logoo.png?v=1740095444" 
          alt="Estoka.AI Logo" 
          className="h-8 w-24 object-contain"
        />
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-primary-light dark:hover:bg-primary-dark"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <a
            key={item.path}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate(item.path);
            }}
            className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-primary-lighter hover:text-primary-dark dark:hover:bg-primary-darker dark:hover:text-primary-light transition-colors"
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span className="font-medium">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}