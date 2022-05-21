<template>
  <div id="TOP10">
    <div id="topNum" class="col-md-12">
      <h1><b>TOP 10</b></h1>
      <WatchItemCard v-for="movie in 10" :movie="movie" :key="movie.top" />
    </div>
  </div>
</template>

<script>
import WatchItemCard from '@/components/movies/WatchItemCard.vue'
export default {
  name: 'Outstandings',
  data () {
    return {
      movie: '',
      movies: [],
      outstanding: '',
      outstandings: [],
      loading: true,
      error: false,
      errorMessage: 'No hay peliculas destacadas'
    }
  },
  components: {
    WatchItemCard
  }
}
</script>

<style scoped>
h1 {
  color: #fff;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  background-color: #000;
  font-size: 8vh;
}
div.TopMovieHead {
  display: flex;
}
#TOP10 {
  margin: auto;
  width: 70%;
}
img {
  width: 100%;
  height: 50vh;
}
</style>
