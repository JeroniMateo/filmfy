<template>

    <li class=" d-flex flex-row row div-container-comments py-3 mx-0">
      <div class="col-3 col-lg-2">
        <img v-bind:src="this.icon" width="55" height="55" style="border-radius: 100px" alt=""/>
      </div>
      <div class=" col-9 col-lg-10">

        <div class="d-flex flex-column align-items-start">
          <span class="comment-movie-title"><strong>{{ this.comment.title }}</strong></span>
          <small class="comment-user-name my-2">review escrita por {{ this.comment.user }}</small>
        </div>

        <div class="comment-user-details d-flex flex-row mt-2">
          <div class="comment-rating">
            <i class="fa-solid fa-star stars"></i>
            <i class="fa-solid fa-star stars"></i>
            <i class="fa-solid fa-star stars"></i>
            <i class="fa-solid fa-star-half-stroke stars"></i>
            <i class="fa-regular fa-star stars"></i>
          </div>
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
      <div class="d-flex flex-column align-items-end col-12 py-3">
        <span @click="sendLike(this.comment.id)" style="font-size: 13px">Me gusta</span>
      </div>
      <hr>
    </li>
</template>

<script>

import {onMounted} from "vue";

export default {
  name: "CommentsMovie",

  props: ["comment"],

  data() {
    return {
      icon: "",
    }
  },

  beforeMount() {
    this.loadUserIcon()
  },

  methods: {
    async loadUserIcon() {
      let promise = await fetch("https://randomuser.me/api/")
      let userIcon = await promise.json()

      this.icon = userIcon.results[0].picture.large

    },

    async sendLike(id) {
      let promise = await fetch(`http://filmfy-api.ddns.net/api/comment-like/${id}`)
      location.reload()
    }
  }
}
</script>

<style scoped>

.comment-movie-title, .list-title {
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

@media(max-width: 650px){
  .div-container-comments {
    width: 100%;
  }
}

</style>