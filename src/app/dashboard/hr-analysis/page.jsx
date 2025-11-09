'use client';
import Link from 'next/link';

import { Users, TrendingUp, TrendingDown, FileText, Video, Book, Download, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

export default function HRAnalysisPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const menuItems = [
  { label: 'Dashboard', href: '/dashboard', active: false },
  { label: 'Leads & Pipelines', href: '/dashboard/lead-pipelines', active: false },
  { label: 'Tasks', href: '/dashboard/tasks', active: false },
  { label: 'Clients', href: '/dashboard/clients', active: false },
  { label: 'Accounting reports', href: '/dashboard/accounting-reports', active: false },
  { label: 'HR Analysis', href: '/dashboard/hr-analysis', active: true }
];


  // Timer countdown
  React.useEffect(() => {
    if (otpModalOpen && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [otpModalOpen, timer]);

  const handleResendOtp = () => {
    setTimer(60);
    setCanResend(false);
    console.log('OTP Resent');
  };

  const handleVerifyOtp = () => {
    console.log('OTP Verified:', otp);
    console.log('Downloading document:', selectedDocument);
    
    // Simulate download
    alert(`Document "${selectedDocument}" is now downloading!`);
    
    setOtpModalOpen(false);
    setSelectedDocument(null);
    setOtp('');
    setTimer(60);
    setCanResend(false);
  };

  const handleDocumentClick = (docTitle) => {
    setSelectedDocument(docTitle);
    setOtpModalOpen(true);
    setTimer(60);
    setCanResend(false);
  };

  const employees = [
    { name: 'John Doe', department: 'Sales', attendance: '85%', performance: '92%', initials: 'JD', color: 'bg-blue-500' },
    { name: 'Nikhit Mittal', department: 'Sales', attendance: '80%', performance: '81%', initials: 'NM', color: 'bg-purple-500' },
    { name: 'Priya Sharma', department: 'Marketing', attendance: '85%', performance: '93%', initials: 'PS', color: 'bg-pink-500' }
  ];

  const documents = [
    { title: 'Employee Resume', subtitle: 'John Doe', icon: FileText },
    { title: 'Offer Letters', subtitle: 'Priya Sharma', icon: FileText },
    { title: 'Contracts and NDA', subtitle: 'Tanya M', icon: FileText },
    { title: 'Payslips -09/2024', subtitle: '', icon: FileText }
  ];

  const trainingResources = [
    { title: 'Skill Training Module', type: 'Video', icon: Video },
    { title: 'Video Tutorials', type: 'Video', icon: Video },
    { title: 'Document Library', type: 'PDF', icon: Book }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Side Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 sm:w-72 md:w-80 bg-linear-to-b from-purple-950 to-purple-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="p-4 sm:p-6 border-b border-purple-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-white">Meerut<br/>Skills_</h2>
              <button onClick={() => setMenuOpen(false)} className="text-white hover:text-gray-300">
                <X size={24} />
              </button>
            </div>
          </div>
          
         <nav className="flex-1 py-2">
  {menuItems.map((item, index) => (
    <Link key={index} href={item.href}>
      <button
        className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 transition border-b border-purple-800 text-sm sm:text-base ${
          item.active
            ? 'bg-purple-800 text-white font-medium'
            : 'text-gray-300 hover:bg-purple-800 hover:text-white'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        {item.label}
      </button>
    </Link>
  ))}
</nav>


          {/* Settings at Bottom */}
          <div className="border-t border-purple-700">
            <button className="w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-300 hover:bg-purple-800 hover:text-white transition">
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
      <div className="bg-purple-900 p-3 sm:p-4 flex items-center justify-between sticky top-0 z-30">
        <button onClick={() => setMenuOpen(true)}>
          <Menu size={24} className="text-white cursor-pointer" />
        </button>
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="p-3 sm:p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">HR Analysis</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Stats Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <Users size={18} className="text-blue-500 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  <TrendingUp size={14} className="text-green-500 sm:w-4 sm:h-4" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">25</h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Total Employees</p>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-green-500 text-lg sm:text-xl md:text-2xl">📊</div>
                  <TrendingUp size={14} className="text-green-500 sm:w-4 sm:h-4" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">85%</h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Avg Attendance</p>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-orange-500 text-lg sm:text-xl md:text-2xl">⏱️</div>
                  <TrendingDown size={14} className="text-red-500 sm:w-4 sm:h-4" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">83%</h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Avg Work Hours</p>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-red-500 text-lg sm:text-xl md:text-2xl">🎯</div>
                  <TrendingUp size={14} className="text-green-500 sm:w-4 sm:h-4" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">3</h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Pending Leaves</p>
              </div>
            </div>
          </div>

          {/* Employee Overview */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6">
            <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">Employee Overview</h3>
            <div className="space-y-3 sm:space-y-4">
              {employees.map((employee, index) => (
                <div key={index} className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition">
                  <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ${employee.color} rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shrink-0 shadow-md`}>
                      {employee.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-gray-800 text-sm sm:text-base truncate">{employee.name}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{employee.department}</p>
                    </div>
                  </div>
                  <div className="text-right ml-2 shrink-0">
                    <p className="text-xs sm:text-sm text-gray-600">
                      <span className="font-semibold">{employee.attendance}</span>
                      <span className="hidden sm:inline"> Att.</span>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      <span className="font-semibold">{employee.performance}</span>
                      <span className="hidden sm:inline"> Perf.</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Department Performance */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6">
            <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">Department Performance</h3>
            <div className="space-y-4 sm:space-y-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">Operational</span>
                  <span className="text-xs sm:text-sm font-bold text-gray-800">88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 sm:h-3 overflow-hidden">
                  <div className="g-gradient-to-r from-purple-500 to-purple-600 h-full rounded-full transition-all duration-500 shadow-sm" style={{width: '88%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">Marketing</span>
                  <span className="text-xs sm:text-sm font-bold text-gray-800">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 sm:h-3 overflow-hidden">
                  <div className="g-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-500 shadow-sm" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* HR Document Locker */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6">
            <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base md:text-lg">
              <FileText size={18} className="sm:w-5 sm:h-5" />
              HR Document Locker
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition cursor-pointer group" onClick={() => handleDocumentClick(doc.title)}>
                  <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-purple-200 transition">
                      <doc.icon size={16} className="text-purple-600 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-gray-800 text-xs sm:text-sm truncate">{doc.title}</p>
                      {doc.subtitle && <p className="text-xs text-gray-500 truncate">{doc.subtitle}</p>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-purple-600 font-medium hidden sm:inline">🔒 OTP</span>
                    <Download size={16} className="text-purple-400 group-hover:text-purple-600 transition shrink-0 sm:w-5 sm:h-5" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Info Text */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-center text-gray-500 flex items-center justify-center gap-2">
                <span className="text-purple-600">🔒</span>
                Click on any document to verify with OTP and download
              </p>
            </div>
          </div>

          {/* Training Resources */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6">
            <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base md:text-lg">
              <Video size={18} className="sm:w-5 sm:h-5" />
              Training Resources
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {trainingResources.map((resource, index) => (
                <div key={index} className="flex items-center justify-between p-3 sm:p-4 g-gradient-to-r from-purple-50 to-blue-50 rounded-lg sm:rounded-xl hover:shadow-md transition cursor-pointer border border-purple-100">
                  <div className="flex items-center gap-2 sm:gap-3 flex-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0">
                      <resource.icon size={16} className="text-purple-600 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-xs sm:text-sm">{resource.title}</p>
                      <p className="text-xs text-gray-500">{resource.type}</p>
                    </div>
                  </div>
                  <div className="text-purple-600 font-bold text-lg sm:text-xl">→</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* OTP Modal */}
      {otpModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-60 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-sm w-full p-5 sm:p-6 md:p-8 animate-fadeIn">
            <div className="text-center mb-5 sm:mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl md:text-4xl">🔒</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">Verify OTP</h3>
              <p className="text-xs sm:text-sm text-gray-600 px-2">
                Enter OTP to download:
              </p>
              <p className="text-xs sm:text-sm font-semibold text-purple-700 mt-1 truncate px-2">
                "{selectedDocument}"
              </p>
            </div>

            <div className="mb-5 sm:mb-6">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                maxLength={6}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-center text-xl sm:text-2xl md:text-3xl font-bold border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-purple-500 focus:outline-none tracking-widest"
              />
            </div>

            <div className="mb-5 sm:mb-6 text-center">
              {canResend ? (
                <button 
                  onClick={handleResendOtp}
                  className="text-xs sm:text-sm text-purple-600 hover:text-purple-700 font-semibold"
                >
                  Resend the OTP
                </button>
              ) : (
                <p className="text-xs sm:text-sm text-gray-600">
                  Resend the OTP in{' '}
                  <span className="font-semibold text-purple-600">
                    {String(Math.floor(timer / 60)).padStart(2, '0')}:{String(timer % 60).padStart(2, '0')}
                  </span>
                </p>
              )}
            </div>

            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={() => {
                  setOtpModalOpen(false);
                  setSelectedDocument(null);
                  setOtp('');
                  setTimer(60);
                  setCanResend(false);
                }}
                className="flex-1 py-2.5 sm:py-3 md:py-3.5 px-3 sm:px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl transition"
              >
                Cancel
              </button>
              <button
                onClick={handleVerifyOtp}
                disabled={otp.length !== 6}
                className="flex-1 py-2.5 sm:py-3 md:py-3.5 px-3 sm:px-4 bg-purple-900 hover:bg-purple-800 text-white text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}