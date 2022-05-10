<template>
  <div>
    <div class="row"></div>
    <div id="TopMovie">
      <div class="col">
        <div class="col-md-12">
          <div class="container">
            <div class="TopMovieHead">
              <h3 id="topMovieNum">1.<b>El Padrino</b></h3>
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
h3{
    color: #fff;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: #000;
}
#TopMovie
{
  margin: auto;
    width: 90%;
    padding: 3%;
}
</style>
