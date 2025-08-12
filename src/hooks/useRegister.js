import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/authService';

const useRegister = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateInputs = ({ password, confirmPassword }) => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleRegister = async (userData) => {
    setError('');
    
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
        setError(result.error);
        return { success: false };
      }
    } catch (error) {
      setError('An unexpected error occurred');
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return { handleRegister, error, isLoading };
};

export default useRegister;