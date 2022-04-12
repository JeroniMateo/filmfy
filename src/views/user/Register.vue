<template>
  <div id="register">
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
        id="signUpButton"
        class="button"
        aria-label="Regístrate"
      >
        Regístrate
      </button>
      <div>¿Ya tienes una cuenta?</div>
      <button id="loginButton" class="button" aria-label="Inicia sesión">
        <router-link to="../../../views/user/Login.vue">Inicia sesión</router-link>
      </button>
      <div id="signUpAlert"></div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style>
</style>