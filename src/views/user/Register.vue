<template>
  <div class="container-fluid px-5 big-div">
    <div class="row align-items-center justify-content-center">
      <section class="user-benefits form col-12 col-lg-4 p-3">
        <div class="benefit 1 my-3">
          <div>
            <i class="fas fa-film"></i>
          </div>
          <div class="d">
            <h3 style="color: green">Disfruta de este arte llamado Cine</h3>
            <p style="font-size: 15px; "> No te pierdas ninguna de las películas que te gustan. ¡Las
              podrás guardar!</p>
          </div>
        </div>
        <div class="benefit 2 my-3">
          <div>
            <i class='far fa-calendar'></i>
          </div>
          <div>
            <h3 style="color: green">Pasa momentos inolvidables junto a tus amigos</h3>
            <p style="font-size: 15px">Comparte tus listas, opiniones y películas con quien quieras,
              cuando sea.</p>
          </div>
        </div>
        <div class="benefit 3 my-3">
          <div>
            <i class="far fa-newspaper"></i>
          </div>
          <div>
            <h3 style="color: green">Ten recuerdo de los grandes momentos del Cine</h3>
            <p style="font-size: 15px">Da likes, guarda listas y organiza tus películas favoritas como
              prefieras.</p>
          </div>
        </div>
      </section>

      <section class="form col-12 col-lg-4 px-4">
        <form @submit.prevent="onSubmit" class="d-flex align-items-center flex-column w-100">
          <!-- First and Last Name Row -->
          <div class="row">

            <div class="col-12">
              <div class="form-group">
                <label for=""></label><input class="form-control" placeholder="Nombre*" type="text"
                                             v-model="v$.form.firstName.$model">
                <div class="pre-icon os-icon os-icon-user-male-circle"></div>
                <!-- Error Message -->
                <div class="input-errors py-2" v-for="(error, index) of v$.form.firstName.$errors" :key="index">
                  <div class="error-msg text-danger">{{ error.$message }}</div>
                </div>
              </div>
            </div>
            <!-- Email Row -->
            <div class="col-12">
              <div class="form-group">
                <label for=""> </label><input class="form-control" placeholder="Email*" type="email"
                                              v-model="v$.form.email.$model">
                <div class="pre-icon os-icon os-icon-email-2-at2"></div>
                <!-- Error Message -->
                <div class="input-errors py-2" v-for="(error, index) of v$.form.email.$errors" :key="index">
                  <div class="error-msg text-danger">{{ error.$message }}</div>
                </div>
              </div>
            </div>

            <!-- Password and Confirm Password Row -->
            <div class="col-12">
              <div class="form-group">
                <label for=""></label><input class="form-control" placeholder="Contraseña*" type="password"
                                             v-model="v$.form.password.$model">
                <div class="pre-icon os-icon os-icon-fingerprint"></div>
                <!-- Error Message -->
                <div class="input-errors py-2" v-for="(error, index) of v$.form.password.$errors" :key="index">
                  <div class="error-msg text-danger">{{ error.$message }}</div>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="form-group">
                <label for=""></label><input class="form-control"
                                             placeholder="Confirmar contraseña*" type="password"
                                             v-model="v$.form.confirmPassword.$model">
                <!-- Error Message -->
                <div class="input-errors py-2" v-for="(error, index) of v$.form.confirmPassword.$errors" :key="index">
                  <div class="error-msg text-danger">{{ error.$message }}</div>
                </div>
              </div>
            </div>

          </div>

          <!-- Submit Button -->
          <div class="my-3" style="width: 100%; cursor: pointer">
            <button type="submit" style="width: 100%" class="text-white p-2 bg-danger rounded-2" :disabled="v$.form.$invalid">
              Registrarse</button>
          </div>

        </form>

        <div class="register-space d-flex flex-column align-items-center">
          <div>
            <h3>¿Ya estás en filmfy? ¡Inicia sesión!</h3>
          </div>
          <a class="text-decoration-none text-white w-100 p-2 rounded-3" href="/register" id="signUpButton"
             aria-label="Inicia sesión">
            <p style="background-color: green" class="text-decoration-none text-white m-0 fw-bold rounded-3 p-2">Iniciar
              sesion</p>
          </a>
        </div>
      </section>
    </div>
  </div>


</template>

<script>
import useVuelidate from '@vuelidate/core'
import {email, minLength, required, sameAs} from '@vuelidate/validators'
import {setCookie} from "@/main";
import Footer from "@/components/basics/Footer";


export function validName(name) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)) {
    return true;
  }
  return false;
}


export default {
  components: {Footer},
  setup() {
    return {v$: useVuelidate()}
  },

  data() {
    return {
      form: {
        firstName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }
    }
  },

  validations() {
    return {
      form: {
        firstName: {
          required, name_validation: {
            $validator: validName,
            $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
          }
        },
        email: {required, email},
        password: {required, min: minLength(6)},
        confirmPassword: {
          required,
          sameAsPassword: sameAs(this.form.password)
        }
      },
    }
  },

  methods: {

    async onSubmit() {
      let promise = await fetch("http://filmfy-api.ddns.net/api/v1/register", {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          "name": this.form.firstName,
          "email": this.form.email,
          "password": this.form.password
        })
      })

      let response = await promise.json()

      if (promise.status === 200) {
        await setCookie("auth", response.token, 30)
        window.location = window.origin
      }
    }
  }
}
</script>

<style scoped>
.big-div {
  padding-top: 20vh;
  height: 50rem;
  background-color: black;
}

.user-benefits {
  border-right: 1px solid white;
}

body {
  font-family: Ubuntu, sans-serif;
  font-size: 0.9rem;
  width: 100vw;
  margin: 0;
  color: var(--p-white);
}

h1 {
  font-size: 2.5rem;
}

h3 {
  font-size: 1.1rem;
  line-height: 1.5rem;
  font-weight: 700;
}

.register-heading > a {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
}

.register-heading > a > img {
  max-height: 48px;
}

.register-space input {
  position: relative;
  width: 100%;
  height: 3rem;
  font-size: 1.1rem;
  line-height: 1.5rem;
  display: flex;
  color: var(--focus-black);
}


form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 385px;
}

.brand-content p {
  align-self: center;
  color: var(--main-brand-color);
  font-size: 25px;
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
}

input {
  position: relative;
  width: 100%;
  height: 3rem;
  font-size: 1.1rem;
  line-height: 1.5rem;
  display: flex;
  color: black;
}

.register-space > div > h3 {
  font-size: 0.8rem;
}

@media only screen and (max-width: 993px) {
  .big-div {
    height: auto;
    padding-top: 30px;
  }
  .user-benefits {
    border: none;
  }
}


</style>