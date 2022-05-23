<template>
  <div id="UserProfile" class="container-fluid">
    <form action="" method="post">
      <div class="ImageProfile">
        <button @click="cambiarPerfilIMG">
          <img id="user_img" src="" alt="" />
        </button>
      </div>
      <div class="mb-3 row">
        <label for="input_username_user" class="col-sm-2 col-form-label">{{
          username_user
        }}</label>
        <input
          v-model="username_user"
          type="text"
          name="input_username_user"
          id="input_username_user"
        />
      </div>
      <div class="mb-3 row">
        <label for="inputFullName" class="col-sm-2 col-form-label">{{
          name_user
        }}</label>
        <input
          v-model="name_user"
          type="text"
          class="form-control"
          id="inputFullName"
        />
      </div>
      <div class="mb-3 row">
        <label for="inputEmail" class="col-sm-2 col-form-label">
          {{ email_user }}
        </label>
        <input
          v-model="email_user"
          type="email"
          class="form-control"
          id="inputEmail"
        />
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          {{ password_user }}
        </label>
        <input
          v-model="password_user"
          type="password"
          class="form-control"
          id="inputPassword"
        />
      </div>
      <div class="mb-3 row">
        <label for="inputPhone" class="col-sm-2 col-form-label">
          {{ phone_user }}
        </label>
        <input
          v-model="phone_user"
          type="number"
          class="form-control"
          id="inputPhone"
        />
      </div>
      <button @click="SaveProfileUser">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data () {
    return {
      username_user: '',
      name_user: '',
      email_user: '',
      password_user: '',
      phone_user: ''
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

<style scoped></style>
