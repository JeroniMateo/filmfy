<template>
 <div class="container-fluid">
    <div id="watchContentSeries">
    <div class="action">
      <h3>Action</h3>
      <SeriesAction />
    </div>
    <div class="adventure">
      <h3>Adventure</h3>
      <SeriesAdventure />
    </div>
    <div class="anime">
      <h3>Anime</h3>
      <SeriesAnime />
    </div>
    <div class="comedy">
      <h3>Comedy</h3>
      <SeriesComedy />
    </div>
    <div class="kids">
      <h3>Kids</h3>
      <SeriesKids />
    </div>
    <div class="police">
      <h3>Police</h3>
      <SeriesPolice />
    </div>
    <div class="popular">
      <h3>Popular</h3>
      <SeriesPopular />
    </div>
    <div class="recomend">
      <h3>Recomend</h3>
      <SeriesRecomend />
    </div>
    <div class="romantic">
      <h3>Romantic</h3>
      <SeriesRomantic />
    </div>
    <div class="scienceFiction">
      <h3>Science Fiction</h3>
      <SeriesScienceFiction />
    </div>
    <div class="terror">
      <h3>Terror</h3>
      <SeriesTerror />
    </div>
    <div class="thriller">
      <h3>Thriller</h3>
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

<style scoped>
h3 {
  color: rgb(29, 168, 226);
  width: 50vh;
  background-color: rgb(15, 23, 30);
  font-size: 6vh;
}
</style>