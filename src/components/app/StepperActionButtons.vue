<template>
  <div>
    <v-btn
      v-if="!isFirstStep"
      text
      @click="clickCancel"
    >
      Anterior
    </v-btn>

    <v-btn
      v-if="!isLastStep"
      color="primary"
      @click="clickContinue"
    >
      Siguiente
    </v-btn>
    <v-btn
      v-else
      color="primary"
      @click="clickSubmit"
    >
      Aceptar
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: 'StepperActionButtons',
    props: {
      isLastStep: {
        type: Boolean,
        default: false,
      },
      isFirstStep: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      clickContinue () {
        this.$emit('click:continue')
      },
      clickCancel () {
        this.$emit('click:cancel')
      },
      clickSubmit () {
        this.$emit('click:submit')
      },
    },
  }
</script>

<style>

</style>
