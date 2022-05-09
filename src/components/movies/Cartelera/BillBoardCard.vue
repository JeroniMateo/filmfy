<template>
  <div id="BillBoardCard" class="container-fluid" @click="goToBillBoardContent">
    <div>
      <div class="card h-100">
        <img src="../../../assets/img/LogoImageFilmfy.png" id="MovieImage" class="card-img-top" alt="..." />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BillBoardCard',
  methods: {
    goToBillBoardContent() {
      this.$router.push({
        path: '/billboard/:id',
        query: {
          id: this.id
        }
      })
    }
  }
}
</script>

<style>
div#BillBoardCard {
  background-color: rgb(15, 23, 30);
  color: #19282f;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
}
</style>
