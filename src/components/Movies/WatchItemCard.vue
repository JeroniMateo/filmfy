<template>
  <div id="WatchItemCard" class="container-fluid">
    <div
      class="col WatchItemCard"
      id="WatchItemCardINFO"
      v-on:mouseleave="mouseleave"
      v-on:mouseover="mouseover"
      style="display: none"
    >
      <div class="card h-100">
        <div id="GoMovieContent" @click="goMovieContentInfo">
          <img
            src="../../assets/img/MoviesIMG/el-padrino.jpg"
            id="MovieIMGInfo"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h2 class="card-title" id="title_movie">El Padrino</h2>
            <h5 class="card-text" id="rating_movie">
            5/5
            </h5>
          </div>
        </div>
        <div class="card-footer">
          <h5 class="text-muted" id="category_movie"
            >Category
            <button id="FavWatch" @click="addFavs">
              <img
                class="favIMG"
                src="../../assets/img/FavWatch/NotFav.png"
                alt=""
              />
            </button>
          </h5>
        </div>
      </div>
    </div>
    <div
      id="WatchItemCardIMG"
      v-on:mouseover="mouseover"
      v-on:mouseleave="mouseleave"
    >
      <img
        src="../../assets/img/MoviesIMG/el-padrino.jpg"
        alt=""
        class="IMGMovie"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WatchItemCard',

  data() {
    return {
      favorites: true
    }
  },
  methods: {
    addFavs() {
      if (favorites) {
        document.getElementsByClassName('favIMG')[0].src =
          '../../assets/img/FavWatch/Fav.png'
        return (this.favorites = false)
      } else {
        document.getElementsByClassName('favIMG')[0].src =
          '../../assets/img/FavWatch/NotFav.png'
        return (this.favorites = true)
      }
    },
    goMovieContentInfo() {
      this.$router.push({
        path: '/movies/:id',
        query: {
          id: this.id
        }
      })
    },
    mouseover: function () {
      document.getElementById('WatchItemCardINFO').style.display = 'block'
      document.getElementById('WatchItemCardIMG').style.display = 'none'
    },
    mouseleave: function () {
      document.getElementById('WatchItemCardINFO').style.display = 'none'
      document.getElementById('WatchItemCardIMG').style.display = 'block'
    }
  }
}
</script>

<style scoped>
.card {
  background-color: #242424;
  color: #fff;
}
.favIMG {
  width: 30px;
  height: 30px;
}
#WatchItemCard {
  height: 55vh;
  
}
#WatchItemCardINFO {
  background-color: rgb(15, 23, 30);
  color: #fff;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  width: 35vh;
  height: 60vh;
}

#MovieIMGInfo {
  background-color: rgb(15, 23, 30);
  color: #fff;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
width: 35vh;
  height: 30vh;
}

#WatchItemCardIMG {
  background-color: rgb(15, 23, 30);
  color: #fff;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
width: 35vh;
  height: 60vh;
  
}
.IMGMovie {
  background-color: rgb(15, 23, 30);
  color: #fff;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
width: 35vh;
  height: 60vh;
}

p {
  font-size: 1.5vh;
  color: #fff;
}
#Genre {
  font-size: 5vh;
  color: #fff;
}
h2 {
  color: #4E9F3D;
  font-size: 5vh;
}
h5 {
  color: #fff;
  font-size: 5vh;
}
</style>
