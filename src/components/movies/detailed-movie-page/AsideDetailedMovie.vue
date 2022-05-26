<template>

  <aside class="aside-card d-flex flex-column align-items-start rounded-3 p-0">
    <div @click="sendLike" class="m-auto p-3" style="cursor: pointer">
      <i class="fa-solid fa-heart me-2 heart"></i>
    </div>
    <div class="text-center p-3">
      <span>Añadir a lista</span>
    </div>
    <div class="text-center p-3">
      <a @click="displayModalForm" class="text-decoration-none"><span>Añadir un comentario</span></a>
    </div>
  </aside>
  <FormModal id="modal" :movie="this.movie"/>

</template>

<script>
import FormModal from "@/components/movies/detailed-movie-page/FormModal";
export default {
  props:["movie"],
  name: "AsideDetailedMovie",
  components: {FormModal},
  methods: {
    async sendLike() {
      await fetch("http://127.0.0.1:8000/api/movies-likes/", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          "movies_id": this.$route.params.movie,
          "users_id": "2"
        })
      })

      await location.reload()

    },

    displayModalForm(){
      let formModal = document.getElementById("modal")
      formModal.style.display="block"
    }
  }
}
</script>

<style scoped>

.aside-card {
  background-color: #2C3440;
  width: fit-content;
}

span {
  color: #bcd;
}

span:hover {
  cursor: pointer;
  color: white;
}

aside > div {
  width: -webkit-fill-available;
  border-bottom: 1px solid #445566;
}

aside > div:last-child {
  border-bottom: none;
}

.heart {
  color: white;
  font-size: 30px;
}

.heart:hover {
  color: orange;
}

</style>