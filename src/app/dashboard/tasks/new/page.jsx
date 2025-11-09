'use client';

import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function NewTaskPage() {
  const [formData, setFormData] = useState({
    title: '',
    time: '10:00 AM',
    day: 'Friday',
    priority: 'MEDIUM',
    clientName: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    serviceRequired: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTaskId = Date.now();
    console.log('Task Created:', formData);
    // Redirect to task info page
    window.location.href = `/dashboard/tasks/${newTaskId}`;
  };

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
        <h1 className="text-white text-xl font-bold tracking-wide">NEW TASK</h1>
      </div>

      {/* Form Container */}
      <div className="max-w-2xl mx-auto p-4 md:p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">

          {/* Task Details Section */}
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-4">Task Details</h2>
            
            <input
              type="text"
              name="title"
              placeholder="Enter task title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-3"
            />

            <div className="grid grid-cols-2 gap-3 mb-4">
              <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <input
                type="text"
                name="day"
                value={formData.day}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Priority */}
            <div className="mb-2">
              <p className="text-sm font-semibold text-gray-700 mb-3">Priority:</p>
              <div className="flex gap-8">
                {[
                  { value: 'HIGH', label: 'HIGH', color: 'text-red-500' },
                  { value: 'MEDIUM', label: 'MEDIUM', color: 'text-green-500' },
                  { value: 'LOW', label: 'LOW', color: 'text-blue-500' }
                ].map(p => (
                  <label key={p.value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="priority"
                      value={p.value}
                      checked={formData.priority === p.value}
                      onChange={handleChange}
                      className="w-5 h-5 text-purple-600 focus:ring-purple-500"
                    />
                    <span className={`text-sm font-semibold ${p.color}`}>
                      {p.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Client Information Section */}
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-4">Client Information</h2>

            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  name="clientName"
                  placeholder="Enter Name"
                  value={formData.clientName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <input
                  type="text"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <input
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone No."
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <input
                type="text"
                name="serviceRequired"
                placeholder="Service Required"
                value={formData.serviceRequired}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Details Section */}
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-4">Details</h2>
            <textarea
              name="details"
              placeholder="Enter detailed information"
              value={formData.details}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-linear-to-r from-purple-900 to-purple-800 text-white py-3.5 rounded-lg font-semibold hover:from-purple-800 hover:to-purple-700 transition shadow-lg text-base"
          >
            Create Task
          </button>

        </div>
      </div>
    </div>
  );
}