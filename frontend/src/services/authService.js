import api from './api';

export const authService = {
  register: async (userData) => {
    const response = await api.post('/User', userData);
    return response.data;
  },
  login: async (credentials) => {
    const response = await api.post('/User/login', credentials);
    return response.data;
  },
  getCurrentUser: async () => {
    const response = await api.get('/User/current');
    return response.data;
  },
  // eventually implement forgotPassword and resetPassword here
};