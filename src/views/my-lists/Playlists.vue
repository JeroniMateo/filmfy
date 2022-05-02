<template>
  <div id="Playlists" class="container-fluid" style="background-color:#191A19">
    <ListProfile />
  </div>
</template>

<script>
import ListProfile from "../../components/myPlaylists/ListProfile.vue";
export default {
  name: "Playlists",
  components: {
    ListProfile,
  },
};
</script>

<style >
</style>