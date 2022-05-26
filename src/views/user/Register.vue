<template>
  <div id="layoutRegister" class="container">
    <h2>Registrarse</h2>
    <form id="Registrarse" action="">
      <div class="row g-5 p-5">
        <div id="RegisterFormInput" class="col-auto">
          <label class="form-label" for="usernameR">User Name</label>
          <input
            id="usernameR"
            placeholder="UserName*"
            class="registro form-control-lg"
            type="text"
            name="UserName"
            v-model="usernameR"
            required
          />
          <p id="error_username" class="error"></p>
        </div>
        <div id="RegisterFormInput" class="col-auto">
          <label class="form-label" for="name_userR">Name</label>
          <input
            id="name_userR"
            placeholder="Name*"
            class="registro form-control-lg"
            type="text"
            name="name_userR"
            v-model="name_userR"
            required
          />
          <p id="error_name" class="error"></p>
        </div>
      </div>
      <div class="row g-5 p-5">
        <div id="RegisterFormInput" class="col-auto">
          <label class="form-label" for="password_userR">Password</label>
          <input
            id="password_userR"
            placeholder="Password*"
            class="registro form-control-lg"
            type="password"
            name="password_userR"
            v-model="password_userR"
            required
          />
          <p id="error_password" class="error"></p>
        </div>
        <div id="RegisterFormInput" class="col-auto">
          <label class="form-label" for="password_confirm_userR"
            >Password Confirm</label
          >
          <input
            id="password_confirm_userR"
            placeholder="PasswordConfirm*"
            class="registro form-control-lg"
            type="password"
            name="password"
            v-model="password_confirm_userR"
            required
          />
          <p id="error_password_confirm" class="error"></p>
        </div>
      </div>
      <span id="error_register" class="error"></span><br />
      <div class="formConfirm">
        <button
          type="submit"
          class="btn btn-primary mb-3"
          @click="registerValidation"
          id="signUpButton"
          aria-label="Regístrate"
        >
          Regístrate
        </button>
        <small>¿Ya tienes una cuenta en Filmfy?</small>
        <router-link to="/login">
          <button
            type="submit"
            class="btn btn-primary mb-3"
            id="loginButton"
            aria-label="Inicia sesión"
          >
            Inicia sesión
          </button>
        </router-link>
      </div>
      <div id="signUpAlert"></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',

  data () {
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
label.form-label {
  font-size: 3vh;

  color: #f7f7f5;
}
div#RegisterFormInput {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.error {
  color: #c50909;
  font-size: 1.5rem;
  font-weight: bold;
}
button {
  background-color: #00c740;
  border: none;
  color: f7f7f5;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2vh;
  margin: 4px 2px;
  cursor: pointer;
}
h2 {
  font-size: 4rem;
  color: #f7f7f5;
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
  color: #0f0505;
  margin: 5%;
}
#layoutRegister {
  margin: auto;
  width: 85%;
  background-color: #0f0505;
  display: flex;
  flex-direction: column;
}
</style>
