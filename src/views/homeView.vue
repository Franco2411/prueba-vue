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
          <button class="fab-button" type="button" @click="showPopUp">
            <span class="material-symbols-outlined">
              add
            </span>
          </button>
        </div>
    </div>
    
</template>

<script>
import apiClient from '../services/api';
import registersCard from '@/components/icons/registersCard.vue';
import Swal from 'sweetalert2';
import axios from 'axios';
import { obtenerCampos, obtenerActividades, obtenerLotes, obtenerInsumos } from '@/services/requestsPopUp';


export default {
  name: 'homeView',
  components: {
    registersCard
  },
  methods: {
    async showPopUp() {
      
      // Obtengo los campos
      const campos = await obtenerCampos();
      const actividades = await obtenerActividades();

      this.campos = campos;
      this.actividades = actividades;
      
      Swal.fire({
      title: 'Seleccione los datos',
      html: `
      <div>

        <label for="up">Uni. Prod:</label>
        <select id="up" class="swal2-input">
          <option value="" disabled selected>Seleccione una opción</option>
          ${this.campos.map(campo => `<option value="${campo.nro}">${campo.nro} - ${campo.nombre}</option>`).join('')}          
        </select>

        <label for="lote">Lote:</label>
        <select id="lote" class="swal2-input">
          <option value="" disabled selected>Seleccione una opción</option>
        </select>

        <label for="actividad">Actividad:</label>
        <select id="actividad" class="swal2-input">
          <option value="" disabled selected>Seleccione una opción</option>
          ${this.actividades.map(actividad => `<option value="${actividad.id1}">${actividad.nombre}</option>`).join('')}          
        </select>

        <label for="tipo">Tipo:</label>
        <select id="tipo" class="swal2-input">
          <option value="" disabled selected>Seleccione una opción</option>
            <option value="agroquimicos">Agroquimicos</option>
            <option value="fertilizantes">Fertilizantes</option>
            <option value="labor">Labor</option>
            <option value="semilla">Semillas</option>
            <option value="varios">Varios</option>
        </select>

        <label for="insumo">Insumo/Labor:</label>
        <select id="insumo" class="swal2-input">
          <option value="" disabled selected>Seleccione una opción</option>
        </select>

        <label for="deposito">Depósito:</label>
        <select id="deposito" class="swal2-input">
          <option value="Las Parejas" disabled selected>Las Parejas</option>
        </select>

        <label for="cantidad">Cantidad:</label>
        <input type="number" id="cantidad" class="swal2-input" placeholder="Ingresa un número">
      </div>`,
      customClass: {
        popup: 'popup-ajustado',
        htmlContainer: 'contenido-popup-ajustado'
      },
      showCancelButton: true,
      confirmButtonText: 'Cargar registro',
        didOpen: () => {
          const unip = document.getElementById('up');
          const selectLote = document.getElementById('lote');
          const tipo = document.getElementById('tipo');
          const selectInsumo = document.getElementById('insumo');

          unip.addEventListener('change', () => {
            const selectedValue = unip.value;
            if (selectedValue) {
              obtenerLotes(selectedValue).then((lotes) => {
                selectLote.innerHTML = lotes.map(lote => `<option value="${lote.numlot}">${lote.numlot} - ${lote.tipsue}</option>`).join('');
                selectLote.disabled = false;
              });            

            }
          });

          tipo.addEventListener('change', () => {
            const selectedValueTipo = tipo.value;
            if (selectedValueTipo) {
              obtenerInsumos(selectedValueTipo).then((insumos) => {
                insumo.innerHTML = insumos.map(insumo => `<option value="${insumo.id1}">${insumo.nombre}</option>`).join('');
              });
            }
          });
        },
      focusConfirm: false,
      preConfirm: () => {
        const up = document.getElementById('up').value;
        const lote = document.getElementById('lote').value;
        const actividad = document.getElementById('actividad').value;
        const tipo = document.getElementById('tipo').value;
        const insumo = document.getElementById('insumo').value;
        const cantidad = document.getElementById('cantidad').value;

        return { select1, select2, numero };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        
      }
    });
    }
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
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 90vw;
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

  .popup-ajustado {
    display: flex;
    flex-direction: column;
    max-height: 80vh;
    overflow-y: auto;
  }

  .contenido-popup-ajustado {
    display: flex;
    flex-direction: column;
    max-height: calc(90vh - 50px); /* Descuenta el título y margen superior */
    overflow-y: auto;
    border: solid 1px red;             /* Añade scroll solo al contenido interno si es necesario */
  }

  

@media (max-width: 550px) {
  .home-container {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;

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
    justify-content: center;
    padding: 8px;
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