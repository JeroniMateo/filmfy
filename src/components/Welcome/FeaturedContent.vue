<template>
  <div id="FeaturedContent">
    <div class="container">
      <h1><b>Top Popular Content</b></h1>
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-6 g-6">
        <WatchItemCard
          v-for="movie in 4"
          :movie="movie"
          :key="movie.PopularContent"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WatchItemCard from '../Movies/WatchItemCard.vue'
export default {
  name: 'FeaturedContent',
  components: {
    WatchItemCard
  }
}
</script>

<style scoped>
h1 {
  color: #4e9f3d;
  padding: 1%;
}
div#FeaturedContent {
  background-color: #000;
  margin: auto;
  width: 85%;
}
#MainCards {
  padding: 1%;
  color: #000;
}
</style>
