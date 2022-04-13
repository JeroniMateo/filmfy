<template>
  <div class="container-fluid p-3">
    <!--Card1-->
    <div class="container-fluid p-3">
      <div class="card bg-dark text-white p-3">
        <img
          src="../../assets/img/Welcome/Share_all_Lists.png"
          id="Welcomecard"
          class="card-img"
          alt="..."
          height="500px"
        />
        <div class="card-img-overlay">
          <div class="cardTitle">
            <h2 class="card-title">
              Crea Listas <br />
              y compártelas
            </h2>
          </div>

          <div class="cardText">
            <h5 class="card-text">
              <b>
                Se el creador de tu propio repertorio <br />
                y comparte tus listas con tus amigos.</b
              >
            </h5>
          </div>
        </div>
      </div>
    </div>
    <!--Card2-->
    <div class="container-fluid p-3">
      <div class="card bg-dark text-white p-3">
        <img
          src="../../assets/img/Welcome/ReferenteDeCine.png"
          id="Welcomecard"
          class="card-img"
          alt="..."
          height="500px"
        />
        <div class="card-img-overlay">
          <div class="cardTitle">
            <h5 class="card-text">
              <b
                >¡Sé el referente de tu contenido favorito! <br />
                Estate en todo debate de este arte</b
              >
            </h5>
          </div>
          <div class="cardText">
            <h2 class="card-title">
              Se un referente <br />
              de Cine
            </h2>
          </div>
        </div>
      </div>
    </div>
    <!--Card3-->
    <div class="container-fluid p-3">
      <div class="card bg-dark text-white p-3">
        <img
          src="../../assets/img/Welcome/Content_News.png"
          id="Welcomecard"
          class="card-img"
          alt="..."
          height="500px"
        />
        <div class="card-img-overlay">
          <div class="cardTitle">
            <h2 class="card-title">
              Enterate de las ultimas <br />
              novedades
            </h2>
          </div>

          <div class="cardText">
            <h5 class="card-text">
              <b>
                No te pierdas ni un solo detalle y <br />
                novedad de ninuno de tus artistas y contenidos favoritos.</b
              >
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeCards",
};
</script>

<style>
h2 {
  color: #00fff2;
  font-size: 10vh;
}
h5 {
  color: green;
  font-size: 5vh;
}
img#Welcomecard {
  filter: blur(4px);
}
div.cardText {
  display: grid;
  align-items: end;
}

.card-img-overlay {
  display: grid;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  border-radius: calc(0.25rem - 1px);
}
</style>