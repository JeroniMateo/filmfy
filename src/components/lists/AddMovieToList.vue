<template>
  <div id="AddMovieToList">
    <div class="container">
      <h1>Añadir una nueva pelicula a una Lista</h1>
      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-12">
          <label for="movie_name" class="form-label"
            >Nombre de la pelicula</label
          >
          <input type="text" class="form-control" id="movie_name" value="" />
        </div>
        <div class="col-md-12">
          <label for="list_name" class="form-label">Nombre de la Lista</label>
          <input type="text" class="form-control" id="list_name" required />
        </div>
        <div class="col-md-12">
          <label for="username" class="form-label">Nombre de usuario</label>
          <input type="text" class="form-control" id="username" required />
        </div>

        <div class="col-12">
          <button
            class="btn btn-primary"
            type="submit"
            @click="añadirNuevaPelicula;"
          >
            Añadir Pelicula
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddMovieToList',
  data () {
    return {
      list_name: '',
      username: '',
      movie_name: ''
    }
  },
  methods: {
    añadirNuevaPelicula () {
      fetch('http://filmfy-api.ddns.net/api/user-lists/{id}', {
        method: 'POST',
        body: JSON.stringify({
          list_name: this.list_name,
          username: this.username,
          movie_name: this.movie_name
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
        })
        .then(() => {
          this.$router.push('/lists')
        })
        .catch(function (error) {
          console.log('Error en el fetch', error)
        })
    }
  }
}
</script>

<style scoped>
#Perfil {
  background-color: #445566;
}
#tab-profile {
  background-color: #0f0505;
}
#AddMovieToList {
  width: 100%;
  height: 100%;
  background-color: #242424;
}
.container {
  background-color: #242424;
  padding: 5%;
  width: 70%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  flex-direction: column;
}
h1 {
  font-size: 7vh;
  color: #00c740;
}
label {
  color: #fffdfd;
  font-size: 3vh;
}
</style>
