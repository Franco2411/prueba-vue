// src/services/api.js
import axios from 'axios';

// Aquí puedes configurar la URL base de tu backend
const apiClient = axios.create({
  baseURL: 'https://safe-gorge-77661-fab8bec35bb4.herokuapp.com', // Cambia esta URL por la de tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
