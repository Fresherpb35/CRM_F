'use client';
import Link from "next/link";
import { useState } from 'react';
import { FileText, Menu, Search } from 'lucide-react';
import Sidebar from '@/components/ui/sidebar';

export default function AccountingReportsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Reusable Sidebar Component */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeMenuItem="Accounting Reports"
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 shrink-0 z-30">
          <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-3 lg:py-4 gap-2">
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-1 min-w-0">
              <button 
                onClick={() => setSidebarOpen(true)} 
                className="lg:hidden text-gray-700 hover:bg-gray-100 p-2 rounded-lg transition shrink-0"
              >
                <Menu size={20} />
              </button>
              <div className="relative flex-1 max-w-md lg:max-w-lg xl:max-w-xl">
                <Search size={18} className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search clients, loans, documents..." 
                  className="w-full pl-10 lg:pl-12 pr-4 py-2 lg:py-3 bg-gray-100 rounded-lg text-sm lg:text-base text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <Link href="/dashboard/new-invoice">
              <button className="bg-purple-600 text-white px-4 sm:px-5 lg:px-6 py-2 lg:py-3 rounded-lg text-sm lg:text-base font-medium hover:bg-purple-700 transition whitespace-nowrap shrink-0">
                <span className="hidden sm:inline">+ New Invoice</span>
                <span className="sm:hidden">+ Invoice</span>
              </button>
            </Link>
          </div>
        </header>

        {/* Main Content - Scrollable */}
        <main className="flex-1 overflow-y-auto scrollbar-hide p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10">
          {/* Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">Accounting and Finance</h1>

          <div className="max-w-[1600px] mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Financial Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {financialStats.map((stat, index) => (
                <div key={index} className={`${stat.color} rounded-xl p-4 sm:p-5 lg:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow`}>
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl lg:text-4xl">{stat.icon}</span>
                    <span className={`text-xs lg:text-sm font-medium ${stat.change.startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <h2 className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 lg:mb-2 ${stat.textColor}`}>{stat.amount}</h2>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {/* Recent Invoices */}
              <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 lg:p-7 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-5 lg:mb-6">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg lg:text-xl">Recent Invoices</h3>
                  <button className="text-sm lg:text-base text-purple-600 font-medium hover:text-purple-700">VIEW ALL</button>
                </div>
                <div className="space-y-3 lg:space-y-4">
                  {recentInvoices.map((invoice, index) => (
                    <div key={index} className="flex items-center justify-between p-3 sm:p-4 lg:p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition border border-gray-100">
                      <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                          <FileText size={20} className="text-blue-600 lg:w-6 lg:h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 text-sm lg:text-base truncate">{invoice.name}</p>
                          <p className="text-xs lg:text-sm text-gray-500 truncate">{invoice.type} • {invoice.date}</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-3">
                        <p className="text-sm lg:text-base font-bold text-gray-900">{invoice.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 lg:p-7 border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-5 lg:mb-6 text-base sm:text-lg lg:text-xl">Quick Actions</h3>
                <div className="space-y-3 lg:space-y-4">
                  {quickActions.map((action, index) => (
                    <button 
                      key={index}
                      className={`w-full ${action.bg} ${action.textColor} ${action.border} py-3 lg:py-4 px-4 lg:px-5 rounded-lg font-medium text-sm lg:text-base hover:bg-gray-50 transition text-left`}
                    >
                      {action.title}
                    </button>
                  ))}
                  <div className="pt-3">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 lg:p-5">
                      <h4 className="font-semibold text-gray-900 text-sm lg:text-base mb-3 lg:mb-4">Financial KPIs</h4>
                      <div className="space-y-3 lg:space-y-4">
                        {kpiData.map((kpi, index) => (
                          <div key={index} className="flex items-center justify-between gap-3">
                            <span className="text-xs lg:text-sm text-gray-600">{kpi.label}</span>
                            <div className="flex items-center gap-3">
                              <div className="w-24 lg:w-32 xl:w-40 bg-gray-200 rounded-full h-2 overflow-hidden">
                                <div className={`${kpi.color} h-full rounded-full`} style={{width: `${kpi.percentage}%`}}></div>
                              </div>
                              <span className="text-xs lg:text-sm font-semibold text-gray-700 w-10 text-right">{kpi.percentage}%</span>
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
            <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 lg:p-7 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-5 lg:mb-6 gap-2">
                <h3 className="font-bold text-gray-900 text-base sm:text-lg lg:text-xl">Partner Commission Report</h3>
                <button className="text-xs lg:text-sm bg-gray-200 text-gray-700 px-3 lg:px-4 py-2 lg:py-2.5 rounded-lg hover:bg-gray-300 transition whitespace-nowrap font-medium">
                  <span className="hidden xs:inline">Generate </span>Report
                </button>
              </div>
              
              {/* Mobile Card View */}
              <div className="block md:hidden space-y-3">
                {partnerCommissions.map((partner, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sm text-gray-900">{partner.name}</span>
                      <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium ${partner.statusColor}`}>
                        {partner.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500">Loans:</span>
                        <span className="ml-1 font-medium text-gray-900">{partner.loansProcessed}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Commission:</span>
                        <span className="ml-1 font-semibold text-gray-900">{partner.commissionAmount}</span>
                      </div>
                    </div>
                    <button className="text-xs text-purple-600 hover:text-purple-700 font-medium mt-2">View Details →</button>
                  </div>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto -mx-6 lg:-mx-7 px-6 lg:px-7">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 lg:px-6 text-xs lg:text-sm font-semibold text-gray-600 uppercase tracking-wider">Partners Name</th>
                      <th className="text-left py-4 px-4 lg:px-6 text-xs lg:text-sm font-semibold text-gray-600 uppercase tracking-wider">Loans Processed</th>
                      <th className="text-left py-4 px-4 lg:px-6 text-xs lg:text-sm font-semibold text-gray-600 uppercase tracking-wider">Commission Amount</th>
                      <th className="text-left py-4 px-4 lg:px-6 text-xs lg:text-sm font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                      <th className="text-left py-4 px-4 lg:px-6 text-xs lg:text-sm font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {partnerCommissions.map((partner, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition">
                        <td className="py-4 lg:py-5 px-4 lg:px-6 text-sm lg:text-base text-gray-900 font-medium">{partner.name}</td>
                        <td className="py-4 lg:py-5 px-4 lg:px-6 text-sm lg:text-base text-gray-700">{partner.loansProcessed}</td>
                        <td className="py-4 lg:py-5 px-4 lg:px-6 text-sm lg:text-base text-gray-900 font-semibold">{partner.commissionAmount}</td>
                        <td className="py-4 lg:py-5 px-4 lg:px-6">
                          <span className={`inline-block px-3 py-1.5 rounded-md text-xs lg:text-sm font-medium ${partner.statusColor}`}>
                            {partner.status}
                          </span>
                        </td>
                        <td className="py-4 lg:py-5 px-4 lg:px-6">
                          <button className="text-xs lg:text-sm text-purple-600 hover:text-purple-700 font-medium">View Details</button>
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

      {/* Global CSS for hiding scrollbar */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}