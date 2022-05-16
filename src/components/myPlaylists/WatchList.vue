<template>
  <div class="WatchList container-fluid "> 
      <div class="col">
        <div class="card ">
          <img class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Watched Movies</h5>
            <small class="card-text">
              Playlist with all the movies you have watched
            </small>
          </div>
          <div class="card-footer">
            <small class="text-muted">by Filmfy</small>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WatchList',
  props: {
    playlist: {
      type: Object,
      required: true
    }
  }
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
