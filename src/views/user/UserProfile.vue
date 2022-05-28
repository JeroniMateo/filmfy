<template>
  <div id="UserProfile">
    <div class="wrap-content">
      <section id="profile-header">
        <div class="profile-sumary">
          <div class="profile-avatar">
            <span class="avatar-large">
              <img src="{{user.avatar}}" alt="" />
            </span>
          </div>
        </div>
        <div class="profile-name">
          <div class="profile-name-wrap">
            <h1 class="title-1">Mattius DT</h1>
          </div>
        </div>
        <div class="profile-info">
          <div class="profile-stats">
            <h4 class="profile-statistic">
              <a href="">
                <span class="value">0</span>
                <span class="definition">Films</span>
              </a>
            </h4>
            <h4 class="profile-statistic">
              <a href="">
                <span class="value">0</span>
                <span class="definition">Lists</span>
              </a>
            </h4>
            <h4 class="profile-statistic">
              <a href="">
                <span class="value">0</span>
                <span class="definition">Following</span>
              </a>
            </h4>
            <h4 class="profile-statistic">
              <a href="">
                <span class="value">0</span>
                <span class="definition">Followers</span>
              </a>
            </h4>
          </div>
          <div class="follow-button-wrapper">
            <a href="" class="button-small">Edit Profile</a>
          </div>
          <div class="_context-observer"></div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      username_user: '',
      name_user: '',
      email_user: '',
      password_user: '',
      phone_user: ''
    }
  },

  methods: {
    cambiarPerfilIMG() {
      const x = document.createElement('INPUT')
      x.setAttribute('type', 'file')
      document.body.appendChild(x)
      document.getElementById('user_img').src = URL.createObjectURL(x.files[0])
    }
  }
}
</script>

<style scoped>
.no-mobile .profile-info .profile-stats {
    float: right;
    padding-left: 3.07692308rem;
}
.profile-stats {
    align-items: flex-start;
    display: flex;
    padding-left: 5px;
    padding-right: 5px;
}
.profile-statistic {
    font-weight: 400;
    text-align: center;
}
.profile-info {
    margin-top: 0.38461538rem;
}
.profile-name {
    padding-left: 120px;
}
.profile-info {
    margin-top: 0.57692308rem;
}
.title-1 {
    max-width: 450px;
    color:blue
}

.profile-name-wrap {
    display: flex;
    margin-right: 1.92307692rem;
    max-width: 100%;
  margin-bottom: 0.23076923rem;
    margin-bottom: 0;
}

</style>
