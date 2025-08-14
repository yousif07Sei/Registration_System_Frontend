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
    <div className="flex justify-center items-start pt-20 min-h-screen bg-gray-100">
      <Card>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
          
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>

            {/* Password Field with Eye Toggle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
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
                  className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
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
              className="w-full py-2 rounded-lg font-medium transition-colors disabled:opacity-50 bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isLoading ? 'Login...' : 'Login'}
            </button>

            {/* Footer */}
            <div className="text-sm text-center text-gray-500">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:underline">
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