import axios from 'axios';
import { store } from '@store/store';
import { logout } from '@store/slices/userSlice';

// Create a custom axios instance with default configuration
const axiosInstance = axios.create({
  // Use relative URL to leverage Vite's proxy configuration
  baseURL: '/api',
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request interceptor for adding auth token, etc.
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from Redux store
    const token = store.getState().user.token;

    // If token exists, add it to the request headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor for handling common errors
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle specific error cases
    if (error.response) {
      // Server responded with a status code outside of 2xx range
      if (error.response.status === 401) {
        // Handle unauthorized access by dispatching logout action
        store.dispatch(logout());
      }

      if (error.response.status === 403) {
        // Handle forbidden access
        console.error('Access forbidden');
      }
    } else if (error.request) {
      // Request was made but no response was received
      console.error('No response received from server');
    } else {
      // Something happened in setting up the request
      console.error('Error setting up request:', error.message);
    }

    return Promise.reject(error.response?.data);
  },
);

export { axiosInstance as api };
