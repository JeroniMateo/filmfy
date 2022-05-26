<template>
  <div class="searcher">
    <span class="section-heading">Buscar : </span>
    <div>
      <input id="searcher" type="text" @change="" @keyup="searchMovies"
             class="field field-large ac_input"
             data-url="/s/autocompletefilm"
             autocomplete="off">
      <div class="content-searched bg-light d-flex flex-column align-items-center justify-content-between wrapper">
        <div class="div-movie-searcher">
          <div class="row pt-4 ms-1 me-1 pb-4 d-flex align-items-start div-movie-searched" v-for="movies of this.moviesSearch"
               :key="movies">
            <img class="col-5" v-bind:src="'http://filmfy-api.ddns.net/' + movies.image">
            <div class="d-flex flex-column align-items-start col-7 justify-content-between content-text-year">
              <a class="text-start" v-bind:href="this.baseUrl + '/movies/' + movies.id">{{ movies.title }}</a>
              <span>{{ movies.release_date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Searcher",

  data() {
    return {
      moviesSearch: [],
      baseUrl : window.origin
    }
  },

  methods: {

    async searchMovies() {
      let inputSearch = document.getElementById("searcher")

      if (inputSearch.value !== "") {
        let promise = await fetch("http://filmfy-api.ddns.net/api/find-movies", {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({
            "parameter": inputSearch.value
          })
        })

        let movieData = await promise.json()
        this.limitData(movieData)
      } else {
        this.moviesSearch = []
      }

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
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #456;
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

.content-searched {
  width: 20rem;
  position: absolute;
}

.div-movie-searcher {
  background-color: #445566;
}

.div-movie-searched {
  box-sizing: border-box;
  border-top: 1px solid #242424;
  border-bottom: 1px solid #242424;
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