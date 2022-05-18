<template>
  <div id="UserSettings">
    <div class="container-fluid">
      <UserItems />
    </div>
  </div>
</template>

<script>
import UserItems from '../../components/user/UserProfile/UserItems.vue'
export default {
  name: 'UserSettings',
  components: {
    UserItems
  }
}
</script>

<style>
#UserSettings {
  margin: auto;
  width: 85%;
}
</style>
