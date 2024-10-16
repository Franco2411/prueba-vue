<template>
  <div id="app">
    <router-view></router-view>  <!-- Aquí se mostrará la vista de login -->
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
