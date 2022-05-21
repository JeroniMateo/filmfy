<template>
  <div id="Cartelera" class="container" style="background-color: #191a19">
    <h2><b>Cartelera</b></h2>
    <div id="BillBoardSection" class="row row-cols-1 p-5 row-cols-md-4 g-4">
      <WatchItemCard v-for="movie in 4" :movie="movie" :key="movie.id" />
      <WatchItemCard v-for="movie in 4" :movie="movie" :key="movie.id" />
    </div>
    <div id="UpcomingCartelera"></div>
  </div>
</template>

<script>
import WatchItemCard from '../components/movies/WatchItemCard.vue'
export default {
  name: 'BillBoard',
  data () {
    return {
      movies: [],
      upcoming: [],
      loading: true,
      error: false,
      errorMessage: 'No se encontraron peliculas en cartelera'
    }
  },
  components: {
    WatchItemCard
  }
}
</script>

<style scoped>
h2 {
  color: #fff;
  font-size: 8vh;
  width: 100%;
  background-color: #000;
}
div#BillBoardSection {
  background-color: #000;
  color: #000;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  flex-direction: col;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
}
#Cartelera {
  margin: auto;
  width: 85%;
}
</style>
