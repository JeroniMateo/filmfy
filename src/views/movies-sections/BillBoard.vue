<template>
  <div id="Cartelera" class="container" style="background-color: #191a19">
    <h3><b>Cartelera</b></h3>
    <div id="BillBoardSection" class="row row-cols-1 p-5 row-cols-md-4 g-4">
      <WatchItemCard v-for="movie in 8" :movie="movie" :key="movie.id" />
    </div>
  </div>
</template>

<script>
  import WatchItemCard from "@/components/Items/WatchItemCard.vue";
export default {
  name: 'BillBoard',
  components: {
    WatchItemCard
  }
}
</script>

<style scoped>
h3 {
  color: #4E9F3D;
  font-size: 8vh;
  width: 100%;
  background-color: #000;
}
div#BillBoardSection {
  background-color: #0b120b;
  color: #000;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  flex-direction: col;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
}
#Cartelera {
  margin: auto;
  width: 70%;
}
</style>
