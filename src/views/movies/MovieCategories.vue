<template>

  <div class="bg-black">
    <div class="container py-5">
      <span>{{ title }}</span>
    </div>

    <FilterBrowser/>

    <div class="container justify-content-between d-flex flex-wrap">
      <MovieCardGeneral
          v-for="movie of this.moviesCategory" :key="movie" :movie="movie"
      />
    </div>
  </div>


</template>

<script>
import MovieCardGeneral from "@/components/movies/movie-card/MovieCardGeneral";
import FilterBrowser from "@/components/movies/detailed-movie-page/FilterBrowser";

export default {
  name: "MovieCategories",
  components: {FilterBrowser, MovieCardGeneral},
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