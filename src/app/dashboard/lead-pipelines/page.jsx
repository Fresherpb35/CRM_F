"use client"
import React, { useState } from 'react';
import { Menu, X, MessageCircle, Phone, Mail } from 'lucide-react';

export default function LeadsAndPipelines() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const leads = [
    {
      name: "Rakesh Kumar",
      date: "June 15",
      company: "Tech Solutions",
      initials: "RK",
      status: "hot",
      stage: "Verified",
      color: "bg-purple-600"
    },
    {
      name: "Priya Sharma",
      date: "June 14",
      company: "Global Ventures",
      initials: "PS",
      status: "warm",
      stage: "Contacted",
      color: "bg-purple-600"
    },
    {
      name: "Amit Patel",
      date: "June 13",
      company: "New Services",
      initials: "AP",
      status: "hot",
      stage: "Email Sent",
      color: "bg-purple-600"
    },
    {
      name: "Neha Khanna",
      date: "June 12",
      company: "Prime Industries",
      initials: "NK",
      status: "cold",
      stage: "Follow-up",
      color: "bg-purple-600"
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-linear-to-b from-purple-900 via-purple-800 to-purple-900 transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out overflow-y-auto shadow-2xl lg:relative`}>
        <div className="flex items-center justify-between p-4 lg:p-6">
          <div className="flex items-center gap-3">
           <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
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
          <button 
            onClick={() => setSidebarOpen(false)} 
            className="text-white hover:bg-purple-800 p-2 rounded-lg transition lg:hidden"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="py-2 pb-20">
          <a href="/dashboard" className="flex items-center px-6 py-3.5 text-white/70 hover:text-white hover:bg-purple-700/30 transition-all">
            <span className="text-sm">Dashboard</span>
          </a>
          <a href="/dashboard/lead-pipelines" className="flex items-center px-6 py-3.5 text-white bg-purple-700/50 border-l-4 border-white transition-all">
            <span className="text-sm font-medium">Leads & Pipelines</span>
          </a>
          <a href="/dashboard/tasks" className="flex items-center px-6 py-3.5 text-white/70 hover:text-white hover:bg-purple-700/30 transition-all">
            <span className="text-sm">Tasks</span>
          </a>
          <a href="/dashboard/clients" className="flex items-center px-6 py-3.5 text-white/70 hover:text-white hover:bg-purple-700/30 transition-all">
            <span className="text-sm">Clients</span>
          </a>
          <a href="/dashboard/accounting-reports" className="flex items-center px-6 py-3.5 text-white/70 hover:text-white hover:bg-purple-700/30 transition-all">
            <span className="text-sm">Accounting Reports</span>
          </a>
          <a href="/dashboard/hr-analysis" className="flex items-center px-6 py-3.5 text-white/70 hover:text-white hover:bg-purple-700/30 transition-all">
            <span className="text-sm">HR Analytics</span>
          </a>
          
          <div className="absolute bottom-4 left-0 right-0 px-6">
            <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">Settings</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-30 border-b border-gray-200">
          <div className="flex items-center justify-between px-4 md:px-6 py-4">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSidebarOpen(true)} 
                className="hover:bg-gray-100 p-2 rounded-lg transition lg:hidden"
              >
                <Menu size={24} className="text-gray-700" />
              </button>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">Leads and Pipelines</h1>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-6 space-y-6">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Left Column - 2/3 width on xl screens */}
            <div className="xl:col-span-2 space-y-6">
              {/* Conversion Funnel */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-6">Conversion funnel</h3>
                <div className="flex items-center justify-center py-8">
                  <svg viewBox="0 0 300 400" className="w-full max-w-md">
                    <g>
                      <path d="M 50 40 L 250 40 L 230 100 L 70 100 Z" fill="#7c3aed" />
                      <text x="150" y="60" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Verified (2500)</text>
                      <text x="150" y="80" textAnchor="middle" fill="white" fontSize="10" opacity="0.9">100% of Total</text>
                      
                      <path d="M 70 100 L 230 100 L 210 160 L 90 160 Z" fill="#6d28d9" />
                      <text x="150" y="120" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">HQL</text>
                      <text x="150" y="140" textAnchor="middle" fill="white" fontSize="10" opacity="0.9">72% of Total</text>
                      
                      <path d="M 90 160 L 210 160 L 190 220 L 110 220 Z" fill="#5b21b6" />
                      <text x="150" y="180" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Under Review</text>
                      <text x="150" y="200" textAnchor="middle" fill="white" fontSize="10" opacity="0.9">60% of Total</text>
                      
                      <path d="M 110 220 L 190 220 L 170 280 L 130 280 Z" fill="#4c1d95" />
                      <text x="150" y="240" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Proposal Sent</text>
                      <text x="150" y="260" textAnchor="middle" fill="white" fontSize="10" opacity="0.9">36% of Total</text>
                      
                      <path d="M 130 280 L 170 280 L 150 340 Z" fill="#3b0764" />
                      <text x="150" y="300" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Contacted</text>
                      <text x="150" y="320" textAnchor="middle" fill="white" fontSize="10" opacity="0.9">18% of Total</text>
                    </g>
                  </svg>
                </div>
              </div>

              {/* Lead Lifetime Value Analysis */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-6">Lead Lifetime Value Analysis</h3>
                <div className="relative h-64">
                  <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-400 pr-3">
                    <span>100</span>
                    <span>75</span>
                    <span>50</span>
                    <span>25</span>
                    <span>0</span>
                  </div>
                  
                  <div className="ml-8 h-full pb-8">
                    <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                      <line x1="0" y1="0" x2="500" y2="0" stroke="#f3f4f6" strokeWidth="1" />
                      <line x1="0" y1="50" x2="500" y2="50" stroke="#f3f4f6" strokeWidth="1" />
                      <line x1="0" y1="100" x2="500" y2="100" stroke="#f3f4f6" strokeWidth="1" />
                      <line x1="0" y1="150" x2="500" y2="150" stroke="#f3f4f6" strokeWidth="1" />
                      <line x1="0" y1="200" x2="500" y2="200" stroke="#f3f4f6" strokeWidth="1" />
                      
                      <defs>
                        <linearlinear id="purpleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.6"/>
                          <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.05"/>
                        </linearlinear>
                        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.5"/>
                          <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.05"/>
                        </linearGradient>
                      </defs>
                      
                      <polygon points="0,120 70,80 140,100 210,60 280,85 350,70 420,80 490,75 490,200 0,200" fill="url(#purpleGrad)" />
                      <polygon points="0,140 70,110 140,125 210,95 280,115 350,105 420,110 490,108 490,200 0,200" fill="url(#blueGrad)" />
                      
                      <polyline points="0,120 70,80 140,100 210,60 280,85 350,70 420,80 490,75" fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <polyline points="0,140 70,110 140,125 210,95 280,115 350,105 420,110 490,108" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      
                      <rect x="460" y="0" width="40" height="200" fill="#fbbf24" opacity="0.15" />
                    </svg>
                  </div>
                  
                  <div className="ml-8 flex justify-between text-xs text-gray-400 mt-2">
                    <span>Jul 2022</span>
                    <span>Jul 2023</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - 1/3 width on xl screens */}
            <div className="space-y-6">
              {/* Conversion by Source */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-gray-900 text-lg">Conversion by source</h3>
                  <div className="text-xs text-gray-400">25 50 75 100</div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Ultra Ads</span>
                      <span className="text-xs text-gray-500">97%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{width: '97%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Facebook</span>
                      <span className="text-xs text-gray-500">71%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600 rounded-full" style={{width: '71%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Instagram</span>
                      <span className="text-xs text-gray-500">34%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-400 rounded-full" style={{width: '34%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Instagram</span>
                      <span className="text-xs text-gray-500">51%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 rounded-full" style={{width: '51%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Ultra Ads</span>
                      <span className="text-xs text-gray-500">20%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-300 rounded-full" style={{width: '20%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Leads */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bold text-gray-900 text-lg">Recent Leads</h3>
                  <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
                    <button 
                      onClick={() => setActiveTab('all')}
                      className={`px-3 py-1 text-xs rounded-md transition ${activeTab === 'all' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'}`}
                    >
                      All
                    </button>
                    <button 
                      onClick={() => setActiveTab('hot')}
                      className={`px-3 py-1 text-xs rounded-md transition ${activeTab === 'hot' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'}`}
                    >
                      Hot
                    </button>
                    <button 
                      onClick={() => setActiveTab('warm')}
                      className={`px-3 py-1 text-xs rounded-md transition ${activeTab === 'warm' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'}`}
                    >
                      Warm
                    </button>
                    <button 
                      onClick={() => setActiveTab('cold')}
                      className={`px-3 py-1 text-xs rounded-md transition ${activeTab === 'cold' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'}`}
                    >
                      Cold
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  {leads.map((lead, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                      <div className="flex items-center gap-3 flex-1">
                        <div className={`w-10 h-10 ${lead.color} rounded-full flex items-center justify-center shrink-0`}>
                          <span className="text-white font-semibold text-sm">{lead.initials}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 text-sm">{lead.name}</p>
                          <p className="text-xs text-gray-500">{lead.company} • {lead.stage} • {lead.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                          <Phone className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                          <MessageCircle className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                          <Mail className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-center text-sm text-purple-600 font-semibold hover:text-purple-700 transition py-2">
                  VIEW ALL
                </button>
              </div>

              {/* WhatsApp Integration */}
              <div className="bg-linear-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white">
                <div className="flex items-start justify-between mb-5">
                  <h3 className="font-bold text-lg">WhatsApp Integration</h3>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2.5">
                    <MessageCircle size={20} strokeWidth={2.5} />
                  </div>
                </div>
                
                <div className="space-y-3 mb-5">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                    <p className="text-sm font-semibold mb-1">Customer Responses</p>
                    <p className="text-xs opacity-90">12 unread messages</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                    <p className="text-sm font-semibold mb-1">Automated Messages</p>
                    <p className="text-xs opacity-90">3 messages sent</p>
                  </div>
                </div>

                <button className="w-full bg-white text-green-600 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-all shadow-md">
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