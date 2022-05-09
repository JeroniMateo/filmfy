<template>
  <div
    id="WatchItemCard"
    class="container-fluid"
    @click="goMovieContentInfo"
  >
    <div class="col WatchItemCard" id="WatchItemCardINFO" v-on:mouseleave="mouseleave" v-on:mouseover="mouseover" style="display:none">
      <div class="card h-100">
        <img id="MovieImage" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title" id="MovieTitle">Card title</h5>
          <p class="card-text" id="MovieSinnopsis">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted" id="MovieGenre"
            >ContentType
            <button v-if="favorites" id="FavWatch" @click="addFavs">
              <img
                class="favIMG"
                src="../../assets/img/FavWatch/NotFav.png"
                alt=""
              />
            </button>
            <button v-else id="FavWatch" @click="addFavs">
              <img
                class="favIMG"
                src="../../assets/img/FavWatch/Fav.png"
                alt=""
              />
            </button>
          </small>
        </div>
      </div>
    </div>
    <div id="WatchItemCardING" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
      <img src="../../assets/img/LogoImageFilmfy.png" alt="" class="IMGMovie" >
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
        return (this.favorites = false)
      } else {
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
      document.getElementById('WatchItemCardING').style.display = 'none'
    },
    mouseleave: function () {
      document.getElementById('WatchItemCardINFO').style.display = 'none'
      document.getElementById('WatchItemCardING').style.display = 'block'
    }
  }
}
</script>

<style scoped>
.favIMG {
  width: 30px;
  height: 30px;
}

#WatchItemCardINFO {
  background-color: rgb(15, 23, 30);
  color: #19282f;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  width: 30vh;
  height: 50vh;
}
.IMGMovie {
  background-color: rgb(15, 23, 30);
  color: #19282f;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  width: 30vh;
  height: 50vh;
}

</style>
