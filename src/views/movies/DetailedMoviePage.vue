<template>

  <div class="container my-5">
    <h1 class="title">{{ this.movie.title }}</h1>
  </div>

  <div class="container d-flex">
    <MovieDetailedCard :movieID="movieID"/>

    <div class="d-flex justify-content-center contentData">
      <Tabs :movie="this.movie"/>

    </div>
  </div>

  <div class="container my-4">
    <div class="section-heading">
      <h2 class="sinopsis mb-0">Sinopsis</h2>
    </div>
    <div class="description-div">
      <span class="description">{{ this.movie.description }}</span>
    </div>
  </div>
</template>

<script>
import MovieDetailedCard from "@/components/movies/movie-card/MovieDetailedCard";
import Tabs from "@/components/movies/detailed-movie-page/Tabs";

export default {
  name: "DetailedMoviePage",
  components: {Tabs, MovieDetailedCard},

  data() {
    return {
      movieID: this.$route.params.movie,
      movie: [],
      date: "",
      directors: "Directores : ",
      writters: "Escritores : ",
      actors: "Actores : ",
    }
  },

  beforeMount() {
    this.fetchMovie()
  },

  methods: {
    async fetchMovie() {
      const promiseMovie = await fetch(`http://filmfy-api.ddns.net/api/movies/${this.movieID}`)
      const moviesData = await promiseMovie.json()
      this.movie = moviesData
      this.date = new Date(moviesData.release_date)
    },

  }
}
</script>

<style scoped>

.title {
  font-family: Graphik-Regular-Web, sans-serif;
  font-weight: 400;
  letter-spacing: .065em;
}

.description-div {
  text-align: left;
  margin-right: 10vw;
}

.description {
  color: #c9c9c9;
  line-height: 25px;
}

.sinopsis {
  text-align: left;
}

.section-heading {
  display: flex;
  border-bottom: 1px solid white;
  color: white;
  font-family: Graphik-Regular-Web, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: .065em;
  margin-bottom: 0.76923077rem;
  margin-top: 0;
  padding-bottom: 5px;
  text-transform: uppercase;
}

.contentData {
  width: inherit;
}

</style>