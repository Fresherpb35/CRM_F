'use client';

import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewTaskPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    time: '2:00 PM',
    day: 'Friday',
    priority: 'MEDIUM',
    clientName: '',
    age: '',
    gender: '',
    email: '',
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
    router.push(`/dashboard/tasks/${newTaskId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Header */}
      <div className="sticky top-0 z-50 g-gradient-to-r from-purple-900 to-indigo-900 p-4 flex items-center gap-4 shadow-md">
        <button 
          onClick={() => router.back()}
          className="text-white hover:bg-white/10 p-2 rounded-lg transition"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-white text-lg md:text-xl font-semibold">Create New Task</h1>
      </div>

      {/* Form Container */}
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">

          {/* Task Title */}
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />

          {/* Time and Day */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="text"
              name="day"
              value={formData.day}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Priority */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">Priority:</p>
            <div className="flex flex-wrap gap-6">
              {['HIGH', 'MEDIUM', 'LOW'].map(p => (
                <label key={p} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="priority"
                    value={p}
                    checked={formData.priority === p}
                    onChange={handleChange}
                    className="w-5 h-5"
                  />
                  <span className={`text-sm font-medium ${
                    p === 'HIGH' ? 'text-red-600' : p === 'MEDIUM' ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    {p}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Client Information */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">Client Information:</p>

            <div className="space-y-4">
              <input
                type="text"
                name="clientName"
                placeholder="Client Name"
                value={formData.clientName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Client Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />

              <input
                type="text"
                name="serviceRequired"
                placeholder="Service Required"
                value={formData.serviceRequired}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>

          {/* Details */}
          <textarea
            name="details"
            placeholder="Task Details"
            value={formData.details}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
          />

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full g-gradient-to-r from-purple-900 to-indigo-900 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition shadow-lg"
          >
            Create Task
          </button>

        </div>
      </div>
    </div>
  );
}
