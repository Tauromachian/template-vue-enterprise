<template>
  <v-dialog v-model="dialog" max-width="400">
    <v-card>
      <v-card-title :style="{ 'background-color': folderTitleColor }">
        <span class="white--text">{{ title }}?</span>
        <v-spacer />
        <v-btn icon @click="dialog = false">
          <v-icon color="white"> mdi-close </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-title>{{ text }}</v-card-title>

      <v-card-actions>
        <v-spacer />

        <app-form-action-buttons
          :disabled="disabled"
          accept-button-text="Borrar"
          cancel-button-text="No borrar"
          @accept-click="acceptClick"
          @cancel-click="dialog = false"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DeleteConfirmationDialog',
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    title: {
      type: String,
      default: 'Borrar',
    },
    text: {
      type: String,
      default: 'El dato seleccionado será borrado',
    },
    value: {
      type: Boolean,
      default: false,
    },
    enableDeleteDialog: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dialog: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
    folderTitleColor() {
      return this.$vuetify.theme.themes.light.primary
    },
  },
  methods: {
    acceptClick() {
      this.dialog = false
      this.$emit('accept-click')
    },
    openDialog() {
      this.dialog = true
    },
  },
}
</script>

<style></style>
