<template>

  <div class="all">
    <header @load="hamburgerIconHandling" class="container-md d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

      <div id="hamburger" @click="hamburgerIconHandling">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>

      <div class="main-menu d-flex col-md-3 mx-3">
        <a href="/" class="d-flex align-items-center mb-md-0 text-dark text-decoration-none">
          <img src="../../assets/img/cameraLogo.png" class="bi me-2" width="30" height="30" role="img" aria-label="Bootstrap" alt="logo"/>
        </a>
        <span class="brand-name"><strong>Filmfy</strong></span>
      </div>

      <ul class="main-menu nav col-12 col-md-auto justify-content-center mb-md-0">
        <li><a href="/movies" class="nav-link px-2 link-custom text-large mx-2 mx-lg-4">Películas</a></li>
        <li><a href="/lists" class="nav-link px-2 link-custom text-large mx-2 mx-lg-4">Listas</a></li>
        <li><a href="#" class="nav-link px-2 link-custom text-large mx-2 mx-lg-4">Usuarios</a></li>
      </ul>

      <div v-if="!log" class="main main-menu col-md-3 text-end">
        <a href="/login"><button type="button" class="btn btn-outline-primary me-2">Accede</button></a>
      </div>
      <div v-else class="main main-menu col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Mi perfil</button>
      </div>

      <div class="hamburger-container">
        <div id="hamburgerMenu">
          <a href="" style="text-decoration: none;">
            <div style="display: flex; align-items: center;">
              <img class="logo" src="../../assets/img/cameraLogo.png" width="30" height="30" alt="logo">
              <p class="brand-name">Filmfy</p>
              <span class="close-hamburger">&times;</span>
            </div>
          </a>
          <div class="menu-links">
            <a href="">Películas</a>
            <a href="">Listas</a>
            <a href="">Usuarios</a>
          </div>

          <div v-if="!log" class="login-content-hamburger">
            <a href="/login"><button type="button" class="btn btn-outline-primary me-2">Accede</button></a>
          </div>
          <div v-else class="login-content-hamburger">
            <button type="button" class="btn btn-outline-primary me-2">Mi perfil</button>
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
    openHamburger: '',
    closeHamburger: '',
    log: false
  }),

  async beforeMount() {

    this.token = getCookie("auth")
    if (this.token) {
      this.userID = await getUser(this.token)
      if (this.userID !== "User expired") {
        this.log = true
      }
    }

  },

  methods: {
    hamburgerIconHandling () {
      this.openHamburger = document.getElementById('hamburger')
      document.getElementsByClassName('hamburger-container')[0].style.display =
          'flex'

      this.closeHamburger = document.getElementsByClassName('close-hamburger')[0]
      this.closeHamburger.addEventListener('click', function () {
        document.getElementsByClassName(
            'hamburger-container'
        )[0].style.display = 'none'
      })
    },
    login () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.all {
  background-color: #242424;
  padding-bottom: 10px;
}
.brand-name {
  font-size: 175%;
  color: #ffff;
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
  z-index: 1;
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

#hamburgerMenu > a > div > .brand-name {
  color: white;
  font-size: 25px;
  font-weight: 900;
  margin-top: 8px;
  margin-left: 5px;
}

.close-hamburger {
  display: flex;
  font-size: 45px;
  color: white;
  font-weight: bold;
  margin-left: auto;
}

.menu-links {
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  justify-content: space-between;
}

#hamburgerMenu > div > a {
  color: white;
  font-size: 20px;
  font-weight: 900;
  text-decoration: none;
  padding: 8px 14px 13px;
}

.login-content-hamburger {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  font-size: medium;
  justify-content: flex-start;
  margin-left: 10px;
  align-items: center;
}

.login-content-hamburger > img {
  height: 20px;
}

.login-content-hamburger > p {
  color: white;
  margin-right: 30px;
  font-size: 20px;
  margin-left: 5px;
}

@media only screen and (max-width: 767px) {
  .main-menu {
    display: none;
  }
  #hamburger {
    display: inline-block;
  }
  .login-content-hamburger {
    flex-direction: column;
    align-items: flex-start;
  }
  .login-content-hamburger > img {
    height: 1.5rem;
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
</style>
