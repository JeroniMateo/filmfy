<template>
  <main>
  <div class="list-details container bg-bgmain">

    <div class="initial">
      <div class="user">
        <img src="#" alt=""/>
        <span>Lista de Toni García</span>
      </div>

      <div class="data">
        <span>Actualizada el 7 de enero </span>
        <span>27 películas</span>
      </div>
    </div>

    <div class="title-description">
      <div>
        <h1>{{ list.title }}</h1>
      </div>
      <div>
        <span>{{ list.description }}</span>
      </div>
    </div>

    <div class="tags">
      <div class="p-3 d-flex align-items-center justify-content-center" id="categories" data-v-32954910="">
        <p style="border: 1px solid white; border-radius: 20px; padding: 4px 12px 4px 12px; margin-bottom: 0px; margin-right: 10px">
        Animación
        </p>
        <p style="border: 1px solid white; border-radius: 20px; padding: 4px 12px 4px 12px; margin-bottom: 0px; margin-right: 10px">
          Aventura
        </p>
        <p style="border: 1px solid white; border-radius: 20px; padding: 4px 12px 4px 12px; margin-bottom: 0px; margin-right: 10px">
          Familia</p>
      </div>
    </div>

    <div class="col-12 col-md-6 col-lg-2 d-flex align-items-center justify-content-center justify-content-lg-start order-lg-last flex-column p-0 my-3">
      <AsideDetailedList :list="this.list"/>
    </div>

  </div>
  <div class="movies-container container">
      <ul class="d-flex flex-wrap justify-content-center">
        <div v-for="movie in list.movies">
          <div :id="movie.id" class="d-flex flex-column align-items-center" style="visibility: hidden">
            <span class="frame-title">{{ movie.title }}</span>
          </div>
          <li @mouseout="hideMovieTitle(movie.id)" @mouseover="displayMovieTitle(movie.id)">
            <div class="m-2">
              <a :href="baseURL + '/movies/' + movie.id"><img :src="'http://filmfy-api.ddns.net' + movie.image" :alt="movie.title"/></a>
            </div>
          </li>
        </div>
        <li class="m-2 col-md-3 col-sm-3 col-xs-3">&nbsp;</li>
      </ul>
    </div>
  </main>
</template>

<script>
import AsideDetailedList from "@/components/lists/AsideDetailedList";

export default {
  name: "DetailedListPage",
  components: {
    AsideDetailedList
  },
  data() {
    return {
      baseURL: window.origin,
      listId: this.$route.params.list,
      list: [],
    }
  },

  methods: {
    async fetchList() {
      const promiseList = await fetch(`http://filmfy-api.ddns.net/api/lists/${this.listId}`)
      this.list = await promiseList.json()
      console.log(this.list)
    },
    displayMovieTitle(id) {
      let element = document.getElementById(id)
      element.style.visibility = "visible"

    },

    hideMovieTitle(id) {
      let element = document.getElementById(id)
      element.style.visibility = "hidden"
    }
  },

  beforeMount() {
    this.fetchList()
  },
}

</script>

<style scoped>

* {
  background-color: black;
}

ul > div > li > div > a > img {
  border-radius: 7px;
}

ul, ol {
  list-style: none;
}

.frame-title {
  border-radius: 5px;
  background-color: #283038;
  color: floralwhite;
  padding: 10px;
  font-size: 13px;
  width: max-content;
}

.frame-title-description {
  border-top: 10px solid #283038;
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
}



/* Media queries */
/* xs */
ul > div > li > div > a > img {
  width: 200px;
  height: auto;
}

/* lg */
@media (min-width: 1200px) {
  ul > div > li > div > a > img {
    width: 250px;
  }
}

</style>