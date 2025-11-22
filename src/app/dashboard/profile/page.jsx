"use client"

import React, { useState } from 'react';
import { ArrowLeft, Edit2, LogOut, Camera } from 'lucide-react';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  
  const [profileData, setProfileData] = useState({
    name: 'Rahul Mishra',
    employeeId: 'E18 I101',
    department: 'Training',
    role: 'Training Officer',
    dateOfJoining: '12.10.2025',
    age: '45',
    gender: 'M',
    attendance: '97%',
    performance: '87%',
    rating: '4.3',
    avatar: 'RM'
  });

  const handleBack = () => {
    window.history.back();
  };

  const handleLogout = () => {
    if (confirm('Are you sure you want to log out?')) {
      window.location.href = '/login';
    }
  };

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      alert('Profile updated successfully!');
    }
  };

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangePassword = () => {
    window.location.href = '/dashboard/profile/change-password';
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-linear-to-r from-indigo-950 via-purple-900 to-purple-800 text-white shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={handleBack}
              className="mb-6 p-3 bg-white/20 hover:bg-white/30 rounded-lg transition backdrop-blur-sm"
            >
              <ArrowLeft size={24} />
            </button>
            
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">My Profile</h1>
            <p className="text-indigo-100 text-base lg:text-lg">Manage your personal information and settings</p>
          </div>
          
          {/* Curved white section at bottom */}
          <div className="absolute -bottom-1 left-0 right-0 h-20 bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-t-[50px]"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-12 px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Profile Card */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 text-center border border-gray-100 sticky top-8">
                {/* Profile Image */}
                <div className="relative inline-block mb-6">
                  <input
                    type="file"
                    id="profileImageUpload"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="profileImageUpload"
                    className="cursor-pointer block"
                  >
                    <div className="w-48 h-48 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl border-4 border-white overflow-hidden relative group">
                      {profileImage ? (
                        <>
                          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Camera size={32} className="text-white" />
                          </div>
                        </>
                      ) : (
                        <>
                          {profileData.avatar}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Camera size={32} className="text-white" />
                          </div>
                        </>
                      )}
                    </div>
                  </label>
                  <div className="absolute bottom-2 right-2 bg-white rounded-full p-3 shadow-lg border-2 border-purple-200">
                    <Camera size={20} className="text-purple-600" />
                  </div>
                </div>

                {/* Name and Employee ID */}
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{profileData.name}</h2>
                <p className="text-base lg:text-lg text-gray-600 mb-4">{profileData.employeeId}</p>

                {/* Rating */}
                <div className="flex items-center justify-center gap-3 mb-8 bg-linear-to-r from-yellow-50 to-orange-50 py-4 px-6 rounded-2xl">
                  <span className="text-3xl">⭐</span>
                  <span className="text-3xl font-bold text-gray-900">{profileData.rating}</span>
                  <span className="text-sm text-gray-600">/ 5.0</span>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-linear-to-br from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-100">
                    <div className="text-3xl font-bold text-green-600">{profileData.attendance}</div>
                    <div className="text-sm text-gray-600 mt-1">Attendance</div>
                  </div>
                  <div className="bg-linear-to-br from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-100">
                    <div className="text-3xl font-bold text-blue-600">{profileData.performance}</div>
                    <div className="text-sm text-gray-600 mt-1">Performance</div>
                  </div>
                </div>

                {/* Edit Profile Button */}
                <button
                  onClick={handleEditProfile}
                  className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-semibold transition shadow-lg text-lg ${
                    isEditing
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white'
                  }`}
                >
                  <Edit2 size={20} />
                  {isEditing ? 'Save Profile' : 'Edit Profile'}
                </button>
              </div>
            </div>

            {/* Right Column - Profile Details */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-gray-100">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Personal Information</h3>
                
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm lg:text-base font-semibold text-gray-700 mb-3">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-700 text-base lg:text-lg transition-all"
                    />
                  </div>

                  {/* Employee ID */}
                  <div>
                    <label className="block text-sm lg:text-base font-semibold text-gray-700 mb-3">Employee ID</label>
                    <input
                      type="text"
                      name="employeeId"
                      value={profileData.employeeId}
                      disabled
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl bg-gray-50 text-gray-700 text-base lg:text-lg"
                    />
                  </div>

                  {/* Change Password Link */}
                  <div className="flex justify-end">
                    <button
                      onClick={handleChangePassword}
                      className="text-base lg:text-lg text-purple-600 hover:text-purple-700 font-semibold transition underline hover:no-underline"
                    >
                      Change Password →
                    </button>
                  </div>

                  {/* Department and Role */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm lg:text-base font-semibold text-gray-700 mb-3">Department</label>
                      <input
                        type="text"
                        name="department"
                        value={profileData.department}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-700 text-base lg:text-lg transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm lg:text-base font-semibold text-gray-700 mb-3">Role</label>
                      <input
                        type="text"
                        name="role"
                        value={profileData.role}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-700 text-base lg:text-lg transition-all"
                      />
                    </div>
                  </div>

                  {/* Date, Age, Gender */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm lg:text-base font-semibold text-gray-700 mb-3">Date of Joining</label>
                      <input
                        type="text"
                        name="dateOfJoining"
                        value={profileData.dateOfJoining}
                        disabled
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl bg-gray-50 text-gray-700 text-base lg:text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm lg:text-base font-semibold text-gray-700 mb-3">Age</label>
                      <input
                        type="text"
                        name="age"
                        value={profileData.age}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-700 text-base lg:text-lg transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm lg:text-base font-semibold text-gray-700 mb-3">Gender</label>
                      <input
                        type="text"
                        name="gender"
                        value={profileData.gender}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-700 text-base lg:text-lg transition-all"
                      />
                    </div>
                  </div>

                  {/* Logout Button */}
                  <div className="pt-8">
                    <button
                      onClick={handleLogout}
                      className="w-full bg-linear-to-r from-indigo-950 to-purple-900 hover:from-indigo-900 hover:to-purple-800 text-white py-5 rounded-2xl font-semibold transition shadow-lg flex items-center justify-center gap-3 text-lg hover:shadow-2xl transform hover:scale-[1.02]"
                    >
                      <span>LOG OUT</span>
                      <LogOut size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}