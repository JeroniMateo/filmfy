<template>
  <main>
  <div class="list-details container bg-bgmain">

    <div class="row">
      <div class="main-information col-12 col-lg-6 d-flex flex-column align-items-start">

        <div class="initial w-100">
          <div class="use d-flex my-2">
            <img :src="'http://filmfy-api.ddns.net' + list.user.profile_image" :alt="list.user.name" width="20" height="20"/>
            <span class="mx-2">Lista de {{ list.user.name }}</span>
          </div>

          <div class="data d-flex w-100 justify-content-between p-1">
            <span class="d-flex justify-content-start">Actualizada el 7 de enero </span>
            <div class="d-flex justify-content-end align-items-center">
              <i style="color: orange " class="mx-2 fa-solid fa-heart me-1"></i> <span>27</span>
              <span class="mx-2">|</span>
              <i class="mx-1 fa-solid fa-film me-1"></i><span>{{ list.movies_count }}</span>
            </div>
          </div>
        </div>

        <div class="title-description">
          <div class="mt-4">
            <h1 class="d-flex">{{ list.title }}</h1>
          </div>
          <div class="my-3">
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
      </div>
      <div class="list-interaction col-12 col-lg-6 d-flex justify-content-center align-items-center">
        <div class="d-flex align-items-center justify-content-center justify-content-lg-start order-lg-last flex-column p-0 my-3">
          <AsideDetailedList :list="this.list"/>
        </div>
      </div>
    </div>

  </div>
  <div class="movies-container container">
      <ul class="d-flex flex-wrap justify-content-start">
        <div v-for="movie in list.movies">
          <div :id="movie.id" class="d-flex flex-column align-items-center" style="visibility: hidden">
            <span class="frame-title">{{ movie.title }}</span>
          </div>
          <li @mouseout="hideMovieTitle(movie.id)" @mouseover="displayMovieTitle(movie.id)">
            <div class="m-2 movie-card">
              <a :href="baseURL + '/movies/' + movie.id"><img :src="'http://filmfy-api.ddns.net' + movie.image" :alt="movie.title" width="250" height="355"/></a>
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
      listCategories: [],
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

h1 {
  font-size: 2rem;
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

.movie-card :hover {
  border-radius: 5px;
  border: 2px solid green;
}

.data {
  border-top: 1px solid white;
  border-bottom: 1px solid white;
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