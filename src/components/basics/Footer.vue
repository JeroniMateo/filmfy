<template>
    <div id="footer">
      <p><i id="copyright" class="fa-solid fa-copyright"></i>2022 Filmfy</p>
      <Navbar />
      <small>Filfmy.es</small>
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
i#copyright{
  font-size: 1.5em;
  color: #8c8c8c;
}
</style>