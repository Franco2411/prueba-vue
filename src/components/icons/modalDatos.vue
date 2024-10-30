<template>
  <button type="button" class="btn btn-primary fab-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <span class="material-symbols-outlined">
                    add
                </span>
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Agregue los datos</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div v-if="showAlert" class="alert alert-danger" role="alert">
      Por favor complete todos los campos.
</div>
        <label for="up">Uni. Prod:</label>
        <select id="up" class="swal2-input" v-model="campoSelected" @change="getLotes">
          <option value="" disabled selected>Seleccione una opción</option>
          <option v-for="campo in campos" :value="campo.nro">
            {{ campo.nro + '-' + campo.nombre }}
          </option>
        </select>

        <label for="lote">Lote:</label>
        <select id="lote" class="swal2-input" v-model="loteSelected" :disabled="!lotes.length">
          <option value="" disabled selected>Seleccione una opción</option>
          <option v-for="lote in lotes" :value="lote.numlot">
            {{ lote.numlot + '-' + lote.tipsue }}
          </option>
        </select>

        <label for="actividad">Actividad:</label>
        <select id="actividad" class="swal2-input" v-model="activSelected">
          <option value="" disabled selected>Seleccione una opción</option>
          <option v-for="activ in actividades" :value="activ.id1">
            {{ activ.nombre }}
          </option>
        </select>

        <label for="tipo">Tipo:</label>
        <select id="tipo" class="swal2-input" v-model="tipoSelected" @change="getInsumos">
          <option value="" disabled selected>Seleccione una opción</option>
            <option value="agroquimicos">Agroquimicos</option>
            <option value="fertilizantes">Fertilizantes</option>
            <option value="labor">Labor</option>
            <option value="semilla">Semillas</option>
            <option value="varios">Varios</option>
        </select>

        <label for="insumo">Insumo/Labor:</label>
        <select id="insumo" class="swal2-input" v-model="insumoSelected" :disabled="!insumos.length">
          <option value="" disabled selected>Seleccione una opción</option>
          <option v-for="insumo in insumos" :value="insumo.id1">
            {{ insumo.nombre }}
          </option>
        </select>

        <label for="deposito">Depósito:</label>
        <select id="deposito" class="swal2-input">
          <option value="Las Parejas" disabled selected>Las Parejas</option>
        </select>

        <label for="cantidad">Cantidad:</label>
        <input type="number" id="cantidad" class="swal2-input" placeholder="Ingresa un número" v-model="cantSelected">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-bs-dismiss="modal" @click="mostrarRegistros">Listo!</button>
        <button type="button" class="btn btn-primary" @click="agregarRegistros">Agregar registro</button>
      </div>
    </div>
  </div>
</div>

</template>
  
  <script>
  import { obtenerCampos, obtenerActividades, obtenerLotes, obtenerInsumos } from '@/services/requestsPopUp';

  export default {
    name: 'modalDatos',
  props: {
    
  },
  data(){
    return{
        campos: [],
        actividades: [],
        lotes: [],
        insumos: [],
        registros: [],
        campoSelected: '',
        activSelected: '',
        loteSelected: '',
        tipoSelected: '',
        insumoSelected: '',
        cantSelected: '',
        showAlert: false
    }
  },
  mounted() {
    this.datosBase();
  },
  methods: {
    async datosBase() {
      try {
        const responseUp = await obtenerCampos();
        const responseActiv = await obtenerActividades(); // Ajusta la URL a tu API
        this.campos = responseUp;
        this.actividades = responseActiv; // Asigna los datos recibidos a la propiedad `options`
        console.log(this.campos);
      } catch (error) {
        console.error('Error al obtener las opciones:', error);
      }

    },

    async getLotes() {
      const responseLote = await obtenerLotes(this.campoSelected);
      this.lotes = responseLote;
    },

    async getInsumos() {
      const responseIn = await obtenerInsumos(this.tipoSelected);
      this.insumos = responseIn;
    },

    agregarRegistros() {
      if (!this.campoSelected || !this.loteSelected || !this.activSelected || !this.tipoSelected || !this.insumoSelected || !this.cantSelected) {
        this.showAlert = true;
      } else {
        this.showAlert = false;
        console.log('Prosiga');

        const items = {
          'up': this.campoSelected,
          'lote': this.loteSelected,
          'actividad': this.activSelected,
          'codigo': this.tipoSelected,
          'detalle': this.insumoSelected,
          'cantidad': this.cantSelected,
        }

        this.registros.push(items)
        console.log('los registros cargados fueron: ', items);
      }
    },
    mostrarRegistros() {
      console.log(this.registros);
    }

    
  }
}
  </script>

<style scoped>
  .fab-button {
      border: none;
      border-radius: 50%;
      padding: 0.4rem;
      background-color: var(--vt-c-primaryColor);
      color: var(--vt-c-white-soft);
      transition: 0.2s ease-out;
      
      &.material-symbols-outlined {
        color: var(--vt-c-white-soft);
      }
    }
  
  .modal-body {
    display: flex;
    flex-direction: column;
  }

</style>
  