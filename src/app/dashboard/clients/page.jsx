'use client';
import Link from "next/link";

import { useState } from 'react';
import { Menu, X, Lightbulb } from 'lucide-react';

export default function ClientInsightsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      {/* Side Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-linear-to-b from-purple-950 to-purple-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-purple-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
  <img 
    src="/images/user.png"      
    alt="User" 
    className="w-full h-full object-cover" 
  />
</div>

                <div>
                  <p className="text-sm text-gray-300">Welcome, User!</p>
                </div>
              </div>
              <button onClick={() => setMenuOpen(false)} className="lg:hidden text-white">
                <X size={24} />
              </button>
            </div>
          </div>

         <nav className="flex-1 px-4 py-4 space-y-1">

  <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-purple-800 rounded-lg transition">
    Dashboard
  </Link>

  <Link href="/dashboard/lead-pipelines" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-purple-800 rounded-lg transition">
    Leads & Pipelines
  </Link>

  <Link href="/dashboard/tasks" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-purple-800 rounded-lg transition">
    Tasks
  </Link>

  <Link href="/dashboard/clients" className="flex items-center gap-3 px-4 py-3 text-white bg-purple-800 rounded-lg font-semibold shadow-md">
    Clients
  </Link>

  <Link href="/dashboard/accounting-reports" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-purple-800 rounded-lg transition">
    Accounting Reports
  </Link>

  <Link href="/dashboard/hr-analysis" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-purple-800 rounded-lg transition">
    HR Analytics
  </Link>

</nav>


          {/* Settings */}
          <div className="border-t border-purple-700 p-4">
            <button className="w-full text-left px-4 py-3 text-gray-400 hover:text-white hover:bg-purple-800 rounded-lg transition flex items-center gap-3">
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setMenuOpen(true)} className="text-white bg-purple-800 p-2 rounded-lg shadow-lg">
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setMenuOpen(false)} />
      )}

      {/* Main Content */}
      <div className="lg:ml-64 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Client Insights</h1>
          
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Loan Type vs CIBIL & Turnover */}
          <div className="bg-white rounded-3xl shadow-xl p-6 text-gray-900">
            <h3 className="text-lg font-bold mb-4">Loan Type vs CIBIL & Turnover</h3>
            <div className="bg-gray-50 rounded-2xl p-4">
              <svg viewBox="0 0 400 250" className="w-full">
                {/* Y Axis */}
                <line x1="60" y1="30" x2="60" y2="200" stroke="#E5E7EB" strokeWidth="2"/>
                <line x1="60" y1="200" x2="380" y2="200" stroke="#E5E7EB" strokeWidth="2"/>

                {/* Grid Lines */}
                {[50, 100, 150].map(y => (
                  <line key={y} x1="60" y1={y} x2="380" y2={y} stroke="#F3F4F6" strokeWidth="1"/>
                ))}

                {/* Y Labels */}
                {[100, 75, 50, 25, 0].map((val, i) => (
                  <text key={val} x="48" y={50 + i * 37.5} fill="#9CA3AF" fontSize="12" textAnchor="end">{val}</text>
                ))}

                {/* Bars */}
                {[
                  { label: "Personal Loan", x: 100, values: [45, 70, 55] },
                  { label: "Medium Loan", x: 170, values: [35, 65, 80] },
                  { label: "Business Loan", x: 240, values: [60, 85, 70] },
                  { label: "Home Loan", x: 310, values: [90, 75, 95] }
                ].map((group, i) => (
                  <g key={i}>
                    <rect x={group.x - 20} y={200 - group.values[0]} width="16" height={group.values[0]} fill="#F97316" rx="4"/>
                    <rect x={group.x - 2} y={200 - group.values[1]} width="16" height={group.values[1]} fill="#8B5CF6" rx="4"/>
                    <rect x={group.x + 16} y={200 - group.values[2]} width="16" height={group.values[2]} fill="#3B82F6" rx="4"/>
                    <text x={group.x} y="220" fill="#6B7280" fontSize="12" textAnchor="middle">{group.label}</text>
                  </g>
                ))}

                {/* Legend */}
                <g transform="translate(80, 20)">
                  <rect x="0" y="0" width="12" height="12" fill="#F97316" rx="2"/>
                  <text x="18" y="10" fill="#4B5563" fontSize="12">2024</text>
                  <rect x="80" y="0" width="12" height="12" fill="#8B5CF6" rx="2"/>
                  <text x="98" y="10" fill="#4B5563" fontSize="12">2025</text>
                  <rect x="160" y="0" width="12" height="12" fill="#3B82F6" rx="2"/>
                  <text x="178" y="10" fill="#4B5563" fontSize="12">Turnover</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Application and Communication Insight */}
          <div className="bg-white rounded-3xl shadow-xl p-6 text-gray-900">
            <h3 className="text-lg font-bold mb-4">Application and Communication Insight</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-2xl p-4">
                <svg viewBox="0 0 200 120">
                  <path d="M20,90 Q60,60 100,70 Q140,75 180,50 L180,110 L20,110 Z" fill="#E0E7FF"/>
                  <path d="M20,90 Q60,60 100,70 Q140,75 180,50" fill="none" stroke="#6366F1" strokeWidth="3"/>
                  <text x="10" y="20" fontSize="12" fill="#6B7280">App Usage (Avg)</text>
                  <text x="140" y="105" fontSize="10" fill="#9CA3AF">Last Week</text>
                  <text x="140" y="15" fontSize="10" fill="#6366F1">Present</text>
                </svg>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <svg viewBox="0 0 200 120">
                  <path d="M20,80 Q60,70 100,65 Q140,60 180,55 L180,110 L20,110 Z" fill="#DCFCE7"/>
                  <path d="M20,80 Q60,70 100,65 Q140,60 180,55" fill="none" stroke="#22C55E" strokeWidth="3"/>
                  <text x="10" y="20" fontSize="12" fill="#6B7280">Communications</text>
                </svg>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Response Time to Messages:</p>
                <p className="font-bold text-lg">2-3 hrs</p>
              </div>
              <div>
                <p className="text-gray-600">Avg response time from the customer:</p>
                <p className="font-bold text-lg">1.8</p>
              </div>
              <div>
                <p className="text-gray-600">Avg Logins:</p>
                <p className="font-bold text-lg">47</p>
              </div>
              <div>
                <p className="text-gray-600">Week:</p>
                <p className="font-bold text-lg">9</p>
              </div>
            </div>
          </div>

          {/* Feedback and Customer Analysis */}
          <div className="bg-white rounded-3xl shadow-xl p-6 text-gray-900 xl:col-span-2">
            <h3 className="text-lg font-bold mb-6">Feedback and Customer Analysis</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <svg viewBox="0 0 200 200" className="w-48 h-48">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#E5E7EB" strokeWidth="35"/>
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#8B5CF6" strokeWidth="35" strokeDasharray="502.4" strokeDashoffset="100.48" strokeLinecap="round"/>
                    <text x="100" y="105" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#6B7280">78%</text>
                    <text x="100" y="130" textAnchor="middle" fontSize="14" fill="#9CA3AF">positive</text>
                  </svg>
                </div>
                <div className="mt-6 space-y-2 text-sm">
                  <div className="flex items-center gap-3"><div className="w-4 h-4 bg-purple-600 rounded-full"></div> Positive</div>
                  <div className="flex items-center gap-3"><div className="w-4 h-4 bg-blue-500 rounded-full"></div> Neutral</div>
                  <div className="flex items-center gap-3"><div className="w-4 h-4 bg-red-500 rounded-full"></div> Negative</div>
                </div>
              </div>

              <div className="bg-linear-to-br from-purple-900 to-indigo-900 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="text-yellow-300" size={28} />
                  <h4 className="text-xl font-bold">AI Insights</h4>
                </div>
                <ul className="space-y-3 text-sm">
                  <li>• Most traffic comes from Facebook Ads.</li>
                  <li>• 20% leads turn into cold leads because of unsatisfactory response (according to feedback).</li>
                  <li>• 75% of the clients replied that the confirmation hours are more than they should be.</li>
                  <li>• Meta Ads have improved 12% over the last week.</li>
                  <li>• Enhancement suggestions from customers – manage finance, and splitting (25%).</li>
                  <li>• Site traffic has increased by 17.25%.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}