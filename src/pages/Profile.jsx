import React from "react";
import Card from "../components/Card";
import { useProfile } from "../hooks/useProfile";

export default function Profile() {
  const { user, error, loading, logout } = useProfile();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-md mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 sm:p-6">
            <div className="text-red-600 text-4xl sm:text-6xl mb-4">⚠️</div>
            <p className="text-red-600 text-sm sm:text-base lg:text-lg font-medium">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-md mx-auto">
          <div className="text-gray-400 text-4xl sm:text-6xl mb-4">👤</div>
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg">No user data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <Card title="Your Profile">
          <div className="space-y-4 sm:space-y-6">
            {/* Profile Avatar */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>

            {/* User Information */}
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                <label className="block text-xs sm:text-sm font-medium text-gray-500 mb-1">
                  Full Name
                </label>
                <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800">
                  {user.name}
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                <label className="block text-xs sm:text-sm font-medium text-gray-500 mb-1">
                  Email Address
                </label>
                <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800">
                  {user.email}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 sm:pt-6">
              <button
                onClick={logout}
                className="w-full py-2 sm:py-3 px-4 bg-red-500 hover:bg-red-600 text-white text-sm sm:text-base font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Logout
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}