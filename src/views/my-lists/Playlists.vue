<template>
  <div id="Playlists" class="container-fluid" @click="goMoviesLists">
    <div id="UserPlaylists">
      <h2>
        <b>{{ username }} Playlists</b>
      </h2>
      <button @click="createPlaylist"><i class="fa-solid fa-plus"></i></button>
    </div>
    <div id="Listas" class="row row-cols-1 p-5 row-cols-md-4 g-4">
      <div class="lista"><FavsLists /></div>
      <div class="lista"><WatchList /></div>
      <div id="listasUser">
        <div id="CrearPlaylist" style="display: none">
          <form action="">
            <input type="image" src="" alt="">
            <label for="">List Name</label>
            <input
              type="text"
              name="name"
              id="title_list"
              placeholder="List Name"
            />
            <label for="">Description</label>
            <input
              type="text"
              name="description"
              id="description_list"
              placeholder="Description"
            />
            <label for="">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username">
            <button type="submit" @click="create">Create</button>
          </form>
        </div>
        <div class="lista">
          <UserLists v-for="list in lists" :list="list" :key="list" />
        </div>
      </div>
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
  data() {
    return {
      username: '',
      list: '',
      lists: [],
      title_list: '',
      description_list: '',
      img_list: '',
      user_list: '',
      favorites: false
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
    },
    createPlaylist () {
      document.getElementById('CrearPlaylist').style.display = 'block'
      document.getElementById('listname').value = this.title_list
      document.getElementById('description').value = this.description_list
      document.getElementById('username').value = this.username
      document.getElementById('img_list').value = this.img_list
    },
    create () {
      document.getElementById('CrearPlaylist').style.display = 'none'
      document.getElementById('listasUser').innerHTML =
        ' <div class="lista"><UserLists /></div>'
    }
  }
}
</script>

<style>
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
div#UserPlaylists {
  background-color: #0f0505;
  color: #f7f7f5;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 100%;
}
</style>
