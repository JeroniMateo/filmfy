<template>
  <MovieCardSmall :movie="movie"/>
</template>

<script>
import MovieCardSmall from "@/components/movies/movie-card/MovieCardSmall";
export default {
  name: "DetailedMoviePage",
  components: {MovieCardSmall},
  data() {
    return {
      movieID: this.$route.params.movie,
      movie: [],
      title: ""
    }
  },

  beforeMount() {
    this.fetchMovie()
  },

  methods :{
    async fetchMovie() {
      console.log("f")
      const promiseMovies = await fetch(`http://filmfy-api.ddns.net/api/movies/${this.movieID}`)
      const moviesData = await promiseMovies.json()
      this.movie = moviesData
    }
  }
}
</script>

<style scoped>

</style>