<template>
  <div id="Cartelera" class="container">
    <h1>Cartelera</h1>
        <BillBoardMovie />
  </div>
</template>

<script>
import BillBoardMovie from '../../components/movies/Cartelera/BillBoardMovie.vue'
export default {
  name: 'BillBoard',
  components: {
    BillBoardMovie
  }
}
</script>

<style scoped>
h1{
  color: rgb(29, 168, 226);
  background-color: rgb(15, 23, 30);
  font-size: 6vh;
}
</style>
