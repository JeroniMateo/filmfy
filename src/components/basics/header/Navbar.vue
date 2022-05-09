<template>
  <div class="container-fluid">
    <!--NavBar-->
    <div id="navmenu">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <router-link to="/">
            <div id="FILMFY">
              <!--Filmfy Icon-->
              <img
                src="../../../assets/img/cameraLogo.png"
                alt=""
                id="logoFilmfy"
              />
              <h1 class="card-title"><b>FILMFY</b></h1>
            </div>
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <router-link class="nav-link" to="/home">
                <li class="nav-item">Home</li>
              </router-link>
              <router-link class="nav-link" to="/movies">
                <li class="nav-item">Peliculas</li>
              </router-link>
              <router-link class="nav-link" to="/outstandings">
                <li class="nav-item">Destacados</li>
              </router-link>
              <router-link class="nav-link" to="/billboard">
                <li class="nav-item">Cartelera</li>
              </router-link>

              <!--This Navbar link will be enabled if the user is loged-->
              <router-link v-if="log" class="nav-link" to="/playlists">
                <li class="nav-item">Mis Listas</li>
              </router-link>
              <router-link v-else class="nav-link disabled" to="/playlists">
                <li class="nav-item">Mis Listas</li>
              </router-link>
            </ul>

            <div id="searching">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                v-model="search"
              />
              <!--Search-->
              <button
                class="btn-success"
                id="buscar"
                type="submit"
                @click="searchContent"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

  data() {
    return {
      log: true,
      search: ''
    }
  },
  methods: {
    searchContent() {
      this.$router.push('/search/' + this.search)
    }
  }
}
</script>

<style scoped>
button#buscar {
  margin-left: -3vw;
  border-radius: 10%;
  height: 4vh;
  background-color: #2ecc71;
}

.nav-link {
  color: #ffff;
}
li {
  font-size: 2.5vh;
}
div#searching {
  display: flex;
}
img#logoFilmfy {
  width: 3vw;
  height: 3vw;
}
div#FILMFY {
  display: flex;
  justify-content: center;
  margin-right: 5vw;
}
h1 {
  font-size: 3vw;
  color: aquamarine;
  margin-left: 2vw;
}
a {
  text-decoration: none;
  color: #fff;
}
</style>
