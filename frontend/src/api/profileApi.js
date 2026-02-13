import { profileData } from '../data/profileData';

// Simulated API delay for realism (optional, can be removed for instant load)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getProfile = async () => {
  // Simulate network request
  await delay(100); 
  return {
    success: true,
    data: profileData
  };
};

export const createOrUpdateProfile = async (data) => {
  console.log('Static mode: Profile update simulation', data);
  return {
    success: true,
    data: { ...profileData, ...data }
  };
};
