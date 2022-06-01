<template>
  <div class="list col-12 d-flex flex-column align-items-start my-4" >
    <a :href="baseURL + '/lists/' + list.id" style="text-decoration: none">
      <div class="image-overlap">
                  <span class="movie-img" v-for="movie in list.movies.slice(0,5)">
                    <img :src="'http://filmfy-api.ddns.net' + movie.image" width="190" height="280" :alt="movie.title"/>
                  </span>
      </div>

      <div class="list-details d-flex flex-column">
        <div class="list-title d-flex flex-row justify-content-start">
          <span style="text-align: left"><b>{{ list.title }}</b></span>
        </div>
        <div class="list-data d-flex flex-row">
          <img v-bind:src="'http://filmfy-api.ddns.net' + user.profile_image" width="20" height="20"/>
          <span class="mx-2">{{  }}</span>
          <span class="mx-2">❤ {{}}</span>
          <span> <i class="fa-solid fa-film"></i> {{ list.movies_count }}</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import {getCookie} from "@/main";

export default {
  name: "MoviesListsCards",
  props: ["list", "user"],
  data() {
    return {
      baseURL: window.origin,
    }
  },
}
</script>

<style scoped>

.movie-img img {
  border: 1px solid white;
  border-radius: 10px;
  position: relative;
  left: -5px;
  margin-left: -25px;
  z-index: 1;
}

.image-overlap {
  direction: rtl;  /* This is to get the stack with left on top */
  text-align: left;  /* Now need to explitly align left */
  padding-left: 25px;  /* Same value as the negative margin */
}

.comment-movie-title, .list-title {
  font-size: 1.1rem;
}

</style>