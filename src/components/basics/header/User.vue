<template>
  <div @click="login()" class="user">
    <!--
      v-if if log = false
        div id="UserNotLog"

      v-else if log = true 
        div id="UserLog"
      -->

    <!--If the user is log -->
    <!--Inside this div will show the User Name when it's loged -->
    <div v-if="log" id="UserLog" hidden class="btn">
      <UserLog />
    </div>
    <!-- If the user is not log -->
    <div v-else id="UserNotLog" class="btn">
      <UserNotLog />
    </div>
  </div>
</template>

<script>
import UserLog from "@/components/user/UserHeader/UserLog.vue";
import UserNotLog from "@/components/user/UserHeader/UserNotLog.vue";

export default {
  name: "User",
  components: {
    UserLog,
    UserNotLog,
  },
  data() {
    return {
      log: false,
    };
  },
};
</script>

<style>
img#UserNotLogIMG {
  width: 5vh;
}
div.user {
  display: flex;
}
</style>