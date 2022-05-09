<template>
  <div id="Home" class="container" style="background-color: #191a19">
    <h3><b>Destacados</b></h3>
    <div
      class="HomeSection row row-cols-1 p-5 row-cols-md-4 g-4"
      id="HomeDestacados"
    >
      <WatchItemCard v-for="movie in 4 " :movie="movie" :key="movie.id" />
      <WatchItemCard v-for="movie in 4 " :movie="movie" :key="movie.id" />
      
    </div>
    <h3><b>Cartelera</b></h3>
    <div
      class="HomeSection row row-cols-1 p-5 row-cols-md-4 g-4"
      id="cartelera"
    >
      <WatchItemCard v-for="movie in 4" :movie="movie" :key="movie.id" />
      <WatchItemCard v-for="movie in 4" :movie="movie" :key="movie.id" />
    </div>
    <h3><b>Próximos Estrenos</b></h3>
    <div
      class="HomeSection row row-cols-1 p-5 row-cols-md-4 g-4"
      id="UpcomingMovies"
    >
      <WatchItemCard v-for="movie in 4" :movie="movie" :key="movie.id" />
      <WatchItemCard v-for="movie in 4" :movie="movie" :key="movie.id" />
    </div>
  </div>
</template>

<script>
import WatchItemCard from '@/components/Items/WatchItemCard.vue'
export default {
  name: 'HomeView',
  components: {
    WatchItemCard
  }
}
</script>
<style scoped>
h3 {
  color: #1da8e2;
  font-size: 6vh;
  width: 100%;
  height: 8vh;
  background-color: #000;
  text-align: center;
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
