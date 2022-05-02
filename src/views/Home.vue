<template>
  <div class="home container">
    <div class="HomeDestacados">
      <h3>Destacados</h3>
      <div class="row">
        <div class="col-md-4">
          <WatchItemCard />
        </div>
        <div class="col-md-4">
          <WatchItemCard />
        </div>
        <div class="col-md-4">
          <WatchItemCard />
        </div>
      </div>
    </div>
    <div class="cartelera">
      <h3>Cartelera</h3>
      <div class="row">
        <div class="col-md-4">BillBoardMovie</div>
        <div class="col-md-4">BillBoardMovie</div>
        <div class="col-md-4">BillBoardMovie</div>
        <div class="col-md-4">BillBoardMovie</div>
      </div>
    </div>
    <div class="UpcomingMovies">
      <h3>Próximos Estrenos</h3>
      <div class="row">
        <div class="col-md-4">BillBoardMovie</div>
        <div class="col-md-4">BillBoardMovie</div>
        <div class="col-md-4">BillBoardMovie</div>
        <div class="col-md-4">BillBoardMovie</div>
      </div>
    </div>
  </div>
</template>

<script>
import BillBoardMovie from '@/components/movies/Cartelera/BillBoardMovie.vue'
import WatchItemCard from '@/components/Items/WatchItemCard.vue'
export default {
  name: 'HomeView',
  components: {
    BillBoardMovie,
    WatchItemCard
  }
}
</script>
