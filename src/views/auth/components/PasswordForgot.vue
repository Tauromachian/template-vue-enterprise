<template>
  <v-card class="login-card">
    <v-card-text>
      <!-- <h2 class="form-header">
        {{ $t($route.name) }}
      </h2> -->
      <p>Introduzca el email</p>

      <password-forgot-form @success="success" />
    </v-card-text>
  </v-card>
</template>

<script>
  import PasswordForgotForm from './PasswordForgotForm'

  export default {
    components: {
      PasswordForgotForm,
    },

    methods: {
      success (data) {
        this.$router.push({ name: 'login' })
      },
    },
  }
</script>
