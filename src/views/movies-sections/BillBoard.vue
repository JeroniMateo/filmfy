<template>
  <div id="Cartelera">
    <div id="MainBillBoard">
      <div class="wrapper" v-on:click.right="ItemOpctions">
        <section id="section1TopMovies">
          <a href="#section3TopMovies" class="arrow__btn">‹</a>
          <a href="#section2TopMovies" class="arrow__btn">›</a>
        </section>
        <section id="section2TopMovies">
          <a href="#section1TopMovies" class="arrow__btn">‹</a>
          <a href="#section3TopMovies" class="arrow__btn">›</a>
        </section>
        <section id="section3DAction">
          <a href="#section2TopMovies" class="arrow__btn">‹</a>

          <a href="#section1TopMovies" class="arrow__btn">›</a>
        </section>
      </div>
    </div>
    <div class="BillBoardMovies">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted" id="MovieGenre">Genre</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted" id="MovieGenre">Genre</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted" id="MovieGenre">Genre</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopMoviesBillBoard from "@/components/movies/Cartelera/TopMoviesBillBoard.vue";
export default {
  name: "BillBoard",
  components:{
      TopMoviesBillBoard,
  }
};
</script>

<style>
</style>