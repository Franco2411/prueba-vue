<template>
    <div class="container-loginContainer">
      <div class="login-container">
      
      <div class="logo">
        <img src="../assets/images/tierrasur.png" alt="Logo de la empresa">
      </div>
      <form @submit.prevent="handleSubmit">
        <div>
          <input v-model="usuario" type="text" id="usuario" placeholder="Nick" @click="alertOff" required/>
        </div>
        <div>
          <input v-model="password" type="password" id="password" placeholder="Password" required/>
        </div>
        <button type="submit" class="button-solid">Login</button>
        <button type="button" class="button-outlined"><a href="#">Registrarse</a></button>
      </form>
      <div v-if="showAlert" class="alert alert-danger" role="alert">
        {{ message }}
      </div>
      </div>
    </div>
    
  </template>
  
  <script>

  import { login } from '@/services/authService'

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
      usuario: '',
      password: '',
      message: '',
      showAlert: false
    };
  },
  methods: {
    async handleSubmit() {
      // Valido email y pass
      if (this.usuario != '' && this.password != '') {
        try {
          const respLog = await login(this.usuario, this.password)
          console.log(this.usuario + ',' + this.password)
          if (respLog.success === true) {
            this.$router.push({name: 'home'});
          } else {
            this.message = respLog.error;
            this.showAlert=true;
          }
          
        } catch (error) {
          console.error('Error en el inicio de sesión:', error);
          throw error;
          
        }
        
        
      } else {
        this.showAlert = true;
        this.message = 'Por favor complete todos los campos.'
      }
    },
    alertOff() {
      this.showAlert = false;
    }
  }
  }
  </script>
  
  <style scoped>

.container-loginContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8px;
}
    
  .login-container {    
    width: 100%;
    height: 100%;
    max-height: 550px;
    max-width: 360px;
    padding: 20px;
    background-color: var(--vt-c-white-soft);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  }

  .titulo {
    width: 20vw;
    display: flex;
    flex-direction: row;
    align-items: start;
  }

  .login-container h1 {
    margin: 8px;
    color: var(--vt-c-primaryColor);
  }

  .login-container form {
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }

  .login-container div {
    margin-bottom: 8px;
  }

  .login-container button {
    margin-bottom: 6px;
  }

  .login-container input {
    width: 100%;
    padding: 15px;
    font-size: 18px
  }

  

  .logo img {
    width: 100%;
    padding: 10px;
  }

  a {
    color: var(--vt-c-primaryColor);
  }

  a:hover {
    color: var(--vt-c-white-soft);
  }

  @media (max-width: 550px) {
    .login-container {
      max-width: 500px;
      margin: 20px; /* Asegura que se vea bien en pantallas de iPhone 13 Pro */
    }

    .login-form input, .login-button, .register-button {
        font-size: 18px; /* Tamaño de fuente adecuado para usabilidad en móvil */
    }
}
  </style>
  