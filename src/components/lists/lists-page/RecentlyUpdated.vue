<template>
  <section v-if="loaded" class="recently-liked col-xxl-6 col-12">

    <div class="mt-5">
      <span>Actualizadas recientemente</span>
      <hr>
    </div>

    <div>
      <div class="d-flex justify-content-center mt-4" v-for="list in listsRecent.slice(0,5)">
        <router-link :to="{ name:'list-content', params: {list: list.l_id}}"
                       style="text-decoration: none">
          <div class="image-overlap">
                  <span class="movie-img" v-for="movie in list.movies.slice(0,5)">
                    <img :src="'http://filmfy-api.ddns.net' + movie.image" width="95" height="160" :alt="movie.title"/>
                  </span>
          </div>
          <div class="list-details d-flex flex-column">
            <div class="list-title d-flex flex-row justify-content-start">
              <span style="text-align: left"><b>{{ list.l_title }}</b></span>
            </div>
            <div class="list-data d-flex flex-row">
              <img :src="'http://filmfy-api.ddns.net' + list.user.profile_image" :alt="list.user.name" width="20" height="20"/>
              <span class="mx-2">{{ list.user.name }}</span>
              <span class="mx-2"><i style="color: #e49e06 " class="fa-solid fa-heart me-1"></i> {{ list.l_likes }}</span>
              <span> <i class="text-quaternary fa-solid fa-film"></i> {{ list.movies_count }}</span>
            </div>

          </div>
        </router-link>
      </div>
    </div>

  </section>

</template>

<script>
export default {
  name: "RecentlyUpdated",
  data () {
    return {
      baseURL: window.origin,
      listsRecent: [],
      loaded: false
    }
  },
  methods: {
    async recentLists() {
      const promise = await fetch('http://filmfy-api.ddns.net/api/lists-recent')
      this.listsRecent = await promise.json()
      this.loaded = true
    }
  },
  beforeMount() {
    this.recentLists()
  }
}
</script>

<style scoped>

</style>