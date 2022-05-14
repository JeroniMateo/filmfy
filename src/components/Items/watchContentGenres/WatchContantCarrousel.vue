<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
    </head>

    <body>
      <div
        id="CarouselMovies"
        class="container-fluid"
        style="background-color: #191a19"
      >
        <h2><b>Genres</b></h2>
        <div class="wrapper" v-on:click.right="ItemOpctions">
          <section id="section1">
            <a href="#section5" class="arrow__btn">‹</a>
            <div class="MovieInCarousel">
              <WatchItemCard
                v-for="movie in 4"
                :movie="movie"
                :key="movie.category"
              />
            </div>
            <a href="#section2" class="arrow__btn">›</a>
          </section>
          <section id="section2">
            <a href="#section1" class="arrow__btn">‹</a>
            <div class="MovieInCarousel">
              <WatchItemCard
                v-for="movie in 4"
                :movie="movie"
                :key="movie.category"
              />
            </div>
            <a href="#section3" class="arrow__btn">›</a>
          </section>
          <section id="section3">
            <a href="#section2" class="arrow__btn">‹</a>
            <div class="MovieInCarousel">
              <WatchItemCard
                v-for="movie in 4"
                :movie="movie"
                :key="movie.category"
              />
            </div>
            <a href="#section4" class="arrow__btn">›</a>
          </section>
          <section id="section4">
            <a href="#section3" class="arrow__btn">‹</a>
            <div class="MovieInCarousel">
              <WatchItemCard
                v-for="movie in 4"
                :movie="movie"
                :key="movie.category"
              />
            </div>
            <a href="#section5" class="arrow__btn">›</a>
          </section>
          <section id="section5">
            <a href="#section4" class="arrow__btn">‹</a>
            <div class="MovieInCarousel">
              <WatchItemCard
                v-for="movie in 3"
                :movie="movie"
                :key="movie.category"
              />
            </div>
            <div @click="verMas" class="MovieInCarousel" id="VerMas">
              <h2 class="card-title"><b>Ver Mas</b></h2>
            </div>
            <a href="#section1" class="arrow__btn">›</a>
          </section>
        </div>
      </div>
    </body>
  </html>
</template>

<script>
import WatchItemOptions from '../watchContentGenres/WatchItemOptions.vue'
import WatchItemCard from '../WatchItemCard.vue'

export default {
  name: 'WatchContentCarrousel',
  components: {
    WatchItemOptions,
    WatchItemCard
  },
  data() {
    return {
      favorites: true
    }
  },
  methods: {
    verMas() {
      this.$router.push('/movies/:genre/:id')
    }
  }
}
</script>

<style scoped>
#VerMas {
  background-color: rgb(15, 23, 30);
  color: #fff;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  width: 30vh;
  height: 50vh;
}
div.MovieInCarousel {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  color: #fff;
  background-color: rgb(15, 23, 30);
  font-size: 8vh;
  width: 100%;
}
#FavWatch {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  background-color: rgb(76, 116, 201);
  border-radius: 50%;
  border: 1px solid #000;
  cursor: pointer;
}
div#CarouselMovies {
  background-color: #0f171e;
  color: #19282f;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  flex-direction: col;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
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
  grid-template-columns: repeat(5, 100%);
  overflow: hidden;
  scroll-behavior: smooth;
  align-items: center;
  justify-items: center;
  justify-content: center;
}
.wrapper section {
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, auto);
  margin: 50px 0;
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
#CarouselMovies{
  margin:auto;
  width:85%;
}
</style>
