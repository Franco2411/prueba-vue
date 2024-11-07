import apiClient from './api';

export async function insertarRegistros(items) {
    try {
        let usuario = localStorage.getItem('usuario');
        const response = await apiClient.post('api/save_data', {usuario, items});
        return response.data;
        
    } catch (error) {
        console.error('Error al insertar los datos: ', error);
        throw error;
    }
}

