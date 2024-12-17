import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex">
    {/* Sidebar */}
    <AdminSidebar
      isOpen={sidebarOpen}
      setIsOpen={setSidebarOpen}
      className="fixed lg:static top-0 left-0 h-full w-64 bg-white border-r lg:border-0"

    />

    {/* Main Content */}
    <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : ""}`}>
      {/* Header */}
      <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

      {/* Main Section */}
      <main className="p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  </div>

  );
}
