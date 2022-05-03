<template>
  <div id="Playlists" class="container-fluid" @click="goMoviesLists">
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
  methods:{
    goToMoviesList(){
      this.$router.push({
        name: "MoviesList",
        params: {
          id: this.id,
        },
      });
    },
    }
};
</script>

<style>
#Playlists {
  background-color: #191a19;
}
</style>
