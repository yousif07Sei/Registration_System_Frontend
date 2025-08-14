import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import useLogin from '../hooks/useLogin';
import Card from '../components/Card';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  
  const { handleLogin, error, isLoading } = useLogin();
  const { updateAuthStatus } = useAuth();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await handleLogin(formData);
    
    if (result.success) {
      updateAuthStatus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <Card>
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800">Login</h2>
          
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4">
              <p className="text-red-500 text-sm sm:text-base text-center">{error}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="username"
                placeholder="Enter your email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Password Field with Eye Toggle */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                Password
              </label>
              <div className="relative w-full">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-10 sm:pr-12 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                />
                <div 
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ 
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    paddingRight: '12px',
                    cursor: 'pointer',
                    zIndex: '10'
                  }}
                >
                  <span style={{ fontSize: '18px', color: '#6b7280' }}>
                    {showPassword ? '🙈' : '👁️'}
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 sm:py-3 px-4 text-sm sm:text-base rounded-lg font-medium transition-all duration-200 disabled:opacity-50 bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLoading ? 'Login...' : 'Login'}
            </button>

            {/* Footer */}
            <div className="text-xs sm:text-sm text-center text-gray-500 pt-2">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors">
                Register
              </Link>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Login;