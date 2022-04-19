<template>
  <div class="container-fluid">
    <div id="watchContentMovies">
      <div class="action">
        <h3>Action</h3>
        <MoviesAction />
      </div>
      <div class="adventure">
        <h3>Adventure</h3>
        <MoviesAdventure />
      </div>
      <div class="anime">
        <h3>Anime</h3>
        <MoviesAnime />
      </div>
      <div class="comedy">
        <h3>Comedy</h3>
        <MoviesComedy />
      </div>
      <div class="kids">
        <h3>Kids</h3>
        <MoviesKids />
      </div>
      <div class="police">
        <h3>Police</h3>
        <MoviesPolice />
      </div>
      <div class="popular">
        <h3>Popular</h3>
        <MoviesPopular />
      </div>
      <div class="recomend">
        <h3>Recomend</h3>
        <MoviesRecomend />
      </div>
      <div class="romantic">
        <h3>Romantic</h3>
        <MoviesRomantic />
      </div>
      <div class="scienceFiction">
        <h3>Science Fiction</h3>
        <MoviesScienceFiction />
      </div>
      <div class="terror">
        <h3>Terror</h3>
        <MoviesTerror />
      </div>
      <div class="thriller">
        <h3>Thriller</h3>
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
h3 {
  color: rgb(29, 168, 226);
  width: 50vh;
  background-color: rgb(15, 23, 30);
  font-size: 6vh;
}
</style>