"use client"
import React, { useState } from 'react';
import { ChevronLeft, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function EmployeeReportPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  // Employee data
  const [employees] = useState([
    {
      id: 1,
      name: 'Rahul Mishra',
      position: 'Training Officer',
      initials: 'RM',
      bgColor: 'bg-purple-700',
      status: 'Active',
      attendance: '97%',
      performance: '87%'
    },
    {
      id: 2,
      name: 'Anil Singh',
      position: 'Manager',
      initials: 'AS',
      bgColor: 'bg-purple-800',
      status: 'Active',
      attendance: '97%',
      performance: '87%'
    },
    {
      id: 3,
      name: 'Sneha Aggarwal',
      position: 'Training Officer',
      initials: 'SA',
      bgColor: 'bg-purple-700',
      status: 'Active',
      attendance: '97%',
      performance: '87%'
    },
    {
      id: 4,
      name: 'Jyoti Sharma',
      position: 'Sales Exec',
      initials: 'JS',
      bgColor: 'bg-purple-700',
      status: 'Active',
      attendance: '97%',
      performance: '87%'
    },
    {
      id: 5,
      name: 'Anita Sehgal',
      position: 'Sales person',
      initials: 'AS',
      bgColor: 'bg-purple-800',
      status: 'Active',
      attendance: '97%',
      performance: '87%'
    },
    {
      id: 6,
      name: 'Priya Mehta',
      position: 'Verifier',
      initials: 'PM',
      bgColor: 'bg-purple-700',
      status: 'Active',
      attendance: '97%',
      performance: '87%'
    }
  ]);

  const handleBack = () => {
    router.back();
  };

  const handleExportReport = () => {
    // Export functionality - can be customized
    window.print();
  };

  const handleEmployeeClick = (employeeId) => {
    router.push(`/dashboard/hr-analysis/${employeeId}`);
  };

  // Filter employees based on search query
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-linear-to-r from-purple-900 via-indigo-900 to-purple-900 text-white shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center gap-4">
          <button 
            onClick={handleBack}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl sm:text-2xl font-bold">Employee Report</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Search Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for employee here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-800 placeholder-gray-400 shadow-sm"
            />
          </div>
        </div>

        {/* Employee List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <button
                key={employee.id}
                onClick={() => handleEmployeeClick(employee.id)}
                className="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-4 sm:p-5 lg:p-6 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  {/* Avatar and Info */}
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className={`${employee.bgColor} w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shrink-0`}>
                      {employee.initials}
                    </div>
                    <div className="min-w-0 flex-1 text-left">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                        {employee.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 truncate">
                        {employee.position}
                      </p>
                    </div>
                  </div>

                  {/* Status and Metrics */}
                  <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-auto">
                    {/* Status Badge */}
                    <div className="shrink-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        {employee.status}
                      </span>
                    </div>

                    {/* Attendance */}
                    <div className="text-center shrink-0">
                      <div className="text-lg sm:text-xl font-bold text-gray-900">
                        {employee.attendance}
                      </div>
                      <div className="text-xs text-gray-500">Attendance</div>
                    </div>

                    {/* Performance */}
                    <div className="text-center shrink-0">
                      <div className="text-lg sm:text-xl font-bold text-gray-900">
                        {employee.performance}
                      </div>
                      <div className="text-xs text-gray-500">Performance</div>
                    </div>
                  </div>
                </div>
              </button>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No employees found matching your search.</p>
            </div>
          )}
        </div>

        {/* Summary Footer */}
        {filteredEmployees.length > 0 && (
          <div className="max-w-4xl mx-auto mt-8 p-4 bg-white rounded-xl shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm sm:text-base">
                Total Employees: <span className="font-semibold text-gray-900">{filteredEmployees.length}</span>
              </p>
              <button 
                className="w-full sm:w-auto px-6 py-2.5 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-colors font-medium shadow-sm"
                onClick={handleExportReport}
              >
                Export Report
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}