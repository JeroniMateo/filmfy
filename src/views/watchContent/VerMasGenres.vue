<template>
<div id="VerMasGenres" class="row row-cols-1 p-2 row-cols-md-5 g-2">
         <WatchItemCard
                v-for="movie in 10"
                :movie="movie"
                :key="movie.Genre"
              />
</div>
</template>

<script>
import WatchItemCard from '../../components/Items/WatchItemCard.vue'
export default{
    name: 'VerMasGenres',
    components: {
        WatchItemCard
        }
}
</script>

<style scoped>
div#VerMasGenres {
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
  width: 85%;
}
</style>