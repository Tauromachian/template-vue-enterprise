<template>
  <v-app>
    <home-view />
  </v-app>
</template>

<script>
import HomeView from './View.vue'

export default {
  name: 'HomeLayout',
  components: { HomeView },
}
</script>
