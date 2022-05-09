<template>
  <div id="TOP10" >
    <div class="container-fluid" style="background-color:#000">
      <div class="row">
        <div class="col-md-12">
          <h3><b>TOP 10</b></h3>
        </div>
      </div>
      <div class="col">
        <div class="col-md-12">
          <div class="container" id="topMovie">
              <div class="TopMovieHead">
                  <h3 id="topNum">1.<b>El Padrino</b></h3>
              </div>
              <WatchItemCard :movie="movie" :key="movie.id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WatchItemCard from "@/components/Items/WatchItemCard.vue"

export default {
    name: "Outstandings",
    components: {
    WatchItemCard,
},
}
</script>

<style>
h3#topNum {
    color:  #c50909;
    width: 30vh;
    background-color: #232323;
    font-size: 4vh;
}
div.TopMovieHead{
    display: flex;
}
</style>