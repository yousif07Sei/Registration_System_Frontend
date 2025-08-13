import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import Card from '../components/Card';
import Form from '../components/Form';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { handleLogin, error, isLoading } = useLogin();

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
      placeholder: 'Enter your password'
    }
  ];

  return (
    <div className="flex justify-center items-start pt-20 min-h-screen bg-gray-100">
      <Card>
        <Form
          title="Login"
          fields={fields}
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(formData);
          }}
          error={error}
          isLoading={isLoading}
          submitText="Login"
          footerContent={
            <>
              Don’t have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:underline">
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
