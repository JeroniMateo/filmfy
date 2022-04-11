<template>
  <div class="container">
    <div id="header">
      <div id="filmfy">
        <img src="../../assets/img/LogoFilmfy.png" alt="" />
        <h2>FILMFY</h2>
      </div>
      <Navbar />
      <User />
    </div>
  </div>
</template>

<script>
import Navbar from "./header/Navbar.vue";
import User from "././header/User.vue";
export default {
  name: "Header",
  props: ["UserLog"],
  components: {
    Navbar,
    User,
  },
};
</script>

<style>
h2 {
  color: green;
}
</style>