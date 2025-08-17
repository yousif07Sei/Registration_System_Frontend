import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useRegister from '../hooks/useRegister';
import Card from '../components/Card';
import Form from '../components/Form';
import Modal from '../components/Modal';
import PasswordToggle from '../components/PasswordToggle'; // ← Import PasswordToggle

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  // Remove showPassword state - PasswordToggle handles it internally

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
        <PasswordToggle
          name="password"
          value={formData.password}
          onChange={handleChange}
          required={true}
          minLength={6}
          autoComplete="new-password"
          placeholder="Create a password"
        />
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