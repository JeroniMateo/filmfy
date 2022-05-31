<template>
  <div id="CreateList">
    <div class="container">
      <h1>Nueva Lista</h1>
      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-6">
          <label for="name_list" class="form-label">Nombre de la Lista</label>
          <input type="text" class="form-control" id="name_list" value="" />
        </div>
        <div class="col-md-6">
          <label for="username" class="form-label">Nombre de Usuario</label>
          <input type="text" class="form-control" id="username" required />
        </div>
        <div class="col-md-6">
          <label for="description_list" class="form-label"
            >Descripción de la lista</label
          >
          <textarea
            name="description_list"
            id="description_list"
            cols="40"
            rows="20"
          ></textarea>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit" @click="crearLista">
            Crear Lista
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProfile',
  data () {
    return {
      name_list: '',
      username: '',
      description_list: ''
    }
  },
  methods: {
    crearLista () {
      fetch('http://filmfy-api.ddns.net/api/register/', {
        method: 'POST',
        body: JSON.stringify({
          name_list: this.name_list,
          password: this.password,
          description_list: this.description_list
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
#tab-profile {
  background-color: black;
}
#CreateList {
  width: 100%;
  height: 100%;
  background-color: rgb(25, 23, 23);
}
.container {
  background-color: black;
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
  color: white;
  font-size: 3vh;
}
small {
  color: white;
  font-size: 2vh;
}
</style>
