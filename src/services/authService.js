import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

const AuthService = {
    async register(userData) {
        try {
          const response = await axios.post(`${API_BASE_URL}/register`, {
            name: userData.name,
            email: userData.email,
            password: userData.password,
            password_confirmation: userData.password_confirmation
          });
      
          return {
            success: true,
            data: response.data
          };
        } catch (error) {
          let errorMessage = 'Registration failed';
      
          // Laravel validation errors
          if (error.response?.data?.errors) {
            errorMessage = Object.values(error.response.data.errors)[0][0];
          }
          // Generic message
          else if (error.response?.data?.message) {
            errorMessage = error.response.data.message;
          }
      
          return {
            success: false,
            error: errorMessage,
            status: error.response?.status
          };
        }
      },
      
      
      

 async login(credentials) {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email: credentials.email,
        password: credentials.password
      });
      
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Login failed',
        status: error.response?.status
      };
    }
  },
   async getProfile(token) {
    try {
      const response = await axios.get(`${API_BASE_URL}/user`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch profile');
    }
  }

  // Add other auth methods here (login, logout, etc.)
};

export default AuthService;