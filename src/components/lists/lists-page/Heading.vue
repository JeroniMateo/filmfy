<template>
  <div class="">
    <div class="heading image d-flex justify-content-end flex-column">
      <div class="container text-movie d-flex flex-column justify-content-center">
        <span><strong>Colecciona, selecciona y comparte.</strong></span>
        <span><strong>Las listas de Filmfy son la forma perfecta de tener tus películas.</strong></span>
      </div>
      <div v-if="log" class="mt-3">
        <a href="/lists/new"><button type="button" class="btn btn-primary">Crea tus listas</button></a>
      </div>
      <div v-else class="mt-3">
        <a href="/login"><button type="button" class="btn btn-primary">Unéte para crear listas</button></a>
      </div>
    </div>
  </div>
</template>

<script>
import {getCookie, getUser} from "@/main";

export default {
  name: "Heading",

  data() {
    return {
      token: "",
      log: false,

    }
  },

  async beforeMount() {
    this.token = getCookie("auth")
    if (this.token) {
      this.user = await getUser(this.token)
      this.log = true
    }
  }
}
</script>

<style scoped>

.image {
  background-image: linear-gradient(to bottom,
  rgba(0, 0, 0, 0),
  rgba(0, 0, 0, 100)), url("@/assets/img/MoviesIMG/la-la-land.jpg");
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 75%;
  width: 100%;
  height: 53vh;
}

</style>