import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Inventory } from './components/Inventory';
import { Orders } from './components/Orders';
import { Logistics } from './components/Logistics';
import { Reports } from './components/Reports';
import { Settings } from './components/Settings';
import { AIAssistant } from './components/AIAssistant';
import { Integrations } from './components/Integrations';
import { Customers } from './components/Customers';
import { Marketing } from './components/Marketing';
import { Financas } from './components/Financial';

function App() {
  const [currentPage, setCurrentPage] = useState('/');

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <Dashboard />;
      case '/inventory':
        return <Inventory />;
      case '/orders':
        return <Orders />;
      case '/logistics':
        return <Logistics />;
      case '/ai-assistant':
        return <AIAssistant />;
      case '/integrations':
        return <Integrations />;
      case '/reports':
        return <Reports />;
      case '/settings':
        return <Settings />;
      case '/customers':
        return <Customers />;
      case '/marketing':
        return <Marketing />;
      case '/financas':
        return <Financas />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar onNavigate={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;
