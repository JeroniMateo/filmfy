<template>
  <div id="Playlists" class="container-fluid" >
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
#Playlists{
  background-color:#191A19
}
</style>