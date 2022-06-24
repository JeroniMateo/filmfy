<template>

  <div class="all">

    <div class="image">
      <div class="container text-movie d-flex justify-content-end flex-column ">
        <span><strong>Encuentra las mejores películas</strong></span>
      </div>
    </div>

    <div class="container searcher">
      <div class="row flex-column flex-lg-row align-items-center">
        <Filter class="col-12 col-lg-6 my-2 justify-content-center justify-content-lg-start"/>
        <Searcher class="col-12 col-lg-6 my-2 justify-content-center justify-content-lg-end"/>
      </div>
    </div>
    <RecentMovies/>
    <BestMovies/>
    <UpcommingMovies/>
    <MoviesMoreLists/>
  </div>

</template>

<script>
import RecentMovies from "@/components/movies/movies-page/RecentMovies";
import BestMovies from "@/components/movies/movies-page/BestMovies";
import Filter from "@/components/movies/detailed-movie-page/Filter";
import Searcher from "@/components/movies/movies-page/Searcher";
import MoviesMoreLists from "@/components/movies/movies-page/MoviesMoreLists";
import UpcommingMovies from "@/components/movies/movies-page/UpcommingMovies";

export default {
  name: "MainMoviesPage",
  components: {UpcommingMovies, MoviesMoreLists, Searcher, Filter, BestMovies, RecentMovies}
}
</script>

<style scoped>

.searcher {
  margin-bottom: 150px;
}

.text-movie {
  height: 65vh;
}

.image {
  background-image: linear-gradient(to bottom,
  rgba(0, 0, 0, 0),
  rgba(0, 0, 0, 100)), url("../../assets/img/MoviesIMG/batman.jpg");
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 40%;
  width: 100%;
  height: 75vh;
}

@media only screen and (max-width: 767px) {
  .image {
    height: 68vh;
  }

  .searcher {
    margin-bottom: 80px;
  }
}

.all {
  background-color: black;
}

span {
  font-size: 1.5rem;
}


</style>