'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, FileText, Menu, X } from 'lucide-react';

export default function AccountingReportsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Dashboard', active: false },
    { label: 'Leads & Pipelines', active: false },
    { label: 'Tasks', active: false },
    { label: 'Clients', active: false },
    { label: 'Accounting reports', active: true },
    { label: 'HR Analysis', active: false }
  ];

  const financialStats = [
    { label: 'Total Income (Paid)', amount: '₹45.2L', change: '+8.2%', changeType: 'up', color: 'from-blue-400 to-blue-500', icon: '💰' },
    { label: 'Total Expenses', amount: '₹9.5L', change: '+4.3%', changeType: 'up', color: 'from-green-400 to-green-500', icon: '💸' },
    { label: 'Outstanding', amount: '₹12.3L', change: '-8.2%', changeType: 'down', color: 'from-red-400 to-red-500', icon: '📊' },
    { label: 'GST Collected', amount: '₹6.8L', change: '+2.1%', changeType: 'up', color: 'from-orange-400 to-orange-500', icon: '🧾' }
  ];

  const quickActions = [
    { title: 'Generate quotation', bg: 'bg-gray-100', textColor: 'text-gray-800' },
    { title: 'Approve', bg: 'bg-gray-100', textColor: 'text-gray-800' },
    { title: 'GST Summary', bg: 'bg-gray-100', textColor: 'text-gray-800' },
    { title: 'Reconciliation', bg: 'bg-gray-100', textColor: 'text-gray-800' }
  ];

  const recentInvoices = [
    { name: 'Rakesh Kumar', type: 'Loan Processing', date: '15 Apr 2025', amount: '₹45,000', status: 'paid' },
    { name: 'Priya Sharma', type: 'Consulting', date: '18 Apr 2025', amount: '₹32,000', status: 'paid' },
    { name: 'Amit Patel', type: 'Loan Processing', date: '16 May 2025', amount: '₹28,500', status: 'pending' },
    { name: 'Neha Singh', type: 'Documentation', date: '17 May 2025', amount: '₹15,000', status: 'paid' },
    { name: 'Nikhil Srivastav', type: 'Consulting', date: '21 May 2025', amount: '₹52,000', status: 'paid' }
  ];

  const kpiData = [
    { label: 'Revenue', percentage: 85, color: 'from-green-400 to-green-500' },
    { label: 'Profit Margin', percentage: 72, color: 'from-blue-400 to-blue-500' },
    { label: 'Expenses', percentage: 45, color: 'from-orange-400 to-orange-500' },
    { label: 'Cash Flow', percentage: 90, color: 'from-purple-400 to-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Side Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 sm:w-72 md:w-80 bg-linear-to-b  from-purple-950 to-purple-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="p-4 sm:p-6 border-b border-purple-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-white">Meerut<br/>Skills_</h2>
              <button onClick={() => setMenuOpen(false)} className="text-white hover:text-gray-300">
                <X size={24} />
              </button>
            </div>
          </div>
          
          {/* Menu Items */}
       <a href="/dashboard" className="flex items-center px-6 py-3 text-white bg-purple-700 border-l-4 border-cyan-400">
            <span>Dashboard</span>
          </a>
          <a href="/dashboard/lead-pipelines" className="flex items-center px-6 py-3 text-white hover:bg-purple-700/50 border-l-4 border-transparent hover:border-cyan-400 transition-all">
            <span>Leads & Pipelines</span>
          </a>
         <a href="/dashboard/tasks" className="flex items-center px-6 py-3 text-white hover:bg-purple-700/50 border-l-4 border-transparent hover:border-cyan-400 transition-all">
  <span>Tasks</span>
</a>

          <a href="/dashboard/clients" className="flex items-center px-6 py-3 text-white hover:bg-purple-700/50 border-l-4 border-transparent hover:border-cyan-400 transition-all">
            <span>Clients</span>
          </a>
          <a href="/dashboard/hr-analysis" className="flex items-center px-6 py-3 text-white hover:bg-purple-700/50 border-l-4 border-transparent hover:border-cyan-400 transition-all">
            <span>Accounting reports</span>
          </a>
          <a href="/dashboard/accounting-reports" className="flex items-center px-6 py-3 text-white hover:bg-purple-700/50 border-l-4 border-transparent hover:border-cyan-400 transition-all">
            <span>HR Analysis</span>
          </a>


          {/* Settings at Bottom */}
          <div className="border-t border-purple-700">
            <button className="w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-300 hover:bg-purple-800 hover:text-white transition">
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Header */}
      <div className="bg-purple-900 p-3 sm:p-4 flex items-center justify-between sticky top-0 z-30">
        <button onClick={() => setMenuOpen(true)}>
          <Menu size={24} className="text-white cursor-pointer" />
        </button>
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white">
          <img 
src="/images/user.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="p-3 sm:p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Accounting<br/>Reports</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Financial Stats */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {financialStats.map((stat, index) => (
                <div key={index} className={`bg-linear-to-br ${stat.color} rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white shadow-lg`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl sm:text-2xl">{stat.icon}</span>
                    {stat.changeType === 'up' ? (
                      <TrendingUp size={16} className="opacity-80 sm:w-5 sm:h-5" />
                    ) : (
                      <TrendingDown size={16} className="opacity-80 sm:w-5 sm:h-5" />
                    )}
                  </div>
                  <h2 className="text-lg sm:text-2xl font-bold mb-1">{stat.amount}</h2>
                  <p className="text-xs opacity-90 mb-1">{stat.label}</p>
                  <p className="text-xs opacity-80">{stat.change}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 lg:col-span-2">
            <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {quickActions.map((action, index) => (
                <button 
                  key={index}
                  className={`${action.bg} ${action.textColor} py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm hover:shadow-md transition`}
                >
                  {action.title}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Invoices */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 lg:col-span-2">
            <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">Recent Invoices</h3>
            <div className="space-y-2 sm:space-y-3">
              {recentInvoices.map((invoice, index) => (
                <div key={index} className="flex items-start justify-between p-3 sm:p-4 bg-linear-to-r from-blue-50 to-purple-50 rounded-lg sm:rounded-xl hover:shadow-md transition border border-purple-100">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 text-xs sm:text-sm mb-1 truncate">{invoice.name}</p>
                    <p className="text-xs text-gray-500">{invoice.type}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{invoice.date}</p>
                    <p className="text-xs sm:text-sm font-bold text-gray-800 mt-1.5 sm:mt-2">{invoice.amount}</p>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shrink-0 ml-3 shadow-md">
                    <FileText size={16} className="text-white sm:w-5 sm:h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Financial KPIs */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 lg:col-span-2">
            <h3 className="font-bold text-gray-900 mb-4 sm:mb-5 text-sm sm:text-base md:text-lg">Financial KPIs</h3>
            <div className="space-y-4 sm:space-y-5">
              {kpiData.map((kpi, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm text-gray-600 font-medium">{kpi.label}</span>
                    <span className="text-xs sm:text-sm font-bold text-gray-800">{kpi.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 sm:h-3 overflow-hidden">
                    <div 
                      className={`bg-linear-to-r ${kpi.color} h-full rounded-full transition-all duration-500 shadow-sm`} 
                      style={{width: `${kpi.percentage}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Month Selector */}
          <div className="lg:col-span-2 flex items-center justify-center gap-2 py-2">
            <div className="w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400 transition cursor-pointer"></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full shadow-md"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400 transition cursor-pointer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}