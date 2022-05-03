<template>
  <div id="WatchItemCard" class="container-fluid" @click="goMovieContentInfo">
    <div class="col" >
      <div class="card h-100 ">
        <img id="MovieImage" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title" id="MovieTitle" >Card title</h5>
          <p class="card-text" id="MovieSinnopsis">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted" id="MovieGenre">ContentType
             <button v-if="favorites" id="FavWatch" @click="addFavs">
              <img class="favIMG" src="../../assets/img/FavWatch/NotFav.png" alt="">
            </button>
            <button v-else id="FavWatch" @click="addFavs">
              <img class="favIMG" src="../../assets/img/FavWatch/Fav.png" alt="">
            </button>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WatchItemCard",

  data() {
    return {
      favorites: true,
    };
    },
    methods: {
      addFavs() {
      if (favorites) {
       return this.favorites = false;
      } else {
        return this.favorites = true;
      }
    },
    goMovieContentInfo() {
      this.$router.push({
        name: "MovieContent",
        params: {
          id: this.id,
        },
      });
    },
  },
};
</script>

<style scoped>
.favIMG{
  width: 30px;
  height: 30px;
}

div#WatchItemCard {
 background-color: rgb(15, 23, 30);
  color: #19282f;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
}

html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  background-color: #000;
}
h1 {
  font-family: Arial;
  color: red;
  text-align: center;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100%);
  overflow: hidden;
  scroll-behavior: smooth;
}
.wrapper section {
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, auto);
  margin: 20px 0;
}
.wrapper section .item {
  padding: 0 2px;
  transition: 250ms all;
}
.wrapper section .item:hover {
  margin: 0 40px;
  transform: scale(1.2);
}
.wrapper section a {
  position: absolute;
  color: #fff;
  text-decoration: none;
  font-size: 6em;
  background: #000;
  width: 80px;
  padding: 20px;
  text-align: center;
  z-index: 1;
}
.wrapper section a:nth-of-type(1) {
  top: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    -90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
}
.wrapper section a:nth-of-type(2) {
  top: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
}
@media only screen and (max-width: 600px) {
  a.arrow__btn {
    display: none;
  }
}
div.title {
  display: flex;
  font-size: 500em;
  background-color: #2c3e50;
  width: 15vh;
}
</style>