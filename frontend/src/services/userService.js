import api from './api';

export const userService = {
  getUser: async (userId) => {
    const response = await api.get(`/User/${userId}`);
    return response.data;
  },
  updateUser: async (userId, userData) => {
    const response = await api.put(`/User/${userId}`, userData);
    return response.data;
  },
  changePassword: async (userId, passwordData) => {
    const response = await api.put(`/User/${userId}/password`, passwordData);
    return response.data;
  },
  deleteUser: async (userId) => {
    const response = await api.delete(`/User/${userId}`);
    return response.data;
  },
};