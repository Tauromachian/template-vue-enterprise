<template>
  <div
    :style="{ 'margin-left': `${separation}em` }"
    class="action-buttons"
  >
    <div class="buttons-wrapper">
      <slot name="prepend" />

      <div class="text-center d-flex align-center justify-space-around">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-if="!disableDetails"
              v-bind="attrs"
              :small="small"
              :large="large"
              :x-small="xSmall"
              :style="{ 'margin-right': `${buttonSeparation}em` }"
              icon
              v-on="on"
              @click.stop="detailsClick"
            >
              <v-icon color="primary">
                mdi-eye
              </v-icon>
            </v-btn>
          </template>
          <span>Detalles</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-if="!disableEdit"
              v-bind="attrs"
              :small="small"
              :large="large"
              :x-small="xSmall"
              :style="{ 'margin-right': `${buttonSeparation}em` }"
              icon
              v-on="on"
              @click.stop="editClick"
            >
              <v-icon color="success">
                mdi-pencil
              </v-icon>
            </v-btn>
          </template>
          <span>Editar</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-if="!disableDelete"
              v-bind="attrs"
              :small="small"
              :large="large"
              :x-small="xSmall"
              :style="{ 'margin-right': `${buttonSeparation}em` }"
              icon
              v-on="on"
              @click.stop="deleteClick"
            >
              <v-icon color="red">
                mdi-trash-can-outline
              </v-icon>
            </v-btn>
          </template>
          <span>Eliminar</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-if="enableAdd"
              v-bind="attrs"
              :small="small"
              :large="large"
              :x-small="xSmall"
              color="primary"
              fab
              v-on="on"
              @click.stop="addClick"
            >
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </template>
          <span>Adicionar</span>
        </v-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ActionButtons',
    props: {
      small: {
        type: Boolean,
        default: false,
      },
      large: {
        type: Boolean,
        default: false,
      },
      xSmall: {
        type: Boolean,
        default: false,
      },
      // Añade separación entre los botones
      buttonSeparation: {
        type: [String, Number],
        default: 0,
      },
      // Separa todos los botones hacia la derecha
      separation: {
        type: [String, Number],
        default: 0,
      },
      enableAdd: {
        type: Boolean,
        default: false,
      },
      enableAdmin: {
        type: Boolean,
        default: false,
      },
      disableDetails: {
        type: Boolean,
        default: false,
      },
      disableEdit: {
        type: Boolean,
        default: false,
      },
      disableDelete: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      detailsClick () {
        this.$emit('details-click')
      },
      editClick () {
        this.$emit('edit-click')
      },
      deleteClick () {
        this.$emit('delete-click')
      },
      addClick () {
        this.$emit('add-click')
      },
      adminClick () {
        this.$emit('admin-click')
      },
    },
  }
</script>

<style scoped>
.action-buttons {
  display: inline;
}

.buttons-wrapper {
  display: inline-flex;
  align-items: center;
}
</style>
