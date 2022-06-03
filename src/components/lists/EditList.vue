<template>
  <div class="all">
    <div class="container">
      <div class="section-heading mt-5 align-items-center align-items-lg-start flex-column">
        <span class="text-center">Nueva lista</span>
      </div>
    </div>
    <div>
      <form @submit.prevent="this.postList">

        <div class="container my-4 ">

          <div class="row justify-content-center">
            <div class="d-flex flex-column justify-content-start col-lg-7 col-xl-5 col-12 form-row ">
              <label class="has-icon validated text-start"><span class="icon"></span>Nombre de la lista</label>
              <input v-model="title" type="text"  name="name" class="field">
            </div>
          </div>

          <div class="row justify-content-center mb-5">
            <div class="d-flex flex-column justify-content-start col-lg-7 col-12 col-xl-5 form-row">
              <label class="has-icon validated text-start"><span class="icon"></span>Descripción</label>
              <textarea v-model="description"  type="text" name="name" class="field " style="height: 5rem"/>
            </div>
          </div>


          <SearchMoviesForList :edit="edit" class="" :movies="movies" v-on:addToList="addToListMovie"/>

        </div>
      </form>
    </div>

  </div>
</template>

<script>
import SearchMoviesForList from "@/components/lists/SearchMoviesForList";
import {getCookie, getUser} from "@/main";

export default {
  name: "EditList",
  components: {SearchMoviesForList},
  data() {
    return {
      edit: true,
      listID: this.$route.params.list,
      list: [],
      moviesList: [],
      token: "",
      user: [],
      movies: [],
      title: "",
      description: ""
    }
  },

  async beforeMount() {
    await this.fetchList()
    this.token = getCookie("auth")
    if (this.token) {
      this.user = await getUser(this.token)
    }
  },

  methods: {
    async fetchList() {
      let promise = await fetch(`http://filmfy-api.ddns.net/api/lists/${this.listID}`)
      this.list = await promise.json()
      this.title = this.list.title
      this.description = this.list.description
      await this.fetchMovies()

    },

    async fetchMovies() {
      let promise2 = await fetch(`http://filmfy-api.ddns.net/api/movies-from-list/${this.listID}`)
      this.movies = await promise2.json()
    },


    async postList() {
      let promise = await fetch("http://127.0.0.1:8000/api/edit-list", {
        method: "PUT",
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + this.token,
        },
        body: JSON.stringify({
          id: this.listID,
          title: this.title,
          description: this.description,
          users_id: this.user.id,
          movies: this.movies
        })
      })

      this.$router.push('/lists/' + this.listID)

    },

    addToListMovie(movie) {
      this.movies.push(movie)
    }
  }
}
</script>

<style scoped>
.all {
  padding: 1px;
  background-color: black;
}

.section-heading {
  display: flex;
  border-bottom: 1px solid white;
  color: white;
  font-family: Graphik-Regular-Web, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: .075em;
  margin-bottom: 0.76923077rem;
  margin-top: 0;
  padding-bottom: 5px;
  text-transform: uppercase;
}

.section-heading a {
  color: #9ab;
}

.form-row {
  margin-bottom: 20px;
  position: relative;
}

.field {
  background-color: #2c3440;
  border: none;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #456;
  box-sizing: border-box;
  color: white;
  font-size: 1.07692308rem;
  line-height: 1;
  margin: 0;
  padding: 9px 9px 8px;
  width: 100%;
}
</style>