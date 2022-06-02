<template>
  <div class="searcher d-flex flex-column flex-md-row justify-content-between align-items-center row">

    <div class="d-flex align-items-center mb-4 col-12 col-lg-10">
      <span class="section-heading">Buscar : </span>

      <div>
        <div class="">
          <input id="search" class="field " @mouseup="removeElements" @keyup="filteredList"
                 type="text"
                 v-model="search"/>
        </div>
        <div class="content-searched bg-light d-flex flex-column align-items-center justify-content-between ">
          <ItemsForSearchMoviesList v-for="movies in this.moviesSearch" :key="movies" :movies="movies"
                                    v-on:changeItem="addToList"/>
        </div>
      </div>

    </div>
    <div class="col-12 col-lg-2">
      <input class="btn btn-outline-primary" value="Crear lista" type="submit">
    </div>
  </div>

  <div id="containerMovies" class="container my-4 container-contain-movies d-flex align-items-center justify-content-center flex-wrap">
    <p id="p2" class="text-center fs-6">La lista esta vacía, añade contenido!</p>
  </div>
</template>

<script>
import ItemSearched from "@/components/movies/movies-page/ItemSearched";
import ItemsForSearchMoviesList from "@/components/lists/ItemsForSearchMoviesList";

export default {
  name: "SearchMoviesForList",
  components: {ItemsForSearchMoviesList, ItemSearched},
  data() {
    return {
      moviesAll: [],
      search: "",
      moviesSearch: [],
      baseUrl: window.origin,
    }
  },

  beforeMount() {
    this.movies()
  },

  methods: {

    filteredList() {
      if (this.search) {
        this.moviesSearch = this.moviesAll.filter(movie => {
          return movie.title.toLowerCase().includes(this.search)
        })
        this.limitData(this.moviesSearch)
      } else {
        this.removeElements()
      }

    },

    async movies() {
      let promise = await fetch("http://filmfy-api.ddns.net/api/movies")
      let moviesData = await promise.json()
      this.moviesAll = moviesData
    },

    limitData(movieData) {
      const sliced = Object.fromEntries(
          Object.entries(movieData).slice(0, 6)
      )
      this.moviesSearch = sliced
    },

    removeElements() {
      this.moviesSearch = []
    },

    addToList(movie) {
      this.search = ""
      this.$emit("addToList", movie)
      this.removeElements()
      this.printMovie(movie)
    },

    printMovie(movie) {
      const element = document.getElementById('p2');
      element ? element.remove() : "";
      let containerMovies = document.getElementById("containerMovies")
      containerMovies.innerHTML += `
            <img style="width: 130px; border: 1px solid white; height: 200px; border-radius: 5px; margin-right: 10px; margin-top: 15px; margin-bottom: 15px" src="http://filmfy-api.ddns.net${movie.image}">
        `

    }
  }
}
</script>

<style scoped>

.searcher {
  display: flex;
  align-items: center;
}

.field {
  background-color: #2c3440;
  border: 1px solid #303840;
  border-radius: 5px 5px 0px 0px;
  box-sizing: border-box;
  color: white;
  font-size: 1.07692308rem;
  line-height: 1;
  margin: 0;
  padding: 9px 9px 8px;
  width: 30rem;
}

span {
  font-size: 1rem;
  margin-right: 10px;
  text-transform: uppercase;
}

@media (max-width: 600px) {
  span {
    display: none;
  }
  .field {
    width: 90vw;
  }
  .section-heading {
    display: none;
  }
}

.content-searched {
  width: 30rem;
  position: absolute;
}

.searcher {
  display: flex;
  align-items: center;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: #dcdada;
}

.container-contain-movies {
  border: 1px solid #2c3440;
  min-height: 200px;
  height: fit-content;
}


</style>