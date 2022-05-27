<template>
  <div id="Welcome" class="container-fluid p-3 card bg-dark text-white">
    <div id="MainWelcome" class="card-img-overlay">
      <div class="FilmfyIs card-img-overlay">
        <h4 class="card-text">
          <b>
            Encuentra conentido ideal <br />
            crea tus mejores listas de cine <br />
            y compartirlas con tus amigos</b
          >
        </h4>
        <br />
        <p class="card-text">
          Tu sitio para disfrutar del contenido digital ideal
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainWelcome'
}
</script>

<style scoped>
#Welcome {
  background-image: url('../../assets/img/Welcome/MainContentImageWelcome.jpg');
  padding: 400px 100px;
  text-align: center;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  width: 85%;
  margin: auto;
  height: 50vh;
}

#Welcome:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0f0505;
}
#Welcome h1 {
  font-size: 60px;
  color: #f7f7f5;
  position: relative;
}
#MainContentImageWelcome {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#buscarContenido {
  display: flex;
}
h2 {
  color: #00c740;
  font-size: 10vh;
}
h4 {
  color: ##f7f7f5;
  font-size: 3.5vw;
  float: left;
}
div#buscarContenido {
  margin-top: 20px;
  background-color: #242424;
}
label#verHoy {
  margin-top: 20px;
  color: #0f0505;
}
button {
  color: #f7f7f5;
  background-color: #2ecc71;
}
div#MainWelcome {
  display: flex;
  flex-direction: column-reverse;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: nowrap;
}
div.FilmfyIs {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
}

p {
  color: #2ecc71;
  font-size: 2rem;
  padding: 1%;
}
</style>
