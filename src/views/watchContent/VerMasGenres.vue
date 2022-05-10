<template>
<div id="VerMasGenres">
         <WatchItemCard
                v-for="movie in movies"
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

<style>

</style>