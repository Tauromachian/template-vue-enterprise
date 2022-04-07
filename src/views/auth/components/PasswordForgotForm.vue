<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="submit"
  >
    <p class="grey--text">
      Por favor entre el correo electrónico y le enviaremos la informacion para cambiar la contraseña.
    </p>
    <v-text-field
      v-model="form.email"
      :disabled="loading"
      solo
      height="65"
      type="email"
      :rules="emailRules"
      required
    >
      <template v-slot:label>
        <div class="my-text">
          Correo electrónico
        </div>
      </template>
    </v-text-field>
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
  import { requestDataWithApp } from '@/components/axios/requestHeadersHelper'
  import { SERVER_DIR } from '@/utils/constants'
  import { isEmail } from '@/utils/regex'

  export default {

    data: () => {
      return {
        form: {
          email: null,
        },
        emailRules: [
          (v) => !!v || 'El correo electrónico es requerido',
          (v) => isEmail(v) || 'El email que introdujo no tiene un formato válido',
        ],

        valid: true,
        loading: false,

      }
    },

    methods: {
      async submit () {
        // const url = 'https://ticket.xutil.net/api/email-change-password'
        const url = SERVER_DIR + '/api/email-change-password'
        if (!this.$refs.form.validate()) {
          return
        }

        this.loading = true
        try {
          const resp = await axios
            .post(url, {
                    email: this.form.email,
                  },
                  requestDataWithApp(),
            )

          if (resp.data.success) {
            this.flashMessage.success({
              status: 'Success',
              title: 'Mensaje enviado ',
              message: 'Se envió un mensaje a su correo electrónico para realizar el proceso de cambio de contraseña',
            })
            this.loading = false
            this.form.email = null
            this.valid = true
          }
        } catch (e) {
          this.flashMessage.error({
            status: 'error',
            title: 'Error',
            message: 'Error al enviar los datos al correo. Inténtelo de nuevo',
          })
          this.loading = false
        }
      },
    },
  }
</script>
<style scoped>
.v-btn {
  text-transform: none !important;
}
.my-text {
  color: #1e66b0;
  margin-left: 16px;
}
</style>
