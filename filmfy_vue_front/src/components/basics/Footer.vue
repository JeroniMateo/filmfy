<template>
  <div class="container-fluid">
    <div id="footer">
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
div#footer {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  background-color: white;
}
</style>