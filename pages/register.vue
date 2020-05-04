<template>
  <div class="loginPage loginContainer">
    <div class="loginBox">
      <h3 class="header_1 loginHeader">
        Create an account!
      </h3>
      <form class="loginForm" @submit.prevent="login">
        <div class="labelInputWrap">
          <h3 class="input_label inputLabel">
            Your full name
          </h3>
          <div class="firstLastNameWrap">
            <input class="nameInput" type="string" v-model="data.first_name" placeholder="First Name" />
            <input class="nameInput" type="string" v-model="data.last_name" placeholder="Last Name" /> 
          </div>
        </div>
        <div class="labelInputWrap">
          <h3 class="input_label inputLabel">
            Your email address
          </h3>
          <input class="emailInput" type="email" v-model="data.email" placeholder="Email" />
        </div>
        <div class="labelInputWrap">
          <h3 class="input_label inputLabel">
            Create a password
          </h3>
          <input class="passwordInput" type="password" v-model="data.password" placeholder="Password" />
        </div>

        <button @click="login" class="loginButton">Get Started!</button>
      </form>

      <div class="disclaimerBox">
        <p>Already have an account?</p>
        <p @click="goToLogin" style="cursor: pointer; text-decoration: underline;"><strong>Login</strong></p>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      loginScreen: true,
      data: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    goToLogin() {
      this.$router.push('/login')
    },
    async register() {
      try {
        await this.$axios.post('/auth/signup', {email: this.data.email, password: this.data.password, first_name: this.first_name, last_name: this.last_name})
          .then(res => {
            this.$store.dispatch('login', {email: this.data.email, password: this.data.password})
            console.log('this is the return on /register: ', res)
            /* this.$store.dispatch('store/setToken', res.data.token)
            this.$store.dispatch('store/setUser', res.data.user) */
          })
      } catch (error) {
        this.error = error.response.data.error
      }
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
.firstLastNameWrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nameInput + .nameInput {
  margin-left: 1rem;
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