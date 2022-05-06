<template>
  <div id="UserLogIn" type="submit">
    
      <router-link to="/login">
        Iniciar Sesion
      </router-link>
  </div>
</template>

<script>
export default {
  name: "UserNotLog",

  data() {
    return {
      log: false,
    };
  },
};
</script>

<style scoped>
div#UserLogIn {
  
  background-color: aquamarine;
    display: flex;
    width: 16vh;
    height: 5vh;
    align-items: center;
    justify-content: center;
    font-size: 2.5vh;
}
a{
  text-decoration: none;
}
</style>