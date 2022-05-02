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
              @click="signUpAPI"
              id="signUpButton"
              class="button"
              aria-label="Regístrate"
            >
              Regístrate
            </button>
            <div>¿Ya tienes una cuenta?</div>
            <button id="loginButton" class="button" aria-label="Inicia sesión">
              <router-link to="/login">Inicia sesión</router-link>
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
  name: "Register",
  data: {},
  methods: {
    setCookie: function (cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      let expires = "expires=" + d.toGMTString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    //El usuario introduce un email y una contraseña y lo añadimos a la api de users.json
    signUpAPI: function () {
      fetch("", {
        method: "POST",
        body: JSON.stringify({
          email: document.getElementById("emailR").value,
          password: document.getElementById("passwordR").value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((token) => {
          setCookie("tokenName", token.access_token, 365);
          window.location.href = "";
        })
        .catch(function (error) {
          console.log("Error en el fetch", error);
        });
    },
  },
};
</script>

<style>
</style>