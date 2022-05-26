<template>

  <div class="content-movie-year">
    <div class="container py-5">
      <span>{{ title }}</span>
    </div>

    <FilterBrowser/>

    <div class="container justify-content-between d-flex flex-wrap">
      <MovieCardGeneral
          v-for="movie of this.moviesYear" :key="movie" :movie="movie"
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
      year: this.$route.params.year,
      moviesYear: [],
      title: ""
    }

  },

  beforeMount() {
    this.fetchMoviesCategory()
  },

  methods: {
    async fetchMoviesCategory() {
      const promiseMovies = await fetch(`http://filmfy-api.ddns.net/api/movies-year/${this.year}`)
      const moviesCategoryData = await promiseMovies.json()
      this.moviesYear = moviesCategoryData
      console.log(moviesCategoryData)
      this.printTitle()
    },

    printTitle() {
      this.title = `Se encontraron ${this.moviesYear.length} películas de los ${this.year}s`
    }
  }

}
</script>

<style scoped>

.content-movie-year {
  background-color: black;
}


</style>