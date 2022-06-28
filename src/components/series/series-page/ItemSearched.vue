<template>

  <a v-bind:href="this.baseUrl + '/movies/' + movies.id" class="row pt-2 ps-1 pe-1 pb-2 align-items-center div-movie-searched">
      <img class="col-3 rounded-3" v-bind:src="this.baseUrlApi + movies.image">
      <div class="d-flex flex-column align-items-start col-9 justify-content-center">
        <span class="text-start  mb-2" >{{ movies.title }}</span>
        <span>{{ this.date }}</span>
      </div>
  </a>

</template>

<script>
export default {
  name: "ItemSearched",
  props: ["movies"],

  data() {
    return {
      baseUrlApi: "http://filmfy-api.ddns.net/",
      baseUrl: window.origin,
      date: "",
    }
  },

  beforeMount() {
    this.date = new Date(this.movies.release_date).getFullYear()
  }
}
</script>

<style scoped>

.text-title {
  font-size: 14px;
}

span {
  font-size: 1rem;
  margin-right: 10px;
}

.div-movie-searched {
  z-index: 1;
  background-color: rgb(68,85,102);
  box-sizing: border-box;
  border-top: 1px solid #242424;
  border-bottom: 1px solid #242424;
  width: 25rem;
}

@media only screen and (max-width: 767px) {
  .div-movie-searched {
    width: 20rem;
  }
}

.div-movie-searched:first-child {
  border-top: none;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: #dcdada;
  background-color: green;
}

</style>