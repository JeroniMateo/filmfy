<template>
  <div @click="this.selectMovie(movies.id)" class="row pt-3 ps-1 pe-1 pb-3 d-flex align-items-start div-movie-searched">
    <div class="d-flex align-items-start col-12">
      <a class="text-start me-2">{{ this.movies.title }}</a>
      <span>({{ year }})</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "ItemsForSearchMoviesList",
  props: ["movies"],

  data() {
    return {
      baseUrlApi: "http://filmfy-api.ddns.net/",
      baseUrl: window.origin,
      year: "",
    }
  },

  mounted() {
    this.year = new Date(this.movies.release_date).getFullYear()
  },

  methods: {
    async selectMovie(id) {
      let promise = await fetch(`http://filmfy-api.ddns.net/api/movies/${id}`)
      let response = await promise.json()
      this.$emit("changeItem", response)
    }
  }

}
</script>

<style scoped>


span {
  font-size: 1rem;
  margin-right: 10px;
  text-transform: uppercase;
}

.div-movie-searched {
  z-index: 1;
  background-color: rgb(68, 85, 102);
  box-sizing: border-box;
  border-top: 1px solid #242424;
  border-bottom: 1px solid #242424;
  width: 30rem;
}

@media (max-width: 600px) {
  .div-movie-searched {
    width: 94vw;
  }
}


.div-movie-searched:hover {
  z-index: 1;
  background-color: green;
  color: white;
  cursor: pointer;
}

.div-movie-searched:first-child {
  border-top: none;
}

a {
  color: white;
  text-decoration: none;
}

</style>