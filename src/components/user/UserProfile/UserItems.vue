<template>
  <div class="container-fluid">
    <form action="" method="post">
      <div class="ImageProfile">
        <UserItems />
      </div>
      <div class="mb-3 row">
        <label for="inputUsername" class="col-sm-2 col-form-label"
          >Username</label
        >
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputUsername" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputFullName" class="col-sm-2 col-form-label"
          >Full Name</label
        >
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputFullName" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label"
          >Password</label
        >
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputTelefono" class="col-sm-2 col-form-label"
          >Telefono</label
        >
        <div class="col-sm-10">
          <input type="number" class="form-control" id="inputTelefono" />
        </div>
      </div>
      <button>Save</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'UserItems'
}
</script>

<style scoped></style>
