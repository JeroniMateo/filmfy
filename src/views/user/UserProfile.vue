<template>
  <div id="UserProfile content" class="site-body">
    <div class="wrap-content">
      <section id="profile-header">
        <div class="profile-sumary">
          <div class="profile-avatar">
            <span class="avatar -large">
              <img
                src="https://s.ltrbxd.com/static/img/avatar220.1dea069d.png"
                alt=""
                width="150px"
                height="150px"
              />
              <a id="avatar-zoom" class="cboxElement"></a>
            </span>
          </div>
        </div>
        <div class="profile-name">
          <div class="profile-name-wrap">
            <h1 class="title-1"> {{ firstName }} </h1>
          </div>
          <div class="profile-info">
            <a href="/editarPerfil" class="button ">Editar Perfil</a>
          
            <a  id="logout" class="button " @click="logout"
              >Cerrar Sesion</a
            >
          </div>
        </div>
      </section>
    </div>
    <div id="UserInfo">
      <section class="user-benefits form col-12 col-lg-4 p-3">
        <div class="benefit 1 my-3">
          <div class="d">
            <h3>Nombre de Usuario</h3>
            <p>{{ firstName }}</p>
          </div>
        </div>
        <div class="benefit 2 my-3">
          <div>
            <i class="far fa-calendar"></i>
          </div>
          <div>
            <h3>Nombre</h3>
            <p> {{ firstName }} </p>
          </div>
        </div>
        <div class="benefit 3 my-3">
          <div>
            <i class="far fa-newspaper"></i>
          </div>
          <div>
            <h3>Email</h3>
            <p> {{ email}} </p>
          </div>
        </div>
      </section>
      <div id="UserLists">
        <h2 class="title">Mis Listas Creadas y Favoritas</h2>
        <section class="recommended col-xxl-4 col-12">
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <div
              class="list -overlapped -stacked d-flex flex-column"
              v-for="list in selectedLists"
            >
              <a
                :href="baseURL + '/lists/' + list.id"
                class="list-link"
                style="text-decoration: none"
              >
                <div class="list-link-stacked clear">
                  <ul class="poster-list -overlapped -p70">
                    <li
                      class="poster film-poster listitem"
                      v-for="movie in list.movies.slice(0, 5)"
                    >
                      <div>
                        <img
                          :src="'http://filmfy-api.ddns.net' + movie.image"
                          width="80"
                          height="140"
                          alt=""
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </a>
              <div class="list-content d-flex flex-row mt-2">
                <p class="list-title d-flex align-content-center">
                  <strong>{{ list.title }}</strong>
                </p>
                <div class="mx-4">
                  <img
                    :src="
                      'http://filmfy-api.ddns.net' + list.user.profile_image
                    "
                    :alt="list.user.name"
                    width="20"
                    height="20"
                  />
                  <small class="comment-user-name mx-2">{{
                    list.user.name
                  }}</small>
                  <span>
                    <i class="fa-solid fa-film"></i>
                    {{ list.movies_count }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      log: '',
      firstName: '',
      name: '',
      email: '',
      baseURL: window.origin,
      listsMostLiked: [],
      listsRecent: [],
      selectedLists: []
    }
  },

  methods: {
    logout() {
      localStorage.removeItem('token')
      this.log = false
      this.$router.push('/')
    },
    getUserInfo() {
      fetch('http://filmfy-api.ddns.net/api/v1/register', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        }
      })
        .then((response) => response.json())
        .then((data) => {
          this.firstName.push(`http://filmfy-api.ddns.net/${data.firstName}`)
          this.name.push(`http://filmfy-api.ddns.net/${data.name}`)
          this.email.push(`http://filmfy-api.ddns.net/${data.email}`)
        })
    }
  },
  beforeMount() {
    this.getUserInfo()
  }
}
</script>

<style scoped>
#UsersList {
  display: flex;
}
#UserInfo {
  display: flex;
  justify-content: center;
}
.profile-info {
  margin-top: 0.38461538rem;
}
.profile-name {
  padding-left: 120px;
}
.profile-info {
  margin-top: 0.57692308rem;
}
.title-1 {
  max-width: 450px;
  color: #c8d4e0;
}

.profile-name-wrap {
  display: flex;
  margin-right: 1.92307692rem;
  max-width: 100%;
  margin-bottom: 0.23076923rem;
  margin-bottom: 0;
}

.profile-name {
  display: flex;
  padding-left: 120px;
  flex-direction: column;
}

.profile-summary {
  align-items: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 25px;
  min-height: 100px;
  position: relative;
}

#profile-header {
  display: flex;
  margin-bottom: 3.07692308rem;
  overflow: hidden;
}
article,
aside,
footer,
header,
img,
nav,
section {
  display: block;
}

.content-wrap {
  margin: 0 auto;
  width: 950px;
}
.site-body {
  background: #14181c;
  padding: 30px 0;
}

.follow-button-wrapper {
  margin-top: 3rem;
  margin-left: -45vh;
}

.button.-small {
  font-size: 0.84615385rem;
  padding: 7px 10px 6px;
}

.button {
  text-align: center;
  appearance: none;
  background: #567;
  border-radius: 3px;

  color: #c8d4e0;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  letter-spacing: 0.075em;
  line-height: 12px;
  padding: 9px 12px 8px;
  text-transform: uppercase;
}

a {
  text-decoration: none;
  border: 0;
  font-family: inherit;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
}
.profile-avatar {
  left: 1rem;
  position: absolute;
  top: -3vh;
  height: 14vh;
}

.avatar {
  border-radius: 50px;
  height: 100px;
  width: 100px;
  display: flex;
  float: none;
  margin-top: 25vh;
  margin-right: 0;
}

img {
  border-radius: 50px;
  font-family: 'object-fit: cover;';
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  width: 94%;
  height: 90%;
  margin-top: -2vh;
}
#avatar-zoom {
  z-index: 1;
}
a {
  color: #678;
  text-decoration: none;
}
.big-div {
  padding-top: 20vh;
  height: 50rem;
  background-color: black;
}

.user-benefits {
  border-right: 1px solid white;
}

body {
  font-family: Ubuntu, sans-serif;
  font-size: 0.9rem;
  width: 100vw;
  margin: 0;
  color: var(--p-white);
}

h1 {
  font-size: 2.5rem;
  color: #00c740;
}

h3 {
  font-size: 1.1rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: #fff;
}

.register-heading > a {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
}

.register-heading > a > img {
  max-height: 48px;
}

.register-space input {
  position: relative;
  width: 100%;
  height: 3rem;
  font-size: 1.1rem;
  line-height: 1.5rem;
  display: flex;
  color: var(--focus-black);
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 385px;
}

.brand-content p {
  align-self: center;
  color: var(--main-brand-color);
  font-size: 25px;
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
}

input {
  position: relative;
  width: 100%;
  height: 3rem;
  font-size: 1.1rem;
  line-height: 1.5rem;
  display: flex;
  color: black;
}

.register-space > div > h3 {
  font-size: 0.8rem;
}
p {
  font-size: 2vw;
}
h3 {
  font-size: 4vh;
  color: #00c740;
}
h2.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  margin-left: 20vh;
}
#logout{
  margin-left: 2vh;

  background-color:#c50909
}
.wrap-content{

}
</style>
