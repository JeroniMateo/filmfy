<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="css/forms.css" />
      <title>TimeInn - Login</title>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="../../assets/img/cameraLogo.png"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <div id="formlogin">
        <h1>Iniciar sesión</h1>
        <form id="InicioSesion" method="POST" action="">
          <input
            id="emailL"
            aria-label="email"
            placeholder="Email*"
            type="text"
            name="email"
            aria-required="true"
          />
          <p id="error_email" class="error"></p>
          <input
            id="passwordL"
            aria-label="password"
            placeholder="Contraseña*"
            type="password"
            name="password"
            aria-required="true"
          />
          <span class="ver" id="verPassword"><i class="far fa-eye"></i></span>
          <p id="error_password" class="error"><b></b></p>
          <span id="errorLogin" class="error"></span><br />
          <button
            @click="loginValidation"
            id="loginButton"
            class="button"
            aria-label="Inicia sesión"
          >
            Inicia sesión
          </button>
          <button id="signUpButton" class="button" aria-label="Inicia sesión">
            <a href="/register">Registrarse</a>
          </button>
        </form>
        <p>¿Eres nuevo en Filmfy?</p>
        <div id="suscrito"></div>
      </div>
    </body>
  </html>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      email: '',
      error_email: '',
      email_validation: false,

      password: '',
      error_password: '',
      password_validation: false,

      error_log: '',
      log: true
    }
  },

  methods: {
    loginValidation: function () {
      if (
        this.email_user === this.email_userR &&
        this.password_user === this.password_userR
      ) {
        this.log = true
        this.loginAPI()
      } else {
        this.error_log = 'El email o la contraseña son incorrectos'
      }
    },

    loginAPI: function () {
      const authString = `${this.email}:${this.password}`
      const header = new Headers()
      header.set('Authorization', 'Basic ' + btoa(authString))

      fetch('http://filmfy-api.ddns.net/api/login/', {
        method: 'GET',
        headers: header
      })
        .then((response) => response.json())
        .then((token) => {
          this.setCookie('tokenName', token.access_token, 365)
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
      const expires = 'expires=' + d.toGMTString()
      document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
    },

    getCookie: function (cname) {
      const name = cname + '='
      const decodedCookie = decodeURIComponent(document.cookie)
      const ca = decodedCookie.split(';')
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') {
          c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length)
        }
      }
      return ''
    }
  }
}
</script>

<style scoped>
h1,
h2,
h3,
h4 {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: bold;
  color: #2ecc71;
  background-color: #242424;
}
p {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: normal;
  color: #f7f7f5;
  background-color: #242424;
}
button {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: bold;
  background-color: #00c740;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #242424;
}

@media screen and (max-width: 850px) {
  #layout {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 15% 80%;
    gap: 5% 0%;
    grid-auto-flow: row;
    grid-template-areas:
      'header header'
      'formresp formresp';
    width: 100%;
    height: 110vh;
  }
}

@media screen and (min-width: 850px) {
  #layout {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 15% 80%;
    gap: 5% 0%;
    grid-auto-flow: row;
    grid-template-areas:
      'header header'
      'infoutil form';
    width: 100%;
    height: 110vh;
  }
}

@media screen and (max-width: 849px) {
  #infoutil {
    display: none;
  }
}

@media screen and (min-width: 850px) {
  #infoutil {
    grid-area: infoutil;
    border-right: solid 1px lightgray;
    margin-left: 15%;
  }
}

#infoutil div {
  display: flex;
  align-items: center;
  margin-bottom: 7%;
}

#infoutil div div {
  margin: 0% 5% 0% 3%;
}

#infoutil i {
  font-size: 3.5em;
}

header {
  grid-area: header;
  display: flex;
  justify-content: center;
  margin-bottom: 20em;
}

header a img {
  width: 6em;
  height: 6em;
  margin-top: 20vh;
}

/* Formulario */

@media screen and (max-width: 850px) {
  #formlogin,
  #formSignUp {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (min-width: 850px) {
  #formlogin,
  #formSignUp {
    grid-area: form;
    display: flex;
    flex-direction: column;
    align-content: space-between;
  }
}

.valido {
  border-color: green;
}

.novalido {
  border-color: var(--rgba-secondary-2-2);
}

.error {
  color: var(--rgba-secondary-2-2);
}

input {
  outline-color: var(--rgba-primary-2);
  height: 3em;
  width: 35%;
  transition: border-width 0.6s linear;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 2.2em;
  width: 35%;
  font-size: 1.2em;
  border-radius: 8px;
  padding: 1%;
  background-color: #00c740;
}

#formlogin div,
#formSignUp div {
  margin: 2%;
}

#loginButton {
  background-color: #fcae07;
  cursor: pointer;
  padding: 1%;
}

#signUpButton {
  background-color: #5d4c0a;
  cursor: pointer;
  margin-top: 2vh;
}

#loginButton:hover {
  background-color: #00c740;
}

#signUpButton:hover {
  background-color: #2ecc71;
}

a:any-link {
  color: white;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: grid;
  align-content: center;
  justify-content: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ver {
  position: relative;
  z-index: 1;
  bottom: 2.6em;
  left: 18%;
  transition: background-color 0.4s ease-in-out;
  cursor: pointer;
  padding: 0.5em;
  margin-bottom: -2em;
}

.ver:hover {
  background-color: var(--rgba-primary-4-transpar2);
}
</style>
