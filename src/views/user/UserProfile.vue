<template>
  <div id="UserProfile" class="container-fluid">
    <h2>{{ username }} Perfil</h2>
    <form action="" method="post">
      <div class="row g-3">
        <div class="col-auto" id="ImageProfile">
          <button @click="cambiarPerfilIMG">
            <img id="user_img" src="" alt="" />
          </button>
        </div>
      </div>
      <div class="col-auto">
        <label for="input_username_user" class="col-sm-2 col-form-label">{{
          username_user
        }}</label>
        <input
          v-model="username"
          type="text"
          name="input_username_user"
          id="input_username_user"
        />
      </div>
      <div class="col-auto">
        <label for="inputFullName" class="col-sm-2 col-form-label">{{
          name_user
        }}</label>
        <input
          v-model="name"
          type="text"
          class="form-control"
          id="inputFullName"
        />
      </div>
      <div class="col-auto">
        <label for="inputEmail" class="col-sm-2 col-form-label">
          {{ email }}
        </label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="inputEmail"
        />
      </div>
      <div class="col-auto">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          {{ password }}
        </label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="inputPassword"
        />
      </div>
      <div class="col-auto">
        <label for="inputPhone" class="col-sm-2 col-form-label">
          {{ phone }}
        </label>
        <input
          v-model="phone"
          type="number"
          class="form-control"
          id="inputPhone"
        />
      </div>
      <button type="submit" class="btn btn-primary mb-3" @click="SaveProfileUser" aria-label="Save">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data () {
    return {
      username: '',
      name: '',
      email: '',
      password: '',
      phone: ''
    }
  },

  methods: {
    cambiarPerfilIMG () {
      const x = document.createElement('INPUT')
      x.setAttribute('type', 'file')
      document.body.appendChild(x)
      document.getElementById('user_img').src = URL.createObjectURL(x.files[0])
    }
  }
}
</script>

<style scoped>
label.form-label {
  font-size: 3vh;
  color: #f7f7f5;
}
.error {
  color: #c50909;
  font-size: 1.5rem;
  font-weight: bold;
}
button {
  background-color: #00c740;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
h2 {
  font-size: 4rem;
  color: #f7f7f5;
}
.formConfirm {
  display: flex;
  justify-content: space-around;
  justify-items: stretch;
  align-content: center;
  align-items: center;
}

input {
  font-size: 1.5rem;
  font-weight: bold;
  color: #0f0505;
  margin: 5%;
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: space-around;
}
#layoutLogin {
  margin: auto;
  width: 85%;
  background-color: #0f0505;
  display: flex;
  flex-direction: column;
}
</style>
