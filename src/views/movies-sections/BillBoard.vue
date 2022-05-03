<template>
  <div id="Cartelera" class="container" style="background-color: #191a19">
    <h1>Cartelera</h1>
      <div id="BillBoardSection" class="row row-cols-1 p-5 row-cols-md-3 g-4">
        <BillBoardMovie/>
        <BillBoardMovie/>
        <BillBoardMovie/>
        <BillBoardMovie/>
        <BillBoardMovie/>
        <BillBoardMovie/>
        <BillBoardMovie/>
      </div>
  </div>
</template>

<script>
import BillBoardMovie from '../../components/movies/Cartelera/BillBoardMovie.vue'
export default {
  name: 'BillBoard',
  components: {
    BillBoardMovie,
    
}
}
</script>

<style scoped>
h1 {
  color: rgb(29, 168, 226);
  background-color: rgb(15, 23, 30);
  font-size: 4vh;
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
