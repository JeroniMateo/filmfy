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
import DocumenariesHistory from "../../components/Items/watchContentGenres/Documentaries/DocumenariesHistory.vue";
import DocumenariesAction from "../../components/Items/watchContentGenres/Documentaries/DocumenariesAction.vue";
import DocumenariesRecomend from "../../components/Items/watchContentGenres/Documentaries/DocumenariesRecomend.vue";
import DocumentariesSport from "../../components/Items/watchContentGenres/Documentaries/DocumenariesSports.vue";
import DocumenariesTerror from "../../components/Items/watchContentGenres/Documentaries/DocumenariesTerror.vue";
import DocumentariesAnime from "../../components/Items/watchContentGenres/Documentaries/DocumentariesAnime.vue";
import DocumentariesComedy from "../../components/Items/watchContentGenres/Documentaries/DocumentariesComedy.vue";
import DocumentariesKids from "../../components/Items/watchContentGenres/Documentaries/DocumentariesKids.vue";
import DocumentariesPolice from "../../components/Items/watchContentGenres/Documentaries/DocumentariesPolice.vue";
import DocumentariesPopular from "../../components/Items/watchContentGenres/Documentaries/DocumentariesPopular.vue";
import DocumentariesRomantic from "../../components/Items/watchContentGenres/Documentaries/DocumentariesRomantic.vue";
import DocumentariesScienceFiction from "../../components/Items/watchContentGenres/Documentaries/DocumentariesScienceFiction.vue";
import DocumentariesThriller from "../../components/Items/watchContentGenres/Documentaries/DocumentariesThriller.vue";

export default {
  name: "Documentaries",
  components: {
    DocumenariesAction,
    DocumentariesHistory,
    DocumenariesRecomend,
    DocumentariesSport,
    DocumenariesTerror,
    DocumentariesAnime,
    DocumentariesComedy,
    DocumentariesKids,
    DocumentariesPolice,
    DocumentariesPopular,
    DocumentariesRomantic,
    DocumentariesScienceFiction,
    DocumentariesThriller,
  },
};
</script>

<style>
h2{
    color:rgb(29,168,226);
    background-color: rgb(15,23,30);
  }
</style>