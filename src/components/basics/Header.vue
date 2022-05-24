<template>
  <header
    @load="hamburgerIconHandling"
    class="container-md d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
  >
    <div id="hamburger" @click="hamburgerIconHandling">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>

    <div class="main-menu d-flex col-md-3 mx-3">
      <a
        href="/"
        class="d-flex align-items-center mb-md-0 text-dark text-decoration-none"
      >
        <img
          src="../../assets/img/cameraLogo.png"
          class="bi me-2"
          width="30"
          height="30"
          role="img"
          aria-label="Bootstrap"
          alt="logo"
        />
        <span class="brand-name"><strong>Filmfy</strong></span>
      </a>
    </div>

    <ul class="main-menu nav col-12 col-md-auto justify-content-center mb-md-0">
      <li>
        <a
          href="/movies"
          class="nav-link px-2 link-custom text-large mx-2 mx-lg-4"
          >Películas</a
        >
      </li>
      <li>
        <a
          href="/playlists"
          class="nav-link px-2 link-custom text-large mx-2 mx-lg-4"
          >Listas</a
        >
      </li>
      <li>
        <a href="#" class="nav-link px-2 link-custom text-large mx-2 mx-lg-4"
          >Usuarios</a
        >
      </li>
    </ul>

    <div class="main main-menu col-md-3 text-end">
      <button v-if="log" type="button" class="btn btn-outline-primary me-2">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fa-solid fa-user"></i> {{ username }}
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a class="dropdown-item" href="/userProfile">Mi Perfil</a></li>
          <li><a class="dropdown-item" href="/playlists">Mis Listas</a></li>
          <li @click="logout">
            <a class="dropdown-item" href="#">Cerrar Sesión</a>
          </li>
        </ul>
      </button>
      <button
        v-else
        type="button"
        class="btn btn-outline-primary me-2"
        @click="login"
      >
        Accede
      </button>
    </div>

    <div class="hamburger-container">
      <div id="hamburgerMenu">
        <a href="" style="text-decoration: none">
          <div style="display: flex; align-items: center">
            <img
              class="logo"
              src="../../assets/img/cameraLogo.png"
              width="30"
              height="30"
              alt="logo"
            />
            <p class="brand-name">Filmfy</p>
            <span class="close-hamburger">&times;</span>
          </div>
        </a>
        <div class="menu-links">
          <a href="/movies">Películas</a>
          <a href="/playlists">Listas</a>
          <a href="">Usuarios</a>
        </div>
        <div class="login-content-hamburger">
          <button v-if="log" type="button" class="btn btn-outline-primary me-2">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa-solid fa-user"></i> {{ username }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="dropdown-item" href="/userProfile">Mi Perfil</a>
              </li>
              <li><a class="dropdown-item" href="/playlists">Mis Listas</a></li>
              <li @click="logout">
                <a class="dropdown-item" href="#">Cerrar Sesión</a>
              </li>
            </ul>
          </button>
          <button
            v-else
            type="button"
            class="btn btn-outline-primary me-2"
            @click="login"
          >
            Accede
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// import Navbar from './Navbar.vue'
// import User from './User.vue'
export default {
  name: 'Header',
  components: {
    // Navbar,
    // User
  },
  data: () => ({
    openHamburger: '',
    closeHamburger: '',
    username: '',
    log: true
  }),
  methods: {
    hamburgerIconHandling() {
      this.openHamburger = document.getElementById('hamburger')
      document.getElementsByClassName('hamburger-container')[0].style.display =
        'flex'

      this.closeHamburger =
        document.getElementsByClassName('close-hamburger')[0]
      this.closeHamburger.addEventListener('click', function () {
        document.getElementsByClassName(
          'hamburger-container'
        )[0].style.display = 'none'
      })
    },
    login() {
      this.$router.push('/login')
    },
    logout() {
      localStorage.removeItem('token')
      this.log = false
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.brand-name {
  font-size: 175%;
  color: #f7f7f5;
}

.text-large {
  font-size: 1rem;
}

.link-custom {
  color: #787b66;
  font-weight: bold;
}
.link-custom:hover,
.link-custom:focus {
  color: #f7f7f5;
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 5px;
  background-color: #f7f7f5;
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
  background-color: #0f0505;
  border-right: 3px solid #00c740;
  padding: 20px;
  text-align: left;
  margin-top: auto;
}

#hamburgerMenu > a > div > .brand-name {
  color: #f7f7f5;
  font-size: 25px;
  font-weight: 900;
}

.close-hamburger {
  display: flex;
  font-size: 45px;
  color: #f7f7f5;
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
  color: #f7f7f5;
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
  color: #f7f7f5;
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
