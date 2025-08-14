import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import PublicLayout from '../layouts/PublicLayout';

// Import your existing components
import Login from '../pages/Login';
import Register from '../pages/Register';

const PublicRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <PublicLayout>
      <Routes>
        {/* Login route - redirect if already logged in */}
        <Route 
          path="/login" 
          element={
            isAuthenticated ? <Navigate to="/profile" replace /> : <Login />
          } 
        />
        
        {/* Register route - redirect if already logged in */}
        <Route 
          path="/register" 
          element={
            isAuthenticated ? <Navigate to="/profile" replace /> : <Register />
          } 
        />
        
        {/* Default redirect for any other public route */}
        <Route 
          path="*" 
          element={<Navigate to="/login" replace />} 
        />
      </Routes>
    </PublicLayout>
  );
};

export default PublicRoutes;