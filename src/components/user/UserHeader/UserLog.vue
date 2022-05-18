<template>
  <div class="userAcount">
    <img src="../../../assets/img/UserPhoto.png" alt="" />
    <li id="userProfile" class="nav-item dropdown">
      <img id="img_user" alt="">
        <p id="userName">{{ userName }}</p>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <router-link class="dropdown-item" to="/userProfile">
          <li>Perfil</li>
        </router-link>
        <router-link class="dropdown-item" to="/settings">
          <li>Ajustes</li>
        </router-link>
        <li><hr class="dropdown-divider" /></li>
        <router-link class="dropdown-item" to="#">
          <li @click="logOut" >Log Out</li>
        </router-link>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  name: 'UserLog',

  data() {
    return {
      log: true,
      userName: '',
      img_user: '',
    }
  },
  methods: {
    logOut() {
      this.log = false
      this.$router.push('/')
    }
    }
}
</script>

<style></style>
