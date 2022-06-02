<template>
  <li class="d-flex flex-row row div-container-comments py-3 mx-0">
    <div class="col-3 col-lg-2">
      <img
        v-bind:src="this.icon"
        width="55"
        height="55"
        style="border-radius: 100px"
        alt=""
      />
    </div>
    <div class="col-9 col-lg-10">
      <div class="d-flex flex-column align-items-start">
        <span class="comment-movie-title"
          ><strong>{{ this.comment.title }}</strong></span
        >
        <small class="comment-user-name my-2"
          >review escrita por {{ this.comment.user }}</small
        >
      </div>
      <div class=" col-9 col-lg-10 py-3">

        <div class="d-flex flex-column align-items-start">
          <span class="comment-movie-title"><strong>{{ this.comment.title }}</strong></span>
          <small class="comment-user-name my-2">review escrita por {{ this.comment.user }}</small>
        </div>

        <div class="comment-user-details d-flex flex-row py-2">
          <star-rating
              v-bind:rating="comment.rating"
              v-bind:round-start-rating="false"
              v-bind:max-rating="5"
              v-bind:increment="0.5"
              v-bind:read-only="false"
              v-bind:show-rating="false"
              active-color="#00c740"
              inactive-color="#fff"
              v-bind:star-size="20"
          /> <!-- Lightgreen: #00c740 -->
        </div>
        <div class="comment-content d-flex mt-2">
          <p class="comment-text text-start">{{ this.comment.body }}</p>
        </div>
        <div class="comment-likes d-flex flex-row align-items-center">
          <i style="color: orange " class="fa-solid fa-heart me-1"></i>
          <span class="mx-1">{{ this.comment.likes }}</span>
          <span class="comment-movie-year mx-2">{{ this.comment.created_at }}</span>
        </div>
      </div>
      <div v-if="token" class="d-flex flex-column align-items-end col-12 pb-3">
        <span @click="sendLike(this.comment.id)" style="font-size: 13px">Me gusta</span>
      </div>
      <div class="comment-likes d-flex flex-row align-items-center">
        <i style="color: orange" class="fa-solid fa-heart me-1"></i>
        <span class="mx-1">{{ this.comment.likes }}</span>
        <span class="comment-movie-year mx-2">{{
          this.comment.created_at
        }}</span>
      </div>
    </div>
    <div class="d-flex flex-column align-items-end col-12 py-3">
      <span @click="sendLike(this.comment.id)" style="font-size: 13px"
        >Me gusta</span
      >
    </div>
    <hr />
  </li>
</template>

<script>

import StarRating from 'vue-star-rating'
import {getCookie} from "@/main";

export default {
  name: 'CommentsMovie',

  props: ['comment'],

  components: {StarRating},

  data() {
    return {
      icon: "",
      token: getCookie("auth")
    }
  },

  beforeMount () {
    this.loadUserIcon()
  },

  methods: {
    async loadUserIcon () {
      const promise = await fetch('https://randomuser.me/api/')
      const userIcon = await promise.json()

      this.icon = userIcon.results[0].picture.large
    },

    async sendLike(id) {
      let promise = await fetch(`http://filmfy-api.ddns.net/api/comment-like/${id}`)
      await location.reload()
    }
  }
}
</script>

<style scoped>
.comment-movie-title,
.list-title {
  font-size: 1.1rem;
}

.comment-movie-year {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: lightgrey;
}

.comment-text {
  font-size: 0.9rem;
}

.comment-rating > .stars {
  color: green;
}

span:hover {
  color: #c9c9c9;
  cursor: pointer;
}

.div-container-comments {
  width: 40rem;
}

@media (max-width: 650px) {
  .div-container-comments {
    width: 100%;
  }
}
</style>
