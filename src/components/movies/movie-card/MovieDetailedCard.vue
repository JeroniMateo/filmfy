<template>
  <div class="card-movie d-flex flex-column align-items-center">
    <a v-bind:href="this.href" class="frame">
      <img v-bind:src="this.url" alt="" class="image" />
    </a>

    <div
      class="d-flex align-items-center mt-2"
      v-bind:id="this.movie.title + '-' + this.movie.id"
    >
      <div class="d-flex align-items-center">
        <i style="color:  #e49e06" class="fa-solid fa-heart me-1"></i>
        <span class="text-white m-0 extra-info">{{ this.movie.likes }}</span>
        <i style="color: #00c740" class="fa-solid fa-plus" @click="addToList"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieDetailedCard',

  props: ['movieID'],

  data () {
    return {
      movie: [],
      url: '',
      href: ''
    }
  },

  beforeMount () {
    this.fetchMovie()
  },

  methods: {
    async fetchMovie () {
      const promiseMovies = await fetch(
        `http://filmfy-api.ddns.net/api/movies/${this.movieID}`
      )
      const moviesData = await promiseMovies.json()
      this.movie = moviesData
      this.url = 'http://filmfy-api.ddns.net' + this.movie.image
      this.href = window.origin + '/movies/' + this.movie.id
    },
    addToList () {
      this.$router.push('/movieAddToList/:movieId')
    }
  }
}
</script>

<style scoped>
.card-movie {
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
