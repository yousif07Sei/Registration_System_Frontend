import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Nav = () => {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg px-8 py-4 flex justify-between items-center">
      {/* Brand / Logo */}
      <div className="text-2xl font-extrabold text-white tracking-wide">
        Registration System
      </div>
      
      {/* Links */}
      <div className="flex space-x-4">
        {!isAuthenticated ? (
          // Show login/register links when not authenticated
          <>
            <Link
              to="/login"
              className="px-4 py-2 bg-white text-indigo-600 rounded-full font-medium shadow hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-white text-purple-600 rounded-full font-medium shadow hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              Register
            </Link>
          </>
        ) : (
          // Show profile link when authenticated
          
          <Link
            to="/profile"
            className="px-4 py-2 bg-white text-pink-600 rounded-full font-medium shadow hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
          >
            Profile
          </Link>
          
        )}
      </div>
    </nav>
  );
};

export default Nav;