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
          <label class="form-label" for="lastNameR">Last Name</label>
          <input
            id="lastNameR"
            placeholder="LastName*"
            class="registro form-control-lg"
            type="text"
            name="LastName"
            v-model="lastName"
            required
          />
          <p id="errorLastName" class="error"></p>
        </div>
        <div id="RegisterFormInput" class="col-auto">
          <label class="form-label" for="email_user">Email</label>
          <input
            id="email_user"
            placeholder="Email*"
            class="registro form-control-lg"
            type="email"
            name="email"
            v-model="email_user"
            required
          />
          <p id="error_email_user" class="error"></p>
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
          <p id="errorPassword" class="error"></p>
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
          <p id="errorPasswordConfirm" class="error"></p>
        </div>
      </div>
      <div class="formConfirm">
        <button
          type="submit"
          class="btn btn-primary mb-3"
          @click="signUpAPI"
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
      username_user: '',
      name_user: '',
      lastName_user: '',
      email_user: '',
      password_user: '',
      password_confirm_user: '',
      log: false
    }
  },
  methods: {
    setCookie: function (cname, cvalue, exdays) {
      const d = new Date()
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
      const expires = 'expires=' + d.toGMTString()
      document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
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
