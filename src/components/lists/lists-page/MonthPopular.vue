<template>
  <section v-if="loaded" class="month-popular">
    <div>
      <span>Populares este mes</span>
      <hr />
    </div>
    <div class="mt-3 row">
      <div
        class="list col-xxl-4 col-xl-6 col-12 d-flex flex-column align-items-center mt-4"
        v-for="list in listsPopular.slice(0, 3)"
      >
        <router-link
            :to="{ name:'list-content', params: {list: list.l_id}}"
          style="text-decoration: none"
        >
          <div class="image-overlap">
            <span class="movie-img" v-for="movie in list.movies.slice(0, 5)">
              <img
                :src="'http://filmfy-api.ddns.net' + movie.image"
                width="95"
                height="160"
                :alt="movie.title"
              />
            </span>
          </div>
          <div class="list-details d-flex flex-column">
            <div class="list-title d-flex flex-row justify-content-start">
              <span style="text-align: left"
                ><b>{{ list.l_title }}</b></span
              >
            </div>
            <div class="list-data d-flex flex-row">
              <img
                :src="'http://filmfy-api.ddns.net' + list.user.profile_image"
                :alt="list.user.name"
                width="20"
                height="20"
              />
              <span class="mx-2">{{ list.user.name }}</span>
              <span class="mx-2"
                ><i style="color: #e49e06" class="fa-solid fa-heart me-1"></i>
                {{ list.l_likes }}</span
              >
              <span
                ><i class="text-quaternary fa-solid fa-film"></i>
                {{ list.movies_count }}</span
              >
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>

  <div v-else id="contenedor" style="height: 150px">
    <div class="loader" id="loader">Loading...</div>
  </div>
</template>

<script>
export default {
  name: 'MonthPopular',
  data() {
    return {
      baseURL: window.origin,
      listsPopular: [],
      loaded: false
    }
  },
  methods: {
    async popularLists() {
      const promise = await fetch(
        'http://filmfy-api.ddns.net/api/lists-most-liked'
      )
      this.listsPopular = await promise.json()
      this.loaded = true
    }
  },
  beforeMount() {
    this.popularLists()
  }
}
</script>

<style scoped></style>
