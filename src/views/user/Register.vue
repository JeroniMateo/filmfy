<template>
  <div id="layoutRegister" class="container">
    <h2>Registrarse</h2>
    <form id="Registrarse" action="">
      <div class="row g-5 p-5">
        <div id="RegisterFormInput" class="col-auto">
          <label class="form-label" for="userNameR">User Name</label>
          <input
            id="userNameR"
            placeholder="UserName*"
            class="registro form-control-lg"
            type="text"
            name="UserName"
            v-model="userName"
            required
          />
          <p id="errorUserName" class="error"></p>
        </div>
        <div id="RegisterFormInput" class="col-auto">
          <label class="form-label" for="nameR">Name</label>
          <input
            id="nameR"
            placeholder="Name*"
            class="registro form-control-lg"
            type="text"
            name="email"
            v-model="name"
            required
          />
          <p id="errorName" class="error"></p>
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
          <label class="form-label" for="emailR">Email</label>
          <input
            id="emailR"
            placeholder="Email*"
            class="registro form-control-lg"
            type="email"
            name="email"
            v-model="email"
            required
          />
          <p id="errorEmail" class="error"></p>
        </div>
      </div>
      <div class="row g-5 p-5">
        <div id="RegisterFormInput" class="col-auto">
          <label class="form-label" for="passwordR">Password</label>
          <input
            id="passwordR"
            placeholder="Password*"
            class="registro form-control-lg"
            type="password"
            name="password"
            v-model="password"
            required
          />
          <p id="errorPassword" class="error"></p>
        </div>
        <div id="RegisterFormInput" class="col-auto">
          <label class="form-label" for="passwordConfirmR"
            >Password Confirm</label
          >
          <input
            id="passwordConfirmR"
            placeholder="PasswordConfirm*"
            class="registro form-control-lg"
            type="password"
            name="password"
            v-model="passwordConfirm"
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

  data() {
    return {
      userName: '',
      name: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      log: false
    }
  },
  methods: {
    setCookie: function (cname, cvalue, exdays) {
      const d = new Date()
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
      let expires = 'expires=' + d.toGMTString()
      document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
    },
    signUpAPI: function () {
      fetch('', {
        method: 'POST',
        body: JSON.stringify({
          userName: this.userName,
          name: this.name,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          passwordConfirm: this.passwordConfirm
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
  width: 70%;
  background-color: #000;
  display: flex;
  flex-direction: column;
}
</style>
