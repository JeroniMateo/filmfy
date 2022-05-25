<template>
  <div class="WatchList container-fluid">
    <div class="col">
      <div class="card h-100" @click="goIntoWatchList">
        <img id="img_list" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title" id="title_list">
            Watched Movies <i class="fa-solid fa-eye"></i>
          </h5>
          <small class="card-text" id="description_list">
            Playlist with all the movies you have watched
          </small>
        </div>
        <div class="card-footer">
          <small class="text-muted" id="user_list"
            >by Filmfy
            <img src="../../assets/img/cameraLogo.png" alt="" />
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WatchList',
  data () {
    return {
      movie: '',
      movies: [],
      watchList: [],
      img_list: '',
      title_list: '',
      description_list: ''
    }
  },
  props: {
    playlist: {
      type: Object,
      required: true
    }
  },
  methods: {
    goIntoWatchList () {
      this.$router.push('/moviesList/')
    }
  }
}
</script>

<style>
#WatchList {
  background-color: #0f0505;
  color: #f7f7f5;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  width: 33vh;
  height: 50vh;
}
</style>
