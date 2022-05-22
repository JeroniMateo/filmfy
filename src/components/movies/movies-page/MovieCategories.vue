<template>

  <div class="container my-5">
    <span>{{ title }}</span>
  </div>

  <div class="container justify-content-between d-flex flex-wrap">
    <MovieCardSmall
        v-for="movie of this.moviesCategory" :key="movie" :movie="movie"
    />
  </div>

</template>

<script>
import MovieCardSmall from "@/components/movies/movie-card/MovieCardSmall";

export default {
  name: "MovieCategories",
  components: {MovieCardSmall},
  data() {
    return {
      category: this.$route.params.category,
      moviesCategory: [],
      title: ""
    }

  },

  beforeMount() {
    this.fetchMoviesCategory()
  },

  methods: {
    async fetchMoviesCategory() {
      const promiseMovies = await fetch(`http://filmfy-api.ddns.net/api/movies-categories/${this.category}`)
      const moviesCategoryData = await promiseMovies.json()
      this.moviesCategory = moviesCategoryData
      this.printTitle()
    },

    printTitle() {
      this.title = `Se encontraron ${this.moviesCategory.length} películas de ${this.category}`
    }
  }

}
</script>

<style scoped>

</style>