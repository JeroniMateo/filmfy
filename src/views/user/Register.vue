<template>
  <h1>Registrarse</h1>
  <div id="layoutRegister" class="container">
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
        <small>¿Ya tienes una cuenta?</small>
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

  methods: {
    //El usuario introduce un email y una contraseña y lo añadimos a la api de users.json
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
          userName: document.getElementById('UserNameR').value,
          name: document.getElementById('NameR').value,
          lastName: document.getElementById('LastNameR').value,
          email: document.getElementById('emailR').value,
          password: document.getElementById('passwordR').value,
          passwordConfirm: document.getElementById('passwordConfirmR').value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then((response) => response.json())
        .then((token) => {
          setCookie('tokenName', token.access_token, 365)
          window.location.href = ''
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
h1 {
  font-size: 5rem;
  font-weight: bold;
  color: rgb(78, 159, 61);
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
  color: #1da8e2;
  margin: 5%;
}
</style>
