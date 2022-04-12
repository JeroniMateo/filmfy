<template>
  <div class="container-fluid">
    <!--Card1-->
    <div class="card bg-dark text-white">
      <img
        src="../../assets/img/Welcome/Share_all_Lists.png"
        class="card-img"
        alt="..."
        height="500px"
      />
      <div class="card-img-overlay">
        <h2 class="card-title">
          Crea Listas <br />
          y compártelas
        </h2>
        <h5 class="card-text">
          Se el creador de tu propio repertorio <br />
          y comparte tus listas con tus amigos.
        </h5>
        <p class="card-text">Last updated 3 mins ago</p>
      </div>
    </div>
    <!--Card2-->
    <div class="card bg-dark text-white">
      <img
        src="../../assets/img/Welcome/ReferenteDeCine.png"
        class="card-img"
        alt="..."
        height="500px"
      />
      <div class="card-img-overlay">
        <h2 class="card-title">
          Se un referente <br />
          de Cine
        </h2>
        <h5 class="card-text">
          ¡Sé el referente de tu contenido favorito! <br />
          Estate en todo debate de este arte
        </h5>
        <p class="card-text">Last updated 3 mins ago</p>
      </div>
    </div>
    <!--Card3-->
    <div class="card bg-dark text-white">
      <img
        src="../../assets/img/Welcome/Content_News.png"
        class="card-img"
        alt="..."
        height="500px"
      />
      <div class="card-img-overlay">
        <h2 class="card-title">
          Enterate de las ultimas <br />
          novedades
        </h2>
        <h5 class="card-text">
          TNo te pierdas ni un solo detalle y <br />
          novedad de ninuno de tus artistas y contenidos favoritos.
        </h5>
        <p class="card-text">Last updated 3 mins ago</p>
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
  color: red;
  font-size: 5vh;
}
img{
  filter: blur(4px);
}
</style>