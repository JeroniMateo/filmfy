<template>

  <div class="content-movie-year">
    <div class="container py-5">
      <span>{{ title }}</span>
    </div>

    <div class="container justify-content-between d-flex flex-wrap">
      <MovieCardCategories
          v-for="movie of this.moviesCategory" :key="movie" :movie="movie"
      />
    </div>
  </div>

</template>

<script>
import MovieCardCategories from "@/components/movies/movie-card/MovieCardCategories";

export default {
  name: "MovieCategories",
  components: {MovieCardCategories},
  data() {
    return {
      category: this.$route.params.year,
      moviesCategory: [],
      title: ""
    }

  },

  beforeMount() {
    this.fetchMoviesCategory()
  },

  methods: {
    async fetchMoviesCategory() {
      const promiseMovies = await fetch(`http://filmfy-api.ddns.net/api/movies-year/${this.category}`)
      const moviesCategoryData = await promiseMovies.json()
      this.moviesCategory = moviesCategoryData
      console.log(moviesCategoryData)
      this.printTitle()
    },

    printTitle() {
      this.title = `Se encontraron ${this.moviesCategory.length} películas de los ${this.category}s`
    }
  }

}
</script>

<style scoped>

.content-movie-year {
  background-color: black;
}


</style>