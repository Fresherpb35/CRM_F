'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

export default function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
    employeeId: '',
    department: '',
    dateOfJoining: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!values.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!values.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!values.age || values.age < 18) newErrors.age = 'Age must be 18 or above';
    if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required';
    if (values.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (values.password !== values.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!values.employeeId.trim()) newErrors.employeeId = 'Employee ID is required';
    if (!values.department.trim()) newErrors.department = 'Department is required';
    if (!values.dateOfJoining) newErrors.dateOfJoining = 'Date of joining is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePasswordConfirmChange = (e) => {
    handleChange(e);
    setShowPasswordCheck(
      e.target.value === values.password && e.target.value !== ''
    );
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        console.log('Form submitted:', values);
        // Redirect to dashboard after successful signup
        window.location.href = '/dashboard';
      }, 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
   <div className="min-h-screen w-full flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 bg-linear-to-br from-indigo-900 via-purple-900 to-indigo-800 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      {/* Form Container */}
      <div className="relative w-full max-w-[90%] xs:max-w-sm sm:max-w-md">
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          {/* Logo Circle - Top Right */}
          <div className="flex justify-end mb-1 sm:mb-2 md:mb-4">
            <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-gray-800 font-bold text-[9px] xs:text-[10px] sm:text-xs">App logo</div>
                <div className="text-gray-600 text-[9px] xs:text-[10px] sm:text-xs">and</div>
                <div className="text-gray-800 font-bold text-[9px] xs:text-[10px] sm:text-xs">tagline</div>
              </div>
            </div>
          </div>

          {/* Sign up Title */}
          <h1 className="text-white text-xl xs:text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">Sign up</h1>

          <div className="space-y-2.5 sm:space-y-3">
            <div className="max-h-[55vh] xs:max-h-[50vh] sm:max-h-96 overflow-y-auto pr-1.5 sm:pr-2 space-y-2.5 sm:space-y-3 custom-scrollbar">
              {/* First Name */}
              <div className="w-full">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter First name"
                  value={values.firstName}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="w-full px-3 py-2 xs:py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed text-xs xs:text-sm"
                />
                {errors.firstName && (
                  <span className="text-red-400 text-xs sm:text-sm mt-1 block">{errors.firstName}</span>
                )}
              </div>
              
              {/* Last Name */}
              <div className="w-full">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter Last name"
                  value={values.lastName}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                />
                {errors.lastName && (
                  <span className="text-red-400 text-xs sm:text-sm mt-1 block">{errors.lastName}</span>
                )}
              </div>

              {/* Age */}
              <div className="w-full">
                <input
                  type="number"
                  name="age"
                  placeholder="Enter age"
                  value={values.age}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                />
                {errors.age && (
                  <span className="text-red-400 text-xs sm:text-sm mt-1 block">{errors.age}</span>
                )}
              </div>

              {/* Email */}
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={values.email}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                />
                {errors.email && (
                  <span className="text-red-400 text-xs sm:text-sm mt-1 block">{errors.email}</span>
                )}
              </div>

              {/* Password */}
              <div className="w-full">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={values.password}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                />
                {errors.password && (
                  <span className="text-red-400 text-xs sm:text-sm mt-1 block">{errors.password}</span>
                )}
              </div>

              {/* Confirm Password */}
              <div className="relative w-full">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handlePasswordConfirmChange}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 pr-12 rounded-xl bg-white text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                />
                {showPasswordCheck && !errors.confirmPassword && (
                  <div className="absolute right-3 top-2.5 sm:top-3 w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center animate-fadeIn">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                )}
                {errors.confirmPassword && (
                  <span className="text-red-400 text-xs sm:text-sm mt-1 block">{errors.confirmPassword}</span>
                )}
              </div>

              {/* Employee ID */}
              <div className="w-full">
                <input
                  type="text"
                  name="employeeId"
                  placeholder="Enter Employee ID"
                  value={values.employeeId}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                />
                {errors.employeeId && (
                  <span className="text-red-400 text-xs sm:text-sm mt-1 block">{errors.employeeId}</span>
                )}
              </div>

              {/* Department */}
              <div className="w-full">
                <input
                  type="text"
                  name="department"
                  placeholder="Enter Department"
                  value={values.department}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                />
                {errors.department && (
                  <span className="text-red-400 text-xs sm:text-sm mt-1 block">{errors.department}</span>
                )}
              </div>

              {/* Date of Joining */}
              <div className="w-full">
                <input
                  type="text"
                  name="dateOfJoining"
                  placeholder="Enter Date of joining"
                  value={values.dateOfJoining}
                  onChange={handleChange}
                  onFocus={(e) => e.target.type = 'date'}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = 'text';
                  }}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                />
                {errors.dateOfJoining && (
                  <span className="text-red-400 text-xs sm:text-sm mt-1 block">{errors.dateOfJoining}</span>
                )}
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full py-3 xs:py-3.5 sm:py-4 mt-3 sm:mt-4 md:mt-6 bg-purple-400 hover:bg-purple-500 text-indigo-900 font-bold text-sm xs:text-base sm:text-lg rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 active:scale-95"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Loading...
                </span>
              ) : 'SIGN UP'}
            </button>
          </div>

          <style jsx>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #a855f7;
              border-radius: 3px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #9333ea;
            }
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: scale(0.8);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            .animate-fadeIn {
              animation: fadeIn 0.3s ease-in-out;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}