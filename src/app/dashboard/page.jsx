"use client"
import React, { useState } from 'react';
import { Menu, Clock,  Circle,} from 'lucide-react';

import { useRouter } from "next/navigation";

export default function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);


   const router = useRouter();

  const handleGenerateReports = () => {
    router.push("/reports"); // ✅ Redirect on button click
  };

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
<div
  className={`fixed inset-y-0 left-0 z-50 w-64 bg-linear-to-b from-purple-900 to-purple-800
  transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
  transition-transform duration-300 ease-in-out overflow-y-auto`}
>

  <div className="flex items-center justify-between p-4 bg-purple-950">
    <div className="flex items-center gap-2">
     
      <span className="text-white font-semibold">Meerut Skills_</span>
    </div>
<button onClick={() => setSidebarOpen(!sidebarOpen)} className="block">
  <Menu size={24} />
</button>

  </div>

  <nav className="py-4">
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

    <div className="absolute bottom-0 left-0 right-0 border-t border-purple-700">
      <a href="#" className="flex items-center px-6 py-3 text-white hover:bg-purple-700/50 border-l-4 border-transparent hover:border-cyan-400 transition-all">
        <span>Settings</span>
      </a>
    </div>
  </nav>
</div>


      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
            <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer hover:ring-2 hover:ring-purple-900 transition">
              <img 
                src="/images/user.png" 
                alt="User Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 space-y-4">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Sales Growth */}
            <div className="bg-linear-to-br from-green-400 to-green-500 rounded-2xl p-4 text-white relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm opacity-90">Conversion %</p>
                  <h2 className="text-4xl font-bold mt-2">18.2%</h2>
                  <p className="text-xs mt-1 opacity-80">5.1 Rate than last week</p>
                </div>
                <div className="bg-white/20 rounded-full p-2">
                  <Clock size={20} />
                </div>
              </div>
            </div>

            {/* Daily Sales */}
            <div className="bg-linear-to-br from-orange-400 to-orange-500 rounded-2xl p-4 text-white relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm opacity-90">Task Delay</p>
                  <h2 className="text-4xl font-bold mt-2">4.5%</h2>
                  <p className="text-xs mt-1 opacity-80">5.1 Rate than last week</p>
                </div>
                <div className="bg-white/20 rounded-full p-2">
                  <Clock size={20} />
                </div>
              </div>
            </div>

            {/* Task Processing Time */}
            <div className="bg-linear-to-br from-cyan-400 to-cyan-500 rounded-2xl p-4 text-white relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm opacity-90">Avg. Processing time</p>
                  <h2 className="text-4xl font-bold mt-2">7 days</h2>
                  <p className="text-xs mt-1 opacity-80">5.1 Rate than last week</p>
                </div>
                <div className="bg-white/20 rounded-full p-2">
                  <Clock size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Increase/Decrease Sales Button */}
          <button className="w-full bg-linear-to-r from-purple-900 to-purple-800 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          
            onClick={handleGenerateReports}>
            Generate Reports
          </button>

          {/* Upcoming Tasks */}
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <h3 className="font-bold text-gray-800 mb-4">Upcoming Tasks</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Follow up with a new leads</span>
                <Circle size={16} className="text-red-500 fill-red-500" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Notify client of deal approval</span>
                <Circle size={16} className="text-red-500 fill-red-500" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Complete CRM L check for Filip M.</span>
                <Circle size={16} className="text-orange-500 fill-orange-500" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Review client documents</span>
                <Circle size={16} className="text-orange-500 fill-orange-500" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Prepare sales report</span>
                <Circle size={16} className="text-gray-400 fill-gray-400" />
              </div>
            </div>
          </div>

          {/* Lean Stats Summary */}
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <h3 className="font-bold text-gray-800 mb-4">Lean Stats Summary</h3>
            <div className="flex items-end justify-between h-48">
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="w-full bg-purple-200 rounded-t-lg" style={{height: '60%'}}></div>
                <span className="text-xs text-gray-600">Jan</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="w-full bg-purple-400 rounded-t-lg" style={{height: '85%'}}></div>
                <span className="text-xs text-gray-600">Feb</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="w-full bg-purple-300 rounded-t-lg" style={{height: '70%'}}></div>
                <span className="text-xs text-gray-600">Mar</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="w-full bg-purple-500 rounded-t-lg" style={{height: '95%'}}></div>
                <span className="text-xs text-gray-600">Apr</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="w-full bg-purple-300 rounded-t-lg" style={{height: '75%'}}></div>
                <span className="text-xs text-gray-600">May</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="w-full bg-purple-400 rounded-t-lg" style={{height: '88%'}}></div>
                <span className="text-xs text-gray-600">Jun</span>
              </div>
            </div>
          </div>

          {/* Leads from different Sources */}
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <h3 className="font-bold text-gray-800 mb-4">Leads from different Sources</h3>
            <div className="flex items-center justify-center py-6">
              <div className="relative w-48 h-48">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#E5E7EB" strokeWidth="20"/>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#10B981" strokeWidth="20" strokeDasharray="75 251" strokeDashoffset="0"/>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="20" strokeDasharray="50 251" strokeDashoffset="-75"/>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#F59E0B" strokeWidth="20" strokeDasharray="40 251" strokeDashoffset="-125"/>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#EF4444" strokeWidth="20" strokeDasharray="86 251" strokeDashoffset="-165"/>
                </svg>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Social</span>
                </div>
                <span className="text-sm font-semibold">60.1%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Search Engine</span>
                </div>
                <span className="text-sm font-semibold">25.2%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Referrals</span>
                </div>
                <span className="text-sm font-semibold">12.8%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Others</span>
                </div>
                <span className="text-sm font-semibold">1.9%</span>
              </div>
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <h3 className="font-bold text-gray-800 mb-4">AI Insights</h3>
            <div className="space-y-3">
              <div className="bg-linear-to-br from-purple-900 to-purple-800 rounded-xl p-4 text-white">
                <p className="text-sm">Top 10 potential leads of this week</p>
              </div>
              <div className="bg-linear-to-br from-purple-900 to-purple-800 rounded-xl p-4 text-white">
                <p className="text-sm">List of task to be completed this week</p>
              </div>
              <div className="bg-linear-to-br from-purple-900 to-purple-800 rounded-xl p-4 text-white">
                <p className="text-sm">5 task with cross-collaboration by sales heads</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}