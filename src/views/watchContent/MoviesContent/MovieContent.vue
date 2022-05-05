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
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"  id="title"></li>
                  <li class="list-group-item"  id="year"></li>
                  <li class="list-group-item"  id="genre"></li>
                  <li class="list-group-item"  id="director"></li>
                  <li class="list-group-item"  id="actors"></li>
                  <li class="list-group-item"  id="country"></li>
                  <li class="list-group-item"  id="language"></li>
                  <li class="list-group-item"  id="runtime"></li>
                  <li class="list-group-item"  id="rating"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Sinopsis"></div>
      <div class="Valoration"></div>
      <!--Trailer play automaticaly-->
      <div  id="Trailer"><TrailerVideo/></div>
      <div id="Opinions">
        <div id="Opinion">
          <div id="OpinionHeader">
            <div id="OpinionUser">
              <div id="OpinionUserImage"></div>
              <div id="OpinionUserName"></div>
            </div>
            <div id="OpinionDate"></div>
          </div>
          <div id="OpinionText"></div>
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
