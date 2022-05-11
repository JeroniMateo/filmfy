<template>
  <div>
    <div class="row"></div>
    <div id="TopMovie">
      <div class="col">
        <div class="col-md-12">
          <div class="container">
            <div class="TopMovieHead">
              <h3 id="topMovieNum">1.El Padrino</h3>
            </div>
            <div class="card bg-dark text-white" id="TopMovieContent">
              <img
                id="topMovieIMG"
                src="../../../assets/img/TopMovieIMG/Top-El-Padrino.jpeg"
                alt=""
              />
              <div class="card-img-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopMovie'
}
</script>

<style scoped>
h3 {
  color: #fff;
  font-size: 8vh;
  width: 100%;
  height: 10vh;
      background-color: #000;

  text-align: center;
  
}
#TopMovie
{
  margin: auto;
      width: 100%;
      padding: 3%;
    background-color: #000;
}
.TopMovieHead{
  
  display: flex;
}
</style>
