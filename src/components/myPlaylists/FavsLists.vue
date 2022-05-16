<template>
  <div class="FavsList container-fluid"> 
      <div class="col FavsList">
        <div class="card h-100" @click="goIntoFavsList">
          <img class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title" id="titleList">Favorites Movies</h5>
            <small class="card-text" id="descriptionList">
              Playlist with all the movies you have watched
            </small>
          </div>
          <div class="card-footer">
            <small class="text-muted" id="userList">by Filmfy</small>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FavsList',
  data() {
    return {
      favsList: [],
    }
  },
  props: {
    playlist: {
      type: Object,
      required: true
    }
  },
  methods: {
    goIntoFavsList() {
      this.$router.push('/moviesList/')
    }
  },

}
</script>

<style>
#FavsList {
  background-color: rgb(15, 23, 30);
  color: #fff;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  width: 20vh;
  height: 30vh;
}
</style>
