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
            <h2 class="card-title" id="title_movie">
              El Padrino {{ title_movie }}
            </h2>
            <h5 class="card-text" id="rating_movie">5/5 {{ rating_movie }}</h5>
          </div>
        </div>
        <div class="card-footer">
          <h5 class="text-muted" id="category_movie">
            Category {{ categories_movie }}
            <div id="watch_movie"><button id=""></button></div>

            <button
              type="button"
              class="favButton"
              id="FavWatch"
              @click="addFavs"
            >
              <img
                class="favIMG"
                src="../../assets/img/FavWatch/NotFav.png"
                alt=""
                id="img_fav"
              />
            </button>
          </h5>
        </div>
      </div>
    </div>
    <div
      id="movie_img"
      v-on:mouseover="mouseover"
      v-on:mouseleave="mouseleave"
    >
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
      movie_info: {
        title_movie: 'El Padrino',
        rating_movie: '5/5',
        categories_movie: 'Drama',
        img_movie_img: '../../assets/img/MoviesIMG/el-padrino.jpg'
      },
      movie_img: {
        img_movie_img: '../../assets/img/MoviesIMG/el-padrino.jpg'
      },
      favorites: true,
      title_movie: '',
      rating_movie: '',
      category_movie: '',
      categories_movie: [],
      img_movie_img: '',
      img_movie_info: '',
      img_fav: ''
    }
  },
  methods: {
    addFavs () {
      if (this.favorites) {
        document.getElementById('img_fav')[0].src =
          '../../assets/img/FavWatch/Fav.png'
        return (this.favorites = false)
      } else {
        document.getElementById('img_fav')[0].src =
          '../../assets/img/FavWatch/NotFav.png'
        return (this.favorites = true)
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
  color: #4e9f3d;
  font-size: 5vh;
}
h5 {
  color: #fff;
  font-size: 3vh;
}
</style>
