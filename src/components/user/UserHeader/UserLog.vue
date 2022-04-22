<template>
  <div class="userAcount">
    <img src="../../../assets/img/UserPhoto.png" alt="" />
    <li id="userProfile" class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <!--Username log-->
        Username
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><router-link class="dropdown-item" to="/profile">Perfil</router-link></li>
        <li><router-link class="dropdown-item" to="/settings">Ajustes</router-link></li>
        <li><hr class="dropdown-divider" /></li>
        <li>
          <a class="dropdown-item" href="#">Log Out</a>
        </li>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  name: "UserLog",

  data() {
    return {
      log: false,
    };
  },
};
</script>

<style scoped>
</style>