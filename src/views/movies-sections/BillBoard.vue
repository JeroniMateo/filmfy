<template>
  <div id="Cartelera" class="container" style="background-color: #191a19">
    <h3><b>Cartelera</b></h3>
    <div id="BillBoardSection" class="row row-cols-1 p-5 row-cols-md-3 g-4">
      <BillBoardCard />
      <BillBoardCard />
      <BillBoardCard />
      <BillBoardCard />
      <BillBoardCard />
      <BillBoardCard />
    </div>
  </div>
</template>

<script>
import BillBoardCard from "@/components/movies/Cartelera/BillBoardCard.vue"
export default {
  name: 'BillBoard',
  components: {
    BillBoardCard
  }
}
</script>

<style scoped>
h3 {
  color: rgb(29, 168, 226);
  font-size: 6vh;
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
</style>
