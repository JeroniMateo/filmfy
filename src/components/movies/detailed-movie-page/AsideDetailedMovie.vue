<template>

  <aside v-if="this.log" class="aside-card d-flex flex-column align-items-start rounded-3 p-0">
    <div id="likes">

    </div>

    <div class="text-center p-3">
      <span>Añadir a lista</span>
    </div>

    <div id="comments" class="text-center p-3">

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
      userID: "",
      commented: false
    }
  },

  async beforeMount() {
    if (getCookie("auth")) {
      this.log = true
      this.token = getCookie("auth")
      this.userID = await getUser(this.token)
      await this.checkLiked()
      await this.checkCommented()
    }
  },

  methods: {

    async checkLiked(){
      let likes = document.getElementById("likes")
      let promise = await fetch("http://127.0.0.1:8000/api/user-had-like-movie", {
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
        likes.innerHTML =`
        <div class="m-auto p-3" >
            <i class="fa-solid fa-heart me-2 fs-3 text-orange"></i>
        </div>`
      }else {
        likes.innerHTML =`
        <div id="sendLike" class="m-auto p-3">
            <i class="fa-solid fa-heart me-2 heart"></i>
        </div>`
        document.getElementById("sendLike").addEventListener("click", this.sendLike)
      }
    },

    async checkCommented() {
      let comment = document.getElementById("comments")
      let promise = await fetch("http://127.0.0.1:8000/api/user-had-comment", {
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
        comment.innerHTML = `<a class="text-decoration-none text-white commented"><span >Película comentada</span></a>`
      } else {
        comment.innerHTML = `<a class="text-decoration-none text-white addComment"><span >Añadir un comentario</span></a>`
        document.getElementsByClassName("addComment")[0].addEventListener("click", this.displayModalForm)
      }
    },

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


.addComment:hover {
  cursor: pointer;
  color: white;
}

.commented:hover {
  cursor: auto;
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

.heart-2 {
  color: orange;
  font-size: 30px;
}

.heart-2:hover {
  cursor: auto;
}

</style>