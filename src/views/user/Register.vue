<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="css/forms.css" />
      <title>TimeInn - Regístrate</title>
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
              Formar parte de la comunidad de Music4Events te da la oportunidad
              a participar en todos los sorteos.
            </div>
          </div>
          <h3>¿A qué estás esperando?</h3>
        </section>
        <div id="formSignUp">
          <h1>Registrarse</h1>
          <form action="">
            <input
              id="emailR"
              placeholder="Email*"
              class="registro"
              type="email"
              name="email"
            />
            <p id="errorEmail" class="error"></p>
            <input
              id="passwordR"
              placeholder="Password*"
              class="registro"
              type="password"
              name="password"
            />
            <p id="errorPassword" class="error"></p>
            <button
              type="button"
              onclick="signUpAPI()"
              id="signUpButton"
              class="button"
              aria-label="Regístrate"
            >
              Regístrate
            </button>
            <div>¿Ya tienes una cuenta?</div>
            <button id="loginButton" class="button" aria-label="Inicia sesión">
              <a href="Login.html">Inicia sesión</a>
            </button>
            <div id="signUpAlert"></div>
          </form>
        </div>
      </div>
    </body>
  </html>
</template>

<script>
export default {
  name: 'Register',

  data() {
    return {
      usernameR: '',
      error_username: '',
      username_validation: false,

      nameR: '',
      error_name: '',
      name_validation: false,

      emailR: '',
      error_email: '',
      email_validation: false,

      passwordR: '',
      error_password: '',
      password_validation: false,

      password_confirmR: '',
      error_password_confirm: '',
      passwordConfirm_validation: false,

      error_register: '',
      log: true
    }
  },
  methods: {
    registerValidation: function () {
      // UserName
      if (this.usernameR === '') {
        this.error_username = 'El nombre de usuario es obligatorio'
      }
      if (this.usernameR.length < 3) {
        this.error_username =
          'El nombre de usuario debe tener al menos 3 caracteres'
      }
      if (this.usernameR.length > 15) {
        this.error_username =
          'El nombre de usuario no puede tener más de 15 caracteres'
      }
      if (/^[a-zA-Z0-9]+$/.test(this.usernameR) === false) {
        this.error_username =
          'El nombre de usuario solo puede contener letras y números'
      }
      if (
        this.usernameR.length !== '' &&
        this.usernameR.length >= 3 &&
        this.usernameR.length <= 15 &&
        /^[a-zA-Z0-9]+$/.test(this.username_userRR) === true
      ) {
        this.username = true
      }

      // Name
      if (this.nameR === '') {
        this.error_name = 'El nombre es obligatorio'
      }
      if (this.nameR.length < 6) {
        this.error_name = 'El nombre debe tener al menos 6 caracteres'
      }
      if (this.nameR.length > 15) {
        this.error_name = 'El nombre no puede tener más de 15 caracteres'
      }
      if (/^[a-zA-Z]+$/.test(this.nameR) === false) {
        this.error_name = 'El nombre solo puede contener letras'
      }
      if (
        this.name.user !== '' &&
        this.nameR.length >= 6 &&
        this.nameR.length <= 15 &&
        /^[a-zA-Z]+$/.test(this.nameR) === true
      ) {
        this.name = true
      }

      // Email
      if (this.emailR === '') {
        this.error_email = 'El email es obligatorio'
      }
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          this.emailR
        ) === false
      ) {
        this.error_email = 'El email no es válido'
        this.email = false
      }
      if (
        this.emailR !== '' &&
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          this.emailR
        ) === true
      ) {
        this.email = true
      }
      // Password
      if (this.passwordR === '') {
        this.error_password = 'La contraseña es obligatoria'
      }
      if (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/.test(
          this.passwordR
        ) === false
      ) {
        this.error_password =
          'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial'
      }
      if (
        this.passwordR !== '' &&
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/.test(
          this.passwordR
        ) === true
      ) {
        this.password = true
      }
      // Password Confirm
      if (this.password_confirmR === '') {
        this.error_password_confirm =
          'La confirmación de contraseña es obligatoria'
      }
      if (this.password_confirmR !== this.passwordR) {
        this.error_password_confirm = 'Las contraseñas no coinciden'
      }
      if (
        this.error_password_confirm !== '' &&
        this.password_confirmR === this.passwordR
      ) {
        this.passwordConfirm = true
      }
      // Register
      if (
        this.usernameR &&
        this.nameR &&
        this.emailR &&
        this.passwordR &&
        this.password_confirmR
      ) {
        this.signUpAPI()
      } else {
        this.error_register = 'Por favor, revisa los campos'
      }
    },
    signUpAPI: function () {
      fetch('http://filmfy-api.ddns.net/api/register/', {
        method: 'POST',
        body: JSON.stringify({
          usernameR: this.usernameR,
          nameR: this.nameR,
          emailR: this.emailR,
          passwordR: this.passwordR,
          password_confirmR: this.password_confirmR
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
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
    }
  }
}
</script>

<style scoped>
:root {
  /* Voy a aprovechar las variables de css y el root para determinar una paleta de colores.
    El 2 es el tono principal de cada uno */

  /* Color primario */

  --rgba-primary-0: rgba(0, 0, 0, 1);
  --rgba-primary-1: rgba(1, 45, 62, 1);
  --rgba-primary-2: rgba(4, 74, 100, 1);
  --rgba-primary-3: rgba(35, 98, 121, 1);
  --rgba-primary-4: rgba(78, 86, 88, 1);
  --rgba-primary-4-transpar: rgba(78, 86, 88, 0.8);
  --rgba-primary-4-transpar2: rgba(78, 86, 88, 0.3);

  /* Color secundario 1 */

  --rgba-secondary-1-0: rgba(0, 0, 0, 1);
  --rgba-secondary-1-1: rgba(99, 73, 0, 1);
  --rgba-secondary-1-2: rgba(160, 118, 0, 1);
  --rgba-secondary-1-3: rgba(194, 156, 49, 1);
  --rgba-secondary-1-4: rgba(141, 136, 124, 1);

  /* Color secundario 2 */

  --rgba-secondary-2-0: rgba(0, 0, 0, 1);
  --rgba-secondary-2-1: rgba(99, 7, 0, 1);
  --rgba-secondary-2-2: rgba(160, 12, 0, 1);
  --rgba-secondary-2-3: rgba(194, 60, 49, 1);
  --rgba-secondary-2-4: rgba(141, 125, 124, 1);
}

body {
  margin: 0;
  font-family: "Source Sans Pro", sans-serif;
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

/* El truco para centrar el contenido después de haber hecho un grid consiste en entender estos conceptos:
  - Los contenedores principales (los padres) los distribuimos con grid para hacer el layout principal de la página.
  - Podemos centrar los contenedores principales del grid, pero eso no centra el contenido que tienen como hijo.
  - Para centrar el contenido que tienen los hijos en sí, hay que usar flex dentro de ellos, y allí ya se puede
  hacer un justify-content o align-items. */

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
