<template>
  <div class="loginPage loginContainer">
    <div class="loginBox">
      <h3 class="header_1 loginHeader">
        Sign In!
      </h3>
      <form @submit.prevent class="loginForm">
        <div class="labelInputWrap">
          <h3 class="input_label inputLabel">
            Your email address
          </h3>
          <input class="emailInput" type="email" v-model="data.email" placeholder="Email" />
        </div>
        <div class="labelInputWrap">
          <h3 class="input_label inputLabel">
            Your password
          </h3>
          <input class="passwordInput" type="password" v-model="data.password" placeholder="Password" />
        </div>

        <button @click="login" class="loginButton">Get Started!</button>
      </form>

      <div class="disclaimerBox">
        <p>Don't have an account?</p>
        <p @click="goToSignUp" style="cursor: pointer; text-decoration: underline;"><strong>Sign Up</strong></p>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    goToSignUp() {
      this.$router.push('/register')
    },
    login() {
      this.$store.dispatch('login', {email: this.data.email, password: this.data.password})
        .then(res => {
          console.log('user Logged In')
          // this.$router.push('/')
        })
        .catch( err => {
          this.error = err.response.data
        })
    }
  }
}
</script>
<style scoped>
@import '~/assets/css/input.css';
@import '~/assets/css/text.css';
@import '~/assets/css/button.css';
.loginPage {
  height: 100vh;
}
.loginContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  
}
.loginBox {
  text-align: center;
  max-width: 500px;
  width: 100%;
}
.loginForm {
  max-width: 500px;
  width: 100%;
  padding: 0 1rem;
}
.labelInputWrap {
  margin-bottom: 1rem;
}
.disclaimerBox {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
}



/* text */
.loginHeader {
  margin-bottom: 3rem;
}
.inputLabel {
  text-align: left;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
.disclaimerBox p {
  padding: 0.25rem;
}
</style>