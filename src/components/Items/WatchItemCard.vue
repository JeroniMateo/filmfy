<template>
  <div id="WatchItemCard">
    <div class="col" id="ContenidoItemsCards">
      <div class="card h-200 w-90">
        <img class="card-img-top" alt="..." />
        <div class="card-body">
          <div class="CardHeader">
            <h5 class="card-title">Card title</h5>
            <button v-if="favorites" id="FavWatch">
              <i class="fa-solid fa-heart"></i>
            </button>
            <button v-else id="FavWatch">
              <i class="fa-solid fa-circle-heart"></i>
            </button>
          </div>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">ContentType</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WatchItemCard",
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