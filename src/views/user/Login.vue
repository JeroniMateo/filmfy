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
      <div id="layout">
        <header>
          <a href="/"><img src="../../assets/img/cameraLogo.png" /></a>
        </header>
        <section id="infoutil">
          <h4>Disfruta de este arte llamado Cine</h4>
          <div>
            <i class="fas fa-ticket-alt"></i>
            <div>
             <p> En nuestra web te ofrecemos todas las facilidades para que puedas
              disfrutar de tus peliculas favoritas.</p>
            </div>
          </div>

          <h4>Entérate de los ultimos estrenos</h4>
          <div>
            <i class="far fa-newspaper"></i>
            <div>
              <p>Trabajamos día a día para mantenerte actualizado. En nuestro
              portal de cartelera podrás conocer de primera mano todo lo que
              necesitas saber de estrenos.</p>
            </div>
          </div>

          <h4>Participa en nuestros sorteos</h4>
          <div>
            <i class="far fa-star"></i>
            <div>
              <p>Desde camisetas personalizadas, hasta pasar un día con tu ídolo.
              Formar parte de la comunidad de Music4Events te da la posibilidad
              de participar en todos los sorteos.</p>
            </div>
          </div>
          <h3>¿A qué estás esperando?</h3>
        </section>
        <section id="formlogin">
          <h1>Iniciar sesión</h1>
          <form id="InicioSesion" action="">
            <input
              id="emailL"
              aria-label="email"
              placeholder="Email*"
              type="text"
              name="email"
              aria-required="true"
            />
            <p id="errorName" class="error"></p>
            <input
              id="passwordL"
              aria-label="password"
              placeholder="Password*"
              type="password"
              name="password"
              aria-required="true"
            />
            <span class="ver" id="verPassword"><i class="far fa-eye"></i></span>
            <p id="errorPassword" class="error"><b></b></p>
            <span id="errorLogin" class="error"></span><br />
            <button
              onclick="LoginAPI()"
              id="loginButton"
              class="button"
              aria-label="Inicia sesión"
            >
              Inicia sesión
            </button>
            <div><b>¿Eres nuevo en Music4Events?</b></div>
            <button id="signUpButton" class="button" aria-label="Inicia sesión">
              <a href="/register">Registrarse</a>
            </button>
            <div id="suscrito"></div>
          </form>
          <br />
        </section>
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
      } else {
        this.error_log = 'El email o la contraseña son incorrectos'
      }
    },

    LoginAPI: function () {
      const authString = `${this.email}:${this.password}`
      const header = new Headers()
      header.set('Authorization', 'Basic ' + btoa(authString))

      fetch('http://filmfy-api.ddns.net/api/login/', {
        method: 'GET',
        headers: header
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
h1,h2,h3,h4 {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: bold;
  color:#2ecc71;
  background-color: #242424;
}
p{
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: normal;
  color:#f7f7f5;
  background-color: #242424;
}
button{
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: bold;
  background-color: #00c740;
}
body {
  margin: 0;
  font-family: "Source Sans Pro", sans-serif;
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
      "header header"
      "formresp formresp";
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
      "header header"
      "infoutil form";
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
    grid-area: formresp;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    margin-right: 5%;
    margin-left: 5%;
  }
}

@media screen and (min-width: 850px) {
  #formlogin,
  #formSignUp {
    grid-area: form;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    margin-right: 15%;
    margin-left: 5%;
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
  width: 70%;
  transition: all 0.5s ease-in-out;
}

input:hover {
  width: 80%;
}

input:focus {
  box-shadow: 2px 2px 2px var(--rgba-primary-2);
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 2.2em;
  width: 70%;
  font-size: 1.2em;
  border-radius: 8px;
  padding: 1%;
}

#formlogin div,
#formSignUp div {
  margin: 2%;
}

#loginButton {
  background-color: var(--rgba-primary-2);
  transition: background-color 0.4s ease-in-out;
  cursor: pointer;
}

#signUpButton {
  background-color: var(--rgba-secondary-1-2);
  transition: background-color 0.4s ease-in-out;
  cursor: pointer;
}

#loginButton:hover {
  background-color: var(--rgba-primary-1);
}

#signUpButton:hover {
  background-color: var(--rgba-secondary-1-1);
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
  left: 30%;
  transition: background-color 0.4s ease-in-out;
  cursor: pointer;
  padding: 0.5em;
  margin-bottom: -2em;
}

.ver:hover {
  background-color: var(--rgba-primary-4-transpar2);
}
</style>
