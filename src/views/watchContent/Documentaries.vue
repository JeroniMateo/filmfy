<template>
  <div id="watchContentDocumentaries">
    <div class="action">
      <h2>Action</h2>
      <DocumentariesAction />
    </div>
    <div class="history">
      <h2>History</h2>
      <DocumentariesHistory />
    </div>
    <div class="recomend">
      <h2>Recomend</h2>
      <DocumentariesRecomend />
    </div>
    <div class="sport">
      <h2>Sport</h2>
      <DocumentariesSport />
    </div>
    <div class="terror">
      <h2>Terror</h2>
      <DocumentariesTerror />
    </div>
    <div class="anime">
      <h2>Anime</h2>
      <DocumentariesAnime />
    </div>
    <div class="comedy">
      <h2>Comedy</h2>
      <DocumentariesComedy />
    </div>
    <div class="kids">
      <h2>Kids</h2>
      <DocumentariesKids />
    </div>
    <div class="police">
      <h2>Police</h2>
      <DocumentariesPolice />
    </div>
    <div class="popular">
      <h2>Popular</h2>
      <DocumentariesPopular />
    </div>
    <div class="romantic">
      <h2>Romantic</h2>
      <DocumentariesRomantic />
    </div>
    <div class="scienceFiction">
      <h2>Science Fiction</h2>
      <DocumentariesScienceFiction />
    </div>
    <div class="thriller">
      <h2>Thriller</h2>
      <DocumentariesThriller />
    </div>
  </div>
</template>

<script>
import DocumentariesHistory from "../../components/Items/watchContentGenres/Documentaries/DocumentariesHistory.vue";
import DocumentariesAction from "../../components/Items/watchContentGenres/Documentaries/DocumentariesAction.vue";
import DocumentariesRecomend from "../../components/Items/watchContentGenres/Documentaries/DocumentariesRecomend.vue";
import DocumentariesSports from "../../components/Items/watchContentGenres/Documentaries/DocumentariesSports.vue";
import DocumentariesTerror from "../../components/Items/watchContentGenres/Documentaries/DocumentariesTerror.vue";
import DocumentariesAnime from "../../components/Items/watchContentGenres/Documentaries/DocumentariesAnime.vue";
import DocumentariesComedy from "../../components/Items/watchContentGenres/Documentaries/DocumentariesComedy.vue";
import DocumentariesKids from "../../components/Items/watchContentGenres/Documentaries/DocumentariesKids.vue";
import DocumentariesPolice from "../../components/Items/watchContentGenres/Documentaries/DocumentariesPolice.vue";
import DocumentariesPopular from "../../components/Items/watchContentGenres/Documentaries/DocumentariesPopular.vue";
import DocumentariesRomantic from "../../components/Items/watchContentGenres/Documentaries/DocumentariesRomantic.vue";
import DocumentariesScienceFiction from "../../components/Items/watchContentGenres/Documentaries/DocumentariesScienceFiction.vue";
import documentariesThriller from "../../components/Items/watchContentGenres/Documentaries/DocumentariesThriller.vue";

export default {
  name: "Documentaries",
  components: {
    DocumentariesAction,
    DocumentariesHistory,
    DocumentariesRecomend,
    DocumentariesSports,
    DocumentariesTerror,
    DocumentariesAnime,
    DocumentariesComedy,
    DocumentariesKids,
    DocumentariesPolice,
    DocumentariesPopular,
    DocumentariesRomantic,
    DocumentariesScienceFiction,
    documentariesThriller,
  },
};
</script>

<style scoped>
h2 {
  color: rgb(29, 168, 226);
  background-color: rgb(15, 23, 30);
}
</style>