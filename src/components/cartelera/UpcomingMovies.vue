<template>
  <div id="UpcomingMovies" class="container-fluid">
    <h3>Próximas Películas</h3>
    <div class="row">
      <div class="row row-cols-1 p-5 row-cols-md-5 g-4" >
        <WatchItemCard
          :movie="movie"
          v-for="movie in 10"
          :key="movie.UpcomingMovies"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WatchItemCard from '../movies/WatchItemCard.vue'
export default {
  name: 'UpcomingMovies',
  components: {
    WatchItemCard
  }
}
</script>

<style></style>
