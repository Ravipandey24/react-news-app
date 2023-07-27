import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, 
  params: {
    apiKey: import.meta.env.VITE_API_KEY,
  },
});

export default api;