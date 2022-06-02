<template>
  <div class="container-md">
    <div class="heading image d-flex justify-content-end flex-column">
      <div class="container text-movie d-flex flex-column justify-content-center">
        <span><strong>Colecciona, selecciona y comparte.</strong></span>
        <span><strong>Las listas de Filmfy son la forma perfecta de tener tus películas.</strong></span>
      </div>
      <div class="mt-3">
        <button type="button" class="btn btn-primary">Crea tus listas</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heading"
}
</script>

<style scoped>

.image {
  background-image: linear-gradient(to bottom,
  rgba(0, 0, 0, 0),
  rgba(0, 0, 0, 100)), url("https://images2.alphacoders.com/778/thumb-1920-77840.jpg");
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 40%;

  height: 30vh;
}

</style>