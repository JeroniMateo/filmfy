<template>
  <div id="Playlists" class="container-fluid" @click="goMoviesLists">
    <h2>
      <b>{{ username_user }} Playlists</b>
    </h2>
    <div id="Listas">
      <div class="lista"><FavsLists /></div>
      <div class="lista"><WatchList /></div>
    </div>
  </div>
</template>

<script>
import FavsLists from '../../components/myPlaylists/FavsLists.vue'
import WatchList from '../../components/myPlaylists/WatchList.vue'
import UserLists from '../../components/myPlaylists/UserLists.vue'
export default {
  name: 'Playlists',
  components: {
    WatchList,
    FavsLists,
    UserLists
  },
  data () {
    return {
      username_user: '',
      user_list: '',
      user_lists: []
    }
  },
  methods: {
    goToMoviesList () {
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
  margin: auto;
  width: 70%;
}
h2 {
  color: #fff;
  background-color: #000;
  font-size: 6vh;
}
#Playlists {
  margin: auto;
  width: 85%;
}
div#Listas {
  background-color: #000;
  color: #fff;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  flex-direction: col;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 100%;
}
</style>
