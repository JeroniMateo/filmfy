<template>

  <div class="div-general row align-items-center flex-column flex-lg-row py-4">
    <router-link :to="{ name:'list-content', params: {list: list.id}}" style="text-decoration: none" class="col-12 col-lg-4">
      <div class="image-overlap ">
                  <span class="movie-img" v-for="movie in list.movies.slice(0,5)">
                    <img :src="'http://filmfy-api.ddns.net' + movie.image" v-bind:width="this.width"
                         v-bind:height="this.height" :alt="movie.title"/>
                  </span>
      </div>
    </router-link>

    <div class="list-details d-flex flex-column align-items-center align-items-lg-start justify-content-between col-12 col-lg-4">
      <div class="list-title ">
        <span class=""><b>{{ list.title }}</b></span>
      </div>
      <div class="list-data d-flex flex-row align-items-center" >
        <span class="mx-3">❤ {{ list.list_likes}}</span>
        <span> <i class="fa-solid fa-film"></i> {{ list.movies_count }}</span>
        <router-link :to="{ name:'my-lists-edit', params: {list: list.id}}"> <i class="fa-solid fa-pencil mx-3"></i></router-link>
        <span @click="deleteList(this.list.id)"><i class="fa-solid fa-trash text-danger" style="cursor: pointer" ></i></span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "MoviesListsCards",
  props: ["list", "user", "width", "height"],
  data() {
    return {
      baseURL: window.origin,
    }
  },

  methods: {
    async deleteList(idList) {
      await fetch(`http://filmfy-api.ddns.net/api/lists/${idList} `, {
        method: "DELETE"
      })
      this.$router.go()
    }
  }
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
  direction: rtl; /* This is to get the stack with left on top */
  text-align: left; /* Now need to explitly align left */
  padding-left: 25px; /* Same value as the negative margin */
}

.list-details {
  height: 130px;
}

.list-title {
  font-size: 1.1rem;
  text-align: start;
}


@media only screen and (max-width: 767px) {
  .image-overlap {
    direction: rtl; /* This is to get the stack with left on top */
    text-align: center; /* Now need to explitly align left */
    padding-left: 25px; /* Same value as the negative margin */
  }

  .list-details {
    height: 80px;
    margin-top: 20px;
  }

  .list-title {
    font-size: 1.1rem;
    text-align: center;
  }
}






.div-general {
  border-bottom: 1px solid #445566;
}

</style>