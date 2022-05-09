<template>
  <div id="Lista" class="container" style="background-color: #191a19">
    <h3><b>Cartelera</b></h3>
    <div id="MoviesList" class="row row-cols-1 p-5 row-cols-md-3 g-4">
      <WatchItemCard v-for="movie in movies" :movie="movie" :key="movie.id" />
    </div>
  </div>
</template>

<script>
import WatchItemCard from '@/components/Items/WatchItemCard.vue'
export default {
  name: 'BillBoard',
  components: {
    WatchItemCard
  }
}
</script>

<style scoped>
h1 {
  color: #1da8e2;
  background-color: rgb(15, 23, 30);
  font-size: 6vh;
  width: 100%;
}
div#BillBoardSection {
  background-color: #0f171e;
  color: #19282f;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  flex-direction: col;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
}
</style>
