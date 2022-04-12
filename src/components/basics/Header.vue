<template>
  <div class="container-fluid">
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
div#header {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  background-color: white;
}
</style>