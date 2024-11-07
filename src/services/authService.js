import apiClient from '../services/api';
import axios from 'axios';

const API_URL = 'https://tierrasur-web-8fe3661f2e77.herokuapp.com';
/*const API_URL = 'http://127.0.0.1:5000';*/


export async function login(usuario, contra) {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, { usuario, contra });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('rol', response.data.rol);
            localStorage.setItem('usuario', response.data.usuario);
        }
        return response.data;
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        throw error;
    }
}

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('usuario');
}

export function getToken() {
    return localStorage.getItem('token');
}