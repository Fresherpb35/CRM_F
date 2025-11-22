'use client';
import { useState } from 'react';
import { Menu, Lightbulb, TrendingUp, Users, MessageSquare, Clock } from 'lucide-react';
import Sidebar from '@/components/ui/sidebar';

export default function ClientInsightsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      {/* Reusable Sidebar Component */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeMenuItem="Clients"
      />

      {/* Main Content */}
      <div className="flex-1 w-full">
        {/* Header */}
        <div className="flex justify-between items-center p-4 lg:p-6 mb-2">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(true)} 
              className="text-white bg-purple-800 p-2 rounded-lg shadow-lg hover:bg-purple-700 transition lg:hidden"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-2xl lg:text-3xl font-bold">Client Insights</h1>
          </div>
        </div>

        <div className="px-4 lg:px-6 pb-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
            {/* Loan Type vs CIBIL & Turnover */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-4 lg:p-6 text-gray-900">
              <h3 className="text-base lg:text-lg font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="text-purple-600" size={20} />
                Loan Type vs CIBIL & Turnover
              </h3>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl lg:rounded-2xl p-4 shadow-inner">
                <svg viewBox="0 0 400 280" className="w-full">
                  {/* Y Axis */}
                  <line x1="60" y1="40" x2="60" y2="220" stroke="#D1D5DB" strokeWidth="2"/>
                  <line x1="60" y1="220" x2="380" y2="220" stroke="#D1D5DB" strokeWidth="2"/>

                  {/* Grid Lines */}
                  {[60, 105, 150, 195].map(y => (
                    <line key={y} x1="60" y1={y} x2="380" y2={y} stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4"/>
                  ))}

                  {/* Y Labels */}
                  {[100, 75, 50, 25, 0].map((val, i) => (
                    <text key={val} x="48" y={60 + i * 40} fill="#6B7280" fontSize="12" fontWeight="500" textAnchor="end">{val}</text>
                  ))}

                  {/* Bars with shadow effect */}
                  {[
                    { label: "Personal", shortLabel: "Personal", x: 110, values: [70, 90, 75] },
                    { label: "Medium", shortLabel: "Medium", x: 190, values: [55, 85, 105] },
                    { label: "Business", shortLabel: "Business", x: 270, values: [85, 115, 95] },
                    { label: "Home", shortLabel: "Home", x: 350, values: [125, 105, 130] }
                  ].map((group, i) => (
                    <g key={i}>
                      {/* Shadow */}
                      <rect x={group.x - 24} y={222 - group.values[0]} width="14" height={group.values[0]} fill="rgba(249, 115, 22, 0.1)" rx="3"/>
                      <rect x={group.x - 7} y={222 - group.values[1]} width="14" height={group.values[1]} fill="rgba(139, 92, 246, 0.1)" rx="3"/>
                      <rect x={group.x + 10} y={222 - group.values[2]} width="14" height={group.values[2]} fill="rgba(59, 130, 246, 0.1)" rx="3"/>
                      
                      {/* Actual bars with gradient */}
                      <defs>
                        <linearGradient id={`grad-orange-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#FB923C" />
                          <stop offset="100%" stopColor="#F97316" />
                        </linearGradient>
                        <linearGradient id={`grad-purple-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#A78BFA" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                        <linearGradient id={`grad-blue-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#60A5FA" />
                          <stop offset="100%" stopColor="#3B82F6" />
                        </linearGradient>
                      </defs>
                      
                      <rect x={group.x - 26} y={220 - group.values[0]} width="14" height={group.values[0]} fill={`url(#grad-orange-${i})`} rx="4"/>
                      <rect x={group.x - 9} y={220 - group.values[1]} width="14" height={group.values[1]} fill={`url(#grad-purple-${i})`} rx="4"/>
                      <rect x={group.x + 8} y={220 - group.values[2]} width="14" height={group.values[2]} fill={`url(#grad-blue-${i})`} rx="4"/>
                      
                      <text x={group.x - 10} y="240" fill="#4B5563" fontSize="11" fontWeight="500" textAnchor="middle">{group.shortLabel}</text>
                    </g>
                  ))}

                  {/* Legend */}
                  <g transform="translate(100, 25)">
                    <rect x="0" y="0" width="14" height="14" fill="#F97316" rx="3"/>
                    <text x="20" y="11" fill="#374151" fontSize="12" fontWeight="500">CIBIL 2024</text>
                    <rect x="120" y="0" width="14" height="14" fill="#8B5CF6" rx="3"/>
                    <text x="140" y="11" fill="#374151" fontSize="12" fontWeight="500">CIBIL 2025</text>
                    <rect x="240" y="0" width="14" height="14" fill="#3B82F6" rx="3"/>
                    <text x="260" y="11" fill="#374151" fontSize="12" fontWeight="500">Turnover</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Application and Communication Insight */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-4 lg:p-6 text-gray-900">
              <h3 className="text-base lg:text-lg font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="text-purple-600" size={20} />
                Application and Communication Insight
              </h3>
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-sm border border-blue-100">
                  <svg viewBox="0 0 200 120">
                    <defs>
                      <linearGradient id="grad-app" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#C7D2FE" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#E0E7FF" stopOpacity="0.3"/>
                      </linearGradient>
                    </defs>
                    <path d="M20,90 Q60,60 100,70 Q140,75 180,50 L180,110 L20,110 Z" fill="url(#grad-app)"/>
                    <path d="M20,90 Q60,60 100,70 Q140,75 180,50" fill="none" stroke="#6366F1" strokeWidth="3" strokeLinecap="round"/>
                    <circle cx="20" cy="90" r="4" fill="#6366F1"/>
                    <circle cx="100" cy="70" r="4" fill="#6366F1"/>
                    <circle cx="180" cy="50" r="4" fill="#6366F1"/>
                    <text x="10" y="20" fontSize="12" fontWeight="600" fill="#4B5563">App Usage</text>
                    <text x="130" y="105" fontSize="10" fill="#9CA3AF">Last Week</text>
                    <text x="145" y="15" fontSize="10" fontWeight="600" fill="#6366F1">+24%</text>
                  </svg>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-sm border border-green-100">
                  <svg viewBox="0 0 200 120">
                    <defs>
                      <linearGradient id="grad-comm" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#BBF7D0" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#DCFCE7" stopOpacity="0.3"/>
                      </linearGradient>
                    </defs>
                    <path d="M20,80 Q60,70 100,65 Q140,60 180,55 L180,110 L20,110 Z" fill="url(#grad-comm)"/>
                    <path d="M20,80 Q60,70 100,65 Q140,60 180,55" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round"/>
                    <circle cx="20" cy="80" r="4" fill="#22C55E"/>
                    <circle cx="100" cy="65" r="4" fill="#22C55E"/>
                    <circle cx="180" cy="55" r="4" fill="#22C55E"/>
                    <text x="10" y="20" fontSize="12" fontWeight="600" fill="#4B5563">Communications</text>
                    <text x="145" y="15" fontSize="10" fontWeight="600" fill="#22C55E">+18%</text>
                  </svg>
                </div>
              </div>

              <div className="mt-4 lg:mt-6 grid grid-cols-2 gap-3 lg:gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-3 lg:p-4 border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="text-purple-600" size={16} />
                    <p className="text-xs text-gray-600 font-medium">Response Time</p>
                  </div>
                  <p className="font-bold text-xl lg:text-2xl text-purple-700">2-3 hrs</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 lg:p-4 border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="text-blue-600" size={16} />
                    <p className="text-xs text-gray-600 font-medium">Customer Response</p>
                  </div>
                  <p className="font-bold text-xl lg:text-2xl text-blue-700">1.8 hrs</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3 lg:p-4 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="text-green-600" size={16} />
                    <p className="text-xs text-gray-600 font-medium">Avg Logins</p>
                  </div>
                  <p className="font-bold text-xl lg:text-2xl text-green-700">47</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-3 lg:p-4 border border-orange-200">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="text-orange-600" size={16} />
                    <p className="text-xs text-gray-600 font-medium">Week</p>
                  </div>
                  <p className="font-bold text-xl lg:text-2xl text-orange-700">9</p>
                </div>
              </div>
            </div>

            {/* Feedback and Customer Analysis */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-4 lg:p-6 text-gray-900 xl:col-span-2">
              <h3 className="text-base lg:text-lg font-bold mb-4 lg:mb-6">Feedback and Customer Analysis</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <svg viewBox="0 0 200 200" className="w-40 h-40 lg:w-48 lg:h-48">
                      <defs>
                        <linearGradient id="grad-circle" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#A78BFA" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#F3F4F6" strokeWidth="30"/>
                      <circle 
                        cx="100" 
                        cy="100" 
                        r="80" 
                        fill="none" 
                        stroke="url(#grad-circle)" 
                        strokeWidth="30" 
                        strokeDasharray="502.4" 
                        strokeDashoffset="110.53" 
                        strokeLinecap="round"
                        style={{ filter: 'drop-shadow(0 4px 6px rgba(139, 92, 246, 0.3))' }}
                      />
                      <text x="100" y="95" textAnchor="middle" fontSize="36" fontWeight="bold" fill="#374151">78%</text>
                      <text x="100" y="120" textAnchor="middle" fontSize="14" fontWeight="500" fill="#9CA3AF">positive</text>
                    </svg>
                  </div>
                  <div className="mt-4 lg:mt-6 space-y-2 lg:space-y-3 text-sm">
                    <div className="flex items-center gap-3 bg-purple-50 px-4 py-2 rounded-lg border border-purple-200">
                      <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full shadow-sm"></div>
                      <span className="font-medium text-gray-700">Positive (78%)</span>
                    </div>
                    <div className="flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
                      <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-sm"></div>
                      <span className="font-medium text-gray-700">Neutral (15%)</span>
                    </div>
                    <div className="flex items-center gap-3 bg-red-50 px-4 py-2 rounded-lg border border-red-200">
                      <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-sm"></div>
                      <span className="font-medium text-gray-700">Negative (7%)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 rounded-xl lg:rounded-2xl p-4 lg:p-6 text-white shadow-lg">
                  <div className="flex items-center gap-3 mb-4 lg:mb-6">
                    <div className="bg-yellow-400 p-2 rounded-lg">
                      <Lightbulb className="text-purple-900" size={24} />
                    </div>
                    <h4 className="text-lg lg:text-xl font-bold">AI Insights</h4>
                  </div>
                  <ul className="space-y-2 lg:space-y-3 text-xs lg:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">●</span>
                      <span>Most traffic comes from Facebook Ads.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">●</span>
                      <span>20% leads turn into cold leads because of unsatisfactory response (according to feedback).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">●</span>
                      <span>75% of the clients replied that the confirmation hours are more than they should be.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">●</span>
                      <span>Meta Ads have improved 12% over the last week.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">●</span>
                      <span>Enhancement suggestions from customers – manage finance, and splitting (25%).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">●</span>
                      <span>Site traffic has increased by 17.25%.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}