<template>
  <div id="form-sended" class="subscription">

    <div class="form-sended-content">
      <div class="all">
        <div class="container">
          <div class="section-heading mt-5 align-items-center align-items-lg-start flex-column">
            <span class="text-center">Mis listas</span>
          </div>
        </div>

        <div class="container">
          <div class="my-5 row">
            <div class="col-12 d-flex align-items-start flex-column">
              <ItemsListsCard v-for="list in this.lists" :key="list" :list="list" />
            </div>
          </div>
        </div>
      </div>
      <button @click="addToList" class="btn btn-success btn-add-list text-white" >Añadir a la lista</button>
    </div>

  </div>
</template>

<script>
import {getCookie, getUser} from "@/main";
import ItemsListsCard from "@/components/lists/ItemsListsCard";

export default {
  name: "FormAddMovieList",
  components: {ItemsListsCard},
  props: ["movie"],

  data() {
    return {
      token: getCookie("auth"),
      lists: [],
      userID: ""
    }
  },

  async beforeMount() {
    this.userID = await getUser(this.token)
    await this.fetchUserLists()
  },


  methods: {

    async fetchUserLists() {
      let promise = await fetch(`http://127.0.0.1:8000/api/user-lists/${this.userID}`)
      this.lists = await promise.json()
    },


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
      location.reload()
    },

    hideForm() {
      let formAddMovieToList = document.getElementById("formAddMovieToList")
      formAddMovieToList.style.display = "none"
    }
  }
}
</script>

<style scoped>
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

.rating {
  background-color: rgb(204, 221, 238);
}

.button-send-form {
  background-color: #00c740;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 7px;
}

.btn-add-list {
  margin-left: auto;
  width: fit-content;
}
</style>