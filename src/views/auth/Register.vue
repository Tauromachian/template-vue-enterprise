<template>
  <div class="auth-wrapper">
    <div
      class="pa-10 white rounded-lg elevation-1 my-10"
      style="border: thin solid rgba(0, 0, 0, 0.12)"
    >
      <auth-header title="Crear cuenta en" :show-logo="true" />
      <div class="form-wrapper">
        <register-form />
      </div>
    </div>
  </div>
</template>

<script>
import AuthHeader from './components/AuthHeader'
import RegisterForm from './components/RegisterForm'

export default {
  name: 'AuthWrapper',
  components: {
    AuthHeader,
    RegisterForm,
  },
}
</script>

<style lang="scss" scoped>
.auth-wrapper {
  display: flex;
  margin-top: 0.5em;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: #f9fafb;
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
  text-transform: none !important;
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
