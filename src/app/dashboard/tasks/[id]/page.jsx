'use client';

import { ArrowLeft, Mail, User, Phone } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function TaskDetailPage() {
  // Mock task ID - in real app this would come from URL params
  const taskId = '1234567890';
  
  const [taskData] = useState({
    id: taskId,
    title: 'Tasks',
    time: '10:00 AM, Thursday',
    priority: 'HIGH',
    clientInfo: {
      name: 'Niharika Rastogi',
      age: '26',
      gender: 'F',
      email: 'niharika.work@gmail.com',
      phone: '+91 98765 43210'
    },
    serviceRequired: 'Business Loan',
    assignedTo: 'You',
    details: `Niharika recently filled out an online inquiry form expressing interest in a business loan with flexible repayment options and minimal documentation requirement. The lead was sent via email to her on 12th October, but no response has been received yet.`,
    objectives: [
      'Confirm her business requirements and loan amount.',
      'Discuss the loan plans, eligibility, and processing time.',
      "Schedule a virtual consultation if she's interested.",
      'Encourage her to upload necessary KYC and business documents.'
    ],
    nextSteps: `Update the call outcome (interested/not interested/unreachable). Add call notes and document any discussion regarding loan eligibility.`
  });

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <div className="sticky top-0 z-50 bg-linear-to-r from-purple-900 to-purple-800 px-4 lg:px-6 py-4 lg:py-5 flex items-center gap-3 shadow-lg">
        <Link 
          href="/dashboard/tasks"
          className="text-white hover:bg-white/10 p-2 rounded-lg transition"
        >
          <ArrowLeft size={20} className="lg:w-6 lg:h-6" />
        </Link>
        <h1 className="text-white text-lg md:text-xl lg:text-2xl font-bold">{taskData.title}</h1>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8 xl:p-10">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 md:p-6 lg:p-8 xl:p-10 space-y-6 lg:space-y-8">

          {/* Task Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-gray-700 text-sm lg:text-base">Time:</span>
              <span className="text-gray-900 text-sm lg:text-base">{taskData.time}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-gray-700 text-sm lg:text-base">Priority:</span>
              <span className={`font-bold text-sm lg:text-base ${
                taskData.priority === 'HIGH' ? 'text-red-500' : 
                taskData.priority === 'MEDIUM' ? 'text-green-500' : 
                'text-blue-500'
              }`}>
                {taskData.priority}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-gray-700 text-sm lg:text-base">Assigned to:</span>
              <span className="text-gray-900 text-sm lg:text-base">{taskData.assignedTo}</span>
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Client Information */}
          <div>
            <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-4 lg:mb-5">Client Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <div className="flex items-center gap-3 lg:gap-4">
                <User size={18} className="text-gray-500 shrink-0 lg:w-5 lg:h-5" />
                <div>
                  <p className="text-sm lg:text-base font-semibold text-gray-900">{taskData.clientInfo.name}</p>
                  <p className="text-xs lg:text-sm text-gray-600">{taskData.clientInfo.age} ({taskData.clientInfo.gender})</p>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-4">
                <Mail size={18} className="text-gray-500 shrink-0 lg:w-5 lg:h-5" />
                <span className="text-sm lg:text-base text-gray-700 break-all">{taskData.clientInfo.email}</span>
              </div>
              {taskData.clientInfo.phone && (
                <div className="flex items-center gap-3 lg:gap-4 md:col-span-2 lg:col-span-1">
                  <Phone size={18} className="text-gray-500 shrink-0 lg:w-5 lg:h-5" />
                  <span className="text-sm lg:text-base text-gray-700">{taskData.clientInfo.phone}</span>
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Service Required */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-gray-700 text-sm lg:text-base">Service Enquired:</span>
              <span className="text-gray-900 text-sm lg:text-base font-medium">{taskData.serviceRequired}</span>
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Details */}
          <div>
            <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-3 lg:mb-4">Details</h3>
            <p className="text-sm lg:text-base text-gray-700 leading-relaxed lg:leading-relaxed">{taskData.details}</p>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Objectives of Follow-up */}
          <div>
            <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-3 lg:mb-4">Objectives of Follow-up</h3>
            <ul className="space-y-2.5 lg:space-y-3">
              {taskData.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3 lg:gap-4">
                  <span className="text-purple-600 font-bold mt-0.5 shrink-0 text-lg">•</span>
                  <span className="text-sm lg:text-base text-gray-700 leading-relaxed">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Next Steps */}
          <div>
            <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-3 lg:mb-4">Next Steps</h3>
            <p className="text-sm lg:text-base text-gray-700 leading-relaxed lg:leading-relaxed">{taskData.nextSteps}</p>
          </div>

        </div>
      </div>
    </div>
  );
}