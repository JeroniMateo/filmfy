<template>
  <section class="recommended col-xxl-4 col-12">

    <div class="mt-5">
      <span>Selección Filmfy</span>
      <hr>
    </div>

    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="list -overlapped -stacked d-flex flex-column" v-for="list in selectedLists">
        <a :href="baseURL + '/lists/' + list.id" class="list-link" style="text-decoration: none">
          <div class="list-link-stacked clear">
            <ul class="poster-list -overlapped -p70">
              <li class="poster film-poster listitem" v-for="movie in list.movies.slice(0,5)">
                <div>
                  <img :src="'http://filmfy-api.ddns.net' + movie.image" width="80" height="140" alt=""/>
                </div>
              </li>
            </ul>
          </div>
        </a>
        <div class="list-content d-flex flex-row mt-2">
          <p class="list-title d-flex align-content-center"><strong>{{ list.title }}</strong></p>
          <div class="mx-4">
            <img :src="'http://filmfy-api.ddns.net' + list.user.profile_image" :alt="list.user.name" width="20" height="20"/>
            <small class="comment-user-name mx-2">{{ list.user.name }}</small>
            <span> <i class="text-quaternary fa-solid fa-film"></i> {{ list.movies_count }}</span>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "FilmfySelection",
  data () {
    return {
      baseURL: window.origin,
      selectedLists: [],
    }
  },
  methods: {
    async selectedList(id) {
      const promise = await fetch('http://filmfy-api.ddns.net/api/lists/' + id)
      this.selectedLists.push(await promise.json())
      console.log(this.selectedLists)
    },
  },
  beforeMount() {
    this.selectedList(1)
    this.selectedList(2)
    this.selectedList(3)
  }
}
</script>

<style scoped>

</style>