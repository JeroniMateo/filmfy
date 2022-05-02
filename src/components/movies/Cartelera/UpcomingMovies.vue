<template>
  <div id="UpcomingMovies" class="container-fluid">
    <h3>Próximas Películas</h3>
    <div class="row">
      <div class="col-md-3">
        <BillBoardMovie
          :movie="movie"
          v-for="movie in movies"
          :key="movie.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import BillBoardMovie from "./BillBoardMovie.vue";
export default {
  name: "UpcomingMovies",
  components: {
    BillBoardMovie,
  },
};
</script>

<style>
</style>