<template>
  <div id="SearchResults" class="contianer-fluid">
    <div id="SearchResultsContent">
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
      movie: {
        id: '',
        image: '',
        title: '',
        rating: '',
        category: []
      },
      movies: []
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
      } else {
        this.movies.forEach((search) => {
          fetch(`http://filmfy-api.ddns.net/api/movies/${search.query}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
              Accept: 'application/json',
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          })
            .then((response) => response.json())
            .then((data) => {
              this.movies.push(`http://filmfy-api.ddns.net/${data.image}`)
              this.movies.push(`http://filmfy-api.ddns.net/${data.title}`)
              this.movies.push(`http://filmfy-api.ddns.net/${data.rating}`)
              this.movies.push(`http://filmfy-api.ddns.net/${data.cateogry}`)
            })
        })
      }
    }
  },
  beforeMount () {
    this.searchResult()
  }
}
</script>

<style></style>
