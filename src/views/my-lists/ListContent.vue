<template>
  <div id="ListContent" class="container" style="background-color: #191a19">
    <div id="headerList">
      <h3 id="title_list">
         {{ title_list }} <small>by {{ username_user }}</small>
      </h3>
      <img id="img_list" alt="" />
    </div>
    <div id="MovieList" class="row row-cols-1 p-5 row-cols-md-3 g-4">
      <WatchItemCard
        v-for="movie in movies"
        :movie="movie"
        :key="movie.playlist"
      />
    </div>
  </div>
</template>

<script>
import WatchItemCard from '../../components/Movies/WatchItemCard.vue'
export default {
  name: 'ListContent',
  components: {
    WatchItemCard
  },
  data () {
    return {
      movie: '',
      movies: [],
      user_list: '',
      user_lists: [],
      img_list: '',
      title_list: ''
    }
  }
}
</script>

<style scoped>
h1 {
  color: #1da8e2;
  background-color: rgb(15, 23, 30);
  font-size: 6vh;
  width: 100%;
}
div#MovieList {
  background-color: rgb(15, 23, 30);
  color: #fff;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  width: 33vh;
  height: 50vh;
}
#ListContent {
  margin: auto;
  width: 85%;
}
</style>
