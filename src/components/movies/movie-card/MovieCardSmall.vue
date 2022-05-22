<template>

  <div class="ballon d-flex flex-column align-items-center mx-1 my-3">
    <div v-bind:id="movie.id" class="d-flex flex-column align-items-center" style="visibility: hidden">
      <span class="frame-title">{{ movie.title }}</span>
      <span class="frame-title-description"></span>
    </div>
    <div class="movie-card">
      <a v-bind:href="this.href" class="frame">
        <img v-bind:src="this.url" alt="" class="image">
      </a>
    </div>
  </div>

</template>

<script>
import {onMounted} from "vue";

export default {
  name: "MovieCardSmall",
  props: ["movie"],

  data() {
    return {
      url: "",
      href: "",
    }
  },

  mounted () {
    this.accesProps()
  },

  methods: {

    accesProps() {
      this.url = this.movie.title
    },

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
    }
  }
}
</script>

<style scoped>

.image {
  width: 230px;
  height: 345px;
  border-radius: 4px;
  display: block;
}

.movie-card {
  box-sizing: border-box;
}

.movie-card :hover {
  border: 3px solid green;
}

.ballon {
  width: 230px;
  height: 345px
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

</style>