<template>
  <div class="list-details">

    <div class="initial">
      <div class="user">
        <img src="#" alt=""/>
        <span>Lista de Toni García</span>
      </div>

      <div class="data">
        <span>Actualizada el 7 de enero </span>
        <span>27 películas</span>
      </div>
    </div>

    <div class="title-description">
      <div>
        <h1>List title</h1>
      </div>
      <div>
        <h1>This is the description of the list. No limit of words here</h1>
      </div>
    </div>

    <div class="tags">
      <div class="p-3 d-flex align-items-center justify-content-center" id="categories" data-v-32954910="">
        <p style="border: 1px solid white; border-radius: 20px; padding: 4px 12px 4px 12px; margin-bottom: 0px; margin-right: 10px">
        Animación
        </p>
        <p style="border: 1px solid white; border-radius: 20px; padding: 4px 12px 4px 12px; margin-bottom: 0px; margin-right: 10px">
          Aventura
        </p>
        <p style="border: 1px solid white; border-radius: 20px; padding: 4px 12px 4px 12px; margin-bottom: 0px; margin-right: 10px">
          Familia</p>
      </div>
    </div>

    <div class="col-12 col-md-6 col-lg-2 d-flex align-items-center justify-content-center justify-content-lg-start order-lg-last flex-column p-0 my-3">
      <AsideDetailedList :list="this.list"/>
    </div>

  </div>
  <div>
    <img src="https://static.carrefour.es/hd_510x_/imagenes/products/84351/07832/636/8435107832636/imagenGrande1.jpg" width="75" height="140" alt=""/>
  </div>

</template>

<script>
import AsideDetailedList from "@/components/lists/AsideDetailedList";
export default {
  name: "DetailedListPage",
  components: {
    AsideDetailedList
  },
  data() {
    return {
      list: [],
    }
  }
}

</script>

<style scoped>

* {
  background-color: black;
}

</style>