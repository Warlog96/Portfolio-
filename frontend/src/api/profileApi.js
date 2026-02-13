import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const getProfile = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/profile`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};

export const createOrUpdateProfile = async (profileData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/profile`, profileData);
    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
};
