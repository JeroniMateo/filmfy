<template>
  <div id="Lista" class="container" style="background-color: #191a19">
    <h1>Cartelera</h1>
      <div id="MoviesList" class="row row-cols-1 p-5 row-cols-md-3 g-4">
        <WatchItemCard/>
      </div>
  </div>
</template>

<script>
import WatchItemCard from "@/components/Items/WatchItemCard.vue"
export default {
  name: 'BillBoard',
  components: {
    WatchItemCard,
    
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
