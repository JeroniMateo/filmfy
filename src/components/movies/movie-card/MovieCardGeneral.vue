<template>
  <div
    class="card-movie d-flex flex-column align-items-center col-12 col-md-6 col-lg-4 cust-col-lg-5 p-0 m-0"
  >
    <div
      v-bind:id="random_id"
      class="d-flex flex-column align-items-center"
      style="visibility: hidden"
    >
      <span class="frame-title">{{ movie.title }}</span>
      <span class="frame-title-description"></span>
    </div>

    <div
      class="movie-card"
      @mouseout="hideTitle(this.random_id)"
      @mouseover="displayTitle(this.random_id)"
      v-bind:id="this.movie.id"
    >
      <a v-bind:href="this.href" class="frame">
        <img v-bind:src="this.url" alt="" class="image" />
      </a>
    </div>

    <div
      class="d-flex align-items-center mt-2"
      v-bind:id="this.movie.title + '-' + this.movie.id"
    >
      <div class="d-flex align-items-center">
        <i style="color: orange" class="fa-solid fa-heart me-1"></i>
        <span class="text-white m-0 extra-info">{{ this.movie.likes }}</span>
      </div>
      <div v-if="this.movie.times_added" class="d-flex align-items-center mx-2">
        <i style="color: #0a53be" class="fa-solid fa-list mx-2"></i>
        <span class="text-white m-0 extra-info">{{
          this.movie.times_added
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCardGeneral',
  props: ['movie'],

  data () {
    return {
      url: '',
      href: '',
      random_id: this.movie.id + '-' + Math.round(Math.random() * 100)
    }
  },

  mounted () {
    this.url = 'http://filmfy-api.ddns.net' + this.movie.image
    this.href = window.origin + '/movies/' + this.movie.id
  },

  methods: {
    displayTitle (id) {
      const element = document.getElementById(id)
      element.style.visibility = 'visible'
    },

    hideTitle (id) {
      const element = document.getElementById(id)
      element.style.visibility = 'hidden'
    }
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

.movie-card :hover {
  border-radius: 5px;
  border: 1.5px solid green;
}

.card-movie {
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
