<template>
  <div class="container-fluid">
    <!--Card1-->
    <div class="container-fluid">
      <div class="card mb-3" id="welcomeCard">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="../../assets/img/Welcome/Share_all_Lists.png"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                Crea listas <br />
                y compartelas
              </h5>
              <p class="card-text">
                Almacena tu mejor contenido <br />
                y disfrutalo junto a tus amigos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Card2-->
    <div class="container-fluid">
      <div class="card mb-3" id="welcomeCard">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                Se un referente <br />
                de cine
              </h5>
              <p class="card-text">
                Estate en todos los debates y demuestra y ponte a prueba <br />
                sobre tus conocimientos e intereses por todo tipo de conenido
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <img
              src="../../assets/img/Welcome/ReferenteDeCine.png"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
    <!--Card3-->
    <div class="container-fluid">
      <div class="card mb-3" id="welcomeCard">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="../../assets/img/Welcome/Content_News.png"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                Enterate de las últimas <br />
                novedades
              </h5>
              <p class="card-text">
                Estate a la ultima i enterate de todo lo que te interesa <br />
                de este arte y cultura digital
              </p>
            </div>
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

<style scoped>
h2 {
  color: #00fff2;
  font-size: 10vh;
  font-weight: bold;
}
h5 {
  color: rgb(30, 81, 40);
  font-size: 5vh;
  font-weight: bold;
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

div#welcomeCard {
     display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    align-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 40vh;
    background-color: #4E9F3D;
}
</style>