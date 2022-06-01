<template>

  <section class="login-space">
    <div class="d-flex flex-column form">
      <div class="h2-container">
        <h2>Iniciar Sesión</h2>
      </div>

      <div class="data-container">
        <input aria-label="Email" type="text" autofocus="" id="email" name="email" class="text-black"
               placeholder="E-mail*" v-model="email"/>
        <p class="text-danger">{{ this.error_email }}</p>
      </div>

      <div class="data-container">
        <input aria-label="Password" type="password" autofocus="" class="text-black" id="password" name="password"
               placeholder="Contraseña*" v-model="password"/>
        <span id="eye1" class="show-pass-icon eye" style="display: block"><i class="fas fa-eye"></i></span>
        <span id="eye2" class="hide-pass-icon eye" style="display: none"><i class="fas fa-eye-slash"></i></span>
        <p class="text-danger">{{ this.error_password }}</p>
      </div>

      <button @click="loginValidation" class="login-button" id="login-button">
        <div>
          <p class="m-0">Iniciar sesión</p>
        </div>
      </button>
      <p class="text-danger">{{ this.response }}</p>

      <div class="register-space">
        <div>
          <h3>¿No estás en filmfy? ¡Regístrate!</h3>
        </div>
        <a class="text-decoration-none text-white button w-100 p-2 bg-danger rounded-3" href="/register" id="signUpButton" aria-label="Inicia sesión">
          <p class="text-decoration-none text-white m-0 fw-bold" >Registrarse</p>
        </a>
      </div>
    </div>
  </section>

</template>

<script>
import {setCookie} from "@/main";

export default {
  name: 'Login',

  data() {
    return {
      email: '',
      password: '',
      error_email: '',
      error_password: '',
      error_on_login: '',
      response: ""
    }
  },

  methods: {

    loginValidation: function () {
      if (this.email !== "") {
        if (this.password !== "") {
          this.loginAPI()
        } else {
          this.error_password = "Introduce una contraseña valida"
        }
      } else {
        this.error_email = "Introduce un email valido"
      }
    },

    async loginAPI() {

      let promise = await fetch('http://filmfy-api.ddns.net/api/v1/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          "email": this.email,
          "password": this.password
        })
      })
      let response = await promise.json()

      if (response.hasOwnProperty('error')) {
        if (response.error.hasOwnProperty('email')) {
          this.response = "Introduzca un email válido"
        } else if (response.error.hasOwnProperty('password')) {
          this.response = "La contraseña debe ser de al menos 6 caracteres"
        }
      }
      if (response.hasOwnProperty('message')) {
        this.response = "Login fallido, pruebe de nuevo"
      }

      if (promise.status === 200) {
        await setCookie("auth", response.token, 30)
        window.location = window.origin
      }
    },

    mostrarPassword: function () {
      this.passwordR = document.getElementById('password')
      if (this.passwordR.type === 'text') {
        this.passwordR.type = 'password'
      } else {
        this.passwordR.type = 'text'
      }
    },
    ocultarPassword: function () {
      this.password_confirmR = document.getElementById('confirmP')
      this.passwordR = document.getElementById('password')
      if (this.password_confirmR.type === 'text') {
        this.password_confirmR.type = 'password'
      } else if (this.passwordR.type === 'text') {
        this.passwordR.type = 'password'
      }
    }
  }
}
</script>

<style scoped>

#formlogin {
  background-color: #242424;
}

.form {
  width: 30rem;
}

h1 {
  font-size: 2.5rem;
}

h3 {
  font-size: 1.1rem;
  line-height: 1.5rem;
  font-weight: 700;
}

.login-heading {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  margin-top: 2rem;
}

.login-heading > a {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
}

.login-heading > a > img {
  max-height: 48px;
}

.login-content {
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 0;
}


/* Left section */
.user-benefits {
  border-right: 1px solid white;
}

.benefit {
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
}

.benefit:not(:last-child) {
  margin-bottom: 1.5rem;
}

.benefit > div > i {
  display: inline-flex;
  width: 64px;
  height: 64px;
  font-size: 1.4rem;
  align-items: center;
  justify-content: center;
}

.benefit > div:nth-child(2) > p {
  font-size: 0.9rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: normal;
}


/* Right section */
.login-space {
  padding-top: 20vh;
  height: 50rem;
  background-color: black;
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 993px) {
  .login-space {
    height: auto;
    padding
    : 30px;
  }
}

.h2-container {
  margin-bottom: 2rem;
  padding: 0.5rem;
}

.data-container {
  position: relative;
  padding: 0.5rem;
}

.show-pass-icon, .hide-pass-icon {
  float: right;
  margin-top: -2.3rem;
  font-size: 1.2rem;
  position: relative;
  z-index: 2;
  color: var(--focus-black);
}

.login-space input {
  position: relative;
  width: 100%;
  height: 3rem;
  font-size: 1.1rem;
  line-height: 1.5rem;
  display: flex;
  color: var(--focus-black);
}

.login-button, .register-link {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: green;
  border: none;
  width: 100%;
  min-height: 3rem;
  padding: 0.1rem;
  text-decoration: none;
  font-size: 1.1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
}

.login-button > div > p {
  font-weight: 900;
}

.register-space {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.register-space > div > h3 {
  font-size: 0.8rem;
}

.register-link {
  text-decoration: none;
  background-color: var(--p-details);
  color: var(--p-white);
  width: 75%;
  margin-top: 1rem;
}

.register-link > div > p {
  font-weight: 900;
}

.login-button:hover, .register-link:hover {
  background-color: orange;
}

.error-container {
  display: none;
  border-radius: 5px;
  position: relative;
  padding: 13px 1rem;
  min-height: 1.2rem;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: normal;
  margin-bottom: 1.5rem;
  border-width: 1px 1px 1px 20px;
  border-style: solid;
  border-color: var(--error-color);
  border-image: initial;
  color: var(--error-color);
}


@media only screen and (max-width: 1025px) {
  body {
    height: 125vh;
  }

  .login-content {
    display: grid;
  }

  .user-benefits {
    border-right: none;
    border-top: 1px solid;
  }

  .login-space {
    order: -1;
  }
}

@media only screen and (max-width: 600px) {
  body {
    height: 100vh;
  }

  .login-heading {
    padding: 0;
  }

  .user-benefits {
    display: none;
  }
}

</style>
