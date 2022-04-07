<template>
  <v-col>
    <auth-header />
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </v-col>
</template>

<script>
  import AuthHeader from '../AuthHeader'
  export default {
    components: { AuthHeader },
  }
</script>
