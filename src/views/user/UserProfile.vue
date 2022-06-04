<template>
  <main>
    <div class="container rounded">

      <div class="row welcome">
        <div class="d-flex flex-column align-items-start">
          <h1><b>Bienvenido a Filmfy, {{ currentUser.name }}</b></h1>
          <p>Accede a tus contenidos, modifica los datos de tu perfil o cierra tu sesión</p>
          <router-link :to="{ name: 'my-lists'}">
            <button type="button" class="btn btn-outline-primary me-2" @click="">Ver todo tu contenido</button>
          </router-link>
          <button type="button" class="btn btn-outline-error me-2 my-2" @click="destroySession">Cerrar Sesión</button>
        </div>
      </div>

      <!-- Tab links -->
      <div class="tab">
        <button class="tablinks active" @click="openCity(event, 'London')">Último contenido</button>
        <button class="tablinks" @click="openCity(event, 'Paris')">Editar perfil</button>
      </div>

      <!-- Tab content -->
      <div id="London" class="tabcontent">
        <div class="list-comments col-lg-7 col-12">
          <div class="p-3 py-5">
            <div class="heading-container d-flex justify-content-between align-items-center experience">
              <h4 class="p-2">Tus listas recientes</h4>
            </div>

            <div v-if="contentLists" class="mt-3">
              <div class="list col d-flex flex-column align-items-center mt-4" v-for="list in userLists.slice(0,3)">
                <router-link :to="{ name: 'my-lists-edit', params: {list: list.id } }" style="text-decoration: none">
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
                      <span class="mx-2"><i style="color: orange "
                                            class="fa-solid fa-heart me-1"></i> {{ list.list_likes }}</span>
                      <span><i class="text-quaternary fa-solid fa-film"></i> {{ list.movies_count }}</span>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>

            <div v-else class="mt-2">
              <p class="text-primary"><b>Aún no has creado ninguna lista</b></p>
              <router-link :to="{ name: 'lists' }">
                <button type="button" class="btn btn-outline-primary me-2">Ir a listas</button>
              </router-link>
            </div>

          </div>


          <div class="p-3 py-5">
            <div class="heading-container d-flex justify-content-between align-items-center comments">
              <h4 class="p-2">Tus últimos comentarios</h4>
            </div>

            <ul>
              <hr>
              <div v-if="contentComments" v-for="comment in userComments">

                <li class="comment d-flex flex-row">
                  <div class="comment-movie-image">
                    <img :src="'http://filmfy-api.ddns.net' + comment.movie[0].image" width="115" height="170"
                         :alt="comment.m_title"/>
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
              <div class="mt-2" v-else>
                <p class="text-primary"><b>Aún no has comentado ninguna película</b></p>
                <router-link :to="{ name: 'movies'}"><button type="button" class="btn btn-outline-primary me-2">Ir a películas</button></router-link>
              </div>
            </ul>

          </div>

        </div>
      </div>

      <div id="Paris" class="tabcontent">
        <div class="user col-lg-5 col-md-8 col-12 border-right">
          <div class="p-3 py-3">

            <div class="col border-right d-flex justify-content-center">
              <div class="d-flex flex-column justify-content-center align-items-center text-center p-1 my-2">
                <img class="rounded-circle" width="150" :src="'http://filmfy-api.ddns.net' + currentUser.profile_image"
                     :alt="currentUser.name">
              </div>
            </div>

            <div class="row mt-2">
              <div class="col-md-12"><label class="labels">Nombre</label><input v-model="userName" type="text"
                                                                                class="form-control"
                                                                                placeholder="Nombre"></div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12"><label class="labels">Email</label><input v-model="userEmail" type="text"
                                                                               class="form-control" placeholder="Email">
              </div>
              <div class="col-md-12"><label class="labels">Contraseña</label><input v-model="userPassword"
                                                                                    type="password" class="form-control"
                                                                                    placeholder="*************"></div>
            </div>
            <div class="mt-5 text-center">
              <button class="btn btn-primary profile-button" type="button" @click="updateUserData">Guardar cambios
              </button>
            </div>
            <div class="mt-3 text-center">
              <button class="btn btn-error close-session-button" type="button" @click="destroySession">Cerrar sesión
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>

  </main>

</template>

<script>
import {getCookie, getUser} from '@/main'
import StarRating from 'vue-star-rating'


export default {

  name: "UserProfile",
  components: {
    StarRating,
  },
  data() {
    return {
      token: "",
      loader: false,

      baseURL: window.origin,

      currentUser: [],
      userName: '',
      userEmail: '',
      userPassword: '',


      userLists: [],
      userComments: [],

      contentLists: false,
      contentComments: false,
    }
  },

  async beforeMount () {
    this.token = await getCookie('auth')

    if (this.token) {
      let user = await getUser(this.token);
      this.currentUser = user;
      this.userName = this.currentUser.name;
      this.userEmail = this.currentUser.email;
      this.userPassword = this.currentUser.password;
      if (this.currentUser.id !== 'User expired') {
        this.log = true
      }
    }
    await this.userListsFetch()
    await this.userCommentsFetch()
    this.openCity(event, 'London')
  },

  methods: {

    async userListsFetch() {
      const promise = await fetch('http://filmfy-api.ddns.net/api/user-lists/' + this.currentUser.id)
      this.userLists = await promise.json()
      if (Object.keys(this.userLists).length > 0) {
        this.contentLists = true;
      }
    },
    async userCommentsFetch() {
      const promise = await fetch('http://127.0.0.1:8000/api/comments-user/' + this.currentUser.id)
      this.userComments = await promise.json()
      if (Object.keys(this.userLists).length > 0) {
        this.contentComments = true;
      }
    },

    async updateUserData() {
      const promise = await fetch('http://filmfy-api.ddns.net/api/v1/edit-user/' + this.currentUser.id, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + this.token,
        },
        body: JSON.stringify({
          id: this.currentUser.id,
          name: this.userName,
          email: this.userEmail,
          password: this.userPassword,
        })
      });
      await location.reload()
    },

    destroySession() {
      document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      window.location = '/';
    },

    openCity(evt, cityName) {
      // Declare all variables
      var i, tabcontent, tablinks;

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
      }

      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(cityName).style.display = "flex";
      evt.currentTarget.className += " active";
    }

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

/* Style the tab */
.tab {
  overflow: hidden;
  background-color: var(--bs-primary);
}

.tablinks {
  color: black;
  font-weight: bolder;
}

/* Style the buttons that are used to open the tab content */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: var(--bs-success);;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: var(--bs-secondary);;
}

/* Style the tab content */
.tabcontent {
  display: none;
  justify-content: center;
  padding: 6px 12px;
  border: 1px solid var(--bs-primary);;
  border-top: none;
}


.content {
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 500px) {

  .movie-img > img {
    width: 75px;
    height: 135px;
  }

}
</style>