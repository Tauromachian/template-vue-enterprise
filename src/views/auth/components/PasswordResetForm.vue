<template>
  <v-form
    ref="form"
    lazy-validation
    @submit.prevent="submit"
  >
    <v-text-field
      v-model="form.password"
      :type="passwordHidden ? 'password' : 'text'"
      solo
      :disabled="loading"
      :rules="passwordRules"
      label="Contraseña"
      height="65"
    />

    <v-text-field
      v-model="form.password_confirmation"
      :append-icon="passwordHiddenConfirm ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
      :type="passwordHiddenConfirm ? 'password' : 'text'"
      :disabled="loading"
      solo
      :rules="reapeatedPasswordRules.concat(passwordConfirmationRule)"
      label="Confirme la contraseña"
      height="65"
      @click:append="showHidePassword"
    />

    <div>
      <v-btn
        block
        :loading="loading"

        type="submit"
        dark
        color="#1e66b0"
        class="pa-6 mb-3 "
      >
        <!--          class="font-weight-bold text-h5"-->
        Enviar
      </v-btn>
    </div>
  </v-form>
</template>

<script>
  import axios from 'axios/index'
  import { BIENESTAR_DIR, SERVER_DIR } from '@/utils/constants'

  export default {
    data: () => ({
      passwordHidden: true,
      passwordHiddenConfirm: true,
      valid: true,
      loading: false,

      labels: {
        password: 'New Password',
        password_confirmation: 'Confirm New Password',
      },

      form: {
        password: null,
        password_confirmation: null,
      },

      passwordRules: [
        v => !!v || 'La contraseña es requerida',
        v => (v.length < 8 || v.length > 30) ? 'La contraseña debe contener entre 8 y 30 caracteres' : true,
      ],

      reapeatedPasswordRules: [
        v => !!v || 'Este campo es requerido',
      ],

      reapeatedPasswordNotMatchingError: '',

    }),

    computed: {
      passwordConfirmationRule () {
        return () =>
          this.form.password === this.form.password_confirmation || 'Las contraseñas deben coincidir.'
      },
    },

    methods: {
      showHidePassword () {
        this.passwordHidden = !this.passwordHidden
        this.passwordHiddenConfirm = !this.passwordHiddenConfirm
      },
      async submit () {
        const url = `${SERVER_DIR}/api/change-password/${this.$route.params.hash}`

        if (!this.$refs.form.validate()) return
        this.loading = true
        try {
          await axios.post(url, {
            new_password: this.form.password,
            confirm_password: this.form.password_confirmation,
          })

          this.loading = false
          this.flashMessage.success({
            status: 'Success',
            title: 'Información',
            message: 'Su contraseña ha sido cambiada exitosamente. Por favor inicie sesión nuevamente',
          })
          await this.$router.push({ name: 'Login' })
        } catch (e) {
          this.loading = false
          this.flashMessage.error({
            status: 'error',
            title: 'Error de Servidor',
            message: 'Error a al cambiar su contraseña',
          })
        }
      },
    },
  }
</script>
