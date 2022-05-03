<template>
  <div id="Home" class="container" style="background-color:#191A19">
      <h3>Destacados</h3>     
    <div class="HomeSection row row-cols-1 p-5 row-cols-md-3 g-4" id="HomeDestacados">
          <WatchItemCard />
          <WatchItemCard />
          <WatchItemCard />
    </div>
      <h3>Cartelera</h3>
    <div class="HomeSection row row-cols-1 p-5 row-cols-md-3 g-4" id="cartelera">
        <BillBoardMovie />
        <BillBoardMovie />
        <BillBoardMovie />
    </div>
      <h3>Próximos Estrenos</h3>
    <div class="HomeSection row row-cols-1 p-5 row-cols-md-3 g-4" id="UpcomingMovies">
      <BillBoardMovie />
      <BillBoardMovie />
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
.HomeSection{
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
