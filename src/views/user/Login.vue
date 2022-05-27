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
        href="images/Logo Music4Events.png"
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
          <a href="Index.html"><img src="images/Logo Music4Events.png" /></a>
        </header>
        <section id="infoutil">
          <h4>Reserva entrada en tu concierto favorito</h4>
          <div>
            <i class="fas fa-ticket-alt"></i>
            <div>
              En nuestra web te ofrecemos todas las facilidades para que puedas
              conseguir entradas para ver a tus artistas favoritos.
            </div>
          </div>

          <h4>Entérate de las últimas novedades</h4>
          <div>
            <i class="far fa-newspaper"></i>
            <div>
              Trabajamos día a día para mantenerte actualizado. En nuestro
              portal de noticias podrás conocer de primera mano todo lo que
              necesitas saber.
            </div>
          </div>

          <h4>Participa en nuestros sorteos</h4>
          <div>
            <i class="far fa-star"></i>
            <div>
              Desde camisetas personalizadas, hasta pasar un día con tu ídolo.
              Formar parte de la comunidad de Music4Events te da la posibilidad
              de participar en todos los sorteos.
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
      email_user: '',
      error_email_user: '',
      email: false,

      password_user: '',
      error_password_user: '',
      password: false,

      error_log: '',
      log: false
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

      fetch('', {
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

input {
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
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
  width: 85%;
  background-color: #000;
  display: flex;
  flex-direction: column;
}

</style>
