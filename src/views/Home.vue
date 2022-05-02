<template>
  <div class="home container">
    <div class="HomeDestacados">
      <h3>Destacados</h3>     
          <WatchItemCard />
    </div>
    <div class="cartelera">
      <h3>Cartelera</h3>
        <BillBoardMovie />
    </div>
    <div class="UpcomingMovies">
      <h3>Próximos Estrenos</h3>
      <BillBoardMovie />
    </div>
  </div>
</template>

<script>
import BillBoardMovie from "@/components/movies/Cartelera/BillBoardMovie.vue"
import WatchItemCard from "@/components/Items/WatchItemCard.vue"
export default {
  name: 'HomeView',
  components: {
    BillBoardMovie,
    WatchItemCard,
    
  }
}
</script>
<style scoped>
h3{
  color: rgb(29, 168, 226);
  background-color: rgb(15, 23, 30);
  font-size: 6vh;
  width: 100%;
}
</style>
