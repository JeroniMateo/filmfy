<template>
  <div @click="checkList" class="d-flex align-items-center justify-content-between div-content-list">
    <i v-if="checked" class="fa fa-check me-3" ></i>
    <span v-else ></span>
    <p class="m-0 py-3">{{ this.list.title }}</p>
  </div>
</template>

<script>
export default {
  name: "ItemsListsCard",
  props: ["list"],

  data() {
    return {
      checked: false,
      list: []
    }
  },

  methods: {

    checkList() {
      if (!this.checked){
        this.checked = true
      }else {
        this.checked = false
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