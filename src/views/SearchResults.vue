<template>
  <div id="SearchResults" class="contianer-fluid">
    <div id="SearchResultsContent" @load="searchResult">
      <WatchItemCard v-for="movie in movies" :movie="movie" :key="movie.id" />
    </div>
  </div>
</template>

<script>
import WatchItemCard from '../components/movies/WatchItemCard.vue'
export default {
  name: 'SearchResults',
  data () {
    return {
      search: {
        query: '',
        page: 1,
        total_pages: 1,
        total_results: 0
      },
      search_result: {
        results: {
          movie: '',
          movies: []
        }
      }
    }
  },
  components: {
    WatchItemCard
  },
  methods: {
    searchResult () {
      if (this.movies.length === 0) {
        document.getElementById('SearchResultsContent').innerHTML =
          '<h1>{{No se encontraron resultados}}</h1>'
      }
    }
  }
}
</script>

<style></style>
