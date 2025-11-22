"use client"
import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

export default function SendRequestPage() {
  const [formData, setFormData] = useState({
    name: '',
    employeeId: '',
    sendTo: '',
    needAccessTo: '',
    purpose: ''
  });

  const [errors, setErrors] = useState({});

  const handleBack = () => {
    window.history.back();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.employeeId.trim()) {
      newErrors.employeeId = 'Employee ID is required';
    }
    if (!formData.sendTo.trim()) {
      newErrors.sendTo = 'Send to is required';
    }
    if (!formData.needAccessTo.trim()) {
      newErrors.needAccessTo = 'Need Access to is required';
    }
    if (!formData.purpose.trim()) {
      newErrors.purpose = 'Purpose is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Success message
      alert('Request submitted successfully!');
      
      // Reset form
      setFormData({
        name: '',
        employeeId: '',
        sendTo: '',
        needAccessTo: '',
        purpose: ''
      });
      
      // Navigate back or to dashboard
      // Uncomment if using Next.js router
      // router.push("/dashboard/profile");
    }
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
          <h1 className="text-2xl font-bold tracking-wide">SEND REQUEST</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-4 lg:p-8 max-w-5xl">
        <div className="bg-white rounded-lg shadow-lg p-6 lg:p-10">
          <div className="space-y-8">
            {/* Two Column Layout for larger screens */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-3 text-base lg:text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 lg:py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-base lg:text-lg transition-all"
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-sm lg:text-base mt-2">{errors.name}</p>}
              </div>

              {/* Employee ID Field */}
              <div>
                <label htmlFor="employeeId" className="block text-gray-700 font-semibold mb-3 text-base lg:text-lg">
                  Employee ID
                </label>
                <input
                  type="text"
                  id="employeeId"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 lg:py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-base lg:text-lg transition-all"
                  placeholder="Enter employee ID"
                />
                {errors.employeeId && <p className="text-red-500 text-sm lg:text-base mt-2">{errors.employeeId}</p>}
              </div>
            </div>

            {/* Two Column Layout for Send To and Need Access To */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Send to Field */}
              <div>
                <label htmlFor="sendTo" className="block text-gray-700 font-semibold mb-3 text-base lg:text-lg">
                  Send to
                </label>
                <input
                  type="text"
                  id="sendTo"
                  name="sendTo"
                  value={formData.sendTo}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 lg:py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-base lg:text-lg transition-all"
                  placeholder="Enter recipient (e.g., HR, Admin)"
                />
                {errors.sendTo && <p className="text-red-500 text-sm lg:text-base mt-2">{errors.sendTo}</p>}
              </div>

              {/* Need Access to Field */}
              <div>
                <label htmlFor="needAccessTo" className="block text-gray-700 font-semibold mb-3 text-base lg:text-lg">
                  Need Access to
                </label>
                <input
                  type="text"
                  id="needAccessTo"
                  name="needAccessTo"
                  value={formData.needAccessTo}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 lg:py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-base lg:text-lg transition-all"
                  placeholder="Enter what you need access to"
                />
                {errors.needAccessTo && <p className="text-red-500 text-sm lg:text-base mt-2">{errors.needAccessTo}</p>}
              </div>
            </div>

            {/* Purpose Field - Full Width */}
            <div>
              <label htmlFor="purpose" className="block text-gray-700 font-semibold mb-3 text-base lg:text-lg">
                Purpose and Other Details
              </label>
              <textarea
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                rows="8"
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-base lg:text-lg resize-none transition-all"
                placeholder="Enter purpose and other details..."
              ></textarea>
              {errors.purpose && <p className="text-red-500 text-sm lg:text-base mt-2">{errors.purpose}</p>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-6">
              <button
                onClick={handleSubmit}
                className="px-10 lg:px-12 py-3.5 lg:py-4 bg-indigo-950 text-white rounded-lg hover:bg-indigo-900 transition-all font-semibold text-base lg:text-lg shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm lg:text-base">
            Need help? Contact your administrator for assistance with access requests.
          </p>
        </div>
      </div>
    </div>
  );
}