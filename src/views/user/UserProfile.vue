<template>
  <div id="UserProfile content" class="site-body">
    <div class="wrap-content">
      <section id="profile-header">
        <div class="profile-sumary">
          <div class="profile-avatar">
            <span class="avatar -large">
              <img src="https://s.ltrbxd.com/static/img/avatar220.1dea069d.png" alt="" width="150px" height="150px" />
              <a id="avatar-zoom" class="cboxElement"></a>
            </span>
          </div>
        </div>
        <div class="profile-name">
          <div class="profile-name-wrap">
            <h1 class="title-1">Mattius DT</h1>
          </div>
        </div>
        <div class="profile-info">
          <div class="follow-button-wrapper">
            <a href="" class="button -small">Edit Profile</a>
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
  color: #c8d4e0;
}

.profile-name-wrap {
  display: flex;
  margin-right: 1.92307692rem;
  max-width: 100%;
  margin-bottom: 0.23076923rem;
  margin-bottom: 0;
}

.profile-name {
  display: flex;
  padding-left: 120px;
}

.profile-summary {
  align-items: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 25px;
  min-height: 100px;
  position: relative;
}

#profile-header {
  display: flex;
  margin-bottom: 3.07692308rem;
  overflow: hidden;
}
article,
aside,
footer,
header,
img,
nav,
section {
  display: block;
}

.content-wrap {
  margin: 0 auto;
  width: 950px;
}
.site-body {
  background: #14181c;
  padding: 30px 0;
}

.follow-button-wrapper {
  margin-top: 2rem;
  margin-left: -40vh;
}
.button {
  text-align: center;
}

.button.-small {
  font-size: 0.84615385rem;
  padding: 7px 10px 6px;
}

.button {
  appearance: none;
  background: #567;
  border-radius: 3px;

  color: #c8d4e0;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  letter-spacing: 0.075em;
  line-height: 12px;
  padding: 9px 12px 8px;
  text-transform: uppercase;
}
a {
  color: #678;
  text-decoration: none;
}
a {
  border: 0;
  font-family: inherit;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
}
.profile-avatar {
  left: 1rem;
  position: absolute;
  top: -3vh;
  height: 14vh;
}

.avatar {
  border-radius: 50px;
  height: 100px;
  width: 100px;
  display: flex;
  float: none;
  margin-top: 20vh;
  margin-right: 0;
}

img {
  border-radius: 50px;
  font-family: 'object-fit: cover;';
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  width: 100%;
}
#avatar-zoom {
  z-index: 1;
}
a {
    color: #678;
    text-decoration: none;
}
</style>
