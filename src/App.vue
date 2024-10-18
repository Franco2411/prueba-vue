<template>
  <div id="app">
    <sidebar v-if="!isAuthPage"></sidebar>
    <router-view></router-view>  <!-- Aquí se mostrará la vista de login -->
  </div>
</template>

<script>
import sidebar from './components/icons/sidebar.vue';

export default {
  name: 'App',
  components: {
    sidebar
  },
  computed: {
    isAuthPage() {
      return this.$route.name === 'login';
    }
  }
}
</script>

<style scoped>
 #app {
  display: flex;
 }


</style>
