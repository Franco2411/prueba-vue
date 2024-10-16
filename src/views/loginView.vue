<template>
    <div class="login-container">
      <div class="titulo">
      <h1>Iniciar sesión</h1>
      </div>
      <form @submit.prevent="handleSubmit">
        <div>
          <input v-model="email" type="email" id="email" placeholder="Email" required />
        </div>
        <div>
          <input v-model="password" type="password" id="password" placeholder="Password"required />
        </div>
        <button type="submit" class="button-solid">Login</button>
        <button type="button" class="button-outlined"><a href="#">Registrarse</a></button>
      </form>
    </div>
  </template>
  
  <script>

  export default {
    name: 'LoginView',
    mounted() {
    document.body.classList.add('login-background');
  },
  beforeUnmount() {
    document.body.classList.remove('login-background');
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleSubmit() {
      // Valido email y pass
      if (this.email != '' && this.password != '') {
        this.$router.push({name: 'home'});
      }
    }
  }
  }
  </script>
  
  <style scoped>
    
  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
    width: 40vw;
    padding: 8px;
    background-color: var(--vt-c-white-soft);
    border-radius: 8px;
  }

  .titulo {
    width: 20vw;
    display: flex;
    flex-direction: row;
    align-items: start;
  }

  .login-container h1 {
    margin: 8px;
    color: var(--vt-c-indigo);
  }

  .login-container form {
    height: 40vh;
    width: 20vw;
    padding: 8px;
    display: flex;
    flex-direction: column;
  }

  .login-container div {
    margin-bottom: 8px;
  }

  .login-container button {
    margin-bottom: 6px;
  }

  .login-container input {
    width: 100%;
    padding: 8px;
  }

  a {
    color: var(--vt-c-indigo);
  }

  a:hover {
    color: var(--vt-c-white-soft);
  }
  </style>
  