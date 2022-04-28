<template>
  <router-link to="/login">
    <img id="UserNotLogIMG" src="../../../assets/img/UserPhoto.png" alt="" />
    <p id="userProfile">Login</p>
  </router-link>
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
</style>