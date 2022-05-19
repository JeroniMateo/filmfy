<template>
  <div id="layoutRegister" class="container">
    <h2>Registrarse</h2>
    <form id="Registrarse" action="">
      <div class="row g-5 p-5">
        <div id="RegisterFormInput" class="col-auto">
          <label class="form-label" for="username_userR">User Name</label>
          <input
            id="username_userR"
            placeholder="username_user*"
            class="registro form-control-lg"
            type="text"
            name="username_user"
            v-model="username_userR"
            required
          />
          <p id="error_username_userR" class="error"></p>
        </div>
        <div id="RegisterFormInput" class="col-auto">
          <label class="form-label" for="name_userR"></label>
          <input
            id="name_userR"
            placeholder="Name*"
            class="registro form-control-lg"
            type="text"
            name="email"
            v-model="name_userR"
            required
          />
          <p id="error_name_userR" class="error"></p>
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
          <p id="error_password_userR" class="error"></p>
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
          <p id="error_password_confirm_userR" class="error"></p>
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
      username_userR: '',
      username: false,

      name_userRR: '',
      name: false,

      email_userR: '',
      email: false,

      password_userR: '',
      password: false,

      password_confirm_userR: '',
      passwordConfirm: false,

      error_register: '',
      log: false
    }
  },
  methods: {
    registerValidation: function () {
      // username_user
      if (this.username_userR === '') {
        this.error_username_userR = 'El nombre de usuario es obligatorio'
      }
      if (this.username_userR.length < 3) {
        this.error_username_userR =
          'El nombre de usuario debe tener al menos 3 caracteres'
      }
      if (this.username_userR.length > 15) {
        this.error_username_userR =
          'El nombre de usuario no puede tener más de 15 caracteres'
      }
      if (/^[a-zA-Z0-9]+$/.test(this.username_userR) === false) {
        this.error_username_userR =
          'El nombre de usuario solo puede contener letras y números'
      }
      if (
        this.username_userR.length !== '' &&
        this.username_userR.length >= 3 &&
        this.username_userR.length <= 15 &&
        /^[a-zA-Z0-9]+$/.test(this.username_userR) === true
      ) {
        this.username_user = true
      }

      // Name
      if (this.name_userR === '') {
        this.error_name_userR = 'El nombre es obligatorio'
      }
      if (this.name_userR.length < 6) {
        this.error_name_userR = 'El nombre debe tener al menos 6 caracteres'
      }
      if (this.name_userR.length > 15) {
        this.error_name_userR = 'El nombre no puede tener más de 15 caracteres'
      }
      if (/^[a-zA-Z]+$/.test(this.name_userR) === false) {
        this.error_name_userR = 'El nombre solo puede contener letras'
      }
      if (
        this.name.user !== '' &&
        this.name_userR.length >= 6 &&
        this.name_userR.length <= 15 &&
        /^[a-zA-Z]+$/.test(this.name_userR) === true
      ) {
        this.name = true
      }

      // Email
      if (this.email_userR === '') {
        this.error_email_userR = 'El email es obligatorio'
      }
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          this.email_userR
        ) === false
      ) {
        this.error_email_userR = 'El email no es válido'
        this.email = false
      }
      if (
        this.email_userR !== '' &&
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          this.email_userR
        ) === true
      ) {
        this.email = true
      }
      // Password
      if (this.password_userR === '') {
        this.error_password_userR = 'La contraseña es obligatoria'
      }
      if (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/.test(
          this.password_userR
        ) === false
      ) {
        this.error_password_userR =
          'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial'
      }
      if (
        this.password_userR !== '' &&
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/.test(
          this.password_userR
        ) === true
      ) {
        this.password = true
      }
      // Password Confirm
      if (this.password_confirm_userR === '') {
        this.error_password_confirm_userR =
          'La confirmación de contraseña es obligatoria'
      }
      if (this.password_confirm_userR !== this.password_userR) {
        this.error_password_confirm_userR = 'Las contraseñas no coinciden'
      }
      if (
        this.error_password_confirm_userR !== '' &&
        this.password_confirm_userR === this.password_userR
      ) {
        this.passwordConfirm = true
      }
      // Register
      if (
        this.username_userR &&
        this.name_userR &&
        this.email_userR &&
        this.password_userR &&
        this.password_confirm_userR
      ) {
        this.signUpAPI()
      } else {
        this.error_register = 'Por favor, revisa los campos'
      }
    },
    signUpAPI: function () {
      fetch('', {
        method: 'POST',
        body: JSON.stringify({
          username_userR: this.username_userR,
          name_userR: this.name_userR,
          email_userR: this.email_userR,
          password_userR: this.password_userR,
          password_confirm_userR: this.password_confirm_userR
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

  color: #fff;
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
  background-color: #4e9f3d;
  border: none;
  color: white;
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
  color: #000;
  margin: 5%;
}
#layoutRegister {
  margin: auto;
  width: 85%;
  background-color: #000;
  display: flex;
  flex-direction: column;
}
</style>
