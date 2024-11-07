<template>
    <div class="home-container">
        <div class="titulo">
          <h2>Bienvenido/a {{ usuario }}</h2><br>
    

        </div>
        <div class="contenedor-registros" v-if="registros.length > 0">  
          <visorRegistro v-for="(registro) in registros" :registro="registro" />
          <form @submit.prevent="enviarRegistros">
            <button type="submit" class="button-solid">Enviar datos</button>
            <button type="button" class="button-outlined" @click="limpiarLista">Borrar</button>
          </form>
        </div>
        <div class="img-nodata" v-else>
          <img src="../assets/images/no_data.png" alt="No hay datos">
          <div class="texto-nodata">
            <h3>No existen órdenes para cargar.</h3>
          </div>
        </div>
        <div class="btn-flotante">
          <modalDatos @registrosLista="actualizarRegistros"></modalDatos>          
        </div>
    </div>

</template>

<script>
import apiClient from '../services/api';
import registersCard from '@/components/icons/registersCard.vue';
import visorRegistro from '@/components/icons/visorRegistro.vue';
import axios from 'axios';
import { obtenerCampos, obtenerActividades, obtenerLotes, obtenerInsumos } from '@/services/requestsPopUp';
import modalDatos from '@/components/icons/modalDatos.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';
import { insertarRegistros } from '@/services/registrosGetPush';


export default {
  name: 'homeView',
  components: {
    registersCard,
    modalDatos,
    visorRegistro
  },
  methods: {
    actualizarRegistros(nuevosRegistros) {
      this.registros = nuevosRegistros;
      console.log('Los registros en el home son: ' + this.registros)
    },

    limpiarLista() {
      Swal.fire({
        title: "¿Está seguro?",
        text: "No será posible revertir ésta acción!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#20512d",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.registros = [];
          
          Swal.fire({
            title: "Datos eliminados",
            text: "Los datos fueron eliminados exitosamente.",
            icon: "success",
            confirmButtonColor: "#20512d"
          });
        }
      });
      
    },

    async enviarRegistros() {
      if (this.registros.length >= 0) {
        const response = await insertarRegistros(this.registros);

        if (response.success) {
          Swal.fire({
                title: "Datos enviados correctamente!",
                text: "Los datos fueron enviados satisfactoriamente.",
                icon: "success",
                confirmButtonColor: "#20512d"
            });
          
            this.registros = [];
        } else {
            Swal.fire({
                  title: "Error!",
                  text: "Hubo un error al enviar los datos, por favor intente nuevamente.",
                  icon: "error",
                  confirmButtonColor: "#20512d"
              });
        }
      } else {
        Swal.fire({
                title: "Advertencia!",
                text: "Debe de tener registros cargados para poder enviarlos.",
                icon: "warning",
                confirmButtonColor: "#20512d"
            });
      }
    }
  },
  data() {
    return {
        campos: [],
        actividades: [],
        lotes: [],
        usuario: localStorage.getItem('usuario'),
        registros: []
    }
  }
    
}
</script>

<style scoped>
.home-container {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    max-width: 100%;
    max-height: 100%;
    align-items: center
    }
  
.titulo {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  padding-top: 8px;
  
}

.contenedor-registros {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex: 1 1 auto;
    max-width: 100%;
    max-height: 100%;
    overflow-y: auto;
}

.img-nodata {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  box-sizing: border-box;

  img {
    width: 600px;
    height: 500px;
  }
}

.btn-flotante {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 1rem;
    margin-right: 2rem;

    .fab-button {
      border: none;
      border-radius: 50%;
      padding: 0.8rem;
      background-color: var(--vt-c-primaryColor);
      color: var(--vt-c-white-soft);
      transition: 0.2s ease-out;
      
      &.material-symbols-outlined {
        color: var(--vt-c-white-soft);
      }
    }

    .fab-button:hover {
      cursor: pointer;
      background-color: var(--vt-c-primaryColorDarker);
    }
  }

  button {
    margin-right: 8px;
  }

.contenedor-registros {
  display: flex;
  flex-direction: column;
}

  

@media (max-width: 550px) {
  .home-container {
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 100vw;

  }

  .img-nodata {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    box-sizing: border-box;
    padding-right: 0.5rem;

    img {
      width: 300px;
      height: 300px;
    }

    .texto-nodata {
      display: flex;
      flex-wrap: wrap;
      max-width: 100%;
    }
  }

  .contenedor-registros {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    max-width: auto;
    margin-right: 8px;
    overflow-y: auto;
    box-sizing: border-box;
  }

  .contenedor-registros ul {
    padding: 0px;
    max-width: 100%;
  }

  .btn-flotante {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 0.5rem;
    margin-right: 1rem;

    .fab-button {
      border: none;
      border-radius: 50%;
      padding: 0.5rem;
      background-color: var(--vt-c-primaryColor);
      color: var(--vt-c-white-soft);
      
      &.material-symbols-outlined {
        color: var(--vt-c-white-soft);
      }
    }
  }
}
</style>