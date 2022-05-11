<template>
  <div id="Home">
    <div v-if="log" id="HomeUserLog">
      <HomeLog />
    </div>
    <div v-else id="HomeNotUserLog">
      <HomeNotLog/>
    </div>
  </div>
</template>

<script>
import HomeNotLog from '@/components/Home/HomeNotLog.vue'
import HomeLog from '@/components/Home/HomeLog.vue'
export default {
  name: 'HomeView',
  components: {
    HomeNotLog,
    HomeLog
},
  data() {
    return {
      log: true
    }
  },
}
</script>
<style scoped>
h3 {
  color: #4E9F3D;
  font-size: 6vh;
  width: 100%;
  height: 8vh;
  background-color: #000;
  text-align: center;
}
.HomeSection {
  background-color: #161414;
  color: #19282f;
  font-family: Arial;
  font-size: 2vh;
  display: flex;
  flex-direction: col;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
}
</style>
