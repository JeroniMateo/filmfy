<template>
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
</template>

<script>
import MoviesAction from "../../js/components/watchContentGenres/Movies/MoviesAction.vue"
import MoviesAdventureVue from "../../js/components/watchContentGenres/Movies/MoviesAdventure.vue"
import MoviesAnimeVue from "../../js/components/watchContentGenres/Movies/MoviesAnime.vue"
import MoviesComedyVue from "../../js/components/watchContentGenres/Movies/MoviesComedy.vue"
import MoviesKidsVue from "../../js/components/watchContentGenres/Movies/MoviesKids.vue"
import MoviesPoliceVue from "../../js/components/watchContentGenres/Movies/MoviesPolice.vue"
import MoviesPopularVue from "../../js/components/watchContentGenres/Movies/MoviesPopular.vue"
import MoviesRecomendVue from "../../js/components/watchContentGenres/Movies/MoviesRecomend.vue"
import MoviesRomanticVue from "../../js/components/watchContentGenres/Movies/MoviesRomantic.vue"
import MoviesScienceFictionVue from "../../js/components/watchContentGenres/Movies/MoviesScienceFiction.vue"
import MoviesTerrorVue from "../../js/components/watchContentGenres/Movies/MoviesTerror.vue"
import MoviesThrillerVue from "../../js/components/watchContentGenres/Movies/MoviesThriller.vue"

export default {
    components:{
        MoviesAction,
        MoviesAdventureVue,
        MoviesAnimeVue,
        MoviesComedyVue,
        MoviesKidsVue,
        MoviesPoliceVue,
        MoviesPopularVue,
        MoviesRecomendVue,
        MoviesRomanticVue,
        MoviesScienceFictionVue,
        MoviesTerrorVue,
        MoviesThrillerVue
    },
    
}
</script>

<style>
  h2{
    color:rgb(29,168,226);
    background-color: rgb(15,23,30);
  }
</style>