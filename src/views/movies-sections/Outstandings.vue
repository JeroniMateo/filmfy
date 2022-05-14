<template>
  <div id="TOP10">
    <div id="topNum" class="col-md-12">
      <h1><b>TOP 10</b></h1>
      <TopMovie v-for="top in 10" :top="top" :key="top" />
    </div>
  </div>
</template>

<script>
import TopMovie from '../../components/movies/Outstanding/TopMovie.vue'

export default {
  name: 'Outstandings',
  components: {
    TopMovie
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
