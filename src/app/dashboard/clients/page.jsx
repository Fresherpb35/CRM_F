'use client';

import { useState } from 'react';
import { TrendingUp, Menu, X, Lightbulb } from 'lucide-react';

export default function ClientInsightsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Dashboard', active: false },
    { label: 'Leads & Pipelines', active: false },
    { label: 'Tasks', active: false },
    { label: 'Clients', active: true },
    { label: 'Accounting reports', active: false },
    { label: 'HR Analysis', active: false }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Side Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-linear-to-b from-purple-950 to-purple-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="p-6 border-b border-purple-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Meerut<br/>Skills_</h2>
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
         {/* Settings at Bottom */}
<div className="mt-auto border-t border-purple-700">
  <button className="w-full text-left px-6 py-4 text-gray-300 hover:bg-purple-800 hover:text-white transition">
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
      <div className="bg-purple-900 p-4 flex items-center justify-between">
        <button onClick={() => setMenuOpen(true)}>
          <Menu size={24} className="text-white cursor-pointer" />
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
          <img 
           src="/images/user.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Title */}
        <h1 className="text-2xl font-bold text-white mb-4">Client Insights</h1>

        {/* Loan Type vs CIBIL */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <h3 className="font-bold text-gray-900 mb-4 text-base">Loan Type vs CIBIL</h3>
          <div className="h-52 bg-gray-50 rounded-xl p-3">
            <svg className="w-full h-full" viewBox="0 0 300 180">
              {/* Grid lines */}
              <line x1="40" y1="20" x2="40" y2="150" stroke="#D1D5DB" strokeWidth="1"/>
              <line x1="40" y1="150" x2="280" y2="150" stroke="#D1D5DB" strokeWidth="1"/>
              
              {/* Horizontal grid lines */}
              <line x1="40" y1="50" x2="280" y2="50" stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="2,2"/>
              <line x1="40" y1="85" x2="280" y2="85" stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="2,2"/>
              <line x1="40" y1="120" x2="280" y2="120" stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="2,2"/>
              
              {/* Y-axis labels */}
              <text x="18" y="25" fill="#9CA3AF" fontSize="9">100</text>
              <text x="23" y="55" fill="#9CA3AF" fontSize="9">75</text>
              <text x="23" y="90" fill="#9CA3AF" fontSize="9">50</text>
              <text x="23" y="125" fill="#9CA3AF" fontSize="9">25</text>
              <text x="28" y="155" fill="#9CA3AF" fontSize="9">0</text>
              
              {/* Bar groups */}
              {[
                { x: 75, heights: [75, 58, 38], label: 'Home' },
                { x: 135, heights: [90, 75, 55], label: 'Auto' },
                { x: 195, heights: [65, 48, 32], label: 'Personal' },
                { x: 255, heights: [80, 65, 45], label: 'Business' }
              ].map((group, i) => (
                <g key={i}>
                  {/* Bars with gradient effect */}
                  <defs>
                    <linearGradient id={`red-grad-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F87171" />
                      <stop offset="100%" stopColor="#EF4444" />
                    </linearGradient>
                    <linearGradient id={`blue-grad-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                    <linearGradient id={`purple-grad-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#A78BFA" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                  <rect x={group.x - 16} y={150 - group.heights[0]} width="9" height={group.heights[0]} fill={`url(#red-grad-${i})`} rx="2"/>
                  <rect x={group.x - 5} y={150 - group.heights[1]} width="9" height={group.heights[1]} fill={`url(#blue-grad-${i})`} rx="2"/>
                  <rect x={group.x + 6} y={150 - group.heights[2]} width="9" height={group.heights[2]} fill={`url(#purple-grad-${i})`} rx="2"/>
                  
                  {/* Label */}
                  <text x={group.x - 18} y="168" fill="#6B7280" fontSize="10" fontWeight="500">{group.label}</text>
                </g>
              ))}
            </svg>
          </div>
          <div className="flex items-center justify-center gap-5 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-linear-to-b from-red-400 to-red-500 rounded"></div>
              <span className="text-xs text-gray-700 font-medium">700+</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-linear-to-b from-blue-400 to-blue-500 rounded"></div>
              <span className="text-xs text-gray-700 font-medium">600-700</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-linear-to-b from-purple-400 to-purple-500 rounded"></div>
              <span className="text-xs text-gray-700 font-medium">&lt;600</span>
            </div>
          </div>
        </div>

        {/* Application and Communication Insights */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <h3 className="font-bold text-gray-900 mb-4 text-base">Application and Communication Insights</h3>
          
          {/* Area Chart 1 - Applications */}
          <div className="h-28 mb-4 bg-gray-50 rounded-xl p-3">
            <svg className="w-full h-full" viewBox="0 0 300 90">
              <defs>
                <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.05"/>
                </linearGradient>
              </defs>
              <path
                d="M 20 65 Q 60 45, 100 50 Q 140 55, 180 35 Q 220 40, 280 38 L 280 90 L 20 90 Z"
                fill="url(#purpleGradient)"
              />
              <path
                d="M 20 65 Q 60 45, 100 50 Q 140 55, 180 35 Q 220 40, 280 38"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="2.5"
              />
              {/* Data points */}
              <circle cx="20" cy="65" r="3" fill="#8B5CF6"/>
              <circle cx="100" cy="50" r="3" fill="#8B5CF6"/>
              <circle cx="180" cy="35" r="3" fill="#8B5CF6"/>
              <circle cx="280" cy="38" r="3" fill="#8B5CF6"/>
              
              <text x="25" y="18" fill="#6B7280" fontSize="10" fontWeight="600">Applications</text>
            </svg>
          </div>

          {/* Area Chart 2 - Communications */}
          <div className="h-28 bg-gray-50 rounded-xl p-3">
            <svg className="w-full h-full" viewBox="0 0 300 90">
              <defs>
                <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#86EFAC" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#86EFAC" stopOpacity="0.05"/>
                </linearGradient>
              </defs>
              <path
                d="M 20 60 Q 60 55, 100 50 Q 140 48, 180 40 Q 220 38, 280 32 L 280 90 L 20 90 Z"
                fill="url(#greenGradient)"
              />
              <path
                d="M 20 60 Q 60 55, 100 50 Q 140 48, 180 40 Q 220 38, 280 32"
                fill="none"
                stroke="#22C55E"
                strokeWidth="2.5"
              />
              {/* Data points */}
              <circle cx="20" cy="60" r="3" fill="#22C55E"/>
              <circle cx="100" cy="50" r="3" fill="#22C55E"/>
              <circle cx="180" cy="40" r="3" fill="#22C55E"/>
              <circle cx="280" cy="32" r="3" fill="#22C55E"/>
              
              <text x="25" y="18" fill="#6B7280" fontSize="10" fontWeight="600">Communications</text>
              
              {/* X-axis labels */}
              <text x="35" y="85" fill="#9CA3AF" fontSize="9">Jan-Mar</text>
              <text x="125" y="85" fill="#9CA3AF" fontSize="9">Apr-Jun</text>
              <text x="225" y="85" fill="#9CA3AF" fontSize="9">Jul-Sep</text>
            </svg>
          </div>
        </div>

        {/* Response Time to Manager */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <h3 className="font-bold text-gray-900 mb-3 text-sm">Response Time to Manager: 2.3 hrs</h3>
          <div className="space-y-2 text-xs text-gray-700 bg-gray-50 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Avg Login:</span>
              <span className="font-semibold">4.7 hours</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Avg response time:</span>
              <span className="font-semibold">2.3 hours</span>
            </div>
          </div>
        </div>

        {/* Client Feedback */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <h3 className="font-bold text-gray-900 mb-4 text-base">Client Feedback</h3>
          
          <div className="flex items-center justify-center py-5">
            <div className="relative w-40 h-40">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle cx="50" cy="50" r="35" fill="none" stroke="#F3F4F6" strokeWidth="16"/>
                <circle cx="50" cy="50" r="35" fill="none" stroke="#22C55E" strokeWidth="16" strokeDasharray="77 220" strokeDashoffset="0" strokeLinecap="round"/>
                <circle cx="50" cy="50" r="35" fill="none" stroke="#3B82F6" strokeWidth="16" strokeDasharray="55 220" strokeDashoffset="-77" strokeLinecap="round"/>
                <circle cx="50" cy="50" r="35" fill="none" stroke="#F59E0B" strokeWidth="16" strokeDasharray="44 220" strokeDashoffset="-132" strokeLinecap="round"/>
                <circle cx="50" cy="50" r="35" fill="none" stroke="#EF4444" strokeWidth="16" strokeDasharray="44 220" strokeDashoffset="-176" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
              <span className="text-xs text-gray-700 font-medium">Positive (35%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full shadow-sm"></div>
              <span className="text-xs text-gray-700 font-medium">Neutral (25%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
              <span className="text-xs text-gray-700 font-medium">Mixed (20%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
              <span className="text-xs text-gray-700 font-medium">Negative (20%)</span>
            </div>
          </div>

          <div className="mt-5 p-4 bg-linear-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
            <p className="text-xs text-gray-800 italic leading-relaxed">
              "The staff provides proper and informative responses with helpful suggestions as well."
            </p>
            <p className="text-xs text-gray-600 mt-2.5 font-semibold">- Client Review</p>
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-linear-to-br from-indigo-900 via-purple-900 to-purple-800 rounded-2xl shadow-xl p-5 text-black">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md">
              <Lightbulb size={20} className="text-purple-900" fill="currentColor" />
            </div>
            <h3 className="text-lg font-bold">AI Insights</h3>
          </div>
          
          <div className="space-y-3 text-xs leading-relaxed">
            <div className="flex items-start gap-2.5 bg-white bg-opacity-10 rounded-lg p-2.5">
              <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0"></div>
              <p className="opacity-95">Client with CIBIL 720+ prefer home loans, indicating trust in long-term commitments.</p>
            </div>
            <div className="flex items-start gap-2.5 bg-white bg-opacity-10 rounded-lg p-2.5">
              <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0"></div>
              <p className="opacity-95">Auto loans lead with lower CIBIL (&lt;600), reflecting risk in shorter-term financing.</p>
            </div>
            <div className="flex items-start gap-2.5 bg-white bg-opacity-10 rounded-lg p-2.5">
              <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0"></div>
              <p className="opacity-95">Personal loans evenly distributed, suggesting flexible appeal across credit tiers. Business loan remains steady across CIBIL ranges.</p>
            </div>
            <div className="flex items-start gap-2.5 bg-white bg-opacity-10 rounded-lg p-2.5">
              <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0"></div>
              <p className="opacity-95">A seasonal or quarterly surge in applications (Apr-Jul) and communications, likely driven by fiscal planning or campaign impacts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}