<template>
  <v-app>
    <v-main>
      <v-fade-transition mode="out-in">
        <transition
          name="fade"
          mode="out-in"
        >
          <router-view />
        </transition>
      </v-fade-transition>
    </v-main>
    <FlashMessage
      :position="'left bottom'"
      class="first-to-view"
    />
  </v-app>
</template>

<script>
  export default {
    name: 'AuthWrapper',
  }
</script>
