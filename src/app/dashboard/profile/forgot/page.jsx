"use client"
import React, { useState, useEffect } from 'react';
import { Mail, Lock, Shield, Eye, EyeOff, Clock, RefreshCw } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [passwords, setPasswords] = useState({
    new: '',
    confirm: ''
  });
  const [showPassword, setShowPassword] = useState({
    new: false,
    confirm: false
  });
  const [errors, setErrors] = useState({});
  const [timer, setTimer] = useState(600); // 10 minutes in seconds
  const [canResend, setCanResend] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!otp) {
      newErrors.otp = 'OTP is required';
    } else if (otp.length !== 6) {
      newErrors.otp = 'OTP must be 6 digits';
    }

    if (!passwords.new) {
      newErrors.new = 'New password is required';
    } else if (passwords.new.length < 6) {
      newErrors.new = 'Password must be at least 6 characters';
    }

    if (!passwords.confirm) {
      newErrors.confirm = 'Please confirm your password';
    } else if (passwords.new !== passwords.confirm) {
      newErrors.confirm = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleResendOTP = () => {
    if (canResend || timer === 0) {
      console.log('Resending OTP to:', email);
      alert(`OTP resent to ${email}`);
      setTimer(600);
      setCanResend(false);
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Password reset submitted:', {
        email,
        otp,
        newPassword: passwords.new
      });
      alert('Password reset successfully!');
      // Redirect to profile page
      window.location.href = '/dashboard/profile';
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword({
      ...showPassword,
      [field]: !showPassword[field]
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-2xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-linear-to-br from-indigo-600 to-purple-600 rounded-3xl shadow-2xl mb-6">
            <Lock size={40} className="text-white" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Reset Password</h1>
          <p className="text-base lg:text-lg text-gray-600">Enter your email and OTP to create a new password</p>
        </div>

        {/* Forgot Password Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
          <div className="space-y-8">
            {/* Email Input */}
            <div>
              <label className="block text-base lg:text-lg font-semibold text-gray-700 mb-3">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail size={22} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  placeholder="Enter your email address"
                  className={`w-full pl-12 pr-5 py-4 border-2 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-base lg:text-lg transition-all`}
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm lg:text-base text-red-600">{errors.email}</p>
              )}
            </div>

            {/* OTP Input */}
            <div>
              <label className="block text-base lg:text-lg font-semibold text-gray-700 mb-3">
                One-Time Password (OTP)
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Shield size={22} />
                </div>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                    setOtp(value);
                    if (errors.otp) setErrors({ ...errors, otp: '' });
                  }}
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  className={`w-full pl-12 pr-5 py-4 border-2 ${
                    errors.otp ? 'border-red-500' : 'border-gray-300'
                  } rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-base lg:text-lg tracking-wider transition-all`}
                />
              </div>
              {errors.otp && (
                <p className="mt-2 text-sm lg:text-base text-red-600">{errors.otp}</p>
              )}
            </div>

            {/* Timer and Resend */}
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-5">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-blue-600" />
                  <span className="text-sm lg:text-base text-gray-700">
                    {timer > 0 ? (
                      <>
                        OTP expires in <span className="font-bold text-blue-600">{formatTime(timer)}</span>
                      </>
                    ) : (
                      <span className="font-bold text-red-600">OTP has expired</span>
                    )}
                  </span>
                </div>
                <button
                  onClick={handleResendOTP}
                  disabled={!canResend && timer > 0}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all text-sm lg:text-base ${
                    canResend || timer === 0
                      ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-lg'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <RefreshCw size={16} />
                  Resend OTP
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <label className="block text-base lg:text-lg font-semibold text-gray-700 mb-3">
                New Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock size={22} />
                </div>
                <input
                  type={showPassword.new ? 'text' : 'password'}
                  value={passwords.new}
                  onChange={(e) => {
                    setPasswords({ ...passwords, new: e.target.value });
                    if (errors.new) setErrors({ ...errors, new: '' });
                  }}
                  placeholder="Enter new password"
                  className={`w-full pl-12 pr-12 py-4 border-2 ${
                    errors.new ? 'border-red-500' : 'border-gray-300'
                  } rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-base lg:text-lg transition-all`}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('new')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 p-1"
                >
                  {showPassword.new ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
              </div>
              {errors.new && (
                <p className="mt-2 text-sm lg:text-base text-red-600">{errors.new}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-base lg:text-lg font-semibold text-gray-700 mb-3">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock size={22} />
                </div>
                <input
                  type={showPassword.confirm ? 'text' : 'password'}
                  value={passwords.confirm}
                  onChange={(e) => {
                    setPasswords({ ...passwords, confirm: e.target.value });
                    if (errors.confirm) setErrors({ ...errors, confirm: '' });
                  }}
                  placeholder="Re-enter new password"
                  className={`w-full pl-12 pr-12 py-4 border-2 ${
                    errors.confirm ? 'border-red-500' : 'border-gray-300'
                  } rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-base lg:text-lg transition-all`}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('confirm')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 p-1"
                >
                  {showPassword.confirm ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
              </div>
              {errors.confirm && (
                <p className="mt-2 text-sm lg:text-base text-red-600">{errors.confirm}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                onClick={handleSubmit}
                className="w-full bg-linear-to-r from-indigo-950 to-purple-900 hover:from-indigo-900 hover:to-purple-800 text-white py-5 rounded-2xl font-semibold transition shadow-lg text-lg hover:shadow-2xl transform hover:scale-[1.02]"
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-center">
          <p className="text-sm lg:text-base text-gray-600">
            Remember your password?{' '}
            <a href="/login" className="text-purple-600 hover:text-purple-700 font-semibold underline hover:no-underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}