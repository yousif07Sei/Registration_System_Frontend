import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/authService';

const useRegister = () => {
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateInputs = ({ email, password, password_confirmation }) => {
    const newErrors = {};
    let isValid = true;

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = ['The email must be a valid email address'];
      isValid = false;
    }

    // Password confirmation check
    if (password !== password_confirmation) {
      newErrors.password_confirmation = ['The password confirmation does not match'];
      isValid = false;
    }

    setErrors(newErrors);
    setGeneralError('');
    return isValid;
  };

  const handleRegister = async (userData) => {
    setErrors({});
    setGeneralError('');

    // Client-side validation
    if (!validateInputs(userData)) {
      return { success: false };
    }

    setIsLoading(true);

    try {
      const result = await AuthService.register(userData);

      if (result.success) {
        navigate('/login');
        return { success: true };
      } else {
        if (result.errors) {
          // Server validation errors
          setErrors(result.errors);
        } else {
          // Other server errors
          setGeneralError(result.error || 'Registration failed');
        }
        return { success: false };
      }
    } catch (error) {
      setGeneralError('An unexpected error occurred');
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return { handleRegister, errors, generalError, isLoading };
};

export default useRegister;