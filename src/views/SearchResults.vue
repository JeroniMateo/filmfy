<template>
  <div id="SearchResults" class="contianer-fluid" >
    <div id="SearchResultsContent" @load="searchResult">
      <WatchItemCard v-for="movie in movies" :movie="movie" :key="movie.id" />
    </div>
  </div>
</template>

<script>
import WatchItemCard from '../components/Movies/WatchItemCard.vue'
export default {
  name: 'SearchResults',
  data() {
    return {
      movie: "",
      movies: [],
      search_result: "",
      loading: true,
      error: false,
      errorMessage: "",
    };
  },
  components: {
    WatchItemCard
  },
  methods:{
    searchResult(){
      if(this.movies.length == 0){
        document.getElementById("SearchResultsContent").innerHTML = "<h1>No se encontraron resultados</h1>";
      }
    }
  }
}
</script>

<style></style>
