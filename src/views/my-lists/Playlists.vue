<template>
  <div id="Playlists" class="container-fluid" @click="goMoviesLists">
    <h2><b>{{ username }} Playlists</b></h2>
   <div id="Listas">
      <div class="playlist"><FavsLists /></div>
    <div class="playlist"><WatchList /></div>
   </div>
  </div>
</template>

<script>
import ListProfile from '../../components/myPlaylists/FavsLists.vue'
import FavsLists from '../../components/myPlaylists/FavsLists.vue'
import WatchList from '../../components/myPlaylists/WatchList.vue'
export default {
  name: 'Playlists',
  components: {
    WatchList,
    ListProfile,
    FavsLists
  },
  data() {
    return {
      username: ''
    }
  },
  methods: {
    goToMoviesList() {
      this.$router.push({
        path: '/moviesList/:id',
        query: {
          id: this.id
        }
      })
    }
  }
}
</script>

<style>
#Playlists {
  background-color: #000;
}
h2 {
  color: #fff;
  background-color: #000;
  font-size: 6vh;

}


</style>
