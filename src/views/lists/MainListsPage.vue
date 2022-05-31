<Header/>
<template>

  <main class="bg-bgmain">

    <div class="container-md">
      <div class="heading image d-flex justify-content-end flex-column">
        <div class="container text-movie d-flex flex-column justify-content-center">
          <span><strong>Colecciona, selecciona y comparte.</strong></span>
          <span><strong>Las listas de Filmfy son la forma perfecta de tener tus películas.</strong></span>
        </div>
        <div class="mt-3">
          <button type="button" class="btn btn-primary">Crea tus listas</button>
        </div>
      </div>
    </div>

    <div class="container-md mt-5">
      <section class="month-popular">
        <div>
          <span>Populares este mes</span>
          <hr>
        </div>
        <div class="mt-3 row">
          <div class="list col-xxl-4 col-xl-6 col-12 d-flex flex-column align-items-center mt-4" v-for="list in listsMostLiked.slice(0,3)">
            <a :href="baseURL + '/lists/' + list.l_id" style="text-decoration: none">
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
                    <span class="mx-2">❤ {{ list.l_likes }}</span>
                    <span> <i class="fa-solid fa-film"></i> {{ list.movies_count }}</span>
                  </div>
              </div>
            </a>
          </div>
        </div>
      </section>

    </div>

    <div class="container-md mt-5">
      <div class="row d-flex justify-content-center">
        <section class="recently-liked col-xxl-6 col-12">

          <div class="mt-5">
            <span>Actualizadas recientemente</span>
            <hr>
          </div>

          <div>
            <div class="d-flex justify-content-start mt-4" v-for="list in listsRecent.slice(0,5)">
              <div class="list d-flex row">
                <div class="col-7">
                  <a :href="baseURL + '/lists/' + list.l_id" style="text-decoration: none">
                    <div class="image-overlap">
                      <span class="movie-img" v-for="movie in list.movies.slice(0,5)" >
                        <img :src="'http://filmfy-api.ddns.net' + movie.image" width="75" height="133" :alt="movie.title"/>
                      </span>
                    </div>
                    <div class="list-data d-flex flex-row m-1">
                      <img :src="'http://filmfy-api.ddns.net' + list.user.profile_image" :alt="list.user.name" width="20" height="20"/>
                      <span class="mx-2">{{ list.user.name }}</span>
                      <span class="mx-2">❤ {{ list.l_likes }}</span>
                      <span> <i class="fa-solid fa-film"></i> {{ list.movies_count }}</span>
                    </div>
                  </a>
                </div>

                <div class="list-details d-flex flex-column col-5">
                  <div class="list-title d-flex flex-row justify-content-start m-1">
                    <span style="text-align: left">{{ list.l_title }}</span>
                  </div>
                  <div class="list-description d-flex flex-row justify-content-start m-1">
                    <span style="text-align: left">{{ list.l_description }}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </section>

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
                  <span> <i class="fa-solid fa-film"></i> {{ list.movies_count }}</span>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>

  </main>

</template>
<Footer/>

<script>
import Header from "@/components/basics/Header";
import Footer from "@/components/basics/Footer";

export default {
  name: "MainListsPage",
  components: {
    Header,
    Footer,
  },
  data () {
    return {
      baseURL: window.origin,
      listsMostLiked: [],
      listsRecent: [],
      selectedLists: [],
    }
  },
  methods: {
    async popularLists() {
      const promise = await fetch('http://filmfy-api.ddns.net/api/lists-most-liked')
      this.listsMostLiked = await promise.json()
    },
    async recentLists() {
      const promise = await fetch('http://filmfy-api.ddns.net/api/lists-recent')
      this.listsRecent = await promise.json()
    },
    async selectedList(id) {
      const promise = await fetch('http://filmfy-api.ddns.net/api/lists/' + id)
      this.selectedLists.push(await promise.json())
      console.log(this.selectedLists)
    },
  },
  beforeMount() {
    this.popularLists()
    this.recentLists()
    this.selectedList(1)
    this.selectedList(2)
    this.selectedList(3)
  }
}
</script>

<style scoped>

main {
  width: 100%;
  height: 100%;
}

.image {
  background-image: linear-gradient(to bottom,
  rgba(0, 0, 0, 0),
  rgba(0, 0, 0, 100)), url("https://images2.alphacoders.com/778/thumb-1920-77840.jpg");
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 40%;

  height: 30vh;
}

.image-overlap {
  direction: rtl;  /* This is to get the stack with left on top */
  text-align: left;  /* Now need to explitly align left */
  padding-left: 25px;  /* Same value as the negative margin */
}

.movie-img img {
  border-radius: 10px;
  position: relative;
  left: -5px;
  margin-left: -25px;
  z-index: 1;
}

ol, ul {
  list-style: none;
}

/*.recently-liked > .list {*/
/*  width: 70vw*/
/*}*/

/** **/

.poster-list.-overlapped.-p70 .poster, .poster-list.-overlapped.-p150 .poster {
  box-shadow: 2px 0 7px #000;
  margin-right: -25px;
}

.poster-list.-overlapped .poster:first-child {
  z-index: 15;
}

.poster-list.-overlapped .poster:nth-of-type(2) {
  z-index: 14;
}

.poster-list.-overlapped .poster:nth-of-type(3) {
  z-index: 13;
}

.poster-list.-overlapped .poster:nth-of-type(4) {
  z-index: 12;
}

.poster-list.-overlapped .poster:nth-of-type(5) {
  z-index: 11;
}

.poster-list.-overlapped .poster {
  float: left;
}
.poster {
  background: #161718;
  box-shadow: 0 1px 3px rgb(0 0 0 / 35%);
}
.poster, .poster-container {
  -webkit-background-clip: padding-box;
  border-radius: 4px;
  display: inline-block;
  overflow: hidden;
  position: relative;
}

.poster .image {
  border-radius: 4px;
  display: block;
}

@media only screen and (max-width: 992px) {

  .recently-liked > div > div > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media only screen and (max-width: 440px) {

  .month-popular > div > div > a > div > span > img {
    width: 75px; height: 145px;
  }
}


</style>