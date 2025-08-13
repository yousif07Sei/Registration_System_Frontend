import React from "react";
import Card from "../components/Card";
import { useProfile } from "../hooks/useProfile";

export default function Profile() {
  const { user, error, loading, logout } = useProfile();

  if (loading) {
    return (
      <div className="flex justify-center items-start pt-20 min-h-screen bg-gray-100">
        <p className="text-gray-500 text-lg">Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-500 text-lg">No user data available</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card title="Profile">
        <div className="space-y-4">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <button
            onClick={logout}
            className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition duration-300"
          >
            Logout
          </button>
        </div>
      </Card>
    </div>
  );
}
