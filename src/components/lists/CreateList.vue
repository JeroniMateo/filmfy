<template>
  <div id="CreateList">
    <div class="container">
      <form class="row g-3 needs-validation" novalidate>
        <h1><b>Nueva Lista</b></h1>
        <div id="CrearListaForm" class="col-md-6">
          <label for="name_list" class="form-label">Nombre de la Lista</label>
          <input type="text" class="form-control" id="name_list" value="" />
        </div>
        <div class="col-md-6">
          <label for="username" class="form-label">Nombre de Usuario</label>
          <input type="text" class="form-control" id="username" required />
        </div>
        <div class="col-md-6 description" >
          <label for="description_list" class="form-label"
            >Descripción</label
          >
          <textarea
            name="description_list"
            id="description_list"
            cols="70"
            rows="8"
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
  name: 'CreateList',
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
  width: 70%;
  padding: 2%;
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
label,p {
  color: white;
  font-size: 3vh;
}
small {
  color: white;
  font-size: 2vh;
}

.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
input{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
textarea{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
