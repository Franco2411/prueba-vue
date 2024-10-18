<template>
    <div class="home-container">
        <h1>ABOUT VIEW!!</h1><br>
    <button class="button-solid" type="button" @click="getRegistros">Obtener registros</button>
    <div class="contenedor-registros" v-if="registros.length > 0">
        <registersCard v-for="(registro) in registros" :registro="registro" />
    </div>
    <p v-else>No hay registros para mostrar</p>
    </div>
    
</template>

<script>
import apiClient from '../services/api';
import registersCard from '@/components/icons/registersCard.vue';


export default {
  name: 'aboutView',
  components: {
    registersCard
  },
  methods: {
    async getRegistros() {
        try {
        const response = await apiClient.get('/api/get_registers',{
            params: {
                nick_usuario: 'Franco',
                fecha1: '01/10/2024',
                fecha2: '16/10/2024'
            }
        }); // Supongamos que esta es tu API
        let resp = response.data; // Aquí asignamos el JSON al array products
        if (resp.success === true) {
            console.log('La respuesta fue satisfactoria');
            this.registros = resp.data;
        } else {
            console.log('No se pudo conectar');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  },
  data() {
    return {
        registros: []
    }
  }
}
</script>

<style scoped>
.home-container {
    display: flex;
    flex-direction: column;
    }
.contenedor-registros {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 90vw;
}
</style>