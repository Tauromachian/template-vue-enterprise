<template>
  <div>
    <v-btn
      color="primary"
      :loading="disabled"
      text
      @click="cancelClick"
    >
      <span class="btnfont">{{ cancelButtonText }}</span>
    </v-btn>
    <v-btn
      color="primary"
      class="margin-left-8px"
      :loading="disabled"
      @click="acceptClick"
    >
      <span class="btnfont">{{ acceptButtonText }}</span>
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: 'FormActionButtons',
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      cancelButtonText: {
        type: String,
        default: 'Cancelar',
      },
      acceptButtonText: {
        type: String,
        default: 'Aceptar',
      },

    },
    methods: {
      acceptClick () {
        this.$emit('accept-click')
      },
      cancelClick () {
        this.$emit('cancel-click')
      },
    },
  }
</script>

<style scoped>
.margin-left-8px {
  margin-left: 8px;
}
</style>
