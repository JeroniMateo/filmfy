<template>
  <div id="WatchingMovie" class="container">
    <div class="movieInfo">
      <h1 id="Movie Title"></h1>
    </div>
    <div class="container">
      <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4 movieImage">
            <img class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div class="MainInfo">
                <ul>
                  <li class="title"></li>
                  <li class="year"></li>
                  <li class="genre"></li>
                  <li class="director"></li>
                  <li class="actors"></li>
                  <li class="country"></li>
                  <li class="language"></li>
                  <li class="runtime"></li>
                  <li class="rating"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Sinopsis"></div>
      <div class="Valoration"></div>
      <!--Trailer play automaticaly-->
      <div class="Trailer"><TrailerVideo/></div>
      <div id="Opinions">
        <div class="Opinion">
          <div class="OpinionHeader">
            <div class="OpinionUser">
              <div class="OpinionUserImage"></div>
              <div class="OpinionUserName"></div>
            </div>
            <div class="OpinionDate"></div>
          </div>
          <div class="OpinionText"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TrailerVideo from "@/components/movies/Trailers/TrailerVideo.vue";
export default {
  name: 'MovieContent',
  components: {
    TrailerVideo,
}
}
</script>

<style></style>
