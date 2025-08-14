import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PublicRoutes from './publicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import { useAuth } from '../contexts/AuthContext';

const AppRoutes = () => {
  const { isAuthenticated, loading } = useAuth();

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Root redirect based on authentication status */}
      <Route 
        path="/" 
        element={
          <Navigate 
            to={isAuthenticated ? "/profile" : "/login"} 
            replace 
          />
        } 
      />
      
      {/* Public routes: /login and /register */}
      <Route path="/*" element={<PublicRoutes />} />
      
      {/* Protected route: /profile */}
      <Route path="/profile" element={<ProtectedRoutes />} />
    </Routes>
  );
};

export default AppRoutes;