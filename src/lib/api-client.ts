import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Next.js internal API routes
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
