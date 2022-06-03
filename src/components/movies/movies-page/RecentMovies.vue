<template>
  <div class="container">
    <div
      class="section-heading mt-5 align-items-center align-items-lg-start flex-column"
    >
      <span class="text-center">Películas más recientes</span>
    </div>
  </div>
  <div class="container justify-content-between">
    <div class="row">
      <MovieCardGeneral
        v-for="movie of this.movies"
        :key="movie"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script>
import MovieCardGeneral from '@/components/movies/movie-card/MovieCardGeneral'

export default {
  name: 'RecentMovies',
  components: { MovieCardGeneral },
  data () {
    return {
      movies: []
    }
  },

  beforeMount () {
    this.fetchRecentMovies()
  },

  methods: {
    async fetchRecentMovies () {
      const promiseMovies = await fetch(
        'http://filmfy-api.ddns.net/api/recent-movies'
      )
      const recentMoviesData = await promiseMovies.json()
      this.limitData(recentMoviesData)
    },

    limitData (movieData) {
      const sliced = Object.fromEntries(Object.entries(movieData).slice(0, 5))
      this.movies = sliced
    }
  }
}
</script>

<style scoped>
#popular-films .section-heading {
  margin-bottom: 15px;
}

.section-heading {
  display: flex;
  border-bottom: 1px solid #fffdfd;
  color: #fffdfd;
  font-family: Graphik-Regular-Web, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.075em;
  margin-bottom: 0.76923077rem;
  margin-top: 0;
  padding-bottom: 5px;
  text-transform: uppercase;
}

h2 {
  font-size: 18px;
  margin: 18px 0 12px;
  background-color: transparent;
}

.section-heading a {
  color: #445566;
}
</style>
