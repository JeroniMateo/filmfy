<template>
  <div id="Playlists" class="container-fluid" @click="goMoviesLists">
    <h2>
      <b>{{ username }} Playlists</b>
    </h2>
    <div id="Listas" class="row row-cols-1 p-5 row-cols-md-4 g-4" >
      <div class="lista"><FavsLists /></div>
      <div class="lista"><WatchList /></div>
      <UserLists v-for="list in lists" :list="list" :key="list" />
    </div>
  </div>
</template>

<script>
import FavsLists from '../../components/my-playlists/FavsLists.vue'
import WatchList from '../../components/my-playlists/WatchList.vue'
import UserLists from '../../components/my-playlists/UserLists.vue'
export default {
  name: 'Playlists',
  components: {
    WatchList,
    FavsLists,
    UserLists
  },
  data () {
    return {
      username: '',
      list: '',
      lists: []
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

<style scoped>
#Playlists {
  background-color: #0f0505;
  margin: auto;
  width: 70%;
}
h2 {
  color: #f7f7f5;
  background-color: #0f0505;
  font-size: 6vh;
}
#Playlists {
  margin: auto;
  width: 85%;
}
div#Listas {
  background-color: #0f0505;
  color: #f7f7f5;
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
