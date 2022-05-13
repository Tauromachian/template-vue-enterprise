<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit">
      <v-text-field
        v-model="form.username"
        :rules="emailRules"
        :disabled="loading"
        type="email"
      >
        <template v-slot:label>
          <div class="">Correo electrónico</div>
        </template>
      </v-text-field>
      <v-text-field
        v-model="form.password"
        :append-icon="
          passwordHidden ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
        "
        :type="passwordHidden ? 'password' : 'text'"
        :disabled="loading"
        :rules="passwordRules"
        hide-details
        @click:append="() => (passwordHidden = !passwordHidden)"
      >
        <template v-slot:label>
          <div class="">Contraseña</div>
        </template>
      </v-text-field>

      <div class="d-flex justify-end mt-2 mb-3">
        <router-link :to="{ name: 'PasswordForgot' }">
          Olvidé mi contraseña
        </router-link>
      </div>

      <div>
        <v-btn
          block
          :loading="loading"
          type="submit"
          dark
          color="#1e66b0"
          class="pa-6 mb-5"
        >
          INICIAR SESIÓN
        </v-btn>
      </div>

      <div class="d-flex justify-end">
        <router-link :to="{ name: 'Register' }">
          ¿No tiene cuenta?
          <b>Regístrese</b>
        </router-link>
      </div>

      <v-row class="mx-0" style="margin-bottom: 16px">
        <v-spacer />

        <v-spacer />
      </v-row>
    </v-form>
  </div>
</template>

<script>
// Utilities
import { isEmail } from '@/utils/regex.js'

// Petitions
import { login, getUserInfo } from '@/services/auth/auth'

// Vuex
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data: () => ({
    valid: true,
    loading: false,
    passwordHidden: true,

    form: {
      username: null,
      password: null,
    },

    emailRules: [
      (v) => !!v || 'El correo electrónico es requerido',
      (v) => isEmail(v) || 'El email que introdujo no tiene un formato válido',
    ],

    passwordRules: [(v) => !!v || 'La contraseña es requerida'],

    remember: false,
  }),

  computed: {
    ...mapGetters('app', ['from']),
  },
  created() {
    this.form.username = this.$route.query.username || null
  },

  methods: {
    ...mapMutations('app', ['setRole', 'setEntities', 'setFrom']),
    ...mapActions(['setTokens']),
    async submit() {
      if (!this.$refs.form.validate()) {
        return
      }
      this.loading = true
      let roleResponse = ''
      let entitiesResponse = ''
      let response
      this.form.scope = 'openid'
      this.form.grant_type = 'password'
      try {
        response = await login(this.form)
      } catch (error) {
        console.log(error)
        this.flashMessage.error({
          status: 'error',
          title: 'Credenciales incorrectas',
          message:
            'El usuario o la contraseña no son correctos, verifique que el CAPS LOCK no está encendido y vuelva a introducir sus datos',
        })
        this.loading = false
        return
      }
      const data = response.data
      this.setTokens({
        accessToken: data.access_token,
        idToken: data.id_token,
        refreshToken: data.refresh_token,
      })
      this.$store.dispatch('setStatus', !this.$store.getters.status)

      roleResponse = await this.getRole()

      if (!roleResponse) {
        this.loading = false
        return
      }
      const role = roleResponse.data.rol
      this.setRole(role)

      await setProfileInfo()
      if (!entitiesResponse) {
        this.loading = false
        return
      }
      const entities = entitiesResponse.data.data
      const firstEntity = [
        {
          id_entidad: 0,
          denominacion: 'Todas',
        },
      ]
      const entitiesRelevantData = firstEntity.concat(entities)
      this.setEntities(entitiesRelevantData)
      this.loading = false
      this.changeRouteByRole(role)
    },
    async getRole() {
      let roleResponse
      try {
        roleResponse = await getRole()
      } catch (error) {
        this.flashMessage.error({
          status: 'error',
          title: 'Credenciales incorrectas',
          message:
            'El usuario o la contraseña no son correctos, verifique que el CAPS LOCK no está encendido y vuelva a introducir sus datos',
        })
        return 0
      }
      return roleResponse
    },

    changeRouteByRole() {
      switch (this.from) {
        case 'store':
          this.$router.push({ name: 'Store' })
          this.setFrom(null)
          break
        case 'detail':
          this.$router.push({ name: 'ServiceDetail' })
          this.setFrom(null)
          break
        case 'portal':
          this.$router.push({ name: 'Home' })
          this.setFrom(null)
          break
        default:
          this.$router.push({ name: 'Home' })
          this.setFrom(null)
          break
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
  font-family: Roboto;
}
</style>
