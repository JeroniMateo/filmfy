<template>

  <div class="all">
    <header class="container-md d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

      <div id="hamburger" @click="hamburgerIconHandling">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>

      <div class="main-menu d-flex col-md-3 mx-3">
        <router-link :to="{ name: 'home' }" class="d-flex align-items-center mb-md-0 text-dark text-decoration-none">
          <img src="../../assets/img/cameraLogo.png" class="bi me-2" width="30" height="30" role="img" aria-label="Bootstrap" alt="logo"/>
        <span class="brand-name"><strong>Filmfy</strong></span>
        </router-link>
      </div>

      <ul class="main-menu nav col-12 col-md-auto justify-content-center mb-md-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle nav-link px-2 link-custom text-large mx-2 mx-lg-4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contenido
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link :to="{ name: 'movies' }" id="dropLI" class="nav-link px-2 link-custom text-large mx-2 mx-lg-4">Películas</router-link></li>
            <li><router-link :to="{ name: 'series' }" id="dropLI" class="nav-link px-2 link-custom text-large mx-2 mx-lg-4">Series</router-link></li>
            <li><router-link :to="{ name: 'documentaries' }" id="dropLI" class="nav-link px-2 link-custom text-large mx-2 mx-lg-4">Documentaries</router-link></li>
          </ul>
        </li>
        <li><router-link :to="{ name: 'lists' }" class="nav-link px-2 link-custom text-large mx-2 mx-lg-4">Listas</router-link></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle nav-link px-2 link-custom text-large mx-2 mx-lg-4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Usuarios
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link :to="{ name: 'news' }" id="dropLI" class="nav-link px-2 link-custom text-large mx-2 mx-lg-4">Noticias</router-link></li>
            <li><router-link :to="{ name: 'forum' }" id="dropLI" class="nav-link px-2 link-custom text-large mx-2 mx-lg-4">Foro Debate</router-link></li>
          </ul>
        </li>
      </ul>

      <div v-if="!log" class="main main-menu col-md-3 text-end">
        <router-link :to="{ name: 'login' }"><button type="button" class="btn btn-outline-primary me-2">Accede</button></router-link>
      </div>
      <div v-else class="main main-menu col-md-3 text-end">
        <img class="rounded-circle me-3" width="40" :src="'http://filmfy-api.ddns.net' + user.profile_image" :alt="user.name">
        <a href="/profile"><button type="button" class="btn btn-outline-primary me-2">Mi perfil</button></a>
      </div>

      <div class="hamburger-container">
        <div id="hamburgerMenu">
          <div style="display: flex; align-items: center;" class="mt-3">
            <router-link @click="closeHamburgerIcon" to="/" style="text-decoration: none;">
              <div style="display: flex; align-items: center;">
                <img class="logo" src="../../assets/img/cameraLogo.png" width="30" height="30" alt="logo">
                <p class="brand-name mb-0 ms-2" style="">Filmfy</p>
              </div>
            </router-link>
            <span @click="closeHamburgerIcon" class="close-hamburger">x</span>
          </div>
          <div class="menu-links">
            <router-link @click="closeHamburgerIcon" class="my-2" to="/movies">Películas</router-link>
            <router-link @click="closeHamburgerIcon" class="my-2" to="lists">Listas</router-link>
            <router-link @click="closeHamburgerIcon" class="my-2" to="/">Usuarios</router-link>
          </div>

          <div v-if="!log" class="login-content-hamburger">
            <router-link @click="closeHamburgerIcon" to="/login"><button type="button" class="btn btn-outline-primary me-2">Accede</button></router-link>
          </div>
          <div v-else class="login-content-hamburger d-flex">
            <img class="rounded-circle me-2" :src="'http://filmfy-api.ddns.net' + user.profile_image" :alt="user.name">
            <a href="/profile" @click="closeHamburgerIcon"><button type="button" class="btn btn-outline-primary me-2">Mi perfil</button></a>
          </div>
        </div>
      </div>

    </header>
  </div>

</template>

<script>
import {getCookie, getUser} from "@/main";
export default {
  name: 'Header',
  components: {
  },
  data: () => ({
    log: false,
    user: [],
    counter : 0
  }),
  async beforeMount() {
    this.token = getCookie("auth")
    if (this.token && this.counter === 0) {
      this.user = await getUser(this.token)
      if (this.user !== "User expired") {
        this.log = true
      }
      this.counter++
    }
  },
  methods: {
    hamburgerIconHandling () {
      document.getElementsByClassName('hamburger-container')[0].style.display =  'flex'
    },
    closeHamburgerIcon() {
      document.getElementsByClassName('hamburger-container')[0].style.display =  'none'
    },
    login () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.all {
  background-color: black;
  padding-bottom: 10px;
}
.brand-name {
  color: white;
  font-size: 23px;
  font-weight: 900;
  margin-left: 5px;
}
.text-large {
  font-size: 1rem;
}
.link-custom {
  color: #c9c9c9;
  font-weight: bold;
}
.link-custom:hover,
.link-custom:focus {
  color: #ffffff;
}
.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
}
.hamburger-container {
  display: none;
  align-items: center;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  backdrop-filter: blur(6px);
}
#hamburger {
  display: none;
}
#hamburgerMenu {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 55%;
  height: 100%;
  background-color: black;
  border-right: 3px solid green;
  padding: 20px;
  text-align: left;
  margin-top: auto;
}
.close-hamburger {
  display: flex;
  font-size: 20px;
  color: white;
  font-weight: bold;
  margin-left: auto;
}
.menu-links {
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  justify-content: space-between;
}
#hamburgerMenu > div > a {
  color: white;
  font-size: 20px;
  font-weight: 900;
  text-decoration: none;
}
.login-content-hamburger {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  font-size: medium;
  justify-content: flex-start;
  align-items: center;
}
.login-content-hamburger > img {
  height: 2.5rem;
  width: 2.5rem;
}
.login-content-hamburger > p {
  color: white;
  margin-right: 30px;
  font-size: 20px;
  margin-left: 5px;
}

.rounded-circle {
  height: 2.5rem;
  width: 2.5rem;
}

@media only screen and (max-width: 767px) {
  .main-menu {
    display: none;
  }
  #hamburger {
    display: inline-block;
  }
  .login-content-hamburger {
    flex-direction: row;
    align-items: flex-start;
  }
  .login-content-hamburger > img {
    height: 2.5rem;
    width: 2.5rem;
  }
}
@media only screen and (max-width: 600px) {
  .main-nav > a {
    padding: 7px 10px 10px;
    font-size: 18px;
  }
  #hamburger {
    display: inline-block;
    margin-left: 10px;
  }
}
#dropLI{
  color:#fff
}
.dropdown-menu{
  background-color: #000;
}
</style>
