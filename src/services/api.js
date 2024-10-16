// src/services/api.js
import axios from 'axios';

// Aquí puedes configurar la URL base de tu backend
const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:5000', // Cambia esta URL por la de tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
