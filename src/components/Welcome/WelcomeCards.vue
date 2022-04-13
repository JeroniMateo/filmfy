<template>
  <div class="container-fluid ">
    <!--Card1-->
   <div class="container-fluid">
      <div class="card mb-3" >
      <div class="row g-0">
        <div class="col-md-4">
          <img src="../../assets/img/Welcome/Share_all_Lists.png" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
   </div>
    <!--Card2-->
    <div class="container-fluid">
      <div class="card mb-3" >
      <div class="row g-0">
       
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
         <div class="col-md-4">
          <img src="../../assets/img/Welcome/ReferenteDeCine.png" class="img-fluid rounded-start" alt="..." />
        </div>
      </div>
    </div>
   </div>
    <!--Card3-->
    <div class="container-fluid">
      <div class="card mb-3" >
      <div class="row g-0">
        <div class="col-md-4">
          <img src="../../assets/img/Welcome/Content_News.png" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
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