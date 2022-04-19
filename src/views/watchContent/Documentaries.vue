<template>
  <div class="container-fluid">
    <div id="watchContentDocumentaries">
      <div class="action">
        <h3>Action</h3>
        <DocumentariesAction />
      </div>
      <div class="history">
        <h3>History</h3>
        <DocumentariesHistory />
      </div>
      <div class="recomend">
        <h3>Recomend</h3>
        <DocumentariesRecomend />
      </div>
      <div class="sport">
        <h3>Sport</h3>
        <DocumentariesSport />
      </div>
      <div class="terror">
        <h3>Terror</h3>
        <DocumentariesTerror />
      </div>
      <div class="anime">
        <h3>Anime</h3>
        <DocumentariesAnime />
      </div>
      <div class="comedy">
        <h3>Comedy</h3>
        <DocumentariesComedy />
      </div>
      <div class="kids">
        <h3>Kids</h3>
        <DocumentariesKids />
      </div>
      <div class="police">
        <h3>Police</h3>
        <DocumentariesPolice />
      </div>
      <div class="popular">
        <h3>Popular</h3>
        <DocumentariesPopular />
      </div>
      <div class="romantic">
        <h3>Romantic</h3>
        <DocumentariesRomantic />
      </div>
      <div class="scienceFiction">
        <h3>Science Fiction</h3>
        <DocumentariesScienceFiction />
      </div>
      <div class="thriller">
        <h3>Thriller</h3>
        <DocumentariesThriller />
      </div>
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
h3 {
  color: rgb(29, 168, 226);
  width: 50vh;
  background-color: rgb(15, 23, 30);
  font-size: 6vh;
}
</style>