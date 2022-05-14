<template>
  <h2>Iniciar sesión</h2>
  <div id="layoutLogin" class="container">
    <form id="InicioSesion" action="">
      <div class="row g-3">
        <div class="col-auto">
          <label class="form-label" for="emailL">Email</label>
          <input
            class="form-control-lg"
            id="emailL"
            aria-label="email"
            placeholder="Email*"
            type="text"
            name="email"
            aria-required="true"
            v-model="email"
            required
          />
          <p id="errorEmail" class="error"></p>
        </div>
        <div class="col-auto">
          <label class="form-label" for="passwordL">Password</label>
          <input
            class="form-control-lg"
            id="passwordL"
            aria-label="password"
            placeholder="Password*"
            type="password"
            name="password"
            aria-required="true"
            v-model="password"
            required
          />
          <span class="ver" id="verPassword"><i class="far fa-eye"></i></span>
          <p id="errorPassword" class="error"></p>
        </div>
      </div>
      <span id="errorLogin" class="error"></span><br />
      <div class="formConfirm">
        <button
          type="submit"
          class="btn btn-primary mb-3"
          @click="LoginAPI"
          id="loginButton"
          aria-label="Iniciar sesión"
        >
          Iniciar sesión
        </button>
        <small>¿Eres nuevo en Filmfy?</small>
        <router-link to="/register">
          <button
            type="submit"
            class="btn btn-primary mb-3"
            id="signUpButton"
            aria-label="Iniciar sesión"
          >
            Registrarse
          </button>
        </router-link>
      </div>
      <div id="suscrito"></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      email: '',
      password: '',
      log: false
    }
  },

  methods: {
    LoginAPI: function () {
      let authString = `${this.email}:${this.password}`
      let headers = new Headers()
      headers.set('Authorization', 'Basic ' + btoa(authString))

      fetch('', {
        method: 'GET',
        headers: headers
      })
        .then((response) => response.json())
        .then((token) => {
          setCookie('tokenName', token.access_token, 365)
          this.log = true
          this.$router.push('/')
        })
        .catch(function (error) {
          console.log('Error en el fetch', error)
        })
    },

    setCookie: function (cname, cvalue, exdays) {
      const d = new Date()
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
      let expires = 'expires=' + d.toGMTString()
      document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
    },

    getCookie: function (cname) {
      let name = cname + '='
      let decodedCookie = decodeURIComponent(document.cookie)
      let ca = decodedCookie.split(';')
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == ' ') {
          c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length)
        }
      }
      return ''
    }
  }
}
</script>

<style scoped>
label.form-label {
  font-size: 3vh;
  color: #fff;
}
.error {
  color: #b33030;
  font-size: 1.5rem;
  font-weight: bold;
}
button {
  background-color: #4e9f3d;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
h2 {
  font-size: 4rem;
  color: #fff;
}
.formConfirm {
  display: flex;
  justify-content: space-around;
  justify-items: stretch;
  align-content: center;
  align-items: center;
}
#layoutRegister {
  display: flex;
  justify-content: center;
  justify-items: stretch;
  align-content: center;
  align-items: center;
}
input {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1da8e2;
  margin: 5%;
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: space-around;
}
#layoutLogin {
  margin: auto;
  width: 70%;
}
</style>
