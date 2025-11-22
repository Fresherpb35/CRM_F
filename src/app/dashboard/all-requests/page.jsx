"use client"
import React, { useState } from 'react';
import { ChevronLeft, X } from 'lucide-react';

export default function AllRequestsPage() {
  const [requests] = useState([
    {
      id: 1,
      from: 'Anil Kumar',
      to: 'HR',
      description: 'Need access to Locker documents at once as I need to check...',
      time: '3:44 PM',
      status: 'normal'
    },
    {
      id: 2,
      from: 'Santosh Kumar',
      to: 'Admin',
      description: 'Access to personally integrate WhatsApp in this module to deal with...',
      time: '3:44 PM',
      status: 'normal'
    },
    {
      id: 3,
      from: 'Sneha Aggarwal',
      to: 'Admin',
      description: 'I want to make all links available to all without a company ID to...',
      time: '3:51 PM',
      status: 'rejected'
    },
    {
      id: 4,
      from: 'Anil Kumar',
      to: 'HR',
      description: 'Need access to Locker documents at once as I need to check...',
      time: '3:44 PM',
      status: 'normal'
    },
    {
      id: 5,
      from: 'Santosh Kumar',
      to: 'Admin',
      description: 'Access to personally integrate WhatsApp in this module to deal with...',
      time: '3:44 PM',
      status: 'normal'
    },
    {
      id: 6,
      from: 'Sneha Aggarwal',
      to: 'Admin',
      description: 'I want to make all links available to all without a company ID to...',
      time: '3:51 PM',
      status: 'rejected'
    }
  ]);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-linear-to-r from-indigo-950 via-indigo-900 to-indigo-950 text-white shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-4 py-5 flex items-center justify-center relative">
          <button 
            onClick={handleBack}
            className="absolute left-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft size={28} />
          </button>
          <h1 className="text-2xl font-bold tracking-wide">ALL REQUESTS</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-4 lg:p-8 max-w-7xl">
        {/* Table Header */}
        <div className="bg-white rounded-t-lg shadow-sm border-b">
          <div className="grid grid-cols-12 lg:grid-cols-24 gap-4 px-6 py-4">
            <div className="col-span-2 lg:col-span-1 text-base lg:text-lg font-semibold text-gray-900">#</div>
            <div className="col-span-10 lg:col-span-4 text-base lg:text-lg font-semibold text-gray-900">From</div>
            <div className="hidden lg:block lg:col-span-3 text-lg font-semibold text-gray-900">To</div>
            <div className="hidden lg:block lg:col-span-13 text-lg font-semibold text-gray-900">Description</div>
            <div className="hidden lg:block lg:col-span-3 text-lg font-semibold text-gray-900 text-right">Time</div>
          </div>
        </div>

        {/* Request List */}
        <div className="bg-white rounded-b-lg shadow-sm">
          {requests.map((request, index) => (
            <div 
              key={request.id}
              className={`grid grid-cols-12 lg:grid-cols-24 gap-4 px-6 py-5 border-b last:border-b-0 hover:bg-gray-50 transition-colors ${
                request.status === 'rejected' ? 'bg-red-50 hover:bg-red-100' : ''
              }`}
            >
              {/* Request Number with Icon - Mobile & Desktop */}
              <div className="col-span-2 lg:col-span-1 flex items-center justify-start lg:justify-center">
                <div className="w-12 h-12 rounded-full bg-indigo-950 flex items-center justify-center text-white font-bold shrink-0">
                  <X size={24} />
                </div>
              </div>

              {/* Mobile Layout (< lg) */}
              <div className="col-span-10 lg:hidden space-y-2">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-base font-semibold text-gray-900">BY: {request.from}</span>
                      <span className="text-base font-semibold text-gray-900">TO: {request.to}</span>
                    </div>
                    <p className="text-base text-gray-600 mt-2">{request.description}</p>
                  </div>
                  <div className="text-sm text-gray-500 ml-4 whitespace-nowrap">{request.time}</div>
                </div>
              </div>

              {/* Desktop Layout (lg+) */}
              <div className="hidden lg:flex lg:col-span-4 items-center">
                <span className="text-base font-semibold text-gray-900">{request.from}</span>
              </div>
              
              <div className="hidden lg:flex lg:col-span-3 items-center">
                <span className="text-base font-semibold text-gray-900">{request.to}</span>
              </div>
              
              <div className="hidden lg:flex lg:col-span-13 items-center">
                <p className="text-base text-gray-600">{request.description}</p>
              </div>
              
              <div className="hidden lg:flex lg:col-span-3 items-center justify-end">
                <span className="text-base text-gray-500 whitespace-nowrap">{request.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}