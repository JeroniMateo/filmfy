<template>
  <div class="searcher">
    <span class="section-heading">Buscar : </span>
    <div>
      <div class="search-wrapper ">
        <input class="field field-large ac_input" @mouseup="removeElements" @keyup="filteredList" type="text" v-model="search" />
      </div>
      <div class="content-searched bg-light d-flex flex-column align-items-center justify-content-between wrapper">
        <ItemsForSearchMoviesList v-for="movies in this.moviesSearch" :key="movies" :movies="movies"/>
      </div>
    </div>
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
      moviesAll : [],
      search: "",
      moviesSearch: [],
      baseUrl: window.origin
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
      }else {
        this.removeElements()
      }

    },

    async movies() {
      let promise = await fetch("http://filmfy-api.ddns.net/api/movies")
      let moviesData = await promise.json()
      this.moviesAll = moviesData
    },

    expect() {
      let inputSearch = document.getElementById("searcher")

      if (inputSearch.value === "") {
        this.moviesSearch = []
      }
    },

    limitData(movieData) {
      const sliced = Object.fromEntries(
          Object.entries(movieData).slice(0, 3)
      )
      this.moviesSearch = sliced
    },

    removeElements() {
      this.moviesSearch = []
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
  width: 20rem;
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
}

.content-searched {
  width: 20rem;
  position: absolute;
}

.div-movie-searcher {
  z-index: 1;
  background-color: rgb(68,85,102);
}

.searcher{
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

.content-text-year {
  height: 130px;
}
</style>