<template>

  <div v-if="!movieInList" @click="checkList(this.list.id)" v-bind:id="this.list.id + '-itemList'"
       class="flex-row-reverse justify-content-between div-content-list col-12 d-flex align-items-center">
    <p class="m-0 py-3">{{ this.list.title }}</p>
  </div>

  <div v-else v-bind:id="this.list.id + '-itemList'"
       class=" justify-content-between div-content-list col-12 d-flex align-items-center">
    <i class="fa fa-check me-3"></i>
    <p class="m-0 py-3">{{ this.list.title }}</p>
  </div>

</template>

<script>
export default {
  name: "ItemsListsCard",
  props: ["list", "movie"],

  data() {
    return {
      checked: false,
      movieInList: false
    }
  },

  beforeMount() {
    this.list.movies.forEach(movie => {
      if (movie.id === this.movie.id) {
        this.movieInList = true
      }
    })
  },

  methods: {

    checkList(idList) {
      if (!this.checked) {
        this.checked = true
        document.getElementById(`${idList}-itemList`).innerHTML += `<i id="${idList}-check" class="fa fa-check me-3" ></i>`
        this.$emit("changeItem", idList)
      } else {
        this.checked = false
        let el = document.getElementById(`${idList}-check`)
        el.remove()
        this.$emit("changeItemDelete", idList)
      }
    }
  }

}
</script>

<style scoped>

.div-content-list {
  width: fit-content;
}

.div-content-list:hover {
  background-color: green;
  color: white;
  cursor: pointer;
}

</style>