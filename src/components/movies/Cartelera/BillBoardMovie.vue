<template>
  <div id="BillBoardMovie" class="container-fluid" @click="goToBillBoardContent">
    <div class="col">
      <div class="card h-100">
        <img id="BillBoardIMG" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title" id="BillBoardTitle">Card title</h5>
          <p class="card-text" id="BillBoardSinopsis">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <small class="text-muted" id="BillBoardGenre">Genre</small>
        </div>
        <div class="card-footer">
          <small class="text-muted" id="ReleaseDate">Release Date</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BillBoardMovie',
  methods: {
    goToBillBoardContent() {
      this.$router.push({
        name: 'BillBoardContent',
        params: {
          id: this.id,
        },
      });
    }
  },
}
</script>

<style>
div#BillBoardMovie {
  background-color: rgb(15, 23, 30);
  color: #19282f;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
}
</style>
