<template>
  <base-section>
    <base-subheading
      space="8"
    >
      <div v-if="successRegister===true && loadingPage===false">
        <p>
          Registro confirmado exitosamente. Ahora puede iniciar sesión en nuestra plataforma.
        </p>
        <v-btn
          :to="{ name: 'Login' }"
          color="primary"
          class="text-transform-capitalize"
        >
          Iniciar Sesión
        </v-btn>
      </div>
      <div v-if="successRegister===false && loadingPage===false ">
        Lo sentimos. El tiempo para confirmar su registro ha caducado por favor inténtelo nuevamente.
      </div>

      <div style="position: relative">
        <v-fade-transition leave-absolute>
          <v-row v-if="loadingPage">
            <v-spacer />
            <v-progress-circular
              indeterminate
              color="#1e66b0"
              class="ma-4"
            />
            <v-spacer />
          </v-row>
        </v-fade-transition>
      </div>
    </base-subheading>
  </base-section>
</template>

<script>
  import { SERVER_DIR } from '../../utils/constants'
  import axios from 'axios/index'
  import { requestDataAnonimousUser } from '../../components/axios/requestHeadersHelper'

  export default {
    name: 'ConfirmRegister',
    provide: {
      heading: { align: 'center' },
    },

    data () {
      return {
        successRegister: false,
        loadingPage: true,
      }
    },

    mounted () {
      setTimeout(this.confirmRegister, 5000)
    },

    methods: {
      async confirmRegister () {
        this.loadingPage = true
        try {
          console.log('Entra al try')
          const url = `${SERVER_DIR}/api/verificate?verification=${this.$route.query.verification}`
          // const url = `${SERVER_DIR}/api/verificate?verification=${this.$route.query.verification}`
          console.log('Url', url)
          await axios.get(url, requestDataAnonimousUser())
          this.loadingPage = false
          this.successRegister = true
        } catch (e) {
          console.log('Entra al catch')
          this.loadingPage = false
          this.successRegister = false
        }
      },
    },

  }
</script>

<style scoped>

</style>
