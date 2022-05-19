<template>
  <div id="layoutRegister" class="container">
    <h2>Registrarse</h2>
    <form id="Registrarse" action="">
      <div class="row g-5 p-5">
        <div id="RegisterFormInput" class="col-auto">
          <label class="form-label" for="username_user">User Name</label>
          <input
            id="username_user"
            placeholder="UserName*"
            class="registro form-control-lg"
            type="text"
            name="UserName"
            v-model="username_user"
            required
          />
          <p id="error_username_user" class="error"></p>
        </div>
        <div id="RegisterFormInput" class="col-auto">
          <label class="form-label" for="name_user"></label>
          <input
            id="name_user"
            placeholder="Name*"
            class="registro form-control-lg"
            type="text"
            name="email"
            v-model="name_user"
            required
          />
          <p id="error_name_user" class="error"></p>
        </div>
      </div>
      <div class="row g-5 p-5">
        <div id="RegisterFormInput" class="col-auto">
          <label class="form-label" for="password_user">Password</label>
          <input
            id="password_user"
            placeholder="Password*"
            class="registro form-control-lg"
            type="password"
            name="password_user"
            v-model="password_user"
            required
          />
          <p id="error_password_user" class="error"></p>
        </div>
        <div id="RegisterFormInput" class="col-auto">
          <label class="form-label" for="password_confirm_user"
            >Password Confirm</label
          >
          <input
            id="password_confirm_user"
            placeholder="PasswordConfirm*"
            class="registro form-control-lg"
            type="password"
            name="password"
            v-model="password_confirm_user"
            required
          />
          <p id="error_password_confirm_user" class="error"></p>
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

  data() {
    return {
      username_user: '',
      username: false,

      name_user: '',
      name: false,

      email_user: '',
      email: false,

      password_user: '',
      password: false,

      password_confirm_user: '',
      passwordConfirm: false,

      error_register: '',
      log: false
    }
  },
  methods: {
    registerValidation: function () {
      // UserName
      if (this.username_user === '') {
        this.error_username_user = 'El nombre de usuario es obligatorio'
      }
      if (this.username_user.length < 3) {
        this.error_username_user =
          'El nombre de usuario debe tener al menos 3 caracteres'
      }
      if (this.username_user.length > 15) {
        this.error_username_user =
          'El nombre de usuario no puede tener más de 15 caracteres'
      }
      if (/^[a-zA-Z0-9]+$/.test(this.username_user) === false) {
        this.error_username_user =
          'El nombre de usuario solo puede contener letras y números'
      }
      if (
        this.username_user.length !== '' &&
        this.username_user.length >= 3 &&
        this.username_user.length <= 15 &&
        /^[a-zA-Z0-9]+$/.test(this.username_user) === true
      ) {
        this.username = true
      }

      // Name
      if (this.name_user === '') {
        this.error_name_user = 'El nombre es obligatorio'
      }
      if (this.name_user.length < 6) {
        this.error_name_user = 'El nombre debe tener al menos 6 caracteres'
      }
      if (this.name_user.length > 15) {
        this.error_name_user = 'El nombre no puede tener más de 15 caracteres'
      }
      if (/^[a-zA-Z]+$/.test(this.name_user) === false) {
        this.error_name_user = 'El nombre solo puede contener letras'
      }
      if (
        this.name.user !== '' &&
        this.name_user.length >= 6 &&
        this.name_user.length <= 15 &&
        /^[a-zA-Z]+$/.test(this.name_user) === true
      ) {
        this.name = true
      }

      // Email
      if (this.email_user === '') {
        this.error_email_user = 'El email es obligatorio'
      }
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          this.email_user
        ) === false
      ) {
        this.error_email_user = 'El email no es válido'
        this.email = false
      }
      if (
        this.email_user !== '' &&
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          this.email_user
        ) === true
      ) {
        this.email = true
      }
      // Password
      if (this.password_user === '') {
        this.error_password_user = 'La contraseña es obligatoria'
      }
      if (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/.test(
          this.password_user
        ) === false
      ) {
        this.error_password_user =
          'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial'
      }
      if (
        this.password_user !== '' &&
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/.test(
          this.password_user
        ) === true
      ) {
        this.password = true
      }
      // Password Confirm
      if (this.password_confirm_user === '') {
        this.error_password_confirm_user =
          'La confirmación de contraseña es obligatoria'
      }
      if (this.password_confirm_user !== this.password_user) {
        this.error_password_confirm_user = 'Las contraseñas no coinciden'
      }
      if (
        this.error_password_confirm_user !== '' &&
        this.password_confirm_user === this.password_user
      ) {
        this.passwordConfirm = true
      }
      // Register
      if (
        this.username_user &&
        this.name_user &&
        this.email_user &&
        this.password_user &&
        this.password_confirm_user
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
          username_user: this.username_user,
          name_user: this.name_user,
          email_user: this.email_user,
          password_user: this.password_user,
          password_confirm_user: this.password_confirm_user
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
