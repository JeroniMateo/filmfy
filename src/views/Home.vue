<template>
  <div id="Home" class="container" style="background-color:#191A19">
      <h3><b>Destacados</b></h3>     
    <div class="HomeSection row row-cols-1 p-5 row-cols-md-3 g-4" id="HomeDestacados">
          <WatchItemCard />
          <WatchItemCard />
          <WatchItemCard />
    </div>
      <h3><b>Cartelera</b></h3>
    <div class="HomeSection row row-cols-1 p-5 row-cols-md-3 g-4" id="cartelera">
        <BillBoardCard />
        <BillBoardCard />
        <BillBoardCard />
    </div>
      <h3><b>Próximos Estrenos</b></h3>
    <div class="HomeSection row row-cols-1 p-5 row-cols-md-3 g-4" id="UpcomingMovies">
      <BillBoardCard />
      <BillBoardCard />
      <BillBoardCard />
    </div>
  </div>
</template>

<script>
import BillBoardCard from "@/components/movies/Cartelera/BillBoardCard.vue"
import WatchItemCard from "@/components/Items/WatchItemCard.vue"
export default {
  name: 'HomeView',
  components: {
    BillBoardCard,
    WatchItemCard,
    
  }
}
</script>
<style scoped>
h3{
  color: rgb(29, 168, 226);
  font-size: 6vh;
  width: 100%;
  height: 8vh;
  background-color: #000;
  text-align: center;
}
.HomeSection{
  background-color: #161414;
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
