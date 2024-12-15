import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  FileText, 
  Briefcase, 
  Users, 
  Settings,
  X 
} from 'lucide-react';

export default function AdminSidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  
  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Produits', href: '/admin/products', icon: Package },
    { name: 'Blog', href: '/admin/blog', icon: FileText },
    { name: 'Carrières', href: '/admin/careers', icon: Briefcase },
    { name: 'Équipe', href: '/admin/team', icon: Users },
    { name: 'Paramètres', href: '/admin/settings', icon: Settings },
  ];

  return (
    <>
      {/* Overlay mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:inset-0 transition-transform duration-300
      `}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="h-16 flex items-center justify-between px-4 border-b">
            <Link to="/admin" className="text-xl font-bold text-purple-600">
              SmartLimb Admin
            </Link>
            <button 
              onClick={() => setIsOpen(false)}
              className="lg:hidden"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    flex items-center px-4 py-2 text-sm font-medium rounded-lg
                    ${isActive 
                      ? 'bg-purple-50 text-purple-600' 
                      : 'text-gray-600 hover:bg-gray-50'}
                  `}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                alt="Admin"
                className="h-8 w-8 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">Admin</p>
                <p className="text-xs text-gray-500">admin@smartlimb.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}