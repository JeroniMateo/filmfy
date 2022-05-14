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
        path: "/moviesList/:id",
        query: {
          id: this.id,
        },
      });
    },
    }
};
</script>

<style>
#Playlists {
  background-color: #000;
}
h3 {
  color: #1da8e2;
  background-color: #242424;
  font-size: 6vh;
  width: 100%;
}
#Playlists {
  margin: auto;
  width: 85%;
}
</style>
