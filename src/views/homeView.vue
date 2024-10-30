<template>
    <div class="home-container">
        <div class="titulo">
          <h2>Bienvenido/a</h2><br>
    

        </div>
        <div class="contenedor-registros" v-if="registros.length > 0">
            <registersCard v-for="(registro) in registros" :registro="registro" />
        </div>
        <div class="img-nodata" v-else>
          <img src="../assets/images/no_data.png" alt="No hay datos">
          <div class="texto-nodata">
            <h3>No existen órdenes para cargar.</h3>
          </div>
        </div>
        <div class="btn-flotante">
          <modalDatos></modalDatos>          
        </div>
    </div>

</template>

<script>
import apiClient from '../services/api';
import registersCard from '@/components/icons/registersCard.vue';
import axios from 'axios';
import { obtenerCampos, obtenerActividades, obtenerLotes, obtenerInsumos } from '@/services/requestsPopUp';
import modalDatos from '@/components/icons/modalDatos.vue';


export default {
  name: 'homeView',
  components: {
    registersCard,
    modalDatos
  },
  methods: {
    
  },
  data() {
    return {
        campos: [],
        actividades: [],
        registros: [],
        lotes: []
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

.pop {
  display: flex;
  flex-direction: column;
}

.pop-cont {
  display: flex;
  flex-direction: column;
}

.pop-container {
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
    max-width: 100%;

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
    flex-direction: row;
    justify-content: flex-start;
    flex: 1 1 auto;
    width: 100%;
    overflow-y: auto;
    padding: 0px 8px;
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