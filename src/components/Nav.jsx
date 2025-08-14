import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Nav = () => {
  const { isAuthenticated } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand / Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white tracking-wide">
              Registration System
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {!isAuthenticated ? (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-2 bg-white text-indigo-600 rounded-full font-medium shadow hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-sm lg:text-base"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 bg-white text-purple-600 rounded-full font-medium shadow hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-sm lg:text-base"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <Link
                  to="/profile"
                  className="px-4 py-2 bg-white text-pink-600 rounded-full font-medium shadow hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-sm lg:text-base"
                >
                  Profile
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
            >
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-10">
            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-center bg-white text-indigo-600 rounded-full font-medium shadow hover:shadow-lg transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-2 text-center bg-white text-purple-600 rounded-full font-medium shadow hover:shadow-lg transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            ) : (
              <Link
                to="/profile"
                className="block px-4 py-2 text-center bg-white text-pink-600 rounded-full font-medium shadow hover:shadow-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Profile
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;