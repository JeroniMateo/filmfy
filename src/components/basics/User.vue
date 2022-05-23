<template>
  <div class="user">
    <div v-if="log" id="UserLog" hidden class="btn">
      <UserLog />
    </div>
    <div v-else id="UserNotLog" class="btn">
      <UserNotLog />
    </div>
  </div>
</template>

<script>
import UserLog from '@/components/user/UserLog.vue'
import UserNotLog from '@/components/user/UserNotLog.vue'

export default {
  name: 'User',
  components: {
    UserLog,
    UserNotLog
  }
}
</script>
@/components/user/UserLog.vue
<style scoped>
img#UserNotLogIMG {
  width: 5vh;
}
div.user {
  display: flex;
}
</style>
