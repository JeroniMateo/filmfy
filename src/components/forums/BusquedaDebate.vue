<template>
  <form action="">
    <div class="container">
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
        <div class="input-group mb-3 col">
        <input type="text" placeholder="Actor" />
        </div>
        <div class="input-group mb-3 col">
        <input type="text" placeholder="Director" name="" id="" />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'BusquedaDebate'
}
</script>

<style></style>
