"use client"
import React from 'react';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Sidebar({ sidebarOpen, setSidebarOpen, activeMenuItem = 'Dashboard' }) {
  const router = useRouter();

  const handleProfileClick = () => {
    router.push('/dashboard/profile');
  };

  const handleSettingsClick = () => {
    router.push('/dashboard/settings');
  };

  const menuItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Leads & Pipelines', href: '/dashboard/lead-pipelines' },
    { label: 'Tasks', href: '/dashboard/tasks' },
    { label: 'Clients', href: '/dashboard/clients' },
    { label: 'Accounting Reports', href: '/dashboard/accounting-reports' },
    { label: 'HR Analytics', href: '/dashboard/hr-analysis' },
    { label: 'Chat Support', href: '/dashboard/chat-support' }
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-linear-to-b from-purple-900 via-purple-800 to-purple-900 transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out shadow-2xl lg:relative overflow-y-auto scrollbar-hide`}>

        {/* Profile Section */}
        <div className="flex items-center justify-between p-4 lg:p-6">
          <div onClick={handleProfileClick}
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
            
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img src="/images/user.png" alt="User" className="w-full h-full object-cover" />
            </div>

            <p className="text-white font-semibold text-base">
              Welcome, User!
            </p>
          </div>

          <button 
            onClick={() => setSidebarOpen(false)} 
            className="text-white hover:bg-purple-800 p-2 rounded-lg transition lg:hidden"
          >
            <X size={22} />
          </button>
        </div>
        
        {/* Menu */}
        <nav className="py-2 pb-24">
          {menuItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href}
              className={`flex items-center px-6 py-4 transition-all text-base ${
                item.label === activeMenuItem
                  ? 'text-white bg-purple-700/50 border-l-4 border-white font-semibold'
                  : 'text-white/70 hover:text-white hover:bg-purple-700/30 border-l-4 border-transparent'
              }`}
            >
              {item.label}
            </a>
          ))}
          
          {/* Settings */}
          <div className="absolute bottom-4 left-0 right-0 px-6">
            <button 
              onClick={handleSettingsClick}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-all w-full text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0..." />
              </svg>
              <span>Settings</span>
            </button>
          </div>
        </nav>

        {/* Scrollbar Hide */}
        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

      </div>
    </>
  );
}
