import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000', // Change if you're using a deployed backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;

