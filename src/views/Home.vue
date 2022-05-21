<template>
  <div id="Home" class="content container-fluid">
    <MainWelcome />
    <WelcomeCards />
    <FeaturedContent />
  </div>
</template>

<script>
import MainWelcome from '../components/welcome/MainWelcome.vue'
import WelcomeCards from '../components/welcome/WelcomeCards.vue'
import FeaturedContent from '../components/welcome/FeaturedContent.vue'
export default {
  name: 'Home',
  components: {
    MainWelcome,
    WelcomeCards,
    FeaturedContent
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
div#HomeNotLog {
  margin: auto;
  width: 100%;
}
</style>
