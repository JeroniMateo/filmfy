<template>
  <div id="login">
    <form id="InicioSesion" action="">
      <input
        id="emailL"
        aria-label="email"
        placeholder="Email*"
        type="email"
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
      <div><b>¿Eres nuevo en Filmfy?</b></div>
      <button id="signUpButton" class="button" aria-label="Inicia sesión">
        <router-link to="../../../src/views/user/Register.vue">Registrarse</router-link>
      </button>
      <div id="suscrito"></div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
</style>