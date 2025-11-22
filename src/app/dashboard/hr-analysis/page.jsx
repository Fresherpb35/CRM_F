"use client"

import React, { useState, useEffect } from 'react';
import { FileText, Video, Menu } from 'lucide-react';
import Sidebar from '@/components/ui/sidebar';

export default function HRManagementPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  // Timer countdown
  useEffect(() => {
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

  const handleEmployeeClick = (employee) => {
    // Create URL-friendly ID from employee name
    const employeeId = employee.name.toLowerCase().replace(/\s+/g, '-');
    window.location.href = `/dashboard/hr-analysis/${employeeId}`;
  };

  const statsCards = [
    { label: 'Employees', value: '25', icon: '👥', color: 'bg-blue-50', textColor: 'text-blue-600' },
    { label: 'Avg Attendance', value: '85%', icon: '✅', color: 'bg-green-50', textColor: 'text-green-600' },
    { label: 'Avg Performance', value: '89%', icon: '📊', color: 'bg-purple-50', textColor: 'text-purple-600' },
    { label: 'Training Completed', value: '8', icon: '🎓', color: 'bg-orange-50', textColor: 'text-orange-600' }
  ];

  const employees = [
    { name: 'Rahul Mishra', role: 'Training Officer', attendance: '97%', performance: '87%', initials: 'RM', color: 'bg-indigo-500', status: 'Active' },
    { name: 'Ramesh Sharma', role: 'Sales Executive', attendance: '96%', performance: '88%', initials: 'RS', color: 'bg-purple-500', status: 'Active' },
    { name: 'Priya Mehta', role: 'Operation Lead', attendance: '89%', performance: '85%', initials: 'PM', color: 'bg-blue-500', status: 'Active' },
    { name: 'Amit Kumar', role: 'Marketing Exec', attendance: '95%', performance: '95%', initials: 'AK', color: 'bg-pink-500', status: 'Active' },
    { name: 'Nikhil Goyal', role: 'Consultant', attendance: '94%', performance: '92%', initials: 'NG', color: 'bg-cyan-500', status: 'Active' }
  ];

  const documents = [
    { title: 'Employees Resume', subtitle: 'All Documents', icon: FileText },
    { title: 'Offer Letters', subtitle: 'HR Documents', icon: FileText },
    { title: 'Company Policies', subtitle: 'HR Documents', icon: FileText }
  ];

  const trainingResources = [
    { title: 'SOP Training Module', subtitle: 'AI generated MCQ tests', type: 'Watch Test →', color: 'bg-blue-50', textColor: 'text-blue-600' },
    { title: 'Video Tutorials', subtitle: 'Training series', type: 'Watch Videos →', color: 'bg-green-50', textColor: 'text-green-600' },
    { title: 'Document Library', subtitle: 'Reference materials', type: 'Download PDFs →', color: 'bg-purple-50', textColor: 'text-purple-600' }
  ];

  const departmentPerformance = [
    { name: 'Sales', team: '8 people', percentage: 92, color: 'bg-blue-500' },
    { name: 'Operation', team: '12 people', percentage: 98, color: 'bg-cyan-500' },
    { name: 'Marketing', team: '5 people', percentage: 86, color: 'bg-purple-500' }
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Reusable Sidebar Component */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeMenuItem="HR Analytics"
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 shrink-0 z-30">
          <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 xl:px-10 py-3 lg:py-4">
            <div className="flex items-center gap-3 lg:gap-4">
              <button 
                onClick={() => setSidebarOpen(true)} 
                className="lg:hidden text-gray-700 hover:bg-gray-100 p-2 rounded-lg transition"
              >
                <Menu size={24} />
              </button>
              <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800">HR Management</h1>
            </div>
            <button className="bg-purple-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg text-sm lg:text-base font-medium hover:bg-purple-700 transition whitespace-nowrap">
              Add employee
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto scrollbar-hide p-4 md:p-6 lg:p-8 xl:p-10">
          <div className="max-w-[1600px] mx-auto space-y-6 lg:space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {statsCards.map((stat, index) => (
                <div key={index} className={`${stat.color} rounded-xl p-4 sm:p-5 lg:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow`}>
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl lg:text-4xl">{stat.icon}</span>
                  </div>
                  <h2 className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 lg:mb-2 ${stat.textColor}`}>{stat.value}</h2>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Left Column - Documents & Training */}
              <div className="space-y-6 lg:space-y-8">
                {/* HR Document Locker */}
                <div className="bg-white rounded-xl shadow-sm p-5 lg:p-6 xl:p-7 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-5">
                    <FileText size={20} className="text-gray-700 lg:w-6 lg:h-6" />
                    <h3 className="font-bold text-gray-900 text-base lg:text-lg xl:text-xl">HR document Locker</h3>
                  </div>
                  <div className="space-y-3 lg:space-y-4">
                    {documents.map((doc, index) => (
                      <button
                        key={index}
                        onClick={() => handleDocumentClick(doc.title)}
                        className="w-full flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                      >
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                          <doc.icon size={20} className="text-blue-600 lg:w-6 lg:h-6" />
                        </div>
                        <div className="flex-1 min-w-0 text-left">
                          <p className="font-semibold text-gray-900 text-sm lg:text-base truncate">{doc.title}</p>
                          <p className="text-xs lg:text-sm text-gray-500 truncate">{doc.subtitle}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 lg:mt-5 pt-4 lg:pt-5 border-t border-gray-200">
                    <p className="text-xs lg:text-sm text-center text-gray-500">
                      Protected by OTP
                    </p>
                  </div>
                </div>

                {/* Training Resources */}
                <div className="bg-white rounded-xl shadow-sm p-5 lg:p-6 xl:p-7 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-5">
                    <Video size={20} className="text-gray-700 lg:w-6 lg:h-6" />
                    <h3 className="font-bold text-gray-900 text-base lg:text-lg xl:text-xl">Training Resources</h3>
                  </div>
                  <div className="space-y-3 lg:space-y-4">
                    {trainingResources.map((resource, index) => (
                      <button key={index} className={`w-full ${resource.color} border border-gray-200 rounded-lg p-4 lg:p-5 cursor-pointer hover:shadow-md transition text-left`}>
                        <p className="font-semibold text-gray-900 text-sm lg:text-base mb-1 lg:mb-2">{resource.title}</p>
                        <p className="text-xs lg:text-sm text-gray-600 mb-2 lg:mb-3">{resource.subtitle}</p>
                        <p className={`text-xs lg:text-sm font-medium ${resource.textColor}`}>{resource.type}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Employees & Performance */}
              <div className="lg:col-span-2 space-y-6 lg:space-y-8">
                {/* Employee Overview */}
                <div className="bg-white rounded-xl shadow-sm p-5 lg:p-6 xl:p-7 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4 lg:mb-6">
                    <h3 className="font-bold text-gray-900 text-base lg:text-lg xl:text-xl">Employee Overview</h3>
                    <a
                      href="/dashboard/employee-report"
                      className="text-sm lg:text-base text-purple-600 font-medium hover:text-purple-700 cursor-pointer"
                    >
                      VIEW ALL
                    </a>
                  </div>
                  <div className="space-y-3 lg:space-y-4">
                    {employees.map((employee, index) => (
                      <button
                        key={index}
                        onClick={() => handleEmployeeClick(employee)}
                        className="w-full flex items-center justify-between p-3 lg:p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                      >
                        <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
                          <div className={`w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 ${employee.color} rounded-full flex items-center justify-center text-white font-bold text-sm lg:text-base shrink-0 shadow-md`}>
                            {employee.initials}
                          </div>
                          <div className="min-w-0 flex-1 text-left">
                            <p className="font-semibold text-gray-900 text-sm lg:text-base truncate">{employee.name}</p>
                            <p className="text-xs lg:text-sm text-gray-500">{employee.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 lg:gap-6 xl:gap-8 shrink-0 ml-3">
                          <div className="text-center hidden sm:block">
                            <p className="text-xs lg:text-sm font-bold text-gray-900">{employee.attendance}</p>
                            <p className="text-xs lg:text-sm text-gray-500">Attendance</p>
                          </div>
                          <div className="text-center hidden sm:block">
                            <p className="text-xs lg:text-sm font-bold text-gray-900">{employee.performance}</p>
                            <p className="text-xs lg:text-sm text-gray-500">Performance</p>
                          </div>
                          <span className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 rounded-md text-xs lg:text-sm font-medium text-green-600 bg-green-50">
                            {employee.status}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Department Performance */}
                <div className="bg-white rounded-xl shadow-sm p-5 lg:p-6 xl:p-7 border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-5 lg:mb-6 text-base lg:text-lg xl:text-xl">Department Performance</h3>
                  <div className="space-y-5 lg:space-y-6">
                    {departmentPerformance.map((dept, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2 lg:mb-3">
                          <div>
                            <p className="text-sm lg:text-base font-semibold text-gray-900">{dept.name}</p>
                            <p className="text-xs lg:text-sm text-gray-500">{dept.team}</p>
                          </div>
                          <span className="text-sm lg:text-base xl:text-lg font-bold text-gray-900">{dept.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 lg:h-2.5 overflow-hidden">
                          <div className={`${dept.color} h-full rounded-full transition-all duration-500`} style={{width: `${dept.percentage}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* OTP Modal */}
      {otpModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-sm lg:max-w-md w-full p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-6 lg:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-5">
                <span className="text-3xl sm:text-4xl lg:text-5xl">🔒</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 lg:mb-3">Verify OTP</h3>
              <p className="text-sm lg:text-base text-gray-600">
                Enter OTP to download:
              </p>
              <p className="text-sm lg:text-base font-semibold text-purple-700 mt-1 lg:mt-2 truncate px-2">
                "{selectedDocument}"
              </p>
            </div>

            <div className="mb-6 lg:mb-8">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                maxLength={6}
                className="w-full px-4 py-3 sm:py-4 lg:py-5 text-center text-2xl sm:text-3xl lg:text-4xl font-bold border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none tracking-widest"
              />
            </div>

            <div className="mb-6 lg:mb-8 text-center">
              {canResend ? (
                <button 
                  onClick={handleResendOtp}
                  className="text-sm lg:text-base text-purple-600 hover:text-purple-700 font-semibold"
                >
                  Resend the OTP
                </button>
              ) : (
                <p className="text-sm lg:text-base text-gray-600">
                  Resend the OTP in{' '}
                  <span className="font-semibold text-purple-600">
                    {String(Math.floor(timer / 60)).padStart(2, '0')}:{String(timer % 60).padStart(2, '0')}
                  </span>
                </p>
              )}
            </div>

            <div className="flex gap-3 lg:gap-4">
              <button
                onClick={() => {
                  setOtpModalOpen(false);
                  setSelectedDocument(null);
                  setOtp('');
                  setTimer(60);
                  setCanResend(false);
                }}
                className="flex-1 py-3 lg:py-4 px-4 lg:px-6 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm lg:text-base font-semibold rounded-xl transition"
              >
                Cancel
              </button>
              <button
                onClick={handleVerifyOtp}
                disabled={otp.length !== 6}
                className="flex-1 py-3 lg:py-4 px-4 lg:px-6 bg-purple-600 hover:bg-purple-700 text-white text-sm lg:text-base font-semibold rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}

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