'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Plus, AlertCircle, CheckCircle, Clock, TrendingUp, Menu, X } from 'lucide-react';


export default function TaskManagementPage() {
  const [menuOpen, setMenuOpen] = useState(false);
 const router = useRouter();
  const taskStats = [
    { label: 'Completed', count: '09', color: 'from-green-400 to-green-500', icon: CheckCircle },
    { label: 'Overdue', count: '03', color: 'from-red-400 to-red-500', icon: AlertCircle },
    { label: 'Due Soon', count: '18', color: 'from-orange-400 to-orange-500', icon: Clock },
    { label: 'In progress', count: '12', color: 'from-cyan-400 to-cyan-500', icon: TrendingUp }
  ];

  const todaysTasks = [
    { title: 'Follow up with a new lead', priority: 'high', color: 'bg-red-50 border-red-200' },
    { title: 'Notify client of deal approval', priority: 'high', color: 'bg-red-50 border-red-200' },
    { title: 'Complete CRM L check for Filip M.', priority: 'medium', color: 'bg-orange-50 border-orange-200' },
    { title: 'Upload time statements', priority: 'low', color: 'bg-blue-50 border-blue-200' },
    { title: 'Prepare commission report', priority: 'low', color: 'bg-green-50 border-green-200' },
    { title: 'Verify ITR documents', priority: 'low', color: 'bg-blue-50 border-blue-200' }
  ];

  const menuItems = [
    { label: 'Dashboard', active: false },
    { label: 'Leads & Pipelines', active: false },
    { label: 'Tasks', active: true },
    { label: 'Clients', active: false },
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
          <a href="/dashboard/accounting-reports" className="flex items-center px-6 py-3 text-white hover:bg-purple-700/50 border-l-4 border-transparent hover:border-cyan-400 transition-all">
            <span>Accounting reports</span>
          </a>
          <a href="/dashboard/hr-analysis" className="flex items-center px-6 py-3 text-white hover:bg-purple-700/50 border-l-4 border-transparent hover:border-cyan-400 transition-all">
            <span>HR Analysis</span>
          </a>


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
        <h1 className="text-3xl font-bold text-white mb-6">Task<br/>Management</h1>

        {/* Task Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          {taskStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className={`bg-linear-to-br ${stat.color} rounded-2xl p-4 text-white shadow-lg relative`}>
                <Icon size={20} className="opacity-80 absolute top-3 right-3" />
                <h2 className="text-3xl font-bold mt-6">{stat.count}</h2>
                <p className="text-sm opacity-90 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Create New Task Button */}
       <button
  onClick={() => router.push('/dashboard/tasks/new')}
  className="w-full g-gradient-to-r from-purple-700 to-purple-600 text-white py-3.5 rounded-xl font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 shadow-lg"
>
  <Plus size={20} />
  Create new
</button>

        {/* Today's Tasks */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <h3 className="font-bold text-gray-900 mb-4 text-lg">Today's Tasks</h3>
          <div className="space-y-2.5">
            {todaysTasks.map((task, index) => (
              <div key={index} className={`p-3.5 rounded-xl border ${task.color} flex items-center justify-between hover:shadow-sm transition`}>
                <span className="text-sm text-gray-800 font-medium">{task.title}</span>
                <button className="text-red-400 hover:text-red-600 shrink-0 ml-2">
                  <AlertCircle size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Progress */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <h3 className="font-bold text-gray-900 mb-4 text-lg">Monthly Progress</h3>
          <div className="flex items-center justify-center py-4">
            <div className="relative w-40 h-40">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#E5E7EB" strokeWidth="10"/>
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="none" 
                  stroke="url(#gradient)" 
                  strokeWidth="10"
                  strokeDasharray="251"
                  strokeDashoffset="50"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-3xl font-bold text-purple-600">80%</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              <span className="text-xs text-gray-600">Done</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
              <span className="text-xs text-gray-600">Pending</span>
            </div>
          </div>
        </div>

        {/* Quote Card */}
        <div className="bg-linear-to-br from-yellow-100 to-yellow-200 rounded-2xl p-5 text-center relative overflow-hidden shadow-lg">
          <div className="text-5xl mb-2">💡</div>
          <p className="text-xs text-gray-700 italic leading-relaxed">
            "The secret of getting ahead is getting started. Break your complex tasks into small manageable tasks."
          </p>
          <p className="text-xs text-gray-600 mt-2 font-semibold">- Mark Twain</p>
        </div>
      </div>
    </div>
  );
}