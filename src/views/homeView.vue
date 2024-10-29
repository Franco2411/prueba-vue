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
      <div class="pop-container">

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
        htmlContainer: 'pop-container',
        popup: 'pop',
        container: 'pop-cont',
        confirmButton: 'btn-confirmar-swal',
        denyButton: 'deny-btn'
      },
      showCancelButton: true,
      showDenyButton: true,
      denyButtonText: 'Agregar registro',
      confirmButtonText: 'Confirmar',
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

          const agregarBtn = Swal.getDenyButton();
          agregarBtn.addEventListener('click', () => {
          const up = Swal.getPopup().querySelector("#up").value;
          const lote = Swal.getPopup().querySelector("#lote").value;

        if (up) {
          let items = {
            'up': up,
            'lote': lote
          }
          this.registros.push(items); // Agrega el registro a la lista
          console.log("Registro agregado:", listaRegistros); // Muestra la lista actualizada en la consola
        } else {
          Swal.showValidationMessage("Por favor ingresa un registro válido");
        }
      });
        },
      focusConfirm: false,
      preConfirm: () => {
        const up = document.getElementById('up').value;
        const lote = document.getElementById('lote').value;
        const actividad = document.getElementById('actividad').value;
        const codigo = document.getElementById('tipo').value;
        const detalle = document.getElementById('insumo').value;
        const cant = document.getElementById('cantidad').value;
        const fecha = null;
        const usuario = null;
        const campania = '24/25';

        //return { up, lote, actividad, detalle, codigo, cant, fecha, usuario, campania};
      }
    }).then((result) => {
      if (result.isConfirmed) {              
        Swal.fire('¡Éxito!', 'Datos guardados correctamente', 'success');
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