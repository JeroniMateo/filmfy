<template>
  <div id="WelcomePage" class="content container-fluid">
    <MainWelcome />
    <WelcomeCards />
    <FeaturedContent />
  </div>
</template>
<script>
import Header from '../components/basics/Header.vue'
import MainWelcome from '../components/Welcome/MainWelcome.vue'
import WelcomeCards from '../components/Welcome/WelcomeCards.vue'
import FeaturedContent from '../components/Welcome/FeaturedContent.vue'
import Footer from '../components/basics/Footer.vue'

export default {
  name: 'WelcomeHome',
  components: {
    Header,
    MainWelcome,
    WelcomeCards,
    FeaturedContent,
    Footer
  }
}
</script>
<style scoped>
body {
  background-color: #000;
}

nav a.router-link-exact-active {
  color: #4e9f3d;
}
div#WelcomePage {
  margin: auto;
  width: 100%;
}
</style>
