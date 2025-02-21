import React from 'react';
import { Bell, Search, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 h-16 px-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center flex-1">
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-500 w-5 h-5" />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary-light">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 h-4 w-4 bg-primary rounded-full text-xs text-white flex items-center justify-center">
            3
          </span>
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary-lighter dark:bg-primary-darker rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-primary-dark dark:text-primary-light" />
          </div>
          <span className="text-sm font-medium text-gray-900 dark:text-white">Admin</span>
        </div>
      </div>
    </header>
  );
}