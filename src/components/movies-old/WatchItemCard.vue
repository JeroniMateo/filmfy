<template>
  <div id="WatchItemCard" class="container-fluid">
    <div
      class="col WatchItemCard"
      id="movie_info"
      v-on:mouseleave="mouseleave"
      v-on:mouseover="mouseover"
      style="display: none"
    >
      <div class="card h-100">
        <div id="GoMovieContent" @click="goMovieContentInfo">
          <img
            src="../../assets/img/MoviesIMG/el-padrino.jpg"
            id="img_movie_info"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h2 class="card-title" id="title_movie">El Padrino {{ title }}</h2>
            <h5 class="card-text" id="rating_movie">5/5 {{ rating }}</h5>
          </div>
        </div>
        <div class="card-footer">
          <div id="FavWatch" @click="addFavs">
            <button v-if="favorites">
              <i class="fas fa-heart" style="color: #00c740"></i>
            </button>
            <button v-else><i class="far fa-heart"></i></button>
          </div>
          <h5 class="text-muted" id="category_movie">
            Category {{ categories }}
          </h5>
        </div>
      </div>
    </div>
    <div id="movie_img" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
      <img
        src="../../assets/img/MoviesIMG/el-padrino.jpg"
        alt=""
        id="img_movie_img"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WatchItemCard',

  data () {
    return {
      movies: {
        img: '../../assets/img/MoviesIMG/el-padrino.jpg',
        title: 'El Padrino',
        rating: '5/5',
        categories: 'Drama'
      },
      movie_img: {
        img: '../../assets/img/MoviesIMG/el-padrino.jpg'
      },
      favorites: false,
      categoriesMovie: [],
      favMovies: [],
      img_movie: '',
      img_movie_info: '',
      img_fav: '',
      log: false
    }
  },
  methods: {
    addFavs () {
      if (this.favorites) {
        this.favorites = false
      } else {
        this.favMovies.push(this.movies)
        this.favorites = true
      }
    },
    goMovieContentInfo () {
      this.$router.push({
        path: '/movies/:id',
        query: {
          id: this.id
        }
      })
    },
    mouseover: function () {
      document.getElementById('movie_info').style.display = 'block'
      document.getElementById('movie_img').style.display = 'none'
    },
    mouseleave: function () {
      document.getElementById('movie_info').style.display = 'none'
      document.getElementById('movie_img').style.display = 'block'
    }
  }
}
</script>

<style scoped>
.card {
  background-color: #242424;
  color: #fff;
}
#FavWatch {
  position: absolute;
  top: 0;
  right: 0;
  width: 2vw;
  height: 4vh;
}
#img_fav {
  margin-top: -1.5vh;
  margin-left: -0.5vw;
  width: 2vw;
  height: 4vh;
}
#WatchItemCard {
  height: 60vh;
}
#movie_info {
  background-color: rgb(15, 23, 30);
  color: #fff;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  width: 30vh;
  height: 50vh;
}

#img_movie_info {
  background-color: rgb(15, 23, 30);
  color: #fff;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  width: 30vh;
  height: 28vh;
}

#img_movie_img {
  background-color: rgb(15, 23, 30);
  color: #fff;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  width: 30vh;
  height: 50vh;
}
.IMGMovie {
  background-color: rgb(15, 23, 30);
  color: #fff;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  width: 30vh;
  height: 50vh;
}

p {
  font-size: 1.5vh;
  color: #fff;
}
h2 {
  color: #00c740;
  font-size: 5vh;
}
h5 {
  color: #fff;
  font-size: 3vh;
}
</style>
