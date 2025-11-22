"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, Search, User, Shield, Bell, Globe, Lock, Wrench } from 'lucide-react';

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('Accounts');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Account data
  const [accountData] = useState({
    username: 'musicalash',
    employeeId: 'EM 101',
    role: 'Admin',
    email: 'prakashwork@gmail.com'
  });

  // Security & Privacy states
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [sessionTimeout] = useState('12 hrs');
  
  // Notifications states
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [inAppNotifications, setInAppNotifications] = useState(false);
  const [automaticAlerts, setAutomaticAlerts] = useState(true);
  const [notificationFrequency] = useState('41 min');
  
  // Language & Time states
  const [language, setLanguage] = useState('English');
  const [timezone, setTimezone] = useState('Meerut, India');
  const [dateFormat, setDateFormat] = useState('12 hrs');
  const [currency, setCurrency] = useState('Rupees');
  
  // Advanced Settings states
  const [developerMode, setDeveloperMode] = useState(false);

  const menuItems = [
    { id: 'Accounts', label: 'Accounts', icon: User },
    { id: 'Security', label: 'Security and Privacy', icon: Shield },
    { id: 'Notifications', label: 'Notifications', icon: Bell },
    { id: 'Language', label: 'Language and Time', icon: Globe },
    { id: 'Permissions', label: 'Permissions', icon: Lock },
    { id: 'Advanced', label: 'Advanced', icon: Wrench }
  ];

  const filteredMenuItems = menuItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-linear-to-r from-purple-900 via-purple-800 to-purple-900 text-white shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-4 lg:px-6 xl:px-8 py-4 lg:py-5 flex items-center gap-4">
          <Link 
            href="/dashboard"
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft size={24} className="lg:w-7 lg:h-7" />
          </Link>
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">Settings</h1>
        </div>
      </header>

      <div className="container mx-auto p-4 lg:p-6 xl:p-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 xl:w-80 bg-white rounded-2xl shadow-xl p-4 lg:p-6 h-fit lg:sticky lg:top-24">
            {/* Search */}
            <div className="relative mb-4 lg:mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 lg:w-5 lg:h-5" size={18} />
              <input
                type="text"
                placeholder="Search settings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 lg:pl-12 pr-4 py-2.5 lg:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900 placeholder-gray-400 text-sm lg:text-base"
              />
            </div>

            {/* Menu Items */}
            <nav className="space-y-1 lg:space-y-2">
              {filteredMenuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 lg:gap-4 px-4 lg:px-5 py-3 lg:py-4 rounded-lg transition-all ${
                      activeSection === item.id
                        ? 'bg-purple-100 text-purple-900 font-semibold shadow-sm'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={18} className="lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
                    <span className="text-sm lg:text-base xl:text-lg">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-white rounded-2xl shadow-xl p-6 lg:p-8 xl:p-10 space-y-8 lg:space-y-10">
            {/* Account Section */}
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 border-b border-gray-200 pb-3 lg:pb-4">Account</h2>
              <div className="space-y-4 lg:space-y-5">
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Username</span>
                  <span className="font-semibold text-gray-900 text-sm lg:text-base xl:text-lg">{accountData.username}</span>
                </div>
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Employee ID</span>
                  <span className="font-semibold text-gray-900 text-sm lg:text-base xl:text-lg">{accountData.employeeId}</span>
                </div>
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Role</span>
                  <span className="font-semibold text-gray-900 text-sm lg:text-base xl:text-lg">{accountData.role}</span>
                </div>
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Email</span>
                  <span className="font-semibold text-gray-900 text-sm lg:text-base xl:text-lg break-all">{accountData.email}</span>
                </div>
              </div>
            </div>

            {/* Security & Privacy Section */}
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 border-b border-gray-200 pb-3 lg:pb-4">Security and Privacy</h2>
              <div className="space-y-4 lg:space-y-5">
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Two-factor authentication</span>
                  <button
                    onClick={() => setTwoFactorAuth(!twoFactorAuth)}
                    className={`relative inline-flex h-6 w-11 lg:h-7 lg:w-12 xl:h-8 xl:w-14 items-center rounded-full transition-colors ${
                      twoFactorAuth ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                    aria-label="Toggle two-factor authentication"
                  >
                    <span
                      className={`inline-block h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6 transform rounded-full bg-white transition-transform ${
                        twoFactorAuth ? 'translate-x-6 lg:translate-x-6 xl:translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Session timeout ({sessionTimeout})</span>
                  <button className="px-4 lg:px-6 xl:px-8 py-2 lg:py-2.5 xl:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm lg:text-base xl:text-lg font-medium">
                    Configure
                  </button>
                </div>
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Company Policy</span>
                  <button className="px-3 lg:px-5 xl:px-6 py-2 lg:py-2.5 xl:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-xs lg:text-sm xl:text-base font-medium">
                    Download Document
                  </button>
                </div>
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Login history</span>
                  <Link 
                    href="/dashboard/login-history"
                    className="px-4 lg:px-6 xl:px-8 py-2 lg:py-2.5 xl:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm lg:text-base xl:text-lg font-medium inline-block"
                  >
                    See activity
                  </Link>
                </div>
              </div>
            </div>

            {/* Notifications Section */}
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 border-b border-gray-200 pb-3 lg:pb-4">Notifications</h2>
              <div className="space-y-4 lg:space-y-5">
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Email Notification preferences</span>
                  <button
                    onClick={() => setEmailNotifications(!emailNotifications)}
                    className={`relative inline-flex h-6 w-11 lg:h-7 lg:w-12 xl:h-8 xl:w-14 items-center rounded-full transition-colors ${
                      emailNotifications ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                    aria-label="Toggle email notifications"
                  >
                    <span
                      className={`inline-block h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6 transform rounded-full bg-white transition-transform ${
                        emailNotifications ? 'translate-x-6 lg:translate-x-6 xl:translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">In-App notifications</span>
                  <button
                    onClick={() => setInAppNotifications(!inAppNotifications)}
                    className={`relative inline-flex h-6 w-11 lg:h-7 lg:w-12 xl:h-8 xl:w-14 items-center rounded-full transition-colors ${
                      inAppNotifications ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                    aria-label="Toggle in-app notifications"
                  >
                    <span
                      className={`inline-block h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6 transform rounded-full bg-white transition-transform ${
                        inAppNotifications ? 'translate-x-6 lg:translate-x-6 xl:translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Automatic user alerts</span>
                  <button
                    onClick={() => setAutomaticAlerts(!automaticAlerts)}
                    className={`relative inline-flex h-6 w-11 lg:h-7 lg:w-12 xl:h-8 xl:w-14 items-center rounded-full transition-colors ${
                      automaticAlerts ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                    aria-label="Toggle automatic alerts"
                  >
                    <span
                      className={`inline-block h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6 transform rounded-full bg-white transition-transform ${
                        automaticAlerts ? 'translate-x-6 lg:translate-x-6 xl:translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Notification frequency</span>
                  <button className="px-4 lg:px-6 xl:px-8 py-2 lg:py-2.5 xl:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 text-sm lg:text-base xl:text-lg font-medium">
                    {notificationFrequency}
                    <span className="text-sm lg:text-base">⏱️</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Language & Time Section */}
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 border-b border-gray-200 pb-3 lg:pb-4">Language and Time</h2>
              <div className="space-y-4 lg:space-y-5">
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Select Interface Language</span>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="px-4 lg:px-6 xl:px-8 py-2 lg:py-2.5 xl:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900 text-sm lg:text-base xl:text-lg font-medium"
                  >
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>Hindi</option>
                  </select>
                </div>
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Select time-zone</span>
                  <select
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="px-4 lg:px-6 xl:px-8 py-2 lg:py-2.5 xl:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900 text-sm lg:text-base xl:text-lg font-medium"
                  >
                    <option>Meerut, India</option>
                    <option>New York, USA</option>
                    <option>London, UK</option>
                    <option>Tokyo, Japan</option>
                  </select>
                </div>
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Date and time format</span>
                  <select
                    value={dateFormat}
                    onChange={(e) => setDateFormat(e.target.value)}
                    className="px-4 lg:px-6 xl:px-8 py-2 lg:py-2.5 xl:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900 text-sm lg:text-base xl:text-lg font-medium"
                  >
                    <option>12 hrs</option>
                    <option>24 hrs</option>
                  </select>
                </div>
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Currency display settings</span>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="px-4 lg:px-6 xl:px-8 py-2 lg:py-2.5 xl:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900 text-sm lg:text-base xl:text-lg font-medium"
                  >
                    <option>Rupees</option>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Permissions Section */}
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 border-b border-gray-200 pb-3 lg:pb-4">Permissions</h2>
              <div className="space-y-4 lg:space-y-5">
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Ask for permission</span>
                  <Link 
                    href="/dashboard/send-request"
                    className="px-4 lg:px-6 xl:px-8 py-2 lg:py-2.5 xl:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm lg:text-base xl:text-lg font-medium inline-block"
                  >
                    Request
                  </Link>
                </div>
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Approve request</span>
                  <Link 
                    href="/dashboard/see-requests"
                    className="px-3 lg:px-5 xl:px-6 py-2 lg:py-2.5 xl:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-xs lg:text-sm xl:text-base font-medium inline-block"
                  >
                    See all request
                  </Link>
                </div>
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Request History</span>
                  <Link 
                    href="/dashboard/all-requests"
                    className="px-4 lg:px-6 xl:px-8 py-2 lg:py-2.5 xl:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm lg:text-base xl:text-lg font-medium inline-block"
                  >
                    History
                  </Link>
                </div>
              </div>
            </div>

            {/* Advanced Settings Section */}
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 border-b border-gray-200 pb-3 lg:pb-4">Advanced Settings</h2>
              <div className="space-y-4 lg:space-y-5">
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Developer Mode</span>
                  <button
                    onClick={() => setDeveloperMode(!developerMode)}
                    className={`relative inline-flex h-6 w-11 lg:h-7 lg:w-12 xl:h-8 xl:w-14 items-center rounded-full transition-colors ${
                      developerMode ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                    aria-label="Toggle developer mode"
                  >
                    <span
                      className={`inline-block h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6 transform rounded-full bg-white transition-transform ${
                        developerMode ? 'translate-x-6 lg:translate-x-6 xl:translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Performance Optimization</span>
                  <button className="px-4 lg:px-6 xl:px-8 py-2 lg:py-2.5 xl:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm lg:text-base xl:text-lg font-medium">
                    Optimize
                  </button>
                </div>
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Cache Management</span>
                  <button className="px-4 lg:px-6 xl:px-8 py-2 lg:py-2.5 xl:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm lg:text-base xl:text-lg font-medium">
                    Clear Cache
                  </button>
                </div>
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">CRM Report</span>
                  <Link 
                    href="/reports"
                    className="px-4 lg:px-6 xl:px-8 py-2 lg:py-2.5 xl:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm lg:text-base xl:text-lg font-medium inline-block"
                  >
                    Report
                  </Link>
                </div>
                <div className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-sm lg:text-base xl:text-lg">Generate employee report</span>
                  <Link 
                    href="/dashboard/employee-report"
                    className="px-4 lg:px-6 xl:px-8 py-2 lg:py-2.5 xl:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm lg:text-base xl:text-lg font-medium inline-block"
                  >
                    Report
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}