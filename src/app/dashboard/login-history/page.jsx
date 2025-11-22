"use client"
import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

export default function LoginHistoryPage() {
  const [loginHistory] = useState([
    {
      date: 'Tuesday, November 4 2025',
      sessions: [
        { time: '10:00 AM', employeeId: 'EM P101', name: 'Ajay Kumar', session: '10 hrs' },
        { time: '9:56 AM', employeeId: 'EM P102', name: 'Rahul Mishra', session: '7 hrs' },
        { time: '9:56 AM', employeeId: 'EM P103', name: 'Pooja Mehta', session: '7 hrs' },
        { time: '9:53 AM', employeeId: 'EM P104', name: 'Jagdish Pal', session: '11 hrs' },
        { time: '9:52 AM', employeeId: 'EM P105', name: 'Om Prakash', session: '8 hrs' },
        { time: '9:52 AM', employeeId: 'EM P106', name: 'Rakesh Mishra', session: '7 hrs' },
        { time: '9:51 AM', employeeId: 'EM P107', name: 'Priya Sharma', session: '7 hrs' },
        { time: '9:50 AM', employeeId: 'EM P108', name: 'Atul Kumar', session: '7 hrs' },
        { time: '9:50 AM', employeeId: 'EM P109', name: 'Ajeet Khattar', session: '9 hrs' },
        { time: '9:50 AM', employeeId: 'EM P111', name: 'Sneha Aggarwal', session: '8 hrs' },
        { time: '9:50 AM', employeeId: 'EM T101', name: 'Pulkit Mittal', session: '9 hrs' },
        { time: '9:48 AM', employeeId: 'EM T102', name: 'Vipin Bhatiya', session: '7 hrs' },
        { time: '9:47 AM', employeeId: 'EM T103', name: 'Pushpak Singh', session: '8 hrs' },
        { time: '9:45 AM', employeeId: 'EM S101', name: 'Santosh Kumar', session: '8 hrs' },
        { time: '9:45 AM', employeeId: 'EM S102', name: 'Anita Sehgal', session: '9 hrs' },
        { time: '9:31 AM', employeeId: 'EM S103', name: 'Jyoti Sharma', session: '8 hrs' },
        { time: '9:30 AM', employeeId: 'EM S104', name: 'Nikhil Singh', session: '7 hrs' },
      ]
    },
    {
      date: 'Monday, November 3 2025',
      sessions: [
        { time: '10:00 AM', employeeId: 'EM P101', name: 'Ajay Kumar', session: '10 hrs' },
        { time: '9:56 AM', employeeId: 'EM P102', name: 'Rahul Mishra', session: '7 hrs' },
        { time: '9:56 AM', employeeId: 'EM P103', name: 'Pooja Mehta', session: '7 hrs' },
        { time: '9:53 AM', employeeId: 'EM P104', name: 'Jagdish Pal', session: '11 hrs' },
        { time: '9:52 AM', employeeId: 'EM P105', name: 'Om Prakash', session: '8 hrs' },
        { time: '9:52 AM', employeeId: 'EM P106', name: 'Rakesh Mishra', session: '7 hrs' },
        { time: '9:51 AM', employeeId: 'EM P107', name: 'Priya Sharma', session: '7 hrs' },
        { time: '9:50 AM', employeeId: 'EM P108', name: 'Atul Kumar', session: '7 hrs' },
        { time: '9:50 AM', employeeId: 'EM P109', name: 'Ajeet Khattar', session: '9 hrs' },
      ]
    }
  ]);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-linear-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center relative">
          <button 
            onClick={handleBack}
            className="absolute left-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">LOGIN HISTORY</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-4 lg:p-6">
        {loginHistory.map((dayData, index) => (
          <div key={index} className="mb-8">
            {/* Date Header */}
            <div className="bg-gray-200 px-4 py-2 mb-2">
              <h2 className="text-base font-semibold text-gray-900">{dayData.date}</h2>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Time</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Employee ID</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Employee Name</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">Session</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {dayData.sessions.map((session, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 text-sm text-gray-900">{session.time}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{session.employeeId}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{session.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-900 text-right">{session.session}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}