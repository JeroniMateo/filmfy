<template>
  <div class="FavsList container-fluid">
    <div class="col FavsList">
      <div class="card h-100" @click="goIntoFavsList">
        <img src="../../assets/img/cameraLogo.png" alt="" />
        <div class="card-body">
          <h5 class="card-title" id="title_list">
            Favorites Movies<i class="fa-solid fa-star"></i>
          </h5>
          <small class="card-text" id="description_list">
            Playlist with all the movies you have watched
          </small>
        </div>
        <div class="card-footer">
          <small class="text-muted" id="user_list"
            >by Filmfy
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FavsList',
  data () {
    return {
      movie: {
        id: '',
        image: '',
        title: '',
        rating: '',
        category: []
      },
      movies: [],
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
    goIntoFavsList () {
      this.$router.push('/moviesList/')
    },
    getFavMovies () {
      this.movies.forEach((movie) => {
        fetch(`http://filmfy-api.ddns.net/api/movies/${movie.fav}`, {
          method: 'GET',
          mode: 'cors',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })
          .then((response) => response.json())
          .then((data) => {
            this.movies.push(`http://filmfy-api.ddns.net/${data.image}`)
            this.movies.push(`http://filmfy-api.ddns.net/${data.title}`)
            this.movies.push(`http://filmfy-api.ddns.net/${data.rating}`)
            this.movies.push(`http://filmfy-api.ddns.net/${data.cateogry}`)
          })
      })
    }
  },
  beforeMount () {
    this.getFavMovies()
  }
}
</script>

<style scoped>
#FavsList {
  background-color: #0f0505;
  color: #f7f7f5;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  width: 15vh;
  height: 20vh;
}

</style>
