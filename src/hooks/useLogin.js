import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/authService';

const useLogin = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    setError('');
    setIsLoading(true);
    
    try {
      const result = await AuthService.login(credentials);
      
      if (result.success) {
        // Save token for authenticated requests
        if (result.data?.token) {
          localStorage.setItem('token', result.data.token);
        }

        // Store user data if available
        if (result.data?.user) {
          setUser(result.data.user);
        }

        // Redirect after successful login
        navigate('/profile');
      } else {
        setError(result.error);
      }

      return result;
    } catch (error) {
      setError('An unexpected error occurred');
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return { handleLogin, user, error, isLoading };
};

export default useLogin;
