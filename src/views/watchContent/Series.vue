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
import SeriesAction from "../../components/Items/watchContentGenres/Series/SeriesAction.vue";
import SeriesAdventure from "../../components/Items/watchContentGenres/Series/SeriesAdventure.vue";
import SeriesAnime from "../../components/Items/watchContentGenres/Series/SeriesAnime.vue";
import SeriesComedy from "../../components/Items/watchContentGenres/Series/SeriesComedy.vue";
import SeriesKids from "../../components/Items/watchContentGenres/Series/SeriesKids.vue";
import SeriesPolice from "../../components/Items/watchContentGenres/Series/SeriesPolice.vue";
import SeriesPopular from "../../components/Items/watchContentGenres/Series/SeriesPopular.vue";
import SeriesRecomend from "../../components/Items/watchContentGenres/Series/SeriesRecomend.vue";
import SeriesRomantic from "../../components/Items/watchContentGenres/Series/SeriesRomantic.vue";
import SeriesScienceFiction from "../../components/Items/watchContentGenres/Series/SeriesScienceFiction.vue";
import SeriesTerror from "../../components/Items/watchContentGenres/Series/SeriesTerror.vue";
import SeriesThriller from "../../components/Items/watchContentGenres/Series/SeriesThriller.vue";
export default {
  name: "Series",
  components: {
    SeriesAction,
    SeriesAdventure,
    SeriesAnime,
    SeriesComedy,
    SeriesKids,
    SeriesPolice,
    SeriesPopular,
    SeriesRecomend,
    SeriesRomantic,
    SeriesScienceFiction,
    SeriesTerror,
    SeriesThriller,
  },
};
</script>

<style>
h2{
    color:rgb(29,168,226);
    background-color: rgb(15,23,30);
  }
</style>