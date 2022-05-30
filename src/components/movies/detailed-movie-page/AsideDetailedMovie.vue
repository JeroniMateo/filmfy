<template>

  <aside v-if="this.log" class="aside-card d-flex flex-column align-items-start rounded-3 p-0">
    <div v-if="liked" @click="sendLike" class="m-auto p-3" style="cursor: pointer">
      <i class="fa-solid fa-heart me-2 heart"></i>
    </div>
    <div v-else class="m-auto p-3" style="color: orange; cursor: pointer">
      <i class="fa-solid fa-heart me-2"></i>
    </div>
    <div class="text-center p-3">
      <span>Añadir a lista</span>
    </div>
    <div class="text-center p-3">
      <a @click="displayModalForm" class="text-decoration-none"><span>Añadir un comentario</span></a>
    </div>
  </aside>

  <aside v-else class="aside-card d-flex flex-column align-items-start rounded-3 p-0">

    <a v-bind:href="baseUrl + '/login'" class="text-decoration-none" style="cursor: pointer">
      <div class="m-auto p-3">
        <span class="text-center">Unete a filmfy para poder añadir peliculas a tu listas y darle me gusta</span>
      </div>
    </a>

  </aside>
  <FormModal id="modal" :movie="this.movie" :user="userID"/>

</template>

<script>
import FormModal from "@/components/movies/detailed-movie-page/FormModal";
import {getCookie, getUser, origin} from "@/main.js"

export default {
  props: ["movie"],
  name: "AsideDetailedMovie",
  components: {FormModal},

  data() {
    return {
      log: false,
      token: "",
      baseUrl: origin(),
      liked: false,
      userID: ""
    }
  },

  beforeMount() {
    if (getCookie("auth")) {
      this.log = true
      this.token = getCookie("auth")
      this.userID = getUser(this.token)
      this.getLike()
    }
  },

  methods: {

    async getLike() {

    },

    async sendLike() {

      await fetch("http://filmfy-api.ddns.net/api/v1/movies-likes", {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + this.token,
        },
        body: JSON.stringify({
          "movies_id": this.$route.params.movie,
          "users_id": this.userID
        })
      })


      await location.reload()

    },

    displayModalForm() {
      let formModal = document.getElementById("modal")
      formModal.style.display = "block"
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