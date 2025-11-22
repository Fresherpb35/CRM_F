'use client';
import React, { useState } from 'react';
import { Menu, CheckCircle, AlertCircle, Clock, TrendingUp, Lightbulb, ChevronRight } from 'lucide-react';
import { useRouter } from "next/navigation";
import Sidebar from '@/components/ui/sidebar';

export default function TaskManagementPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const taskStats = [
    { label: 'Completed', count: '24', color: 'from-green-400 to-green-500', icon: CheckCircle },
    { label: 'Overdue', count: '09', color: 'from-red-400 to-red-500', icon: AlertCircle },
    { label: 'Due Soon', count: '18', color: 'from-orange-400 to-orange-500', icon: Clock },
    { label: 'In Progress', count: '12', color: 'from-cyan-400 to-cyan-500', icon: TrendingUp }
  ];

  const todaysTasks = [
    { 
      id: 'task_001',
      title: 'Follow up with Rajesh Kumar', 
      time: '10:00 AM',
      assignedTo: 'You',
      status: 'urgent',
      color: 'bg-red-50 border-red-200',
      dotColor: 'bg-orange-400',
      description: 'Check loan application status and discuss next steps'
    },
    { 
      id: 'task_002',
      title: 'Complete CIBIL check for Priya', 
      time: '11:30 AM',
      assignedTo: 'Rahul S',
      status: 'on-time',
      color: 'bg-green-50 border-green-200',
      dotColor: 'bg-green-400',
      description: 'Verify credit score and generate report'
    },
    { 
      id: 'task_003',
      title: 'Upload bank statements for Amit', 
      time: '2:00 PM',
      assignedTo: 'Nakul B',
      status: 'on-time',
      color: 'bg-green-50 border-green-200',
      dotColor: 'bg-green-400',
      description: 'Collect and upload last 6 months statements'
    },
    { 
      id: 'task_004',
      title: 'Send loan Approval to Neha', 
      time: '3:30 PM',
      assignedTo: 'You',
      status: 'urgent',
      color: 'bg-red-50 border-red-200',
      dotColor: 'bg-orange-400',
      description: 'Prepare approval letter and send via email'
    },
    { 
      id: 'task_005',
      title: 'Verify ITR documents', 
      time: '11:00 PM',
      assignedTo: 'Priya M',
      status: 'processing',
      color: 'bg-blue-50 border-blue-200',
      dotColor: 'bg-blue-400',
      description: 'Review income tax returns for last 2 years'
    }
  ];

  const handleCreateTask = () => {
    router.push("/dashboard/tasks/new"); 
  };

  const handleTaskClick = (taskId) => {
    router.push(`/dashboard/tasks/${taskId}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Reusable Sidebar Component */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeMenuItem="Tasks"
      />

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
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">Task Management</h1>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Manage and track all your tasks</p>
              </div>
            </div>
            <button
              onClick={handleCreateTask}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition shadow-md text-sm md:text-base"
            >
              Create Task
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-6 space-y-6">
          {/* Task Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {taskStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-5 text-white shadow-lg relative overflow-hidden hover:shadow-xl transition-all cursor-pointer transform hover:scale-105`}>
                  <Icon size={24} className="absolute top-4 right-4 opacity-80" />
                  <h2 className="text-4xl font-bold mt-2 mb-1">{stat.count}</h2>
                  <p className="text-sm opacity-90 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Today's Tasks */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-bold text-gray-900 text-lg">Today's Tasks</h3>
                <span className="text-sm text-gray-500">{todaysTasks.length} tasks</span>
              </div>
              <div className="space-y-3">
                {todaysTasks.map((task, index) => (
                  <button
                    key={index}
                    onClick={() => handleTaskClick(task.id)}
                    className={`w-full text-left p-4 rounded-xl border ${task.color} transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.98] group`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <p className="text-sm font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">{task.title}</p>
                          <ChevronRight size={18} className="text-gray-400 group-hover:text-purple-600 transition-colors shrink-0 ml-2" />
                        </div>
                        <p className="text-xs text-gray-500 mb-2 line-clamp-1">{task.description}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock size={12} />
                            <span>{task.time}</span>
                          </div>
                          <span>•</span>
                          <span>Assigned to: {task.assignedTo}</span>
                        </div>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${task.dotColor} shrink-0 ml-3 mt-1`}></div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Monthly Progress */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-5 text-lg">Monthly Progress</h3>
                <div className="flex items-center justify-center py-6">
                  <div className="relative w-48 h-48">
                    <svg viewBox="0 0 100 100" className="transform -rotate-90">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#E5E7EB" strokeWidth="8"/>
                      <circle 
                        cx="50" cy="50" r="40" 
                        fill="none" 
                        stroke="url(#progressGradient)" 
                        strokeWidth="8"
                        strokeDasharray="251.2"
                        strokeDashoffset="50.24"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">80%</span>
                        <p className="text-xs text-gray-500 mt-1">Great Work!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-4 mt-4 border border-yellow-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb size={18} className="text-yellow-600" />
                    <p className="text-xs font-semibold text-gray-700">You're doing amazing! 80% milestone reached! Keep it up!</p>
                  </div>
                </div>
              </div>

              {/* Task States Legend */}
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="font-bold text-lg mb-4">Task States Legend</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="text-sm">On time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                    <span className="text-sm">60 min before deadline</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <span className="text-sm">Delayed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <span className="text-sm">Processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}