import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/authService';

const useRegister = () => {
  const [error, setError] = useState(''); // Single error to match Form component
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const validateInputs = ({ email, password, password_confirmation, name }) => {
    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setError('The email must be a valid email address');
      return false;
    }

    // Name check
    if (!name || name.trim().length < 2) {
      setError('Name must be at least 2 characters long');
      return false;
    }

    // Password length check
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }

    // Password confirmation check
    if (password !== password_confirmation) {
      setError('The Password confirmation does not match');
      return false;
    }

    return true;
  };

  const handleRegister = async (userData) => {
    setError('');

    // Client-side validation
    if (!validateInputs(userData)) {
      return { success: false };
    }

    setIsLoading(true);

    try {
      const result = await AuthService.register(userData);
      if (result.success) {
        // Set success message from backend or default message
        const message = result.data?.message || 'Registration successful! Please login to continue.';
        setSuccessMessage(message);
        setShowSuccessModal(true);
        return { success: true };
      } else {
        setError(result.error || 'Registration failed');
        return { success: false };
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => setError('');

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    setSuccessMessage('');
    navigate('/login');
  };

  return {
    handleRegister,
    error,
    isLoading,
    clearError,
    successMessage,
    showSuccessModal,
    handleSuccessModalClose
  };
};

export default useRegister;