<template>
  <div
    class="auth-wrapper "
  >
    <div
      class="pa-10 white rounded-lg elevation-1 container"
      style="border: thin solid rgba(0,0,0,.12);max-width: 500px"
    >
      <auth-header :show-logo="true" />
      <div class="form-wrapper">
        <login-form />
      </div>

      <!--      <div-->
      <!--        class="go-to-register"-->
      <!--      >-->
      <!--        <p class="text-h6">-->
      <!--          &lt;!&ndash;          <router-link :to="{ name: 'PasswordForgot' }">&ndash;&gt;-->
      <!--          <router-link :to="{ name: 'Register' }">-->
      <!--            Olvidé mi contraseña-->
      <!--          </router-link>-->
      <!--        </p>-->
      <!--        <v-btn-->
      <!--          :to="{ name: 'Register' }"-->
      <!--          type="submit"-->
      <!--          dark-->
      <!--          elevation="0"-->
      <!--          color="#1e66b0"-->
      <!--          height="60px"-->
      <!--          outlined-->
      <!--          class="btn-register"-->
      <!--        >-->
      <!--          <v-col>-->
      <!--            ¿No tienes una cuenta?-->
      <!--            <b>Regístrate</b>-->
      <!--          </v-col>-->
      <!--        </v-btn>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
  import AuthHeader from './components/AuthHeader'
  import LoginForm from './components/LoginForm'

  export default {
    name: 'AuthWrapper',
    components: {
      AuthHeader,
      LoginForm,
    },
  }
</script>

<style lang="scss" scoped>
.auth-wrapper {
  display: flex;
  margin-top: .5em;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: #F9FAFB;
}

@media screen and (min-width: 1030px) {
  .auth-wrapper {
    margin-top: 0;
  }
}

.content {
  max-width: 400px;
  flex-grow: 1;
}

.form-header {
  margin-bottom: 8px;
  color: #6cadef;
  text-align: center;
  line-height: 1.4 !important;
  font-size: 20px !important;
}

.go-to-register {
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
  color: #888888;
}

.btn-register {
  font-size: 14px;
}

.v-btn {
  text-transform: none !important
}

a:link {
  text-decoration: none;
  color: #1e66b0;
}

a:visited {
  text-decoration: none;
  color: #1e66b0;
}
</style>
