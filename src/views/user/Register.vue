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
        <section id="infoutil">
          <h4>Disfruta de este arte llamado Cine</h4>
          <div>
            <i class="fas fa-ticket-alt"></i>
            <div>
              <p>
                No te pierdas ninguna de las películas que te gustan. ¡Las
                podrás guardar!
              </p>
            </div>
          </div>

          <h4>Pasa momentos inolvidables junto a tus amigos</h4>
          <div>
            <i class="far fa-newspaper"></i>
            <div>
              <p>
                Comparte tus listas, opiniones y películas con quien quieras,
                cuando sea.
              </p>
            </div>
          </div>
          <h4>Ten recuerdo de los grandes momentos del Cine</h4>
          <div>
            <i class="far fa-newspaper"></i>
            <div>
              <p>
                Da likes, guarda listas y organiza tus películas favoritas como
                prefieras.
              </p>
            </div>
          </div>

          <h4>Se un hito de la gran pantalla</h4>
          <div>
            <i class="far fa-star"></i>
            <div>
              <p>
                Escribe comentarios, puntúa y debate con otros usuarios.
                Conviértete en crítico.
              </p>
            </div>
          </div>
        </section>
        <div id="formSignUp">
          <h1>Registrarse</h1>
          <form action="" method="POST">
            <input
              id="usernameR"
              placeholder="Nombre de Usuario*"
              class="registro"
              type="test"
              name="username"
              v-model="usernameR"
              required
            />
            <p id="error_username" class="error">{{ error_username }}</p>
            <input
              id="nameR"
              placeholder="Nombre*"
              class="registro"
              type="text"
              name="name"
              v-model="nameR"
              required
            />
            <p id="error_name" class="error">{{ error_name }}</p>
            <input
              id="emailR"
              placeholder="Email*"
              class="registro"
              type="email"
              name="email"
              v-model="emailR"
              required
            />
            <p id="error_email" class="error">{{ error_email }}</p>
            <input
              id="passwordR"
              placeholder="Contraseña*"
              class="registro"
              type="password"
              name="password"
              v-model="passwordR"
              required
            />
            <span
              @mouseover="mostrarPassword"
              @mouseleave="ocultarPassword"
              class="ver"
              id="verPassword"
              ><i class="far fa-eye"></i
            ></span>
            <p id="error_password" class="error">{{ error_password }}</p>
            <input
              id="password_confirmR"
              placeholder="Confirmar Contraseña*"
              class="registro"
              type="password"
              name="password_confirm"
              v-model="password_confirmR"
              required
            />
            <span
              @mouseover="mostrarPassword"
              @mouseleave="ocultarPassword"
              class="ver"
              id="verPassword"
              ><i class="far fa-eye"></i
            ></span>
            <p id="error_password_confirm" class="error">
              {{ error_password_confirm }}
            </p>
            <button
              type="button"
              @click="registerValidation"
              id="signUpButton"
              class="button"
              aria-label="Regístrate"
            >
              Regístrate
            </button>
            <button id="loginButton" class="button" aria-label="Inicia sesión">
              <a href="/login">Inicia sesión</a>
            </button>
            <p>¿Ya tienes una cuenta?</p>
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
        this.error_username = ''
      }

      // Name
      if (this.nameR === '') {
        this.error_name = 'El nombre es obligatorio'
      }
      if (this.nameR.length < 3) {
        this.error_name = 'El nombre debe tener al menos 3 caracteres'
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
        this.error_name = ''
      }

      // Email
      if (this.emailR === '') {
        this.error_email = 'El email es obligatorio'
      }
      if (
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.emailR) ===
        false
      ) {
        this.error_email = 'El email no es válido'
      }
      if (
        this.emailR !== '' &&
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.emailR) === true
      ) {
        this.name = true
        this.error_name = ''
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
        this.passwordR = true
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
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #242424;
}
#layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 850px) {
  #layout {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 15% 80%;

    grid-auto-flow: row;
    grid-template-areas:
      'header header'
      'formresp formresp';
  }
}

@media screen and (min-width: 850px) {
  #layout {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 15% 80%;

    grid-auto-flow: row;
    grid-template-areas:
      'header header'
      'infoutil form';
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

input {
  outline-color: var(--rgba-primary-2);
  height: 3em;
  width: 70%;
  transition: border-width 0.6s linear;
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
  background-color: #00c740;
  margin-top: 3vh;
}

#formlogin div,
#formSignUp div {
  margin: 2%;
}

#signUpButton {
  background-color: #fcae07;
  cursor: pointer;
  margin-top: 2vh;
}

#loginButton {
  background-color: #5d4c0a;
  cursor: pointer;
  padding: 1%;
}

#signUpButton:hover {
  background-color: #00c740;
}

#loginButton:hover {
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
  left: 30%;
  transition: background-color 0.4s ease-in-out;
  cursor: pointer;
  padding: 0.5em;
  margin-bottom: -2em;
}

.ver:hover {
  background-color: var(--rgba-primary-4-transpar2);
}
p.error {
  color: #e60a0a;
  font-size: 1em;
}
</style>
