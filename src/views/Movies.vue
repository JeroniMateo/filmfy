<template>
  <div id="CinePeliculas" class="container-fluid">
    <div
      id="CineCarrousel"
      class="row row-cols-1 p-6 row-cols-md-1 g-4 container-fluid"
    >
      <WatchContentCarrousel />
    </div>
  </div>
</template>

<script>
import WatchContentCarrousel from '../components/movies-old/WatchContantCarrousel.vue'
export default {
  name: 'Movies',
  data () {
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
    WatchContentCarrousel
  }
}
</script>

<style scoped>
h3 {
  color: #1da8e2;
  width: 50vh;
  background-color: #242424;
  font-size: 6vh;
}
div#CineCarrousel {
  background-color: #000;
  color: #242424;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  flex-direction: col;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 100%;
}
</style>
