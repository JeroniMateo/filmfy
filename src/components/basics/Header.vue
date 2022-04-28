<template>
    <div class="container-fluid p-1" id="header">
      <Navbar />
      <User />
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  background-color: #2c3e50;
}
</style>