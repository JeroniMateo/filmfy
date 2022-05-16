<template>
  <div id="HomeLog" class="container" style="background-color: #191a19">
    <h3>Destacados</h3>
    <div
      class="HomeSection row row-cols-1 p-5 row-cols-md-4 g-4"
      id="HomeDestacados"
    >
      <WatchItemCard
        v-for="movie in 4"
        :movie="movie"
        :key="movie.Outstanding"
      />
      <WatchItemCard
        v-for="movie in 4"
        :movie="movie"
        :key="movie.Outstanding"
      />
    </div>
    <h3>Cartelera</h3>
    <div
      class="HomeSection row row-cols-1 p-5 row-cols-md-4 g-4"
      id="cartelera"
    >
      <WatchItemCard v-for="movie in 4" :movie="movie" :key="movie.Billboard" />
      <WatchItemCard v-for="movie in 4" :movie="movie" :key="movie.Billboard" />
    </div>
    <h3>Próximos Estrenos</h3>
    <div
      class="HomeSection row row-cols-1 p-5 row-cols-md-4 g-4"
      id="UpcomingMovies"
    >
      <WatchItemCard v-for="movie in 4" :movie="movie" :key="movie.Upcoming" />
      <WatchItemCard v-for="movie in 4" :movie="movie" :key="movie.Upcoming" />
    </div>
  </div>
</template>

<script>
import WatchItemCard from '../Movies/WatchItemCard.vue'
export default {
  name: 'HomeLog',
  components: {
    WatchItemCard
  }
}
</script>

<style scoped>
h3 {
  color: #fff;
  font-size: 8vh;
  width: 100%;
  height: 12vh;
  background-color: #000;
  text-align: center;
  font-weight:bold;
}
.HomeSection {
  background-color: #161414;
  color: #19282f;
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
