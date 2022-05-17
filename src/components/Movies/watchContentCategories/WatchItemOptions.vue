<template>
  <div id="WatchItemConfig">
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li id="favMovie" v-if="favs"><button @click="addFavs">Add Favs</button></li>
      <li id="notFavMovie" v-else><a class="dropdown-item" href="#"><button @click="removeFavs">Remove Favs</button></a></li>
      <li><hr class="dropdown-divider" /></li>
      <li id="watchMovie" v-if="watch"><button @click="addWatched">Watched</button></li>
      <li id="notWatchMovie" v-else><button @click="removeWatched">Watched</button></li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <UserLists/>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        
        </ul>
      </li>
      <li><button>Share</button></li>
    </ul>
  </div>
</template>

<script>
import UserLists from '../../myPlaylists/UserLists.vue'
export default {
  name: "WatchItemConfig",
  components:{
    UserLists,
  },
  data() {
    return {
      favs: false,
      watch: false,
      favMovie: "",
      notFavMovie: "",
      watchMovie: "",
      notWatchMovie: "",
      
    };
  },
  methods: {
    addFavs() {
      this.favs = true;
    },
    removeFavs() {
      this.favs = false;
    },
    addWatched() {
      this.watch = true;
    },
    removeWatched() {
      this.watch = false;
    },
  },
};
</script>

<style>
</style>