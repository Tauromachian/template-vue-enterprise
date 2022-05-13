<template>
  <v-main class="mt-5 ml-5 pr-5 main">
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>
  </v-main>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>
