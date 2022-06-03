<template>
  <main>
    <div class="container rounded">

      <div class="row welcome">
        <div class="d-flex flex-column align-items-start">
          <h1><b>Bienvenido a Filmfy, {{ currentUser.user.name }}</b></h1>
          <p>Accede a tus contenidos, modifica los datos de tu perfil o cierra tu sesión</p>
          <button type="button" class="btn btn-outline-primary me-2" @click="">Ver todo tu contenido</button>
          <button type="button" class="btn btn-outline-error me-2 my-2" @click="destroySession">Cerrar Sesión</button>
        </div>
      </div>

      <div class="row content">
        <div class="list-comments col-lg-7 col-12">
          <div class="p-3 py-5">
            <div class="heading-container d-flex justify-content-between align-items-center experience">
              <h4 class="p-2">Tus listas recientes</h4>
            </div>

            <div class="mt-3">
              <div class="list col d-flex flex-column align-items-center mt-4" v-for="list in userLists.slice(0,3)">
                <a :href="baseURL + '/lists/' + list.id" style="text-decoration: none">
                  <div class="image-overlap">
                  <span class="movie-img" v-for="movie in list.movies.slice(0,5)">
                    <img :src="'http://filmfy-api.ddns.net' + movie.image" width="95" height="160" :alt="movie.title"/>
                  </span>
                  </div>
                  <div class="list-details d-flex flex-column">
                    <div class="list-title d-flex flex-row justify-content-start">
                      <span style="text-align: left"><b>{{ list.title }}</b></span>
                    </div>
                    <div class="list-data d-flex flex-row">
                      <span class="mx-2"><i style="color: orange " class="fa-solid fa-heart me-1"></i> {{ list.list_likes }}</span>
                      <span><i class="text-quaternary fa-solid fa-film"></i> {{ list.movies_count }}</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div class="mt-2" v-if="!contentLists">
              <p class="text-primary"><b>Aún no has creado ninguna lista</b></p>
              <a href="/lists"><button type="button" class="btn btn-outline-primary me-2">Ir a listas</button></a>
            </div>

          </div>

          <div class="p-3 py-5">
            <div class="heading-container d-flex justify-content-between align-items-center comments">
              <h4 class="p-2">Tus últimos comentarios</h4>
            </div>

            <ul>
              <hr>
              <div v-for="comment in userComments">

                <li class="comment d-flex flex-row" >
                  <div class="comment-movie-image">
                    <img :src="'http://filmfy-api.ddns.net' + comment.movie[0].image" width="115" height="170" :alt="comment.m_title"/>
                  </div>
                  <div class="comment-details p-3">
                    <div class="comment-movie-details d-flex">
                      <span class="comment-movie-title"><strong>{{ comment.movie[0].title }}</strong></span>
                      <span class="comment-movie-year mx-2">{{ comment.movie[0].release_date.split("-")[0] }}</span>
                    </div>
                    <div class="comment-user-details d-flex flex-row mt-2">
                      <div class="comment-rating mx-2">
                        <star-rating
                            v-bind:round-start-rating="false"
                            v-bind:rating="comment.rating"
                            v-bind:max-rating="5"
                            v-bind:increment="0.5"
                            v-bind:read-only="true"
                            v-bind:show-rating="false"
                            active-color="#00c740"
                            inactive-color="#fff"
                            v-bind:star-size="20"
                        /> <!-- Lightgreen: #00c740 -->
                      </div>
                    </div>
                    <div class="comment-content d-flex mt-2">
                      <p class="comment-text text-start">{{ comment.body }}</p>
                    </div>
                    <div class="comment-likes d-flex flex-row">
                      <span>❤</span>
                      <span class="mx-1">{{ comment.likes }}</span>
                    </div>
                  </div>
                </li>

                <hr>
              </div>
            </ul>

            <div class="mt-2" v-if="!contentComments">
              <p class="text-primary"><b>Aún no has comentado ninguna película</b></p>
              <a href="/movies"><button type="button" class="btn btn-outline-primary me-2">Ir a películas</button></a>
            </div>

          </div>

        </div>


        <div class="user col-lg-5 col-md-8 col-12 border-right">
          <div class="p-3 py-5">

            <div class="heading-container d-flex justify-content-center align-items-center">
              <h4 class="p-2">Datos de usuario</h4>
            </div>

            <div class="col border-right d-flex justify-content-center">
              <div class="d-flex flex-column justify-content-center align-items-center text-center p-1 my-2">
                <img class="rounded-circle mt-5" width="150" :src="'http://filmfy-api.ddns.net' + currentUser.user.profile_image" :alt="currentUser.user.name">
              </div>
            </div>

            <div class="row mt-2">
              <div class="col-md-12"><label class="labels">Nombre</label><input type="text" class="form-control" placeholder="Nombre" :value="currentUser.user.name"></div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" placeholder="Email" :value="currentUser.user.email"></div>
              <div class="col-md-12"><label class="labels">Contraseña</label><input type="text" class="form-control" placeholder="Contraseña" value="***********"></div>
            </div>
            <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" @click="">Guardar cambios</button></div>
            <div class="mt-3 text-center"><button class="btn btn-error close-session-button" type="button" @click="destroySession">Cerrar sesión</button></div>

          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<script>
import { getCookie, getUser } from '@/main'
import StarRating from 'vue-star-rating'


export default {

  name: "UserProfile2",
  components: {
    StarRating
  },
  data () {
    return {
      baseURL: window.origin,

      currentUser: [],

      userLists: [],
      userComments: [],

      contentLists: false,
      contentComments: false,
    }
  },
  methods: {
    async userListsFetch() {
      const promise = await fetch('http://filmfy-api.ddns.net/api/user-lists/' + this.currentUser.user.id)
      this.userLists = await promise.json()
      if (Object.keys(this.userLists).length > 0 ){
        this.contentLists = true;
      }
    },
    async userCommentsFetch() {
      const promise = await fetch('http://filmfy-api.ddns.net/api/comments-user/' + this.currentUser.user.id)
      this.userComments = await promise.json()
      if (Object.keys(this.userComments).length > 0 ){
        this.contentComments = true;
      }
    },
    destroySession() {
      document.cookie ="auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      window.location = '/';
    }
  },
  async beforeMount() {
    this.token = getCookie('auth')
    if (this.token) {
      this.currentUser = await getUser(this.token)
      this.userID = await getUser(this.token)
      if (this.userID !== 'User expired') {
        this.log = true
      }
    }
    this.userListsFetch()
    this.userCommentsFetch()
  },
}
</script>

<style scoped>
* {
  background: black
}
h1 {
  font-size: 1.5rem;
}

.heading-container {
  border-top: 1px solid var(--bs-tertiary);
  border-bottom: 1px solid var(--bs-tertiary);
}

main {
  min-height: 100vh;
}


.form-control:focus {
  box-shadow: none;
  border-color: var(--bs-primary);
}

.profile-button {
  background: var(--bs-primary);
  box-shadow: none;
  border: none
}

.profile-button:hover {
  background: var(--bs-success)
}

.profile-button:focus {
  background: var(--bs-success);
  box-shadow: none
}

.profile-button:active {
  background: var(--bs-success);
  box-shadow: none
}

.close-session-button:hover {
  background: darkred;
  box-shadow: none
}

.labels {
  font-size: 11px
}

.movie-img img {
  border-radius: 10px;
  position: inherit;
  left: -5px;
  margin-left: -25px;
  z-index: 1;
}

@media only screen and (max-width: 992px) {
  .content {
    display: flex;
    justify-content: center;
  }

}
</style>