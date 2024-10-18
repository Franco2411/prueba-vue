<template>
  <div id="app">    
    <sidebar2 v-if="!isAuthPage"></sidebar2>
    <router-view></router-view>  <!-- Aquí se mostrará la vista de login -->
  </div>
</template>

<script>
import sidebar from './components/icons/sidebar.vue';
import sidebar2 from './components/icons/sidebar2.vue';

export default {
  name: 'App',
  components: {
    sidebar,
    sidebar2
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
