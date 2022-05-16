<template>
  <div class="WatchList container-fluid "> 
      <div class="col">
        <div class="card h-100" @click="goIntoWatchList">
          <img class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title" id="titleList">Watched Movies</h5>
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
  name: 'WatchList',
  data() {
    return {
      watchList: [],
    }
  },
  props: {
    playlist: {
      type: Object,
      required: true
    }
  },
  methods: {
    goIntoWatchList(){
      this.$router.push('/moviesList/')
    }
  },
}
</script>

<style>
#WatchList {
  background-color: rgb(15, 23, 30);
  color: #fff;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  width: 33vh;
  height: 50vh;
}
</style>
