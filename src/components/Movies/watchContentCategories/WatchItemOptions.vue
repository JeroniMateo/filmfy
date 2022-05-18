<template>
  <div id="WatchItemConfig">
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li id="favMovie" v-if="favs">
        <button @click="addFavs">Add Favs</button>
      </li>
      <li id="notFavMovie" v-else>
        <a class="dropdown-item" href="#"
          ><button @click="removeFavs">Remove Favs</button></a
        >
      </li>
      <li><hr class="dropdown-divider" /></li>
      <li id="watchMovie" v-if="watch">
        <button @click="addWatched">Watched</button>
      </li>
      <li id="notWatchMovie" v-else>
        <button @click="removeWatched">Unwatched</button>
      </li>
      <li class="nav-item dropdown">
        <a
          @click="addToList"
          class="nav-link dropdown-toggle"
          href="#"
          id="addToList"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Añadir a Playlist
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown" id="navbar_lists">
          <li v-for="list in lists" :list="list" :key="list.name">{{ list.name }}</li>
        </ul>
      </li>
      <li><button>Share</button></li>
    </ul>
  </div>
</template>

<script>
import UserLists from '../../myPlaylists/UserLists.vue'
export default {
  name: 'WatchItemConfig',
  components: {
    UserLists
  },
  data() {
    return {
      favs: false,
      watch: false,
      movie: '',
      movies: [],
      favs_list: [],
      watch_list: [],
      user_lists: [],
      user_list:[],
      list: [],
    }
  },
  methods: {
    addFavs() {
      this.favs = true
      this.favsList.push(this.movie)
    },
    removeFavs() {
      this.favs = false
      this.favsList.pop(this.movie)
    },
    addWatched() {
      this.watch = true
      this.watchList.push(this.movie)
    },
    removeWatched() {
      this.watch = false
      this.watchList.pop(this.movie)
    },
    addToList() {
      this.user_list = this.user_lists.filter(list => list.name == this.user_list_name)
      this.user_list[0].movies.push(this.movie)
      this.user_list[0].movies.push(this.movie)

    }
  }
}
</script>

<style></style>
