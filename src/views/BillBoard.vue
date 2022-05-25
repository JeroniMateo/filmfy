<template>
  <div id="Cartelera" class="container" style="background-color: #0f0505">
    <h2><b>Cartelera</b></h2>
    <div class="row">
      <div id="BillBoardSection" class="row row-cols-1 p-5 row-cols-md-5 g-4">
        <WatchItemCard v-for="movie in 10" :movie="movie" :key="movie.id" />
      </div>
    </div>
    <div id="UpcomingCartelera">
      <h3>Próximos Estrenos</h3>
      <div class="row">
        <div class="row row-cols-1 p-5 row-cols-md-5 g-4">
          <WatchItemCard v-for="movie in 10" :movie="movie" :key="movie.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WatchItemCard from '../components/movies/WatchItemCard.vue'
export default {
  name: 'BillBoard',
  data() {
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
  color: #f7f7f5;
  font-size: 8vh;
  width: 100%;
  background-color: #0f0505;
}
div#BillBoardSection {
  background-color: #0f0505;
  color: #0f0505;
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
