<template>
  <div id="SearchGenres">
      <div class="container-fluid">
          <WatchItemCarrousel/>
      </div>
  </div>
</template>

<script>
import WatchItemCarrousel from '../../components/Items/watchContentGenres/WatchContantCarrousel.vue'
export default {
    name: 'SearchGenres',
    comments:{
        WatchItemCarrousel
    }
}
</script>

<style>

</style>