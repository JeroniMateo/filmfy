<template>
  <div v-if="!listControlEmpty" id="form-sended" class="subscription">
    <form @submit.prevent="this.postMovieToList">
      <div class="form-sended-content container mx-auto">
        <div class="row">
          <div class="all col-12 d-flex justify-content-between section-heading">
            <div class=" align-items-center align-items-lg-start flex-column">
              <span class="text-center">Mis listas</span>
            </div>
            <div class="">
              <span @click="hideForm" style="cursor: pointer ">x</span>
            </div>
          </div>

          <div class="container col-10">
            <div class="mt-4 mb-2 row flex-column">
              <ItemsListsCard v-for="list in this.lists" :key="list" :list="list" v-on:changeItem="this.pushIdList"
                              v-on:changeItemDelete="this.itemDelete" :listsTotal="this.lists" :movie="movie"/>
            </div>
          </div>

          <div class="col-12 d-flex flex-row align-items-end">
            <button type="submit" class="btn btn-outline-primary btn-add-list">Añadir a la lista</button>
          </div>
        </div>
      </div>
    </form>
  </div>

  <div v-else id="form-sended" class="subscription">

    <div class="form-sended-content container mx-auto">
      <router-link to="/lists/new">
        <button class="btn btn-outline-primary text-white">Empieza a crear tus listas</button>
      </router-link>
    </div>

  </div>
</template>

<script>
import {getCookie, getUser} from "@/main";
import ItemsListsCard from "@/components/lists/ItemsListsCard";

export default {
  name: "FormAddMovieList",
  components: {ItemsListsCard},
  props: ["movie", "user"],

  data() {
    return {
      token: getCookie("auth"),
      lists: [],
      listControlEmpty: false,
      idLists: [],
    }
  },

  async beforeMount() {
    await this.fetchUserLists()
  },


  methods: {

    async fetchUserLists() {
      let promise = await fetch(`http://filmfy-api.ddns.net/api/user-lists/${this.user.id}`)
      this.lists = await promise.json()
      if (this.lists.length === 0) {
        this.listControlEmpty = true
      }
    },

    pushIdList(idList) {
      this.idLists.push(idList)
    },

    itemDelete(idList) {
      this.idLists = this.idLists.filter(item => {
        return item !== idList
      })
    },

    async postMovieToList() {

      for (const item of this.idLists) {
        await fetch(`http://filmfy-api.ddns.net/api/v1/add-movie-to-list`, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
          },
          body: JSON.stringify({
            "movies_id": this.movie.id,
            "lists_id": item

          })
        })
      }
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
  margin-top: 120px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30rem;
  min-height: 300px;
  height: auto;
  background-color: #2C3440;
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

.btn-add-list {
  margin-left: auto;
  width: fit-content;
}
</style>