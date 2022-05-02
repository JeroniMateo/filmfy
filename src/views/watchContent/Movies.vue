<template>
  <div class="container-fluid">
    <WatchContentCarrousel />
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
  background-color: rgb(15, 23, 30);
  font-size: 6vh;
}
</style>