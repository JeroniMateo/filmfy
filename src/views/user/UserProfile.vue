<template>
  <div id="UserProfile" class="container">
    <div class="mb-3">
      <label for="userNameUP">User Name</label>
      <input
        type="text"
        name="userName"
        id="userNameUP"
        value="{{ userName }}"
      />
    </div>
    <div class="mb-3">
      <label for="nameUP">Name</label>
      <input type="text" name="name" id="nameUP" value="{{ name }}" />
    </div>
    <div class="mb-3">
      <label for="lastNameUP">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastNameUP"
        value="{{ lastName }}"
      />
    </div>
    <div class="mb-3">
      <label for="emailUP">Email</label>
      <input type="email" name="email" id="emailUP" value="{{ email }}" />
    </div>
    <div class="mb-3">
      <label for="passwordUP">Password</label>
      <input
        type="password"
        name="password"
        id="passwordUP"
        value="{{ password }}"
      />
    </div>
    <div class="mb-3">
      <label for="passwordConfirmUP">Password Confirm</label>
      <input
        type="password"
        name="passwordConfirm"
        id="passwordConfirmUP"
        value="{{ passwordConfirm }}"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserProfile',
  data () {
    return {
      userName: '',
      name: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      log: true
    }
  }
}
</script>
<style>
#UserProfile {
  margin: auto;
  width: 85%;
}
</style>
