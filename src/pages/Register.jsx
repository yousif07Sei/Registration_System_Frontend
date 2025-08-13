import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useRegister from '../hooks/useRegister';
import Card from '../components/Card';
import Form from '../components/Form';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '' 
  });

  const { handleRegister, error, isLoading } = useRegister();

  const handleChange = (e) => {
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
      placeholder: 'Create a password'
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
    <div className="flex justify-center items-start pt-20 min-h-screen bg-gray-100">
      <Card>
        <Form
          title="Register"
          fields={fields}
          onSubmit={handleSubmit}
          error={error}
          isLoading={isLoading}
          submitText="Register"
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
  );
};

export default Register;
