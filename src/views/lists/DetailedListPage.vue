<template>
  <main class="bg-bgmain p-1">
    <div class="list-details container">
      <div class="row">
        <div
          class="main-information col-12 col-lg-6 d-flex flex-column align-items-start"
        >
          <div class="initial w-100">
            <div class="use d-flex my-2">
              <img
                :src="'http://filmfy-api.ddns.net' + list.user.profile_image"
                :alt="list.user.name"
                width="20"
                height="20"
              />
              <span class="mx-2 text-tertiary"
                >Lista de {{ list.user.name }}</span
              >
            </div>

            <div class="data d-flex w-100 justify-content-between p-1">
              <span class="text-tertiary d-flex justify-content-start">{{
                listUpdated
              }}</span>
              <div class="d-flex justify-content-end align-items-center">
                <i
                  style="color: #e49e06"
                  class="mx-2 fa-solid fa-heart me-1"
                ></i>
                <span class="text-tertiary">{{ list.likes }}</span>
                <span class="mx-2">|</span>
                <i class="text-quaternary mx-1 fa-solid fa-film me-1"></i
                ><span class="text-tertiary">{{ list.movies_count }}</span>
              </div>
            </div>
          </div>

          <div class="title-description">
            <div class="mt-4">
              <h1 class="d-flex text-left" style="text-align: left">
                <b>{{ list.title }}</b>
              </h1>
            </div>
            <div class="my-3">
              <p class="text-left" style="text-align: left">
                {{ list.description }}
              </p>
            </div>
          </div>

          <div class="tags">
            <div
              class="p-3 d-flex align-items-center justify-content-center"
              id="categories"
              data-v-32954910=""
            >
              <p
                v-for="category in listUniqueCategories.slice(0, 4)"
                style="
                  border: 1px solid white;
                  border-radius: 20px;
                  padding: 4px 12px 4px 12px;
                  margin-bottom: 0px;
                  margin-right: 10px;
                "
              >
                {{ category[0] }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="list-interaction col-12 col-lg-6 d-flex justify-content-center align-items-center"
        >
          <div
            class="d-flex align-items-center justify-content-center justify-content-lg-start order-lg-last flex-column p-0 my-3"
          >
            <AsideDetailedList :list="this.list" />
          </div>
        </div>
      </div>
    </div>
    <div class="movies-container container">
      <ul class="d-flex flex-wrap justify-content-start">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3"
          v-for="movie in list.movies"
        >
          <div
            :id="movie.id"
            class="d-flex flex-column align-items-center"
            style="visibility: hidden"
          >
            <span class="frame-title">{{ movie.title }}</span>
          </div>
          <li
            @mouseout="hideMovieTitle(movie.id)"
            @mouseover="displayMovieTitle(movie.id)"
          >
            <div class="m-2 movie-card">
              <a :href="baseURL + '/movies/' + movie.id"
                ><img
                  :src="'http://filmfy-api.ddns.net' + movie.image"
                  :alt="movie.title"
                  width="250"
                  height="355"
              /></a>
            </div>
          </li>
        </div>
        <li class="m-2 col-md-3 col-sm-3 col-xs-3">&nbsp;</li>
      </ul>
    </div>
  </main>
</template>

<script>
import AsideDetailedList from '@/components/lists/detailed-list-page/AsideDetailedList'

export default {
  name: 'DetailedListPage',
  components: {
    AsideDetailedList
  },
  data () {
    return {
      baseURL: window.origin,
      listId: this.$route.params.list,
      list: [],
      listUniqueCategories: [],
      categoriesHolder: {},
      listUpdated: ''
    }
  },

  methods: {
    async fetchList () {
      // List content
      const promiseList = await fetch(
        `http://filmfy-api.ddns.net/api/lists/${this.listId}`
      )
      this.list = await promiseList.json()

      // Processing list update for front
      const dateObj = new Date(this.list.updated_at)
      const months = [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre'
      ]
      const year = dateObj.getUTCFullYear()
      const month = months[dateObj.getUTCMonth()]
      const day = dateObj.getUTCDate()

      this.listUpdated = `Actualizada el ${day} de ${month} de ${year}`

      // Reading categories of movies
      this.list.movies.forEach((movie) => {
        movie.categories.forEach((category) => {
          if (!(category in this.categoriesHolder)) {
            this.categoriesHolder[category] = 1
          } else {
            this.categoriesHolder[category] =
              this.categoriesHolder[category] + 1
          }
        })
      })

      const sortable = []
      for (const uniqueCategory in this.categoriesHolder) {
        sortable.push([uniqueCategory, this.categoriesHolder[uniqueCategory]])
      }

      sortable.sort(function (a, b) {
        return b[1] - a[1]
      })

      this.listUniqueCategories = sortable
    },

    displayMovieTitle (id) {
      const element = document.getElementById(id)
      element.style.visibility = 'visible'
    },

    hideMovieTitle (id) {
      const element = document.getElementById(id)
      element.style.visibility = 'hidden'
    }
  },

  beforeMount () {
    this.fetchList()
  }
}
</script>

<style scoped>
* {
  background-color:  var(--bs-bgmain);
}

h1 {
  font-size: 2rem;
}

ul > div > li > div > a > img {
  border-radius: 7px;
}

ul,
ol {
  list-style: none;
}

.frame-title {
  border-radius: 5px;
  background-color: var(--bs-bgmain);
  color: #fffdfd;
  padding: 10px;
  font-size: 13px;
  width: max-content;
}

.frame-title-description {
  border-top: 10px solid #242424;
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
}

.movie-card :hover {
  border-radius: 5px;
  border: 2px solid #2ecc71;
}

.data {
  border-top: 1px solid var(--bs-tertiary);
  border-bottom: 1px solid var(--bs-tertiary);
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
