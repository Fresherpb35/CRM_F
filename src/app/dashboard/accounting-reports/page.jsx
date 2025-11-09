'use client';

import { useState } from 'react';
import { FileText, Menu, X, Search } from 'lucide-react';

export default function AccountingReportsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Dashboard', href: '/dashboard', active: false },
    { label: 'Leads & Pipelines', href: '/dashboard/lead-pipelines', active: false },
    { label: 'Tasks', href: '/dashboard/tasks', active: false },
    { label: 'Clients', href: '/dashboard/clients', active: false },
    { label: 'Accounting Reports', href: '/dashboard/accounting-reports', active: true },
    { label: 'HR Analytics', href: '/dashboard/hr-analysis', active: false }
  ];

  const financialStats = [
    { label: 'Total revenue', amount: '₹45.5L', change: '+8.2%', color: 'bg-green-50', textColor: 'text-green-600', icon: '💰' },
    { label: 'Commission Paid', amount: '₹8.5L', change: '+4.3%', color: 'bg-blue-50', textColor: 'text-blue-600', icon: '💳' },
    { label: 'Outstanding', amount: '₹10.3L', change: '-8.2%', color: 'bg-red-50', textColor: 'text-red-600', icon: '⏱️' },
    { label: 'GST Collected', amount: '₹6.8L', change: '+2.1%', color: 'bg-orange-50', textColor: 'text-orange-600', icon: '🧾' }
  ];

  const quickActions = [
    { title: 'Generate Quotation', bg: 'bg-white', textColor: 'text-gray-700', border: 'border border-gray-200' },
    { title: 'Export Report', bg: 'bg-white', textColor: 'text-gray-700', border: 'border border-gray-200' },
    { title: 'GST Summary', bg: 'bg-white', textColor: 'text-gray-700', border: 'border border-gray-200' },
    { title: 'Reconciliation', bg: 'bg-white', textColor: 'text-gray-700', border: 'border border-gray-200' }
  ];

  const recentInvoices = [
    { name: 'Rakesh Kumar', type: 'Loan Processing', date: '16 Apr 2025', amount: '₹2.5L', status: 'paid' },
    { name: 'Priya Sharma', type: 'Consultancy', date: '16 Apr 2025', amount: '₹1.8L', status: 'paid' },
    { name: 'Amit Patel', type: 'Loan Processing', date: '16 May 2025', amount: '₹3.3L', status: 'pending' },
    { name: 'Neha Singh', type: 'Loan Processing', date: '17 May 2025', amount: '₹55k', status: 'paid' },
    { name: 'Nikhil Srivastav', type: 'Consultancy', date: '21 May 2025', amount: '₹2L', status: 'paid' }
  ];

  const kpiData = [
    { label: 'Revenue', percentage: 85, color: 'bg-green-500' },
    { label: 'Profit Margin', percentage: 72, color: 'bg-green-500' },
    { label: 'Expenses', percentage: 45, color: 'bg-green-500' }
  ];

  const partnerCommissions = [
    { name: 'PARTNER A', loansProcessed: 18, commissionAmount: '₹2.8L', status: 'Paid', statusColor: 'text-green-600 bg-green-50' },
    { name: 'PARTNER B', loansProcessed: 25, commissionAmount: '₹3.6L', status: 'Pending', statusColor: 'text-orange-600 bg-orange-50' },
    { name: 'PARTNER C', loansProcessed: 16, commissionAmount: '₹2.1L', status: 'Paid', statusColor: 'text-green-600 bg-green-50' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-linear-to-b from-purple-950 to-purple-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${menuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="p-4 sm:p-6 border-b border-purple-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                <img 
                  src="/images/user.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Welcome, User!</p>
              </div>
            </div>
          </div>
          
          {/* Menu Items */}
          <nav className="flex-1 py-2">
            {menuItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className={`flex items-center px-6 py-3 text-sm transition-all ${
                  item.active
                    ? 'bg-purple-700 text-white font-medium border-l-4 border-cyan-400'
                    : 'text-gray-300 hover:bg-purple-700/50 hover:text-white border-l-4 border-transparent hover:border-cyan-400'
                }`}
              >
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Settings at Bottom */}
          <div className="border-t border-purple-700">
            <button className="w-full flex items-center justify-center px-6 py-4 text-white hover:bg-purple-800 transition">
              <span className="text-2xl">⚙️</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3 flex-1">
              <button onClick={() => setMenuOpen(true)} className="lg:hidden text-gray-700">
                <Menu size={24} />
              </button>
              <div className="relative flex-1 max-w-md">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search clients, loans, documents..." 
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <button className="ml-3 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition whitespace-nowrap">
              + New Invoice
            </button>
          </div>
        </header>

        <main className="p-4 md:p-6 lg:p-8">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Accounting and Finance</h1>

          <div className="max-w-7xl mx-auto space-y-6">
            {/* Financial Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {financialStats.map((stat, index) => (
                <div key={index} className={`${stat.color} rounded-xl p-4 shadow-sm border border-gray-100`}>
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{stat.icon}</span>
                    <span className={`text-xs font-medium ${stat.changeType === 'down' ? 'text-red-600' : 'text-green-600'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <h2 className={`text-xl sm:text-2xl font-bold mb-1 ${stat.textColor}`}>{stat.amount}</h2>
                  <p className="text-xs text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Invoices */}
              <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900 text-base md:text-lg">Recent Invoices</h3>
                  <button className="text-xs sm:text-sm text-purple-600 font-medium hover:text-purple-700">VIEW ALL</button>
                </div>
                <div className="space-y-3">
                  {recentInvoices.map((invoice, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition border border-gray-100">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                          <FileText size={18} className="text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 text-sm truncate">{invoice.name}</p>
                          <p className="text-xs text-gray-500">{invoice.type} • {invoice.date}</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-3">
                        <p className="text-sm font-bold text-gray-900">{invoice.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-base md:text-lg">Quick Actions</h3>
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <button 
                      key={index}
                      className={`w-full ${action.bg} ${action.textColor} ${action.border} py-3 px-4 rounded-lg font-medium text-sm hover:bg-gray-50 transition text-left`}
                    >
                      {action.title}
                    </button>
                  ))}
                  <div className="pt-2">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 text-sm mb-3">Financial KPIs</h4>
                      <div className="space-y-3">
                        {kpiData.map((kpi, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-xs text-gray-600">{kpi.label}</span>
                            <div className="flex items-center gap-2">
                              <div className="w-20 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                                <div className={`${kpi.color} h-full rounded-full`} style={{width: `${kpi.percentage}%`}}></div>
                              </div>
                              <span className="text-xs font-semibold text-gray-700 w-8 text-right">{kpi.percentage}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Commission Report */}
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 text-base md:text-lg">Partner Commission Report</h3>
                <button className="text-xs bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-300 transition">
                  <span className="hidden sm:inline">Generate</span> report
                </button>
              </div>
              <div className="overflow-x-auto -mx-5 px-5">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Partners Name</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Loans Processed</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Commission Amount</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Status</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {partnerCommissions.map((partner, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-900 font-medium">{partner.name}</td>
                        <td className="py-3 px-4 text-sm text-gray-700">{partner.loansProcessed}</td>
                        <td className="py-3 px-4 text-sm text-gray-900 font-semibold">{partner.commissionAmount}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium ${partner.statusColor}`}>
                            {partner.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <button className="text-xs text-purple-600 hover:text-purple-700 font-medium">View Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}