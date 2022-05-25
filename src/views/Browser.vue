<template>
  <div id="Browser" class="container">
    <div id="Destacados">
      <h3>Destacados</h3>
      <div
        class="BrowserSection row row-cols-1 p-5 row-cols-md-5 g-4"
        id="BrowserDestacados"
      >
        <WatchItemCard v-for="movie in 10" :movie="movie" :key="movie.rating" />
      </div>
    </div>
    <div id="Cartelera">
      <h3>Cartelera</h3>
      <div
        class="BrowserSection row row-cols-1 p-5 row-cols-md-5 g-4"
        id="cartelera"
      >
        <WatchItemCard
          v-for="movie in 5"
          :movie="movie"
          :key="movie.Billboard"
        />
      </div>
    </div>
    <div id="Upcoming">
      <h3>Próximos Estrenos</h3>
      <div
        class="BrowserSection row row-cols-1 p-5 row-cols-md-5 g-4"
        id="UpcomingMovies"
      >
        <WatchItemCard
          v-for="movie in 5"
          :movie="movie"
          :key="movie.Upcoming"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WatchItemCard from '../components/movies/WatchItemCard.vue'
export default {
  name: 'Browser',
  data() {
    return {
      log: true,
      movies: [],
      watchList: [],
      img_list: '',
      title_list: '',
      description_list: ''
    }
  },
  components: {
    WatchItemCard
  }
}
</script>

<style scoped>
h3 {
  color: #f7f7f5;
  font-size: 8vh;
  width: 100%;
  height: 12vh;
  background-color: #0f0505;
  text-align: center;
  font-weight: bold;
}
.BrowserSection {
  background-color: #0f0505;
  color: #787b66;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  flex-direction: col;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
}
</style>
