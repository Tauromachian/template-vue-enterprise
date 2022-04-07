<template>
  <v-card class="login-card">
    <v-card-text>
      <p>Escoja una contraseña</p>

      <password-reset-form @success="success" />
    </v-card-text>
  </v-card>
</template>

<script>
import PasswordResetForm from './PasswordResetForm'

export default {
  components: {
    PasswordResetForm,
  },
  methods: {
    success(form) {
      this.$router.push({ name: 'login', query: { email: form.email } })
    },
  },
}
</script>
