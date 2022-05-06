<template>
  <div class="container-fluid">
    <!--NavBar-->
    <div id="navmenu">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
                      <div id="FILMFY">
              <div class="FILMFY">
                <!--Filmfy Icon-->
                <router-link to="/">
                  <div id="filmfyIcon">
                    <img
                      src="../../../assets/img/LogoImageFilmfy.png"
                      alt=""
                      id="logoFilmfy"
                    />
                  </div>
                </router-link>
              </div>
              <div class="FILMFY">
                <h1 class="card-title"><b>FILMFY</b></h1>
              </div>
            </div>
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
              />
              <!--Search-->
              <router-link to="/search">
                <button id="buscarButton" class="btn-success" type="submit">Buscar</button>
              </router-link>
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
      log: true
    }
  }
}
</script>

<style scoped>
.nav-link {
  color: #ffff;
}
li {
  font-size: 3vh;
}
div#searching {
  display: flex;
}
img#logoFilmfy {
  width: 10vh;
  height: 10vh;
}
div#FILMFY {
  display: flex;
  justify-content: center;
  margin-right: 2vw;
}
h1 {
  font-size: 5vw;
  color: aquamarine;
  margin-left: 2vw  ;
}
#buscarButton{
  background-color: aquamarine;
  border-color: aquamarine;
  color: #ffff;
  font-family: Arial;
  font-size: 2.2vh;
  margin-left: -2vw; ;
}
</style>
