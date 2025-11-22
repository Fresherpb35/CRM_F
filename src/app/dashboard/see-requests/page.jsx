"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, X, AlertCircle, CheckCircle, Clock } from 'lucide-react';

// Status configuration
const STATUS_CONFIG = {
  pending: {
    color: 'bg-cyan-400',
    label: 'Pending',
    icon: Clock,
    textColor: 'text-cyan-600'
  },
  approved: {
    color: 'bg-green-400',
    label: 'Approved',
    icon: CheckCircle,
    textColor: 'text-green-600'
  },
  rejected: {
    color: 'bg-red-400',
    label: 'Rejected',
    icon: AlertCircle,
    textColor: 'text-red-600'
  }
};

// Request Card Component
const RequestCard = ({ request, onClick }) => {
  const statusConfig = STATUS_CONFIG[request.status];
  const StatusIcon = statusConfig.icon;
  
  return (
    <div 
      onClick={() => onClick(request)}
      className="grid grid-cols-12 lg:grid-cols-24 gap-4 px-6 py-5 border-b last:border-b-0 hover:bg-gray-50 transition-colors cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(request);
        }
      }}
      aria-label={`View request from ${request.from}`}
    >
      {/* Request Number with Icon */}
      <div className="col-span-2 lg:col-span-1 flex items-center justify-start lg:justify-center">
        <div className="w-12 h-12 rounded-full bg-indigo-950 flex items-center justify-center text-white font-bold shrink-0">
          <X size={24} />
        </div>
      </div>

      {/* Mobile Layout (< lg) */}
      <div className="col-span-9 lg:hidden space-y-2">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-base font-semibold text-gray-900">BY: {request.from}</span>
          <span className="text-base font-semibold text-gray-900">TO: {request.to}</span>
        </div>
        <p className="text-base text-gray-600 line-clamp-2">{request.description}</p>
        <p className="text-sm text-gray-500">{request.time}</p>
      </div>

      {/* Desktop Layout (lg+) */}
      <div className="hidden lg:flex lg:col-span-4 items-center">
        <span className="text-base font-semibold text-gray-900">{request.from}</span>
      </div>
      
      <div className="hidden lg:flex lg:col-span-3 items-center">
        <span className="text-base font-semibold text-gray-900">{request.to}</span>
      </div>
      
      <div className="hidden lg:flex lg:col-span-12 items-center">
        <p className="text-base text-gray-600">{request.description}</p>
      </div>
      
      <div className="hidden lg:flex lg:col-span-2 items-center justify-center">
        <span className="text-base text-gray-500 whitespace-nowrap">{request.time}</span>
      </div>

      {/* Status Indicator */}
      <div className="col-span-1 lg:col-span-2 flex items-center justify-end lg:justify-center">
        <div className="flex items-center gap-2">
          <div 
            className={`w-4 h-4 lg:w-5 lg:h-5 rounded-full ${statusConfig.color} flex items-center justify-center`}
            title={statusConfig.label}
          >
            <StatusIcon size={12} className="text-white hidden lg:block" />
          </div>
          <span className={`hidden lg:inline text-sm font-medium ${statusConfig.textColor}`}>
            {statusConfig.label}
          </span>
        </div>
      </div>
    </div>
  );
};

// Request Details Popup Component
const RequestDetailsPopup = ({ request, onClose, onApprove, onReject, isProcessing }) => {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const statusConfig = STATUS_CONFIG[request.status];

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Popup Header */}
        <div className="bg-linear-to-r from-indigo-950 via-indigo-900 to-indigo-950 text-white px-8 py-5 flex items-center justify-between">
          <h2 id="popup-title" className="text-xl font-bold">{request.fullDetails.needAccessTo}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded transition-colors"
            aria-label="Close dialog"
            disabled={isProcessing}
          >
            <X size={28} />
          </button>
        </div>

        {/* Popup Content */}
        <div className="p-8 space-y-6">
          {/* From Info */}
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <div className="text-sm text-gray-600 mb-2">From:</div>
              <div className="text-lg font-semibold text-gray-900">Name: {request.from}</div>
              <div className="text-base text-gray-900">Employee ID: {request.fullDetails.employeeId}</div>
            </div>
            <div className="text-right space-y-1">
              <div className="text-lg font-semibold text-gray-900">{request.time}</div>
              <div className="text-base text-gray-600">Thursday</div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-sm font-semibold text-gray-700">Status:</span>
            <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${statusConfig.color} text-white`}>
              {statusConfig.label}
            </span>
          </div>

          {/* Purpose */}
          <div className="pt-2">
            <div className="text-base font-semibold text-gray-900 mb-3">Purpose:</div>
            <p className="text-base text-gray-700 leading-relaxed">{request.fullDetails.purpose}</p>
          </div>

          {/* Action Buttons */}
          {request.status === 'pending' && (
            <div className="flex gap-4 pt-6">
              <button
                onClick={onReject}
                disabled={isProcessing}
                className="flex-1 px-8 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-colors font-semibold text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing...' : 'Reject'}
              </button>
              <button
                onClick={onApprove}
                disabled={isProcessing}
                className="flex-1 px-8 py-3 bg-indigo-950 text-white rounded-lg hover:bg-indigo-900 transition-colors font-semibold text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing...' : 'Approve'}
              </button>
            </div>
          )}

          {request.status !== 'pending' && (
            <div className="flex justify-end pt-6">
              <button
                onClick={onClose}
                disabled={isProcessing}
                className="px-10 py-3 bg-indigo-950 text-white rounded-lg hover:bg-indigo-900 transition-colors font-semibold text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Component
export default function ReviewRequestPage() {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [requests, setRequests] = useState([
    {
      id: 1,
      from: 'Anil Kumar',
      to: 'HR',
      description: 'Need access to HR locker documents at once as I need to check...',
      time: '3:44 PM',
      status: 'pending',
      fullDetails: {
        employeeId: 'EM P101',
        needAccessTo: 'HR Locker Documents',
        purpose: 'Need to verify employee records and update documentation for the quarterly review process.'
      }
    },
    {
      id: 2,
      from: 'Santosh Kumar',
      to: 'Admin',
      description: 'Access to personally integrate WhatsApp in this module to deal with...',
      time: '3:44 PM',
      status: 'approved',
      fullDetails: {
        employeeId: 'EM P102',
        needAccessTo: 'WhatsApp Integration Module',
        purpose: 'Need to integrate WhatsApp API for customer communication and support ticket management.'
      }
    },
    {
      id: 3,
      from: 'Sneha Aggarwal',
      to: 'Admin',
      description: 'To make training material available to all without a company ID to...',
      time: '3:11 PM',
      status: 'rejected',
      fullDetails: {
        employeeId: 'EM S102',
        needAccessTo: 'Training Materials Portal',
        purpose: 'Want to make training materials publicly accessible for external contractors and new hires.'
      }
    },
    {
      id: 4,
      from: 'Rahul Verma',
      to: 'IT',
      description: 'Need database access for migration project scheduled for next week...',
      time: '2:30 PM',
      status: 'pending',
      fullDetails: {
        employeeId: 'EM R205',
        needAccessTo: 'Production Database',
        purpose: 'Required for database migration project and to ensure smooth transition without data loss.'
      }
    },
    {
      id: 5,
      from: 'Priya Sharma',
      to: 'Finance',
      description: 'Access to financial reports and quarterly statements for audit preparation...',
      time: '1:15 PM',
      status: 'approved',
      fullDetails: {
        employeeId: 'EM P308',
        needAccessTo: 'Financial Reports System',
        purpose: 'Preparing for annual audit and need to compile quarterly financial statements and expense reports.'
      }
    },
    {
      id: 6,
      from: 'Amit Patel',
      to: 'Marketing',
      description: 'Request access to social media management tools for campaign launch...',
      time: '12:45 PM',
      status: 'pending',
      fullDetails: {
        employeeId: 'EM A410',
        needAccessTo: 'Social Media Management Platform',
        purpose: 'Need to schedule and manage posts for upcoming product launch campaign across multiple platforms.'
      }
    }
  ]);

  const handleBack = useCallback(() => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/dashboard/settings';
    }
  }, []);

  const handleRequestClick = useCallback((request) => {
    setSelectedRequest(request);
  }, []);

  const closePopup = useCallback(() => {
    if (!isProcessing) {
      setSelectedRequest(null);
    }
  }, [isProcessing]);

  const handleApprove = useCallback(async () => {
    if (!selectedRequest || isProcessing) return;
    
    setIsProcessing(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Update local state
      setRequests(prev => 
        prev.map(req => 
          req.id === selectedRequest.id 
            ? { ...req, status: 'approved' } 
            : req
        )
      );
      
      alert(`Request from ${selectedRequest.from} has been approved successfully!`);
      closePopup();
    } catch (error) {
      console.error('Error approving request:', error);
      alert('Failed to approve request. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  }, [selectedRequest, isProcessing, closePopup]);

  const handleReject = useCallback(async () => {
    if (!selectedRequest || isProcessing) return;
    
    setIsProcessing(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Update local state
      setRequests(prev => 
        prev.map(req => 
          req.id === selectedRequest.id 
            ? { ...req, status: 'rejected' } 
            : req
        )
      );
      
      alert(`Request from ${selectedRequest.from} has been rejected.`);
      closePopup();
    } catch (error) {
      console.error('Error rejecting request:', error);
      alert('Failed to reject request. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  }, [selectedRequest, isProcessing, closePopup]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-linear-to-r from-indigo-950 via-indigo-900 to-indigo-950 text-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-5 flex items-center justify-center relative">
          <button 
            onClick={handleBack}
            className="absolute left-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Go back to previous page"
          >
            <ChevronLeft size={28} />
          </button>
          <h1 className="text-2xl font-bold tracking-wide">REVIEW REQUEST</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 lg:p-8 max-w-7xl">
        {/* Table Header */}
        <div className="bg-white rounded-t-lg shadow-sm border-b">
          <div className="grid grid-cols-12 lg:grid-cols-24 gap-4 px-6 py-4">
            <div className="col-span-2 lg:col-span-1 text-base lg:text-lg font-semibold text-gray-900">#</div>
            <div className="col-span-9 lg:col-span-4 text-base lg:text-lg font-semibold text-gray-900">From</div>
            <div className="hidden lg:block lg:col-span-3 text-lg font-semibold text-gray-900">To</div>
            <div className="hidden lg:block lg:col-span-12 text-lg font-semibold text-gray-900">Description</div>
            <div className="hidden lg:block lg:col-span-2 text-lg font-semibold text-gray-900 text-center">Time</div>
            <div className="col-span-1 lg:col-span-2 text-base lg:text-lg font-semibold text-gray-900 text-right lg:text-center">Status</div>
          </div>
        </div>

        {/* Request List */}
        <div className="bg-white rounded-b-lg shadow-sm">
          {requests.length > 0 ? (
            requests.map((request) => (
              <RequestCard 
                key={request.id} 
                request={request} 
                onClick={handleRequestClick} 
              />
            ))
          ) : (
            <div className="px-6 py-12 text-center text-gray-500">
              <p className="text-lg">No requests found.</p>
            </div>
          )}
        </div>
      </main>

      {/* Request Details Popup */}
      {selectedRequest && (
        <RequestDetailsPopup
          request={selectedRequest}
          onClose={closePopup}
          onApprove={handleApprove}
          onReject={handleReject}
          isProcessing={isProcessing}
        />
      )}
    </div>
  );
}