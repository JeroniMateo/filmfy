<template>

  <div class="card-movie d-flex flex-column align-items-center col-3 p-0 m-0">
    <div v-bind:id="movie.id" class="d-flex flex-column align-items-center" style="visibility: hidden">
      <span class="frame-title">{{ movie.title }}</span>
      <span class="frame-title-description"></span>
    </div>

    <div class="movie-card">
      <a v-bind:href="this.href" class="frame">
        <img v-bind:src="this.url" alt="" class="image">
      </a>
    </div>

    <div class="d-flex align-items-center mt-2" v-bind:id="this.movie.title + '-' + this.movie.id">
      <div class="d-flex align-items-center"><i style="color: orange " class="fa-solid fa-heart me-1"></i>
        <span class="text-white m-0 extra-info">{{this.movie.likes}}</span></div>
    </div>
  </div>

</template>

<script>
export default {
  name: "MovieCardGeneral",
  props: ["movie"],

  data() {
    return {
      url: "",
      href: "",
    }
  },

  mounted() {
    this.url = "http://filmfy-api.ddns.net" + this.movie.image
    this.href = window.origin + "/movies/" + this.movie.id
    this.displayTitle()
  },


  methods: {
    displayTitle() {
      let element = document.getElementsByClassName("movie-card")
      for (let i = 0; i < element.length; i++) {
        element[i].addEventListener("mouseover", () => {
          element[i].previousSibling.style.visibility = "visible"
        })

        element[i].addEventListener("mouseout", () => {
          element[i].previousSibling.style.visibility = "hidden"
        })
      }
    },
  }
}
</script>

<style scoped>

.image {
  width: 240px;
  height: 345px;
  border-radius: 4px;
  display: block;
}

.movie-card {
  box-sizing: border-box;
}

.card-movie :hover {
  border-radius: 5px;
  border: 1px solid green;
}

.card-movie {
  width: 230px;
  margin-top: 0px;
}

.frame-title {

  border-radius: 5px;
  background-color: #283038;
  color: floralwhite;
  padding: 10px;
  font-size: 13px;
  width: max-content;
}

.frame-title-description {
  border-top: 10px solid #283038;
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
}

.extra-info {
  font-size: 12px;
}
</style>