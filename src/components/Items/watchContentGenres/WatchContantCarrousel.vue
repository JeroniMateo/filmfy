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
      <div class="title"><h2>Genres</h2></div>
      <div class="wrapper" v-on:click.right="ItemOpctions">
        <section id="section1DAction">
          <a href="#section3DAction" class="arrow__btn">‹</a>
          <WatchItemCard />
          <WatchItemCard/>
          <WatchItemCard/>
          <WatchItemCard/>
          <WatchItemCard/>
          <a href="#section2DAction" class="arrow__btn">›</a>
        </section>
        <section id="section2DAction">
          <a href="#section1DAction" class="arrow__btn">‹</a>
          <WatchItemCard />
          <WatchItemCard />
          <WatchItemCard />
          <WatchItemCard />
          <WatchItemCard />
          <WatchItemCard />
          <a href="#section3DAction" class="arrow__btn">›</a>
        </section>
        <section id="section3DAction">
          <a href="#section2DAction" class="arrow__btn">‹</a>
          <WatchItemCard />
          <WatchItemCard />
          <WatchItemCard />
          <WatchItemCard />
          <WatchItemCard />
          <WatchItemCard />
          <a href="#section1DAction" class="arrow__btn">›</a>
        </section>
      </div>
    </body>
  </html>
</template>

<script>
import WatchItemOptions from "../watchContentGenres/WatchItemOptions.vue";
import WatchItemCard from "../WatchItemCard.vue";
import WatchItemCard from "../WatchItemCard.vue";
export default {
  name: "WatchContentCarrousel",
  components: {
    WatchItemOptions,
    WatchItemCard,
    WatchItemCard,
  },
  data() {
    return {
      favorites: true,
    };
  },

  methods: {
    addFavs() {
      if (favorites) {
        console.log("Agregar a favoritos");
        document.getElementById("FavWatch").innerHTML =
          '<i class="fa-solid fa-heart"></i>';
      } else {
        console.log("Quitar de favoritos");
        document.getElementById("FavWatch").innerHTML =
          '<i class="fa-solid fa-circle-heart"></i>';
      }
    },
    ItemOpctions() {
      send;
    },
  },
};
</script>

<style scoped>
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
div#ContenidoItemsCards {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 40vh;
  justify-content: center;
  align-items: center;
  padding: 1vh;
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