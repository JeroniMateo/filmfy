<template>
  <div class="container">
    <div id="footer">
      <div class="footerLogo">
        <img src="../../assets/img/LogoFilmfy.png" width="200px" height="200px" alt="" />
      </div>
      <small><i class="fa-solid fa-copyright"></i>2022 Filmfy</small>
      <Navbar />
      <small>Filfmy.es</small>
    </div>
  </div>
</template>

<script>
import Navbar from "./header/Navbar.vue";
export default {
  name: "Footer",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>