<template>
  <div id="EditProfile">
    <div class="container">
      <h1>Perfil de Usuario</h1>
      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-4">
          <label for="name" class="form-label">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            value=""
          />
        </div>
        <div class="col-md-4">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" required />
        </div>

        <div class="col-md-4">
          <label for="username" class="form-label">Username</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" class="form-control" id="username" value="" />
          </div>
        </div>
        <div class="col-md-6">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" value="" />
        </div>
        <div class="col-md-6">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>

        <div class="col-12">
          <button class="btn btn-primary" type="submit" @click="editProfile">
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProfile',
  methods: {
    editProfile() {
      fetch('')
    }
  }
}
</script>

<style>
div#formEdit {
}
label {
  width: 70%;
}
input {
  width: 60vh;
}
#tab-profile {
  background-color: black;
}
#EditProfile {
  background-color: black;
  with: 75%;
}
.container {
  background-color: black;
  width: 75%;
}
.form-check {
  margin-top: 2.5vw;
  margin-left: 5vw;
}
</style>
