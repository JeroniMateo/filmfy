<template>
  <div id="CinePeliculas" class="container-fluid" style="background-color: #191a19">
    <div id="CineCarrousel" class="row row-cols-1 p-5 row-cols-md-1 g-4 container-fluid">
    <WatchContentCarrousel />
    </div>
  </div>
</template>

<script>
import WatchContentCarrousel from "../../components/Items/watchContentGenres/WatchContantCarrousel.vue";
import WatchItemOptions from "../../components/Items/watchContentGenres/WatchItemOptions.vue";
import WatchItemCard from "../../components/Items/WatchItemCard.vue";
export default {
  name: "Movies",
  components: {
    WatchItemOptions,
    WatchContentCarrousel,
    WatchItemCard,
  },
};
</script>

<style >
h3 {
  color: rgb(29, 168, 226);
  width: 50vh;
  background-color: #242424;
  font-size: 6vh;
}
div#CineCarrousel {
  background-color: #000;
  color: #242424;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  flex-direction: col;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 100%;
}
</style>