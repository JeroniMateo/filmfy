<template>
  <div id="UpcomingMovies" class="container-fluid">
    <h3>Próximas Películas</h3>
    <div class="row">
      <div class="col-md-3">
        <WatchItemCard
          :movie="movie"
          v-for="movie in 5"
          :key="movie.UpcomingMovies"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WatchItemCard from '../../components/Movies/WatchItemCard.vue'
export default {
  name: 'UpcomingMovies',
  components: {
    WatchItemCard
  }
}
</script>

<style></style>
