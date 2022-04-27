<template>
  <div id="WatchItemConfig">
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li v-if="favs">Add Favs</li>
      <li v-else><a class="dropdown-item" href="#">Remove Favs</a></li>
      <li><hr class="dropdown-divider" /></li>
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
      <li>Share</li>
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
      favs: true,
    };
  },
};
</script>

<style>
</style>