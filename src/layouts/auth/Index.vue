<template>
  <v-app>
    <auth-view />
    <FlashMessage
      :position="'left bottom'"
      class="first-to-view"
    />
  </v-app>
</template>

<script>
  import AuthView from '@/layouts/auth/View'
  export default {
    name: 'HomeLayout',

    components: {
      AuthView,
    },
  }
</script>
