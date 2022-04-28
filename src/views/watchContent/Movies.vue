<template>
  <div class="container-fluid">
    <WatchItemOptions />
  </div>
</template>

<script>
import WatchItemOptions from "../../components/Items/watchContentGenres/WatchContantCarrousel.vue";
export default {
  name: "Movies",
  components: {
    WatchItemOptions,
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