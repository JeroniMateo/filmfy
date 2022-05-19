<template>
  <div id="HomeNotLog" class="content container-fluid">
    <MainWelcome />
    <WelcomeCards />
    <FeaturedContent />
  </div>
</template>

<script>
import MainWelcome from '../Welcome/MainWelcome.vue'
import WelcomeCards from '../Welcome/WelcomeCards.vue'
import FeaturedContent from '../Welcome/FeaturedContent.vue'
export default {
  name: 'HomeNotLog',
  data() {
    return {
      movies: [],
      movies_cateogories: [],
      movie: '',
      loading: true,
      error: false,
      errorMessage: 'No se encontraron peliculas'
    }
  },
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
