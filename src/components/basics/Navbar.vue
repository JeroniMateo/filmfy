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
                src="../../assets/img/cameraLogo.png"
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
              <router-link v-else class="nav-link disabled" to="/playlists" style="display:none">
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
                id="searchingInput"
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

  data () {
    return {
      log: false,
      search_result: ''
    }
  },
  methods: {
    searchContent () {
      this.search_result = document.getElementById('searchingInput').value
      this.$router.push('/search/' + this.search)
    }
  }
}
</script>

<style scoped>
button#buscar {
  margin-left: -3vw;
  border-radius: 10%;
  height: 5.2vh;
  background-color: #00c740;
}

.nav-link {
  color: #f7f7f5;
}
li {
  font-size: 3vh;
  margin-left: 3vh;
  margin-right: 3vh;
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
  margin-right: 2vw;
}
h1 {
  font-size: 3vw;
  color: #5bdee6;
  margin-left: 2vw;
}
a {
  text-decoration: none;
  color: #f7f7f5;
}
#buscarButton{
  background-color: #5bdee6;
  border-color: #5bdee6;
  color: #f7f7f5;
  font-family: Arial;
  font-size: 2.2vh;
  margin-left: -2vw; ;
}
</style>
