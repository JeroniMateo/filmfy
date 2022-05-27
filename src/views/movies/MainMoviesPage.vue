<template>

  <div class="all">

    <div class="image">
      <div class="container text-movie d-flex justify-content-end flex-column ">
        <span><strong>Encuentra las mejores películas</strong></span>
      </div>
    </div>

    <FilterBrowser/>
    <RecentMovies/>
    <BestMovies/>
  </div>

</template>

<script>
import FilterBrowser from "@/components/movies/detailed-movie-page/FilterBrowser";
import RecentMovies from "@/components/movies/movies-page/RecentMovies";
import BestMovies from "@/components/movies/movies-page/BestMovies";

export default {
  name: "MainMoviesPage",
  components: {BestMovies, RecentMovies, FilterBrowser,}
}
</script>

<style scoped>

.text-movie {
  height: 55vh;
}

.image {
  background-image: linear-gradient(to bottom,
  rgba(0, 0, 0, 0),
  rgba(0, 0, 0, 100)), url("https://wallpapercave.com/wp/sepNm9t.jpg");
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 40%;
  width: 100%;
  height: 60vh;
}

.all {
  background-color: black;
}

span {
  font-size: 1.5rem;
}


</style>