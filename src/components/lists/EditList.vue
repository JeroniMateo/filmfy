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


          <SearchMoviesForList class="" v-on:addToList="addToListMovie"/>

        </div>
      </form>
    </div>

  </div>
</template>

<script>
import SearchMoviesForList from "@/components/lists/SearchMoviesForList";
export default {
  name: "EditList",
  components: {SearchMoviesForList},
  data() {
    return {
      listID: this.$route.params.list,
      list: [],
      movies: [],
      title: this.list.title,
      description: this.list.description
    }
  },

  async beforeMount() {
    await this.fetchList()
  },

  methods: {
    async fetchList() {
      let promise = await fetch(`http://filmfy-api.ddns.net/api/lists/${this.listID}`)
      this.list = await promise.json()
      let promise2 = await fetch(`http://filmfy-api.ddns.net/api/movies-from-list/${this.listID}`)
      this.movies = await promise2.json()
    }
  }
}
</script>

<style scoped>

</style>