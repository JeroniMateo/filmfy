<template>

  <div v-if="loaded" class="bg-black container-categories">

    <div v-if="category === 'suspense'" class="imageSuspense">
      <div class="container text-movie d-flex justify-content-end flex-column ">
        <span><strong>{{ title }}</strong></span>
      </div>
    </div>
    <div v-else-if="category === 'accion'" class="imageAccion">
      <div class="container text-movie d-flex justify-content-end flex-column ">
        <span><strong>{{ title }}</strong></span>
      </div>
    </div>
    <div v-else-if="category === 'terror'" class="imageTerror">
      <div class="container text-movie d-flex justify-content-end flex-column ">
        <span><strong>{{ title }}</strong></span>
      </div>
    </div>
    <div v-else-if="category === 'aventura'" class="imageAveentura">
      <div class="container text-movie d-flex justify-content-end flex-column ">
        <span><strong>{{ title }}</strong></span>
      </div>
    </div>
    <div v-else-if="category === 'ciencia ficcion'" class="imageCienciaFiccion">
      <div class="container text-movie d-flex justify-content-end flex-column ">
        <span><strong>{{ title }}</strong></span>
      </div>
    </div>
    <div v-else class="image">
      <div class="container text-movie d-flex justify-content-end flex-column ">
        <span><strong>{{ title }}</strong></span>
      </div>
    </div>

    <div class="container">
      <div class="row flex-column flex-lg-row align-items-center">
        <Filter class="col-12 col-lg-6 my-2 justify-content-center justify-content-lg-start"/>
        <Searcher class="col-12 col-lg-6 my-2 justify-content-center justify-content-lg-end"/>
      </div>
    </div>

    <div class="container justify-content-between" style="margin-top: 110px">
      <div class="row">
        <MovieCardGeneral v-for="movie of this.moviesCategory" :key="movie" :movie="movie"/>
      </div>
    </div>
  </div>

  <div v-else class="bg-black container-categories">
    <div class="container py-5">
      <span>{{ title }}</span>
    </div>
    <div id="contenedor">
      <div class="loader" id="loader">Loading...</div>
    </div>
  </div>


</template>

<script>
import MovieCardGeneral from "@/components/movies/movie-card/MovieCardGeneral";
import Searcher from "@/components/movies/movies-page/Searcher";
import Filter from "@/components/movies/detailed-movie-page/Filter";

export default {
  name: "MovieCategories",
  components: {Filter, Searcher, MovieCardGeneral},
  data() {
    return {
      category: this.$route.params.category,
      moviesCategory: [],
      title: "",
      loaded: false
    }

  },

  beforeMount() {
    this.fetchMoviesCategory()
  },

  methods: {
    async fetchMoviesCategory() {
      const promiseMovies = await fetch(`http://filmfy-api.ddns.net/api/movies-categories/${this.category}`)
      const moviesCategoryData = await promiseMovies.json()
      this.moviesCategory = moviesCategoryData
      this.printTitle()
    },

    printTitle() {
      this.category = this.category.replace("-", " ")
      this.title = `Se encontraron ${this.moviesCategory.length} películas del genero ${this.category}`
      this.loaded = true
    }
  }

}
</script>

<style scoped>

.container-categories {
  min-height: 70vh;
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
  height: 73vh;
}

.imageSuspense {
  background-image: linear-gradient(to bottom,
  rgba(0, 0, 0, 0),
  rgba(0, 0, 0, 100)),
  url("../../assets/img/MoviesIMG/silencio-de-los-corderos.jpg");
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 40%;
  width: 100%;
  height: 75vh;
}

.imageAccion {
  background-image: linear-gradient(to bottom,
  rgba(0, 0, 0, 0),
  rgba(0, 0, 0, 100)),
  url("../../assets/img/MoviesIMG/terminator.jpg");
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 40%;
  width: 100%;
  height: 75vh;
}

.imageTerror {
  background-image: linear-gradient(to bottom,
  rgba(0, 0, 0, 0),
  rgba(0, 0, 0, 100)),
  url("../../assets/img/MoviesIMG/alien.jpg");
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 40%;
  width: 100%;
  height: 75vh;
}

.imageAveentura {
  background-image: linear-gradient(to bottom,
  rgba(0, 0, 0, 0),
  rgba(0, 0, 0, 100)),
  url("../../assets/img/MoviesIMG/indiana-Jones.jpg");
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 60%;
  width: 100%;
  height: 77vh;
}

.imageCienciaFiccion {
  background-image: linear-gradient(to bottom,
  rgba(0, 0, 0, 0),
  rgba(0, 0, 0, 100)),
  url("../../assets/img/MoviesIMG/interstellar.jpg");
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 40%;
  width: 100%;
  height: 74vh;
}

</style>