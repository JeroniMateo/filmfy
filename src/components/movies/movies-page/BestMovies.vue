<template>
  <div class="container">
    <div class="section-heading mt-5">
      <span>Películas mejor valoradas</span>
    </div>
    <div class="container d-flex flex-wrap justify-content-between overflow-hidden">
      <MovieCardGeneral v-for="movie of this.movies" :key="movie" :movie="movie" class="card-movie"/>
    </div>
  </div>

</template>

<script>
import MovieCardGeneral from "@/components/movies/movie-card/MovieCardGeneral";

export default {
  name: "BestMovies",
  components: {MovieCardGeneral},
  data() {
    return {
      movies: [],
    }
  },

  beforeMount() {
    this.fetchBestMovies()
  },

  methods: {
    async fetchBestMovies() {
      const promiseMovies = await fetch(`http://filmfy-api.ddns.net/api/best-movies`, {
      })
      const recentMoviesData = await promiseMovies.json()
      this.limitData(recentMoviesData)
    },

    limitData(movieData) {
      const sliced = Object.fromEntries(
          Object.entries(movieData).slice(0, 5)
      )
      this.movies = sliced
    },
  }
}
</script>

<style scoped>

.card-movie {
  width: 230px;
}

.image {
  width: 100%;
}

#popular-films .section-heading {
  margin-bottom: 15px;
}

.section-heading {
  display: flex;
  border-bottom: 1px solid white;
  color: white;
  font-family: Graphik-Regular-Web, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: .075em;
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
  color: #9ab;
}

span {

}

</style>