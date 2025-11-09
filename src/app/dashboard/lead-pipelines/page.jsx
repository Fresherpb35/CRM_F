"use client"
import React, { useState } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

export default function LeadsAndPipelines() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const leads = [
    {
      name: "Rakesh Kumar",
      date: "March 31",
      company: "Meerut Furnishing Company",
      initials: "RK",
      status: "hot",
      value: "₹45,000",
      color: "bg-purple-900"
    },
    {
      name: "Priya Sharma",
      date: "March 30",
      company: "Modern Home Decor",
      initials: "PS",
      status: "warm",
      value: "₹32,000",
      color: "bg-purple-900"
    },
    {
      name: "Amit Patel",
      date: "March 29",
      company: "Elite Interiors",
      initials: "AP",
      status: "hot",
      value: "₹58,000",
      color: "bg-purple-900"
    },
    {
      name: "Neha Khanna",
      date: "March 28",
      company: "Luxury Living Spaces",
      initials: "NK",
      status: "cold",
      value: "₹22,000",
      color: "bg-pink-200"
    }
  ];

  return (
    <div className="flex min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Overlay for mobile/tablet */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Only shows when hamburger is clicked */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-linear-to-b from-purple-900 to-purple-800 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out overflow-y-auto shadow-2xl`}>
        <div className="flex items-center justify-between p-4 bg-purple-950">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold text-lg">Meerut Skills_</span>
          </div>
          <button 
            onClick={() => setSidebarOpen(false)} 
            className="text-white hover:bg-purple-800 p-2 rounded-lg transition"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="py-4 pb-20">
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
          
          {/* Settings at bottom */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-purple-700">
            <a href="#" className="flex items-center px-6 py-3 text-white hover:bg-purple-700/50 border-l-4 border-transparent hover:border-cyan-400 transition-all">
              <span>Settings</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Main Content - Full width now */}
      <div className="flex-1 w-full">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-30 border-b border-gray-200">
          <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 md:py-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <button 
                onClick={() => setSidebarOpen(true)} 
                className="hover:bg-gray-100 p-2 rounded-lg transition"
              >
                <Menu size={24} className="text-gray-700" />
              </button>
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Leads & Pipelines</h1>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5 hidden sm:block">Manage your sales pipeline efficiently</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
             
             <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full overflow-hidden cursor-pointer hover:ring-4 hover:ring-purple-200 transition shadow-md bg-purple-900">
  <img 
    src="/images/user.png" 
    alt="User" 
    className="w-full h-full object-cover"
  />
</div>

            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {/* Conversion Rate Card */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-shadow p-4 sm:p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg md:text-xl">Conversion Rate</h3>
                  <div className="flex items-center gap-2 sm:gap-4 text-xs">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-500"></div>
                      <span className="text-gray-600">2024</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-400"></div>
                      <span className="text-gray-600">2023</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-5">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="text-xs font-semibold text-gray-500 w-8 sm:w-12 text-right">100%</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-6 sm:h-8 overflow-hidden shadow-inner relative">
                      <div className="absolute inset-0 g-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-full transition-all duration-500 hover:shadow-lg" style={{width: '82%'}}></div>
                    </div>
                    <span className="text-xs font-semibold text-gray-700 w-8 sm:w-12">82%</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="text-xs font-semibold text-gray-500 w-8 sm:w-12 text-right">75%</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-6 sm:h-8 overflow-hidden shadow-inner relative">
                      <div className="absolute inset-0 g-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full transition-all duration-500 hover:shadow-lg" style={{width: '68%'}}></div>
                    </div>
                    <span className="text-xs font-semibold text-gray-700 w-8 sm:w-12">68%</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="text-xs font-semibold text-gray-500 w-8 sm:w-12 text-right">50%</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-6 sm:h-8 overflow-hidden shadow-inner relative">
                      <div className="absolute inset-0 g-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 rounded-full transition-all duration-500 hover:shadow-lg" style={{width: '45%'}}></div>
                    </div>
                    <span className="text-xs font-semibold text-gray-700 w-8 sm:w-12">45%</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="text-xs font-semibold text-gray-500 w-8 sm:w-12 text-right">25%</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-6 sm:h-8 shadow-inner"></div>
                    <span className="text-xs font-semibold text-gray-400 w-8 sm:w-12">0%</span>
                  </div>
                </div>
              </div>

              {/* Lead Lifetime Value Analysis */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-shadow p-4 sm:p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-base sm:text-lg md:text-xl mb-4 sm:mb-6">Lead Lifetime Value Analysis</h3>
                <div className="relative h-48 sm:h-64">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-6 sm:bottom-8 flex flex-col justify-between text-xs font-medium text-gray-400 pr-2 sm:pr-3">
                    <span>40</span>
                    <span>30</span>
                    <span>20</span>
                    <span>10</span>
                    <span>0</span>
                  </div>
                  
                  {/* Chart container */}
                  <div className="ml-6 sm:ml-10 h-full pb-6 sm:pb-8">
                    <svg className="w-full h-full" viewBox="0 0 300 180" preserveAspectRatio="none">
                      {/* Grid lines */}
                      <line x1="0" y1="0" x2="300" y2="0" stroke="#f3f4f6" strokeWidth="1" />
                      <line x1="0" y1="45" x2="300" y2="45" stroke="#f3f4f6" strokeWidth="1" />
                      <line x1="0" y1="90" x2="300" y2="90" stroke="#f3f4f6" strokeWidth="1" />
                      <line x1="0" y1="135" x2="300" y2="135" stroke="#f3f4f6" strokeWidth="1" />
                      <line x1="0" y1="180" x2="300" y2="180" stroke="#f3f4f6" strokeWidth="1" />
                      
                      {/* Gradient definitions */}
                      <defs>
                        <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#e9d5ff" stopOpacity="0.7"/>
                          <stop offset="100%" stopColor="#e9d5ff" stopOpacity="0.05"/>
                        </linearGradient>
                        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.6"/>
                          <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.05"/>
                        </linearGradient>
                      </defs>
                      
                      {/* Purple area fill */}
                      <polygon
                        points="0,100 50,55 100,75 150,38 200,65 250,48 300,58 300,180 0,180"
                        fill="url(#purpleGrad)"
                      />
                      
                      {/* Blue area fill */}
                      <polygon
                        points="0,120 50,88 100,102 150,78 200,92 250,82 300,88 300,180 0,180"
                        fill="url(#blueGrad)"
                      />
                      
                      {/* Purple line */}
                      <polyline
                        points="0,100 50,55 100,75 150,38 200,65 250,48 300,58"
                        fill="none"
                        stroke="#9333ea"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                      />
                      
                      {/* Blue line */}
                      <polyline
                        points="0,120 50,88 100,102 150,78 200,92 250,82 300,88"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                      />
                      
                      {/* Pink line */}
                      <polyline
                        points="0,135 50,125 100,130 150,115 200,122 250,118 300,120"
                        fill="none"
                        stroke="#ec4899"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                      />
                      
                      {/* Yellow highlight bar */}
                      <rect x="265" y="0" width="35" height="180" fill="#fbbf24" opacity="0.2" rx="4" />
                    </svg>
                  </div>
                  
                  {/* X-axis labels */}
                  <div className="ml-6 sm:ml-10 flex justify-between text-xs font-medium text-gray-400 mt-2">
                    <span className="text-[10px] sm:text-xs">Jan 2023</span>
                    <span className="text-[10px] sm:text-xs">Jun 2023</span>
                    <span className="text-[10px] sm:text-xs">Jan 2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-4 sm:space-y-6">
              {/* Recent Leads */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-shadow p-4 sm:p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg">Recent Leads</h3>
                  <div className="flex gap-1">
                    <button 
                      onClick={() => setActiveTab('all')}
                      className={`px-2 sm:px-3 py-1 text-xs rounded-lg transition ${activeTab === 'all' ? 'bg-purple-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      All
                    </button>
                    <button 
                      onClick={() => setActiveTab('hot')}
                      className={`px-2 sm:px-3 py-1 text-xs rounded-lg transition ${activeTab === 'hot' ? 'bg-purple-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      Hot
                    </button>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {leads.map((lead, index) => (
                    <div key={index} className="group flex items-center justify-between py-2 sm:py-3 px-2 sm:px-3 rounded-xl hover:bg-gray-50 transition-all cursor-pointer border border-transparent hover:border-gray-200">
                      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 ${lead.color} rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                          <span className="text-white font-bold text-xs sm:text-sm">{lead.initials}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 text-xs sm:text-sm">{lead.name}</p>
                          <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">{lead.date}</p>
                          <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 truncate">{lead.company}</p>
                        </div>
                      </div>
                      <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-purple-600 hover:bg-purple-50 transition-all shrink-0 ml-2 sm:ml-3 group-hover:scale-110">
                        <ArrowRight size={14} className="text-gray-600 group-hover:text-purple-600 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 sm:mt-5 text-center text-xs sm:text-sm text-purple-900 font-semibold hover:text-purple-700 transition py-2 hover:bg-purple-50 rounded-lg">
                  View All Leads →
                </button>
              </div>

              {/* WhatsApp Integration */}
              <div className="bg-linear-to-br from-green-500 via-green-600 to-green-700 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 text-white hover:shadow-2xl transition-all hover:scale-105">
                <div className="flex items-start justify-between mb-4 sm:mb-5">
                  <h3 className="font-bold text-base sm:text-lg">WhatsApp Integration</h3>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 shadow-lg">
                    <MessageCircle size={18} strokeWidth={2.5} className="sm:w-[22px] sm:h-[22px]" />
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 hover:bg-white/20 transition">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base sm:text-lg">✓</span>
                      <p className="text-xs sm:text-sm font-semibold">Customer Responses</p>
                    </div>
                    <p className="text-[10px] sm:text-xs opacity-90 ml-6 sm:ml-7">12 unread messages</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 hover:bg-white/20 transition">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base sm:text-lg">✓</span>
                      <p className="text-xs sm:text-sm font-semibold">Automated Messages</p>
                    </div>
                    <p className="text-[10px] sm:text-xs opacity-90 ml-6 sm:ml-7">5 campaigns active</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 hover:bg-white/20 transition">
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-lg">✓</span>
                      <p className="text-xs sm:text-sm font-semibold">Messages sent</p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-white text-green-600 font-bold py-2.5 sm:py-3.5 rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base">
                  Open WhatsApp
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}