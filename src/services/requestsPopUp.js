import axios from 'axios';
import apiClient from '../services/api';

// Peticion para obtener los campos
export function obtenerCampos() {
    return apiClient.get('/combo_campos')
        .then(response => response.data)
        .catch(error => {
          console.error('Error al obtener los campos:', error);
        });
}

export function obtenerActividades() {
    return apiClient.get('/combo_actividad')
    .then(response => response.data)
    .catch(error => {
        console.error('Error al obtener las actividades:', error)
    });
}

export function obtenerLotes(campo_id) {
    return apiClient.get(`/combo_lotes?campos_id=${campo_id}`)
    .then(response => response.data)
    .catch(error => {
        console.error(`No se pudo obtener los lotes con el campo_id: ${campo_id}: ${error}`)
    });
}

export function obtenerInsumos(tabla_id) {
    return apiClient.get(`/combo_insumo_labor?tabla_id=${tabla_id}`)
    .then(response => response.data)
    .catch(error => {
        console.error(`Error al obtener los tipos de la tabla ${tabla_id}: ${error}`)
    });
}


