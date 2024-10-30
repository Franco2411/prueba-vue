// src/services/api.js
import axios from 'axios';

// https://tierrasur-web-8fe3661f2e77.herokuapp.com
// http://127.0.0.1:5000

//const apiUrl = process.env.VUE_APP_API_URL;

// Aquí puedes configurar la URL base de tu backend
const apiClient = axios.create({
  baseURL: 'https://tierrasur-web-8fe3661f2e77.herokuapp.com', // Cambia esta URL por la de tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
