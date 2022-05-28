<template>
  <div id="tab-profile" class="tabbed-content-block" style="display: block">
    <form
      action=""
      id="user-update"
      class="ajax-form-json"
      novalidate="novalidate"
      method="post"
    >
      <h2 class="mob-hide" style="margin-bottom: 1em">Profile Settings</h2>
      <div class="col-10 overflow">
        <section class="update-details section">
          <fieldset>
            <label for="" class="mob-subtitle title-hero"> Profile </label>
            <div class="app-available-settings js-hide-in-app">
              <input type="hidden" name="completeSettings" value="true" id="" />
              <div class="form-row">
                <label for="">Username</label>
                <input
                  type="text"
                  name="username"
                  class="frm-reg-username field ac_input"
                  maxlength="15"
                  disabled="disabled"
                  value="MattiusDT"
                  autocomplete="off"
                  id=""
                />
              </div>
              <div class="form-row">
                <label for="frm-given-name">Given name</label>
                <input
                  type="text"
                  name="givenName"
                  id="frm-given-name"
                  class="field"
                  value
                />
              </div>
              <div class="form-row">
                <label for="frm-family-name">Family name</label>
                <input
                  type="text"
                  name="familyName"
                  id="frm-family-name"
                  class="field"
                  value
                />
              </div>
              <div class="form-row">
                <label for="">Email address</label>
                <input
                  type="text"
                  name="emailAddress"
                  id="frm-email-address"
                  class="field"
                  data-original-value="jeronimateo@gmail.com"
                  inputmode="email"
                  autocorrect="off"
                  value="jeronimateo@gmail.com"
                />
              </div>
              <div class="form-row">
                <label for="">Location</label>
                <input type="text" name="location" class="field" id="" />
              </div>
              <div class="form-row">
                <label for="">Website</label>
                <input
                  type="text"
                  name="website"
                  inputmode="url"
                  class="website-url field"
                  id=""
                />
              </div>
              <div class="form-row">
                <label for="">Bio</label>
                <textarea
                  name="bio"
                  id=""
                  class="field"
                  rows="5"
                  maxlength="140"
                ></textarea>
              </div>
            </div>
          </fieldset>
        </section>
        <div class="clier row buttons">
          <input
            type="submit"
            name=""
            value="Save Changes"
            class="button -action button-action"
            id=""
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style>
input {
  width: 40vh;
}
form {
  font-size: 100%;

  vertical-align: baseline;
}
h2 {
  color: #fff;
  font-family: Graphik-Light-Web, sans-serif;
  font-size: 1.53846154rem;
  font-weight: 400;
  margin: 4px 0 7px;
}

.overflow {
  overflow: visible !important;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.col-10 {
  float: left;
  width: 390px;
}
.section:first-child {
  padding-top: 0;
}

.update-details {
  padding-bottom: 0;
}
.section {
  padding: 0 0 2.30769231rem;
  position: relative;
}
body.update .mob-subtitle {
  display: none;
}
.title-hero {
  color: #abc;
  font-size: 2rem;
  line-height: 1.23076923;
}
.title-hero,
.title-maxi {
  font-family: Graphik-Light-Web, sans-serif;
  font-weight: 400px;
  margin: 0 0 2.30769231rem;
  text-align: center;
}

input {
  font-family: Graphik-Regular-Web, sans-serif;
  font-size: 1.07692308rem;
}
.form-row {
  margin-bottom: 20px;
  position: relative;
}

#tab-profile #check-locked {
  padding-top: 0;
  width: 16px;
}
#tab-profile .check-container {
  padding-top: 0;
  width: 215px;
}
.check-container {
  color: #abc;
  float: right;
  padding-top: 7px;
  width: 150px;
}

fieldset {
  display: block;
  margin-inline-start: 2px;
  margin-inline-end: 2px;
  padding-block-start: 0.35em;
  padding-inline-start: 0.75em;
  padding-inline-end: 0.75em;
  padding-block-end: 0.625em;
  min-inline-size: min-content;
}
</style>
