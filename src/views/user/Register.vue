<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="css/forms.css" />
      <title>TimeInn - Regístrate</title>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="images/Logo Music4Events.png"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <div id="layout">
        <header>
          <a href="Index.html"><img src="images/Logo Music4Events.png" /></a>
        </header>
        <section id="infoutil">
          <h4>Reserva entrada en tu concierto favorito</h4>
          <div>
            <i class="fas fa-ticket-alt"></i>
            <div>
              En nuestra web te ofrecemos todas las facilidades para que puedas
              conseguir entradas para ver a tus artistas favoritos.
            </div>
          </div>

          <h4>Entérate de las últimas novedades</h4>
          <div>
            <i class="far fa-newspaper"></i>
            <div>
              Trabajamos día a día para mantenerte actualizado. En nuestro
              portal de noticias podrás conocer de primera mano todo lo que
              necesitas saber.
            </div>
          </div>

          <h4>Participa en nuestros sorteos</h4>
          <div>
            <i class="far fa-star"></i>
            <div>
              Desde camisetas personalizadas, hasta pasar un día con tu ídolo.
              Formar parte de la comunidad de Music4Events te da la oportunidad
              a participar en todos los sorteos.
            </div>
          </div>
          <h3>¿A qué estás esperando?</h3>
        </section>
        <div id="formSignUp">
          <h1>Registrarse</h1>
          <form action="">
            <input
              id="emailR"
              placeholder="Email*"
              class="registro"
              type="email"
              name="email"
            />
            <p id="errorEmail" class="error"></p>
            <input
              id="passwordR"
              placeholder="Password*"
              class="registro"
              type="password"
              name="password"
            />
            <p id="errorPassword" class="error"></p>
            <button
              type="button"
              @click="signUpAPI"
              id="signUpButton"
              class="button"
              aria-label="Regístrate"
            >
              Regístrate
            </button>
            <div>¿Ya tienes una cuenta?</div>
            <button id="loginButton" class="button" aria-label="Inicia sesión">
              <router-link to="/login">Inicia sesión</router-link>
            </button>
            <div id="signUpAlert"></div>
          </form>
        </div>
      </div>
    </body>
  </html>
</template>

<script>
export default {
  name: "Register",
  data: {},
  methods: {
    setCookie: function (cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      let expires = "expires=" + d.toGMTString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    //El usuario introduce un email y una contraseña y lo añadimos a la api de users.json
    signUpAPI: function () {
      fetch("", {
        method: "POST",
        body: JSON.stringify({
          email: document.getElementById("emailR").value,
          password: document.getElementById("passwordR").value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((token) => {
          setCookie("tokenName", token.access_token, 365);
          window.location.href = "";
        })
        .catch(function (error) {
          console.log("Error en el fetch", error);
        });
    },
  },
};
</script>

<style>
</style>