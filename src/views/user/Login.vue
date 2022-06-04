<template>
  <section class="login-space">
    <form @submit.prevent="loginValidation">
      <div class="d-flex flex-column form">
        <div class="h2-container">
          <h2>Iniciar sesión</h2>
        </div>

        <div class="container">
          <div class="row">
            <div class="data-container col-12">
              <input aria-label="Email" type="text" autofocus="" id="email" name="email" class="text-black l-input first"
                     placeholder="E-mail*" v-model="email"/>
              <p class="text-danger">{{ this.error_email }}</p>
            </div>

            <div class="data-container col-12">
              <input aria-label="Password" type="password" autofocus="" class="text-black l-input first" id="password" name="password"
                     placeholder="Contraseña*" v-model="password"/>
              <p class="text-danger">{{ this.error_password }}</p>
            </div>

            <div class="col-12">
              <button type="submit" class="login-button l-input" id="login-button">
                <div>
                  <p class="m-0">Iniciar sesión</p>
                </div>
              </button>
              <p class="text-danger">{{ this.response }}</p>
            </div>


            <div class="register-space col-12">
              <div>
                <h3>¿No estás en filmfy? ¡Regístrate!</h3>
              </div>
              <router-link
                  class="text-decoration-none text-white button register-button p-2 bg-danger rounded-3 l-input"
                  :to="{ name: 'register'}"
                  id="signUpButton"
                  aria-label="Inicia sesión"
              >
                <p class="text-decoration-none text-white m-0 fw-bold">Registrarse</p>
              </router-link>
            </div>
          </div>
        </div>

      </div>
    </form>
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
      response: ''
    }
  },

  methods: {
    loginValidation: function () {
      if (this.email !== '') {
        if (this.password !== '') {
          this.loginAPI()
        } else {
          this.error_password = 'Introduce una contraseña valida'
        }
      } else {
        this.error_email = 'Introduce un email valido'
      }
    },

    async loginAPI() {
      const promise = await fetch('http://filmfy-api.ddns.net/api/v1/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      })
      const response = await promise.json()

      if (response.hasOwnProperty('error')) {
        if (response.error.hasOwnProperty('email')) {
          this.response = 'Introduzca un email válido'
        } else if (response.error.hasOwnProperty('password')) {
          this.response = 'La contraseña debe ser de al menos 6 caracteres'
        }
      }
      if (response.hasOwnProperty('message')) {
        this.response = 'Login fallido, pruebe de nuevo'
      }

      if (promise.status === 200) {
        await setCookie("auth", response.token, 7)
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

.form {
  width: 30rem;
}

.l-input {
  width: inherit;
}

.first {
  display: flex;
  text-align: start;
  justify-content: center;
  align-items: center;
  border: none;
  min-height: 3rem;
  padding: 0.1rem;
  text-decoration: none;
  font-size: 1.1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
}

@media only screen and (max-width: 993px) {
  .form {
    width: inherit;
  }
}

h1 {
  font-size: 2.5rem;
}

h3 {
  font-size: 1.1rem;
  line-height: 1.5rem;
  font-weight: 700;
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
  min-height: 63vh;
  padding-top: 5vh;
  background-color: var(--bs-bgmain);
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 993px) {
  .login-space {
    height: auto;
    padding: 30px;
  }
}

.data-container {
  position: relative;
  padding: 0.5rem;
}

.show-pass-icon,
.hide-pass-icon {
  float: right;
  margin-top: -2.3rem;
  font-size: 1.2rem;
  position: relative;
  z-index: 2;
  color: #242424;
}

.login-button {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #fffdfd;
  background-color: #00c740;
  border: none;
  min-height: 3rem;
  padding: 0.1rem;
  text-decoration: none;
  font-size: 1.1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
}

.register-button > div > p {
  font-weight: 900;
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


.register-link > div > p {
  font-weight: 900;
}

.login-button:hover {
  background-color: #f1c40f;
}

input {
  width: fit-content;
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

  .login-space {
    padding: 0;
  }
}

h2 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: #00c740;
}

.h2-container {
  margin-bottom: 1rem;
  padding: 0.5rem;
}
</style>
