// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    registros: [] // Aquí se almacenará la lista de datos de forma global
  },
  mutations: {
    agregarRegistro(state, nuevoDato) {
      state.registros.push(nuevoDato); // Mutación para agregar un dato a la lista
    }
  },
  actions: {
    agregarRegistro({ commit }, nuevoDato) {
      commit('agregarRegistro', nuevoDato); // Acción para agregar dato usando la mutación
    }
  },
  getters: {
    obtenerRegistros(state) {
      return state.registros; // Getter para obtener la lista
    }
  }
});
