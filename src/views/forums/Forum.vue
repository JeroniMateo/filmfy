<template>
  <div id="Forum" class="all">
    <h1>Foros de Debate</h1>
    <div class="newForum">
      <div id="BusquedaDebateComponent">
        <BusquedaDebate />
      </div>
      <button @click="crearDebate" id="crearDebate" type="button">Crear nuevo debate</button>
    </div>
    <form action="" id="debateForm" style="display: none">
      <div class="container">
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="tituloDebate"
            placeholder="Título Debate"
          />
        </div>
        <div class="row">
          <div class="input-group mb-3 col">
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Tipo de Contenido</option>
              <option value="1">Película</option>
              <option value="2">Serie</option>
              <option value="3">Documental</option>
            </select>
          </div>
          <div class="input-group mb-3 col">
            <select class="form-select" id="inputGroupSelect02">
              <option selected>Categoria</option>
              <option value="Suspense">Suspense</option>
              <option value="Acción">Acción</option>
              <option value="Terror">Terror</option>
              <option value="Aventura">Aventura</option>
              <option value="Drama">Drama</option>
              <option value="Crimen">Crimen</option>
              <option value="Épico">Épico</option>
              <option value="Fantasia">Fantasia</option>
              <option value="Animación">Animación</option>
              <option value="Comedia Dramática">Comedia Dramática</option>
              <option value="Romántico">Romántico</option>
              <option value="Ciencia Ficción">Ciencia Ficción</option>
              <option value="Biografía">Biografía</option>
              <option value="Comedia">Comedia</option>
              <option value="Comedia Musical">Comedia Musical</option>
              <option value="Western">Western</option>
              <option value="Histórico">Histórico</option>
              <option value="Guerra">Guerra</option>
              <option value="Familia">Familia</option>
              <option value="Judicial">Judicial</option>
              <option value="BollyWood">BollyWood</option>
              <option value="Musical">Musical</option>
              <option value="Espionaje">Espionaje</option>
            </select>
          </div>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Describe tu Tema de Debate"
          ></textarea>
          <div class="save">
            <button @click="añadirDebate" type="button">Añadir Debate</button>
          </div>
        </div>
      </div>
    </form>
    <div id="DebateDiv"></div>
  </div>
</template>

<script>
import BusquedaDebate from '../../components/forums/BusquedaDebate.vue'
export default {
  name: 'Forum',
  components: {
    BusquedaDebate
  },
  methods: {
    crearDebate() {
      document.getElementById('debateForm').style.display = 'block'
      document.getElementById('crearDebate').style.display = 'none'
      document.getElementById('BusquedaDebateComponent').style.display = 'none'
    },
    añadirDebate() {
      document.getElementById('debateForm').style.display = 'none'
      document.getElementById('crearDebate').style.display = 'block'
      document.getElementById('BusquedaDebateComponent').style.display = 'block'
      document.getElementById('DebateDiv').innerHTML = ''
    }
  }
}
</script>

<style>
.all {
  background-color: black;
}
h1 {
  color: #00c740;
}
button {
  background-color: #2ecc71;
}
label {
  font-size: 4vh;
  color: #fff;
}
#crearDebate{
  margin: 1%;
}
</style>
