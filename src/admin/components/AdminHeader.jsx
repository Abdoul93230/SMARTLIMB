import { Menu, Bell, Search } from 'lucide-react';

export default function AdminHeader({ onMenuClick }) {
  return (
    <header className="h-16 bg-white shadow-sm">
      <div className="h-full px-4 flex items-center justify-between">
        <button 
          onClick={onMenuClick}
          className="lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Search */}
        <div className="flex-1 max-w-lg mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="relative">
            <Bell className="h-6 w-6 text-gray-500" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
          </button>
        </div>
      </div>
    </header>
  );
}