<template>
  <div class="container">
    <div id="header">
      <Navbar />
      <User />
    </div>
  </div>
</template>

<script>
import Navbar from "../basics/header/Navbar.vue";
import User from "../basics/header/User.vue";
export default {
  name: "Header",
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