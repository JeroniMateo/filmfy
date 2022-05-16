<template>
  <div id="SearchResults" class="contianer-fluid">
    <div id="SearchResultsContent">
      <WatchItemCard v-for="movie in movies" :movie="movie" :key="movie.id" />
    </div>
  </div>
</template>

<script>
import WatchItemCard from '../components/Movies/WatchItemCard.vue'
export default {
  name: 'SearchResults',
  components: {
    WatchItemCard
  }
}
</script>

<style></style>
