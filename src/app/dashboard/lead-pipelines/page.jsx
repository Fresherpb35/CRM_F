"use client"
import React, { useState } from 'react';
import { Menu, MessageCircle, Phone, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/ui/sidebar';

export default function LeadsAndPipelines() {
  const [activeTab, setActiveTab] = useState('all');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  
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
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar Component */}
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen}
        activeMenuItem="Leads & Pipelines"
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 shrink-0 z-30">
          <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <button 
                onClick={() => setSidebarOpen(true)} 
                className="hover:bg-gray-100 p-2 rounded-lg transition lg:hidden"
              >
                <Menu size={24} className="text-gray-700" />
              </button>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Leads and Pipelines</h1>
            </div>
          </div>
        </header>

        {/* Page Content - Scrollable */}
        <main className="flex-1 overflow-y-auto scrollbar-hide p-3 sm:p-4 md:p-6">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
            {/* Left Column - 2/3 width on xl screens */}
            <div className="xl:col-span-2 space-y-4 sm:space-y-6">
              {/* Conversion Funnel */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-4 sm:mb-6">Conversion funnel</h3>
                
                {/* Mobile View - Stacked */}
                <div className="block lg:hidden">
                  <div className="flex justify-center items-center mb-4">
                    <div className="relative w-full max-w-xs">
                      {/* Pyramid stages */}
                      <div className="relative">
                        <div className="bg-purple-900 text-white text-center py-4 px-4" style={{clipPath: 'polygon(5% 0%, 95% 0%, 87% 100%, 13% 100%)'}}>
                          <div className="text-xs sm:text-sm font-semibold">New Leads (4500)</div>
                        </div>
                      </div>
                      
                      <div className="relative -mt-px">
                        <div className="bg-purple-700 text-white text-center py-4 px-4" style={{clipPath: 'polygon(13% 0%, 87% 0%, 78% 100%, 22% 100%)'}}>
                          <div className="text-xs sm:text-sm font-semibold">Verified (3750)</div>
                        </div>
                      </div>
                      
                      <div className="relative -mt-px">
                        <div className="bg-purple-600 text-white text-center py-4 px-4" style={{clipPath: 'polygon(22% 0%, 78% 0%, 70% 100%, 30% 100%)'}}>
                          <div className="text-xs sm:text-sm font-semibold">3150</div>
                        </div>
                      </div>
                      
                      <div className="relative -mt-px">
                        <div className="bg-purple-500 text-white text-center py-4 px-4" style={{clipPath: 'polygon(30% 0%, 70% 0%, 61% 100%, 39% 100%)'}}>
                          <div className="text-xs sm:text-sm font-semibold">3100</div>
                        </div>
                      </div>
                      
                      <div className="relative -mt-px">
                        <div className="bg-purple-400 text-white text-center py-3.5 px-4" style={{clipPath: 'polygon(39% 0%, 61% 0%, 53% 100%, 47% 100%)'}}>
                          <div className="text-xs sm:text-sm font-semibold">1800</div>
                        </div>
                      </div>
                      
                      <div className="relative -mt-px">
                        <div className="bg-purple-300 text-white text-center py-3.5 px-4 rounded-b-lg" style={{clipPath: 'polygon(47% 0%, 53% 0%, 50% 100%, 50% 100%)'}}>
                          <div className="text-xs sm:text-sm font-semibold">880</div>
                        </div>
                      </div>
                      
                      <div className="text-center mt-3 text-gray-500 text-xs sm:text-sm font-medium">
                        2 days
                        <div className="text-xs text-gray-400 mt-1">5 days</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Labels below for mobile */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="space-y-2">
                      <div className="text-gray-700 font-medium">• Verified</div>
                      <div className="text-gray-700 font-medium">• Under Review</div>
                      <div className="text-gray-700 font-medium">• Proposal Sent</div>
                      <div className="text-gray-700 font-medium">• Disbursed</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-600">Drop-off Rate</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                          <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2"/>
                        </svg>
                        <span className="text-gray-600">Avg. Time</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Desktop View - Side by side */}
                <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8">
                  {/* Left Side Labels */}
                  <div className="flex flex-col justify-around h-[360px] xl:h-[380px] text-sm text-right">
                    <div className="text-gray-700 font-medium">Verified</div>
                    <div className="text-gray-700 font-medium">Under Review</div>
                    <div className="text-gray-700 font-medium">Proposal Sent</div>
                    <div className="text-gray-700 font-medium">Disbursed</div>
                  </div>
                  
                  {/* Pyramid/Funnel */}
                  <div className="flex justify-center items-center">
                    <div className="relative w-64 xl:w-72">
                      <div className="relative">
                        <div className="bg-purple-900 text-white text-center py-5 px-4" style={{clipPath: 'polygon(5% 0%, 95% 0%, 87% 100%, 13% 100%)'}}>
                          <div className="text-sm font-semibold">New Leads (4500)</div>
                        </div>
                      </div>
                      
                      <div className="relative -mt-px">
                        <div className="bg-purple-700 text-white text-center py-5 px-4" style={{clipPath: 'polygon(13% 0%, 87% 0%, 78% 100%, 22% 100%)'}}>
                          <div className="text-sm font-semibold">Verified (3750)</div>
                        </div>
                      </div>
                      
                      <div className="relative -mt-px">
                        <div className="bg-purple-600 text-white text-center py-5 px-4" style={{clipPath: 'polygon(22% 0%, 78% 0%, 70% 100%, 30% 100%)'}}>
                          <div className="text-sm font-semibold">3150</div>
                        </div>
                      </div>
                      
                      <div className="relative -mt-px">
                        <div className="bg-purple-500 text-white text-center py-5 px-4" style={{clipPath: 'polygon(30% 0%, 70% 0%, 61% 100%, 39% 100%)'}}>
                          <div className="text-sm font-semibold">3100</div>
                        </div>
                      </div>
                      
                      <div className="relative -mt-px">
                        <div className="bg-purple-400 text-white text-center py-5 px-4" style={{clipPath: 'polygon(39% 0%, 61% 0%, 53% 100%, 47% 100%)'}}>
                          <div className="text-sm font-semibold">1800</div>
                        </div>
                      </div>
                      
                      <div className="relative -mt-px">
                        <div className="bg-purple-300 text-white text-center py-5 px-4 rounded-b-lg" style={{clipPath: 'polygon(47% 0%, 53% 0%, 50% 100%, 50% 100%)'}}>
                          <div className="text-sm font-semibold">880</div>
                        </div>
                      </div>
                      
                      <div className="text-center mt-4 text-gray-500 text-sm font-medium">
                        2 days
                        <div className="text-xs text-gray-400 mt-1">5 days</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Side Metrics */}
                  <div className="flex flex-col justify-around h-[360px] xl:h-[380px] text-sm">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-600 text-xs">Drop-off Rate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                        <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2"/>
                      </svg>
                      <span className="text-gray-600 text-xs">Avg. Time in Stage</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lead Lifetime Value Analysis */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-4 sm:mb-6">Lead Lifetime Value Analysis</h3>
                <div className="relative h-48 sm:h-64">
                  <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-400 pr-2 sm:pr-3">
                    <span>100</span>
                    <span>75</span>
                    <span>50</span>
                    <span>25</span>
                    <span>0</span>
                  </div>
                  
                  <div className="ml-6 sm:ml-8 h-full pb-8">
                    <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                      <line x1="0" y1="0" x2="500" y2="0" stroke="#f3f4f6" strokeWidth="1" />
                      <line x1="0" y1="50" x2="500" y2="50" stroke="#f3f4f6" strokeWidth="1" />
                      <line x1="0" y1="100" x2="500" y2="100" stroke="#f3f4f6" strokeWidth="1" />
                      <line x1="0" y1="150" x2="500" y2="150" stroke="#f3f4f6" strokeWidth="1" />
                      <line x1="0" y1="200" x2="500" y2="200" stroke="#f3f4f6" strokeWidth="1" />
                      
                      <defs>
                        <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.6"/>
                          <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.05"/>
                        </linearGradient>
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
                  
                  <div className="ml-6 sm:ml-8 flex justify-between text-xs text-gray-400 mt-2">
                    <span>Jul 2022</span>
                    <span>Jul 2023</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - 1/3 width on xl screens */}
            <div className="space-y-4 sm:space-y-6">
              {/* Conversion by Source */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg">Conversion by source</h3>
                  <div className="text-xs text-gray-400">25 50 75 100</div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-gray-600">Ultra Ads</span>
                      <span className="text-xs text-gray-500">97%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{width: '97%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-gray-600">Facebook</span>
                      <span className="text-xs text-gray-500">71%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600 rounded-full" style={{width: '71%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-gray-600">Instagram</span>
                      <span className="text-xs text-gray-500">34%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-400 rounded-full" style={{width: '34%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-gray-600">Instagram</span>
                      <span className="text-xs text-gray-500">51%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 rounded-full" style={{width: '51%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-gray-600">Ultra Ads</span>
                      <span className="text-xs text-gray-500">20%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-300 rounded-full" style={{width: '20%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Leads */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-100">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-5 gap-3">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg">Recent Leads</h3>
                  <div className="flex gap-1 sm:gap-2 bg-gray-100 rounded-lg p-1 w-full sm:w-auto">
                    <button 
                      onClick={() => setActiveTab('all')}
                      className={`flex-1 sm:flex-none px-2 sm:px-3 py-1 text-xs rounded-md transition ${activeTab === 'all' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'}`}
                    >
                      All
                    </button>
                    <button 
                      onClick={() => setActiveTab('hot')}
                      className={`flex-1 sm:flex-none px-2 sm:px-3 py-1 text-xs rounded-md transition ${activeTab === 'hot' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'}`}
                    >
                      Hot
                    </button>
                    <button 
                      onClick={() => setActiveTab('warm')}
                      className={`flex-1 sm:flex-none px-2 sm:px-3 py-1 text-xs rounded-md transition ${activeTab === 'warm' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'}`}
                    >
                      Warm
                    </button>
                    <button 
                      onClick={() => setActiveTab('cold')}
                      className={`flex-1 sm:flex-none px-2 sm:px-3 py-1 text-xs rounded-md transition ${activeTab === 'cold' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'}`}
                    >
                      Cold
                    </button>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {leads.map((lead, index) => (
                    <div key={index} className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-100 last:border-0">
                      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 ${lead.color} rounded-full flex items-center justify-center shrink-0`}>
                          <span className="text-white font-semibold text-xs sm:text-sm">{lead.initials}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 text-xs sm:text-sm truncate">{lead.name}</p>
                          <p className="text-[10px] sm:text-xs text-gray-500 truncate">{lead.company} • {lead.stage}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                        <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition">
                          <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
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
                <button
                  onClick={() => router.push('/dashboard/all-leads')}
                  className="w-full mt-4 text-center text-sm text-purple-600 font-semibold hover:text-purple-700 transition py-2"
                >
                  VIEW ALL
                </button>
              </div>

              {/* WhatsApp Integration */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white">
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