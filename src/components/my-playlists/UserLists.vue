<template>
  <div class="UserLists container-fluid">
    <div class="col UserList">
      <div class="card h-100" @click="goIntoList">
        <img class="card-img-top" alt="..." />
        <div class="card-body">
          <div class="userPlaylist">
            <h5 class="card-title" id="title_list">{{ title_list }}</h5>
            <small class="card-text" id="username_list">{{ username }}</small>
            <div id="FavWatch" @click="addFavs">
              <button v-if="favorites">
                <i class="fas fa-heart" style="color: #00c740"></i>
              </button>
              <button v-else><i class="far fa-heart"></i></button>
            </div>
          </div>
          <p class="card-text" id="description_list">
            {{ description_list }}
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted" id="user_list">by {{ user_list }} </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLists',
  data() {
    return {
      movie: '',
      movies: [],
      user_lists: [],
      img_list: '',
      title_list: '',
      description_list: '',
      username: ''
    }
  },
  props: {
    playlist: {
      type: Object,
      required: true
    }
  },
  methods: {
    goIntoList () {
      this.$router.push('/moviesList/')
    },
    addFavs () {
      if (this.favorites) {
        this.favorites = false
      } else {
        this.favMovies.push(this.movies)
        this.favorites = true
      }
    }
  }
}
</script>

<style>
#UserList {
  color: #0f0505;
  background-color: #f7f7f5;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  width: 20vh;
  height: 30vh;
}
</style>
