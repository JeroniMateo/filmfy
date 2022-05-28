<template>
  <div class="row pt-4 ps-1 pe-1 pb-4 d-flex align-items-start div-movie-searched" >
    <img class="col-5" v-bind:src="this.baseUrlApi + movies.image">
    <div class="d-flex flex-column align-items-start col-7 justify-content-between content-text-year">
      <a class="text-start" v-bind:href="this.baseUrl + '/movies/' + movies.id">{{ movies.title }}</a>
      <span>{{ movies.release_date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemSearched",
  props: ["movies"],

  data() {
    return {
      baseUrlApi: "http://filmfy-api.ddns.net/",
      baseUrl: window.origin
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
  background-color: rgb(68,85,102);
  box-sizing: border-box;
  border-top: 1px solid #242424;
  border-bottom: 1px solid #242424;
  width: 20rem;
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
}

.content-text-year {
  height: 130px;
}
</style>