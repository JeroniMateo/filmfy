<template>
  <div class="container">
    <div id="watchContentMovies">
      <div class="action">
        <h2>Action</h2>
        <MoviesAction />
      </div>
      <div class="adventure">
        <h2>Adventure</h2>
        <MoviesAdventure />
      </div>
      <div class="anime">
        <h2>Anime</h2>
        <MoviesAnime />
      </div>
      <div class="comedy">
        <h2>Comedy</h2>
        <MoviesComedy />
      </div>
      <div class="kids">
        <h2>Kids</h2>
        <MoviesKids />
      </div>
      <div class="police">
        <h2>Police</h2>
        <MoviesPolice />
      </div>
      <div class="popular">
        <h2>Popular</h2>
        <MoviesPopular />
      </div>
      <div class="recomend">
        <h2>Recomend</h2>
        <MoviesRecomend />
      </div>
      <div class="romantic">
        <h2>Romantic</h2>
        <MoviesRomantic />
      </div>
      <div class="scienceFiction">
        <h2>Science Fiction</h2>
        <MoviesScienceFiction />
      </div>
      <div class="terror">
        <h2>Terror</h2>
        <MoviesTerror />
      </div>
      <div class="thriller">
        <h2>Thriller</h2>
        <MoviesThriller />
      </div>
    </div>
  </div>
</template>

<script>
import MoviesAction from "../../components/Items/watchContentGenres/Movies/MoviesAction.vue";
import MoviesAdventure from "../../components/Items/watchContentGenres/Movies/MoviesAdventure.vue";
import MoviesAnime from "../../components/Items/watchContentGenres/Movies/MoviesAnime.vue";
import MoviesComedy from "../../components/Items/watchContentGenres/Movies/MoviesComedy.vue";
import MoviesKids from "../../components/Items/watchContentGenres/Movies/MoviesKids.vue";
import MoviesPolice from "../../components/Items/watchContentGenres/Movies/MoviesPolice.vue";
import MoviesPopular from "../../components/Items/watchContentGenres/Movies/MoviesPopular.vue";
import MoviesRecomend from "../../components/Items/watchContentGenres/Movies/MoviesRecomend.vue";
import MoviesRomantic from "../../components/Items/watchContentGenres/Movies/MoviesRomantic.vue";
import MoviesScienceFiction from "../../components/Items/watchContentGenres/Movies/MoviesScienceFiction.vue";
import MoviesTerror from "../../components/Items/watchContentGenres/Movies/MoviesTerror.vue";
import MoviesThriller from "../../components/Items/watchContentGenres/Movies/MoviesThriller.vue";

export default {
  name: "Movies",
  components: {
    MoviesAction,
    MoviesAdventure,
    MoviesAnime,
    MoviesComedy,
    MoviesKids,
    MoviesPolice,
    MoviesPopular,
    MoviesRecomend,
    MoviesRomantic,
    MoviesScienceFiction,
    MoviesTerror,
    MoviesThriller,
  },
};
</script>

<style scoped>
h2 {
  color: rgb(29, 168, 226);
  background-color: rgb(15, 23, 30);
}
</style>