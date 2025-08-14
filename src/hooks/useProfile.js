import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AuthService from '../services/authService';

export const useProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { updateAuthStatus } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const userData = await AuthService.getProfile(token);
        setUser(userData);
      } catch (err) {
        setError('Session expired. Please login again.');
        localStorage.removeItem('token');
        updateAuthStatus(); // Update auth status
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate, updateAuthStatus]);

  const logout = () => {
    localStorage.removeItem('token');
    updateAuthStatus(); // Update auth status
    navigate('/login');
  };

  return { user, error, loading, logout };
};