<template>
  <div id="UpcomingMovies" class="container-fluid">
    <h3>Próximas Películas</h3>
    <div class="row">
      <div class="col-md-3">
        <BillBoardCard
          :movie="movie"
          v-for="movie in movies"
          :key="movie.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import BillBoardCard from "./BillBoardCard.vue";
export default {
  name: "UpcomingMovies",
  components: {
    BillBoardCard,
  },
};
</script>

<style>
</style>