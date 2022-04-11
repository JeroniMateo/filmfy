<template>
  <div id="watchContentDocumentaries">
    <div class="action">
    <h2>Action</h2>
      <DocumenariesAction />
    </div>
    <div class="history">
      <h2>History</h2>
      <DocumenariesHistory />
    </div>
    <div class="recomend">
      <h2>Recomend</h2>
      <DocumenariesRecomend />
    </div>
    <div class="sport">
      <h2>Sport</h2>
      <DocumenariesSport />
    </div>
    <div class="terror">
      <h2>Terror</h2>
      <DocumenariesTerror />
    </div>
    <div class="anime">
      <h2>Anime</h2>
      <DocumenariesAnime />
    </div>
    <div class="comedy">
      <h2>Comedy</h2>
      <DocumenariesComedy />
    </div>
    <div class="kids">
      <h2>Kids</h2>
      <DocumenariesKids />
    </div>
    <div class="police">
      <h2>Police</h2>
      <DocumenariesPolice />
    </div>
    <div class="popular">
      <h2>Popular</h2>
      <DocumenariesPopular />
    </div>
    <div class="romantic">
      <h2>Romantic</h2>
      <DocumenariesRomantic />
    </div>
    <div class="scienceFiction">
      <h2>Science Fiction</h2>
      <DocumenariesScienceFiction />
    </div>
    <div class="thriller">
      <h2>Thriller</h2>
      <DocumenariesThriller />
    </div>
  </div>
</template>

<script>
import DocumenariesAction from "../../js/components/watchContentGenres/Documentaries/DocumenariesAction.vue";
import DocumentariesHistoryVue from "../../js/components/watchContentGenres/Documentaries/DocumentariesHistory.vue";
import DocumenariesRecomendVue from "../../js/components/watchContentGenres/Documentaries/DocumenariesRecomend.vue";
import DocumentariesSportVue from "../../js/components/watchContentGenres/Documentaries/DocumentariesSport.vue";
import DocumenariesTerrorVue from "../../js/components/watchContentGenres/Documentaries/DocumenariesTerror.vue";
import DocumentariesAnimeVue from "../../js/components/watchContentGenres/Documentaries/DocumentariesAnime.vue";
import DocumentariesComedyVue from "../../js/components/watchContentGenres/Documentaries/DocumentariesComedy.vue";
import DocumentariesKidsVue from "../../js/components/watchContentGenres/Documentaries/DocumentariesKids.vue";
import DocumentariesPoliceVue from "../../js/components/watchContentGenres/Documentaries/DocumentariesPolice.vue";
import DocumentariesPopularVue from "../../js/components/watchContentGenres/Documentaries/DocumentariesPopular.vue";
import DocumentariesRomanticVue from "../../js/components/watchContentGenres/Documentaries/DocumentariesRomantic.vue";
import DocumentariesScienceFictionVue from "../../js/components/watchContentGenres/Documentaries/DocumentariesScienceFiction.vue";
import DocumentariesThrillerVue from "../../js/components/watchContentGenres/Documentaries/DocumentariesThriller.vue";

export default {
  components: {
    DocumenariesAction,
    DocumentariesHistoryVue,
    DocumenariesRecomendVue,
    DocumentariesSportVue,
    DocumenariesTerrorVue,
    DocumentariesAnimeVue,
    DocumentariesComedyVue,
    DocumentariesKidsVue,
    DocumentariesPoliceVue,
    DocumentariesPopularVue,
    DocumentariesRomanticVue,
    DocumentariesScienceFictionVue,
    DocumentariesThrillerVue,
  },
};
</script>

<style>
h2{
    color:rgb(29,168,226);
    background-color: rgb(15,23,30);
  }
</style>