<template>
  <div onclick="login()" class="user">
    <!--
      v-if if log = false
        div id="UserNotLog"

      v-else if log = true 
        div id="UserLog"
      -->

    <!--If the user is log -->
    <!--Inside this div will show the User Name when it's loged -->
    <div v-if="log" id="UserLog" hidden class="btn">
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
            <li><a class="dropdown-item" href="#">Perfil</a></li>
            <li><a class="dropdown-item" href="#">Ajustes</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#">Log Out</a>
            </li>
          </ul>
        </li>
      </div>
    </div>
        <!-- If the user is not log -->
    <div v-else id="UserNotLog" class="btn">
      <router-link to="../../../views/user/Login.vue">
        <img
          id="UserNotLogIMG"
          src="../../../assets/img/UserPhoto.png"
          alt=""
        />
        <p id="userProfile">Login</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",

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