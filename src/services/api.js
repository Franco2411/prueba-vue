// src/services/api.js
import axios from 'axios';

// https://safe-gorge-77661-fab8bec35bb4.herokuapp.com
// http://127.0.0.1:5000

const apiUrl = process.env.VUE_APP_API_URL;

// Aquí puedes configurar la URL base de tu backend
const apiClient = axios.create({
  baseURL: apiUrl, // Cambia esta URL por la de tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
