<template>
  <div id="SearchResults" class="contianer-fluid">
    <div id="SearchResultsContent" @load="searchResult">
      <WatchItemCard v-for="movie in movies" :movie="movie" :key="movie.query" />
    </div>
  </div>
</template>

<script>
import WatchItemCard from '../components/Movies/WatchItemCard.vue'
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
          '<h1 class="error">{{No se encontraron resultados}}</h1>'
      }
    }
  }
}
</script>

<style scopedº>
.error {
  color: #b33030;
  font-size: 1rem;
  font-weight: bold;
}
</style>
