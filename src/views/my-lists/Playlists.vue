<template>
  <div id="Playlists" class="container-fluid" @click="goLists" >
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
    goLists(){
      this.$router.push("/movieslists");
    }
  }
};
</script>

<style >
#Playlists{
  background-color:#191A19
}
</style>