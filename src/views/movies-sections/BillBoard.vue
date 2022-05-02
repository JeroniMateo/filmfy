<template>
    <div id="Cartelera" class="BillBoardMovies">
        <h2>Cartelera </h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" id="CarteleraMovie">
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
        <div class="col" id="CarteleraMovie">
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
        <div class="col" id="CarteleraMovie">
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
</template>

<script>
import TopMoviesBillBoard from "@/components/movies/Cartelera/BillBoardMovie.vue";
export default {
  name: "BillBoard",
  components:{
      TopMoviesBillBoard,
  }
};
</script>

<style>
</style>