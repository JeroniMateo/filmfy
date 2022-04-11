<template>
  <div class="container">
    <div onclick="login()" class="user">
      <!--If the user is not log -->
      <div id="UserNotLog" hidden>
        <img src="../../../../public/img/UserPhoto.png" alt="" />
        <p id="userProfile"></p>
      </div>
      <!--If the user is log -->
      <!--Inside this div will show the User Name when it's loged -->
      <div v-if="log" id="UserNotLog" hidden>
        <div class="userAcount">
          <img src="../../../../public/img/UserPhoto.png" alt="" />
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
    </div>
  </div>
</template>

<script>
export default {
    name: "User",
};
</script>

<style>
</style>