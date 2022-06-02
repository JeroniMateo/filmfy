<template>

  <aside v-if="this.log" class="aside-card d-flex flex-column align-items-start rounded-3 p-0">
    <div id="likes">
      <div v-if="liked" class="m-auto p-3" >
        <i class="fa-solid fa-heart me-2 fs-3" style="color: orange"></i>
      </div>
      <div v-else  @click="this.sendLike" class="m-auto p-3" >
        <i class="fa-solid fa-heart me-2 heart" ></i>
      </div>
    </div>

    <div class="text-center p-3">
      <span @click="this.displayFormAddToList" class="addComment">Añadir a lista</span>
    </div>

    <div v-if="commented" class="text-center p-3">
      <a class="text-decoration-none text-white commented"><span >Película comentada</span></a>
    </div>
    <div v-else class="text-center p-3">
      <a @click="this.displayModalForm" class="text-decoration-none text-white addComment"><span >Añadir un comentario</span></a>
    </div>
  </aside>

  <aside v-else class="aside-card d-flex flex-column align-items-start rounded-3 p-0">

    <a v-bind:href="baseUrl + '/login'" class="text-decoration-none" style="cursor: pointer">
      <div class="m-auto p-3">
        <span class="text-center text-white">Unete a filmfy para poder añadir peliculas a tu listas y darle me gusta</span>
      </div>
    </a>

  </aside>

  <FormModal id="modal" :movie="this.movie" :user="userID"/>
  <FormAddMovieList id="formAddMovieToList" :movie="movie"/>

</template>

<script>
import FormModal from "@/components/movies/detailed-movie-page/FormModal";
import {getCookie, getUser, origin} from "@/main.js"
import FormAddMovieList from "@/components/movies/detailed-movie-page/FormAddMovieList";


export default {
  props: ["movie"],
  name: "AsideDetailedMovie",
  components: {FormAddMovieList, FormModal},

  data() {
    return {
      baseUrl: origin(),
      log: false,
      token: "",
      userID: "",
      liked: false,
      commented: false,
      counter : 0,
    }
  },

  async beforeMount() {

    this.token = getCookie("auth")
    if (this.token && this.counter === 0) {
      this.userID = await getUser(this.token)
      if (this.userID !== "User expired") {
        this.log = true
        await this.checkLiked()
        await this.checkCommented()
      }
      this.counter++
    }
  },

  methods: {

    async checkLiked(){
      let promise = await fetch("http://filmfy-api.ddns.net/api/user-had-like-movie", {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          "movie": this.movie.id,
          "user": this.userID
        })
      })

      let response = await promise.json()
      console.log(response)
      if (response.status === 1) {
        this.liked = true
      }else {
        this.liked = false
      }
    },

    async checkCommented() {
      let promise = await fetch("http://filmfy-api.ddns.net/api/user-had-comment", {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          "movie": this.movie.id,
          "user": this.userID
        })
      })

      let response = await promise.json()

      if (response.status === 1) {
        this.commented = true
      } else {
        this.commented = false
      }
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
    },

    displayFormAddToList() {
      let formAddMovieToList = document.getElementById("formAddMovieToList")
      formAddMovieToList.style.display = "block"
    }
  }
}
</script>

<style scoped>

.aside-card {
  background-color: #2C3440;
  width: fit-content;
}


aside > div {
  width: -webkit-fill-available;
  border-bottom: 1px solid #445566;
}

aside > div:last-child {
  border-bottom: none;
}


</style>