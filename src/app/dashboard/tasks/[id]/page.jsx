'use client';

import { ArrowLeft, Mail, User } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';

export default function TaskDetailPage() {
  const router = useRouter();
  const params = useParams();

  // Mock data (Replace later with actual DB fetch)
  const taskData = {
    id: params.id,
    title: 'Task Title',
    time: '10:00 AM, Thursday',
    priority: 'HIGH',
    clientInfo: {
      name: 'Niharika Rastogi',
      age: '26 (F)',
      email: 'niharika.work@gmail.com'
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
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <div className="sticky top-0 z-40 g-gradient-to-r from-purple-900 to-indigo-900 p-4 flex items-center gap-4 shadow-lg">
        <button 
          onClick={() => router.back()}
          className="text-white hover:bg-white/10 p-2 rounded-lg transition"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-white text-xl font-bold">{taskData.title}</h1>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">

          {/* Task Details */}
          <div className="space-y-3 text-sm">
            <p><span className="font-semibold text-gray-600">Time: </span >{taskData.time}</p>
            <p><span className="font-semibold text-gray-600">Priority: </span>
              <span className="font-bold text-red-500">{taskData.priority}</span>
            </p>
            <p><span className="font-semibold text-gray-600">Assigned to: </span>{taskData.assignedTo}</p>
          </div>

          {/* Client Info */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 mb-3">Client Information:</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <User size={16} className="text-gray-500" />
                <span className="text-gray-800">{taskData.clientInfo.name}</span>
              </div>
              <div className="ml-6 text-gray-600">{taskData.clientInfo.age}</div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gray-500" />
                <span className="text-gray-600">{taskData.clientInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Service */}
          <div className="text-sm">
            <span className="font-semibold text-gray-600">Service Enquired: </span>
            {taskData.serviceRequired}
          </div>

          {/* Details */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 mb-2">Details:</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{taskData.details}</p>
          </div>

          {/* Objectives */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 mb-2">Objectives of Follow-up:</h3>
            <ul className="space-y-2">
              {taskData.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Next Steps */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 mb-2">Next Steps:</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{taskData.nextSteps}</p>
          </div>

     

        </div>
      </div>
    </div>
  );
}
