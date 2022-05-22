<template>
  <div class="card-movie d-flex flex-column align-items-center mx-1 my-3">
    <div class="movie-card">
      <a v-bind:href="this.href" class="frame">
        <img v-bind:src="this.url" alt="" class="image">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetailedCard",

  props: ["movieID"],

  data() {
    return {
      movie : [],
      url: "",
      href: "",
    }
  },

  beforeMount() {
    this.fetchMovie()
  },

  methods: {
    async fetchMovie() {
      const promiseMovies = await fetch(`http://filmfy-api.ddns.net/api/movies/${this.movieID}`)
      const moviesData = await promiseMovies.json()
      this.movie = moviesData
      this.url = "http://filmfy-api.ddns.net" + this.movie.image
      this.href = window.origin + "/movies/" + this.movie.id
    }
  }
}
</script>

<style scoped>

.card-movie {
  width: 290px;
  margin-top: 0px;
}

.image {
  width: 100%;
  border-radius: 4px;
  display: block;
}

.movie-card {
  box-sizing: border-box;
}



</style>