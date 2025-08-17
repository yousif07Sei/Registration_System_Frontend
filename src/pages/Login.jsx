import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import useLogin from '../hooks/useLogin';
import Card from '../components/Card';
import Form from '../components/Form';
import PasswordToggle from '../components/PasswordToggle';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  
  const { handleLogin, error, isLoading } = useLogin();
  const { updateAuthStatus } = useAuth();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const fields = [
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      value: formData.email,
      onChange: handleChange,
      required: true,
      autoComplete: 'username',
      placeholder: 'Enter your email'
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      value: formData.password,
      onChange: handleChange,
      required: true,
      minLength: 6,
      autoComplete: 'current-password',
      placeholder: 'Enter your password',
      customInput: (
        <PasswordToggle
          name="password"
          value={formData.password}
          onChange={handleChange}
          required={true}
          minLength={6}
          autoComplete="current-password"
          placeholder="Enter your password"
        />
      )
    }
  ];

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
        <Form
          title="Login"
          fields={fields}
          onSubmit={handleSubmit}
          error={error}
          isLoading={isLoading}
          submitText="Login"
          buttonClass="bg-blue-600 hover:bg-blue-700 text-white"
          footerContent={
            <>
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors">
                Register
              </Link>
            </>
          }
        />
      </Card>
    </div>
  );
};

export default Login;