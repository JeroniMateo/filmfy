<template>
  <title>Filmfy Home</title>
  <div class="container-fluid">
    <div id="Welcome" class="content">
      <MainWelcome/>
      <WelcomeCards/>
      <FeaturedContent/>
    </div>
  </div>
</template>
<script>
import Header from "../components/basics/Header.vue";
import MainWelcome from "../components/Welcome/MainWelcome.vue";
import WelcomeCards from "../components/Welcome/WelcomeCards.vue";
import FeaturedContent from "../components/Welcome/FeaturedContent.vue";
import Footer from "../components/basics/Footer.vue";

export default {
  name: "WelcomeHome",
  components: {
    Header,
    MainWelcome,
    WelcomeCards,
    FeaturedContent,
    Footer,
  },
};
</script>
<style >

body {
  background-color: #191A19;
}

nav a.router-link-exact-active {
  color: #4E9F3D;
}
</style>
