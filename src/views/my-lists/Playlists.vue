<template>
  <div id="Playlists" class="container-fluid" @click="goMoviesLists">
    <h3><b>{{ username }} Playlists</b> </h3>
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
  data() {
    return {
      username: "",
    };
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
h3 {
  color: rgb(29, 168, 226);
  background-color: rgb(15, 23, 30);
  font-size: 6vh;
  width: 100%;
}
</style>
