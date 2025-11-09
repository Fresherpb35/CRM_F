'use client';

import { ArrowLeft, Mail, User, Phone } from 'lucide-react';
import { useState } from 'react';

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

  const handleBack = () => {
    // Redirect back to tasks page
    window.location.href = '/dashboard/tasks';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <div className="sticky top-0 z-50 bg-linear-to-r from-purple-900 to-purple-800 px-4 py-4 flex items-center gap-3 shadow-lg">
        <button 
          onClick={handleBack}
          className="text-white hover:bg-white/10 p-2 rounded-lg transition"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-white text-lg md:text-xl font-bold">{taskData.title}</h1>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto p-4 md:p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 md:p-6 space-y-6">

          {/* Task Details */}
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-gray-700 text-sm">Time:</span>
              <span className="text-gray-900 text-sm">{taskData.time}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-gray-700 text-sm">Priority:</span>
              <span className={`font-bold text-sm ${
                taskData.priority === 'HIGH' ? 'text-red-500' : 
                taskData.priority === 'MEDIUM' ? 'text-green-500' : 
                'text-blue-500'
              }`}>
                {taskData.priority}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-gray-700 text-sm">Assigned to:</span>
              <span className="text-gray-900 text-sm">{taskData.assignedTo}</span>
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Client Information */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-4">Client Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <User size={18} className="text-gray-500 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{taskData.clientInfo.name}</p>
                  <p className="text-xs text-gray-600">{taskData.clientInfo.age} ({taskData.clientInfo.gender})</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gray-500 shrink-0" />
                <span className="text-sm text-gray-700">{taskData.clientInfo.email}</span>
              </div>
              {taskData.clientInfo.phone && (
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gray-500 shrink-0" />
                  <span className="text-sm text-gray-700">{taskData.clientInfo.phone}</span>
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Service Required */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-gray-700 text-sm">Service Enquired:</span>
              <span className="text-gray-900 text-sm font-medium">{taskData.serviceRequired}</span>
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Details */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-3">Details</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{taskData.details}</p>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Objectives of Follow-up */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-3">Objectives of Follow-up</h3>
            <ul className="space-y-2.5">
              {taskData.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-0.5 shrink-0">•</span>
                  <span className="text-sm text-gray-700 leading-relaxed">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Next Steps */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-3">Next Steps</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{taskData.nextSteps}</p>
          </div>

         

        </div>
      </div>
    </div>
  );
}