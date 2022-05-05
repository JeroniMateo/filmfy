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
        <router-link class="dropdown-item" to="/profile">
          <li>Perfil</li>
        </router-link>
        <router-link class="dropdown-item" to="/settings">
          <li>Ajustes</li>
        </router-link>
        <li><hr class="dropdown-divider" /></li>
        <router-link class="dropdown-item" to="#">
          <li>Log Out</li>
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
      log: false
    }
  }
}
</script>

<style></style>
