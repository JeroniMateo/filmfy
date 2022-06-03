<template>
  <div class="content-movie-year">
    <div class="container py-5">
      <span>{{ title }}</span>
    </div>

    <div class="container">
      <div class="row flex-column flex-lg-row align-items-center">
        <Filter
          class="col-12 col-lg-6 my-2 justify-content-center justify-content-lg-start"
        />
        <Searcher
          class="col-12 col-lg-6 my-2 justify-content-center justify-content-lg-end"
        />
      </div>
    </div>

    <div class="container justify-content-between">
      <div class="row">
        <MovieCardGeneral
          v-for="movie of this.moviesYear"
          :key="movie"
          :movie="movie"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MovieCardGeneral from '@/components/movies/movie-card/MovieCardGeneral'
import Searcher from '@/components/movies/movies-page/Searcher'
import Filter from '@/components/movies/detailed-movie-page/Filter'

export default {
  name: 'MovieCategories',
  components: { Filter, Searcher, MovieCardGeneral },
  data () {
    return {
      year: this.$route.params.year,
      moviesYear: [],
      title: ''
    }
  },

  beforeMount () {
    this.fetchMoviesCategory()
  },

  methods: {
    async fetchMoviesCategory () {
      const promiseMovies = await fetch(
        `http://filmfy-api.ddns.net/api/movies-year/${this.year}`
      )
      const moviesCategoryData = await promiseMovies.json()
      this.moviesYear = moviesCategoryData
      this.printTitle()
    },

    printTitle () {
      this.title = `Se encontraron ${this.moviesYear.length} películas de los ${this.year}s`
    }
  }
}
</script>

<style scoped>
.content-movie-year {
  background-color: #0f0505;
}
</style>
