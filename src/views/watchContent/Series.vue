<template>
 <div class="container">
    <div id="watchContentSeries">
    <div class="action">
      <h2>Action</h2>
      <SeriesAction />
    </div>
    <div class="adventure">
      <h2>Adventure</h2>
      <SeriesAdventure />
    </div>
    <div class="anime">
      <h2>Anime</h2>
      <SeriesAnime />
    </div>
    <div class="comedy">
      <h2>Comedy</h2>
      <SeriesComedy />
    </div>
    <div class="kids">
      <h2>Kids</h2>
      <SeriesKids />
    </div>
    <div class="police">
      <h2>Police</h2>
      <SeriesPolice />
    </div>
    <div class="popular">
      <h2>Popular</h2>
      <SeriesPopular />
    </div>
    <div class="recomend">
      <h2>Recomend</h2>
      <SeriesRecomend />
    </div>
    <div class="romantic">
      <h2>Romantic</h2>
      <SeriesRomantic />
    </div>
    <div class="scienceFiction">
      <h2>Science Fiction</h2>
      <SeriesScienceFiction />
    </div>
    <div class="terror">
      <h2>Terror</h2>
      <SeriesTerror />
    </div>
    <div class="thriller">
      <h2>Thriller</h2>
      <SeriesThriller />
    </div>
  </div>
 </div>
</template>

<script>
import SeriesAction from "../../js/components/watchContentGenres/Series/SeriesAction.vue";
import SeriesAdventureVue from "../../js/components/watchContentGenres/Series/SeriesAdventure.vue";
import SeriesAnimeVue from "../../js/components/watchContentGenres/Series/SeriesAnime.vue";
import SeriesComedyVue from "../../js/components/watchContentGenres/Series/SeriesComedy.vue";
import SeriesKidsVue from "../../js/components/watchContentGenres/Series/SeriesKids.vue";
import SeriesPoliceVue from "../../js/components/watchContentGenres/Series/SeriesPolice.vue";
import SeriesPopularVue from "../../js/components/watchContentGenres/Series/SeriesPopular.vue";
import SeriesRecomendVue from "../../js/components/watchContentGenres/Series/SeriesRecomend.vue";
import SeriesRomanticVue from "../../js/components/watchContentGenres/Series/SeriesRomantic.vue";
import SeriesScienceFictionVue from "../../js/components/watchContentGenres/Series/SeriesScienceFiction.vue";
import SeriesTerrorVue from "../../js/components/watchContentGenres/Series/SeriesTerror.vue";
import SeriesThrillerVue from "../../js/components/watchContentGenres/Series/SeriesThriller.vue";
export default {
  name: "Series",
  components: {
    SeriesAction,
    SeriesAdventureVue,
    SeriesAnimeVue,
    SeriesComedyVue,
    SeriesKidsVue,
    SeriesPoliceVue,
    SeriesPopularVue,
    SeriesRecomendVue,
    SeriesRomanticVue,
    SeriesScienceFictionVue,
    SeriesTerrorVue,
    SeriesThrillerVue,
  },
};
</script>

<style>
h2{
    color:rgb(29,168,226);
    background-color: rgb(15,23,30);
  }
</style>