<template>
  <div id="form-sended" class="subscription">
    <div class="form-sended-content">

      <div class="all col-12 d-flex justify-content-between section-heading mb-4">
        <div class=" align-items-center align-items-lg-start flex-column">
          <span class="text-center">Añadir comentario</span>
        </div>
        <div class="">
          <span @click="hideForm" style="cursor: pointer ">x</span>
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <img v-bind:src="'http://filmfy-api.ddns.net/' + this.movie.image" alt="" width="200">
        </div>
        <div class="col-8">
          <form @submit.prevent="this.postComment">
            <div class="mb-3">
              <label for="" class="form-label">Título</label>
              <input id="title" name="title" type="text" class="form-control title" value="" required>
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Cuerpo de la critica</label>
              <textarea id="body" name="body" class="form-control body" required></textarea>
            </div>
            <star-rating
                required
                v-model:rating="rating"
                v-bind:round-start-rating="false"
                v-bind:max-rating="5"
                v-bind:increment="0.5"
                v-bind:read-only="false"
                v-bind:show-rating="false"
                active-color="#00c740"
                inactive-color="#fff"
                v-bind:star-size="20"
            />

            <input type="hidden" id="users_id" name="users_id" v-bind:value="user.id">
            <div class="d-flex justify-content-end">
              <input class="button-send-form btn btn-outline-primary" type="submit"  value="Enviar">
            </div>
          </form>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import {getCookie} from "@/main";
import StarRating from 'vue-star-rating'

export default {
  name: "FormModal",
  props: ["movie", "user"],
  components: {StarRating},

  data() {
    return {
      token: getCookie("auth"),
      commented: false,
      rating: 0,
    }
  },


  methods: {

    async postComment() {
      await fetch(`http://filmfy-api.ddns.net/api/v1/comments-store/${this.movie.id}`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + this.token,
        },
        body: JSON.stringify({
          "title": document.getElementById("title").value,
          "body": document.getElementById("body").value,
          "rating": this.rating,
          "users_id": document.getElementById("users_id").value,
        })
      })
      await this.$router.push("/movies/" + this.movie.id)
    },

    hideForm() {
      let formModal = document.getElementById("modal")
      formModal.style.display = "none"
    }
  }
}
</script>

<style scoped>

.section-heading {
  display: flex;
  border-bottom: 1px solid white;
  color: white;
  font-family: Graphik-Regular-Web, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: .075em;
  margin-bottom: 0.76923077rem;
  margin-top: 0;
  padding-bottom: 5px;
  text-transform: uppercase;
}

.form-sended-content {
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 55vw;
  height: auto;
  background-color: #2C3440;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #888;
  text-align: center;
}

.subscription {
  display: none;
  align-items: center;
  position: fixed;
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; /* Enable scroll if needed */
  backdrop-filter: blur(6px); /* blur effect for the overlay! */
}

.body {
  height: 300px;
  background-color: rgb(204, 221, 238);
}

.title {
  background-color: rgb(204, 221, 238);
}


</style>