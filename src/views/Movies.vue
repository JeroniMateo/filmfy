<template>
  <div id="CinePeliculas" class="container-fluid">
    <div
      id="CineCarrousel"
      class="row row-cols-1 p-6 row-cols-md-1 g-4 container-fluid"
    >
      <WatchContentCarrousel />
    </div>
  </div>
</template>

<script>
import WatchContentCarrousel from '../components/movies/WatchContantCarrousel.vue'
export default {
  name: 'Movies',
  data() {
    return {
      movie: {
        id: '',
        title: '',
        description: '',
        image: '',
        url: '',
        rating: '',
        category: []
      },
      movies: [],
      loading: true,
      error: false,
      errorMessage: 'No se encontraron peliculas'
    }
  },
  components: {
    WatchContentCarrousel
  },
  methods: {
    getMovies () {
      this.movies.forEach((movie) => {
        fetch(`http://filmfy-api.ddns.net/api/movies/${movie.id}`, {
          method: 'GET',
          mode: 'cors',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })
          .then((response) => response.json())
          .then((data) => {
            this.movies.push(data.image)
            this.movies.push(data.title)
            this.movies.push(data.rating)
            this.movies.push(data.category)
          })
      })
    }
  },
  beforeMount () {
    this.getMovies()
  }
}
</script>

<style scoped>
h3 {
  color: #00c740;
  width: 50vh;
  background-color: #242424;
  font-size: 6vh;
}
div#CineCarrousel {
  background-color: #0f0505;
  color: #242424;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  flex-direction: col;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 100%;
}
</style>
