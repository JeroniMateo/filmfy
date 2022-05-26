<template>

  <li class="comment d-flex flex-row">
    <div>
      <img v-bind:src="this.icon" width="55" height="55" style="border-radius: 100px" alt=""/>
    </div>
    <div>
    <div class="comment-details px-3">

        <div class="comment-movie-details d-flex align-items-center">
          <span class="comment-movie-title"><strong>{{ this.comment.title }}</strong></span>
          <small class="comment-user-name mx-2">review escrita por {{ this.comment.user }}</small>
        </div>

        <div class="comment-user-details d-flex flex-row mt-2">
          <div class="comment-rating mx-2">
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
    </div>
  </li>

  <hr>
</template>

<script>

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
    async loadUserIcon(){
      let promise = await fetch("https://randomuser.me/api/")
      let userIcon = await promise.json()

      this.icon = userIcon.results[0].picture.large

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

.comment-rating  > .stars{
  color: green;
}
</style>