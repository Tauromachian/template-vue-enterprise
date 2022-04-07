<template>
  <div>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="registerUser"
    >
      <div class="d-lg-flex align-lg-center">
        <v-text-field
          v-model="form.name"
          :disabled="loading"
          :rules="nameRules"
          height="65"
          solo
          color="primary"
        >
          <template v-slot:label>
            <div class="my-text">Nombre</div>
          </template>
        </v-text-field>

        <v-text-field
          v-model="form.lastname"
          :disabled="loading"
          :rules="lastNameRules"
          height="65"
          solo
          color="primary"
          class="pl-lg-3"
        >
          <template v-slot:label>
            <div class="my-text">Apellidos</div>
          </template>
        </v-text-field>
      </div>

      <v-text-field
        v-model="form.dni"
        :counter="11"
        :maxlength="11"
        :disabled="loading"
        :rules="idRules"
        style="margin-top: -6px"
        height="65"
        solo
        color="primary"
      >
        <template v-slot:label>
          <div class="my-text">Carné de Identidad</div>
        </template>
      </v-text-field>

      <v-text-field
        v-model="form.mail"
        :rules="emailRules"
        :disabled="loading"
        type="email"
        height="65"
        solo
      >
        <template v-slot:label>
          <div class="my-text">Correo</div>
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
        style="margin-top: -6px"
        height="65"
        solo
        color="primary"
        @click:append="() => (passwordHidden = !passwordHidden)"
      >
        <template v-slot:label>
          <div class="my-text">Contraseña</div>
        </template>
      </v-text-field>

      <v-text-field
        v-model="confirmedPassword"
        :append-icon="
          passwordHidden ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
        "
        :type="passwordHidden ? 'password' : 'text'"
        :disabled="loading"
        :rules="reapeatedPasswordRules"
        :error-messages="reapeatedPasswordNotMatchingError"
        label=""
        style="margin-top: -6px"
        height="65"
        solo
        color="primary"
        @click:append="() => (passwordHidden = !passwordHidden)"
      >
        <template v-slot:label>
          <div class="my-text">Confirme la Contraseña</div>
        </template>
      </v-text-field>
      <div class="">
        <v-checkbox
          v-model="terms"
          class="mt-n3"
          :rules="[
            (v) =>
              !!v || 'Acepte los términos y condiciones si quiere continuar',
          ]"
        >
          <template v-slot:label>
            <div class="my-text">
              He leído y acepto los
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <a
                    target="_blank"
                    href="/terminos-y-condiciones"
                    @click.stop
                    v-on="on"
                  >
                    Términos y Condiciones
                  </a>
                </template>
                Se abren en otra pestaña
              </v-tooltip>
            </div>
          </template>
        </v-checkbox>
      </div>
      <div>
        <v-btn
          block
          :loading="loading"
          type="submit"
          dark
          color="#1e66b0"
          class="pa-6 mt-2 mb-3"
        >
          <!--          class="font-weight-bold text-h5"-->
          Registrarme
        </v-btn>
      </div>
      <div class="d-flex justify-end">
        <router-link :to="{ name: 'Login' }">
          ¿Tiene cuenta? Inicie Sesión
        </router-link>
      </div>
    </v-form>
  </div>
</template>

<script>
import {
  isEmail,
  isId,
  isLastName,
  isLettersWithBlankSpaces,
} from '@/utils/regex.js'
import { login, register } from '@/services/auth/auth'
import { getRole, setProfileInfo } from '@/services/userinfo/userinfo.js'

import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'RegisterForm',
  data: () => ({
    terms: false,
    valid: true,
    loading: false,
    passwordHidden: true,

    form: {
      mail: '',
      dni: '',
      name: '',
      lastname: '',
      password: '',
    },
    confirmedPassword: '',
    emailRules: [
      (v) => !!v || 'El correo electrónico es requerido',
      (v) => isEmail(v) || 'El email que introdujo no tiene un formato válido',
    ],

    idRules: [
      (v) => !!v || 'El carné de identidad es requerido',
      (v) =>
        isId(v) ||
        'El carné de identidad que introdujo no tiene un formato válido',
    ],

    nameRules: [
      (v) => !!v || 'El nombre es requerido',
      (v) =>
        isLettersWithBlankSpaces(v) || 'Introduzca un nombre válido por favor',
    ],

    lastNameRules: [
      (v) => !!v || 'El apellido es requerido',
      (v) => isLastName(v) || 'Introduzca un apellido correcto por favor',
    ],

    passwordRules: [
      (v) => !!v || 'La contraseña es requerida',
      (v) =>
        v.length < 8 || v.length > 30
          ? 'La contraseña debe contener entre 8 y 30 caracteres'
          : true,
    ],

    reapeatedPasswordRules: [(v) => !!v || 'Este campo es requerido'],

    reapeatedPasswordNotMatchingError: '',
    remember: false,
  }),

  watch: {
    confirmedPassword(val) {
      if (val !== this.form.password) {
        this.reapeatedPasswordNotMatchingError =
          'Esta contraseña no coincide con la escrita anteriormente'
      } else {
        this.reapeatedPasswordNotMatchingError = ''
      }
    },
  },

  created() {
    this.form.username = this.$route.query.username || null
  },

  methods: {
    ...mapMutations('app', ['setRole', 'setEntities']),
    ...mapActions(['setTokens']),
    validate() {
      if (!this.$refs.form.validate()) {
        return false
      }

      if (this.confirmedPassword !== this.form.password) {
        this.reapeatedPasswordNotMatchingError =
          'Esta contraseña no coincide con la escrita anteriormente'
        return false
      }

      return true
    },
    setDataToStore(data) {
      this.setTokens({
        accessToken: data.access_token,
        idToken: data.id_token,
        refreshToken: data.refresh_token,
      })
      this.$store.commit('setStatus', !this.$store.getters.status)
    },
    async registerUser() {
      if (!this.validate()) {
        console.log('ERROR')
        return
      }
      this.loading = true
      this.form.uid = this.form.mail
      this.form.username = this.form.mail
      try {
        await register(this.form)

        this.flashMessage.success({
          status: 'success',
          title: 'Bienvenido a ticket',
          message:
            'Bienvenido a nuestra plataforma ticket. Revise su correo para terminar la confirmación.',
        })
      } catch (error) {
        this.flashMessage.error({
          status: 'error',
          title: 'Error',
          message: 'El correo electrónico ya está en uso.',
        })
        this.loading = false
        return
      }
      this.loading = false
    },

    async logUser(form) {
      let response
      form.scope = 'openid'
      form.grant_type = 'password'
      try {
        response = await login(form)
        const data = response.data
        this.setDataToStore(data)

        const roleResponse = await this.getRole()

        if (!roleResponse) {
          this.loading = false
          return
        }
        const role = roleResponse.data.rol
        this.setRole(role)

        await setProfileInfo()

        this.loading = false
        this.changeRouteByRole(role)
      } catch (error) {
        console.error(error)
      }
      this.loading = false
    },

    async getRole() {
      let roleResponse
      try {
        roleResponse = await getRole()
      } catch (error) {
        this.flashMessage.error({
          status: 'error',
          title: 'Inicio de sesión no exitoso',
          message: 'Usuario o contraseña no correctos',
        })
        return 0
      }
      return roleResponse
    },

    changeRouteByRole(role) {
      console.log(123)
      if (role === 'super_admin' || role === 'admin_entidad') {
        this.$router.push({ name: 'Dashboard' })
      } else {
        this.$router.push({ name: 'Profile' })
      }
    },
  },
}
</script>
<style scoped>
/*.my-text {*/
/*  color: #1e66b0;*/
/*}*/
</style>
