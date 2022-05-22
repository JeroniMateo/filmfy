<template>
  <FilterBrowser/>
  <RecentMovies/>

</template>

<script>
import FilterBrowser from "@/components/movies/detailed-movie-page/FilterBrowser";
import RecentMovies from "@/components/movies/detailed-movie-page/RecentMovies";
export default {
  name: "MainMoviesPage",
  components: {RecentMovies, FilterBrowser}
}
</script>

<style scoped>

</style>