import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useRegister from '../hooks/useRegister';
import Card from '../components/Card';
import Form from '../components/Form';
import Modal from '../components/Modal';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const {
    handleRegister,
    error,
    isLoading,
    clearError,
    successMessage,
    showSuccessModal,
    handleSuccessModalClose
  } = useRegister();

  const handleChange = (e) => {
    // Clear error when user starts typing
    if (error) clearError();
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const fields = [
    {
      label: 'Name',
      name: 'name',
      type: 'text',
      value: formData.name,
      onChange: handleChange,
      required: true,
      placeholder: 'Enter your full name'
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      value: formData.email,
      onChange: handleChange,
      onInvalid: (e) => {
        e.target.setCustomValidity('The email must be a valid email address');
      },
      onInput: (e) => {
        e.target.setCustomValidity(''); // Clear custom message when user types
      },
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
      autoComplete: 'new-password',
      placeholder: 'Create a password',
      customInput: (
        <div className="relative w-full">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            autoComplete="new-password"
            placeholder="Create a password"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-10 sm:pr-12 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
          />
          <div 
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
      )
    },
    {
      label: 'Confirm Password',
      name: 'password_confirmation',
      type: 'password',
      value: formData.password_confirmation,
      onChange: handleChange,
      required: true,
      minLength: 6,
      autoComplete: 'new-password',
      placeholder: 'Confirm your password'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(formData);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <Card>
          <Form
            title="Register"
            fields={fields}
            onSubmit={handleSubmit}
            error={error}
            isLoading={isLoading}
            submitText="Register"
            noValidate={true}
            footerContent={
              <>
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </>
            }
          />
        </Card>
      </div>

      <Modal
        isOpen={showSuccessModal}
        onClose={handleSuccessModalClose}
        title="Success!"
        message={successMessage}
      />
    </>
  );
};

export default Register;