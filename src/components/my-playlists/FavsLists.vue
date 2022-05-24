<template>
  <div class="FavsList container-fluid">
    <div class="col FavsList">
      <div class="card h-100" @click="goIntoFavsList">
        <img class="card-img-top" alt="..." id="img_list" />
        <div class="card-body">
          <h5 class="card-title" id="title_list">Favorites Movies</h5>
          <small class="card-text" id="description_list">
            Playlist with all the movies you have watched
          </small>
        </div>
        <div class="card-footer">
          <small class="text-muted" id="user_list">by Filmfy</small>
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
      movie: '',
      movies: [],
      favsList: [],
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
    goIntoFavsList() {
      this.$router.push('/moviesList/')
    }
  }
}
</script>

<style>
#FavsList {
  background-color: #0f0505;
  color: #f7f7f5;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  width: 20vh;
  height: 30vh;
}
</style>
