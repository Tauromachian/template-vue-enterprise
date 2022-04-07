<template>
  <v-dialog
    v-model="dialog"
    :max-width="maxWidth"
  >
    <template
      v-if="enableAddButton"
      v-slot:activator="{ on, attrs }"
    >
      <v-btn
        color="primary"
        fab
        dark
        middle
        right
        small
        v-bind="attrs"
        v-on="on"
        @click="dialog = true"
      >
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title
        :style="{ 'background-color': folderTitleColor }"
        class="foldertitle"
      >
        <span>{{ title }}</span>
        <v-spacer />
        <v-btn
          icon
          @click="dialog = false"
        >
          <v-icon color="white">
            mdi-close
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text
        :class="{ 'no-padding': noPadding }"
        class="pt-4"
      >
        <v-container :class="{ 'no-padding': noPadding }">
          <v-form
            ref="form"
            :disabled="disabled"
          >
            <slot />
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions v-if="!hideActions">
        <slot name="actions">
          <v-spacer />
          <base-form-action-buttons
            :disabled="disabled"
            class="mr-2"
            @accept-click="onClick"
            @cancel-click="cancelClick"
          />
        </slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'FormDialog',
    props: {
      value: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: 'Formulario',
      },
      maxWidth: {
        type: [Number, String],
        default: '375px',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      hideActions: {
        type: Boolean,
        default: false,
      },
      noPadding: {
        type: Boolean,
        default: false,
      },
      enableAddButton: {
        type: Boolean,
        default: false,
      },
      icon: {
        type: String,
        default: 'mdi-plus',
      },
    },
    data () {
      return {
        dialogInternal: false,
      }
    },
    computed: {
      dialog: {
        get () {
          if (this.value) {
            return this.value
          } else {
            return this.dialogInternal
          }
        },
        set (val) {
          this.dialogInternal = val
          this.$emit('input', val)
        },
      },
      folderTitleColor () {
        return this.$vuetify.theme.themes.light.primary
      },
    },
    methods: {
      validate () {
        return this.$refs.form.validate()
      },
      reset () {
        return this.$refs.form.reset()
      },
      onClick () {
        if (!this.validate()) {
          return
        }
        // this.dialog = false
        this.$emit('accept-click')
      },
      cancelClick () {
        this.dialog = false
        this.$emit('cancel-click')
      },
    },
  }
</script>

<style>
.foldertitle {
  color: white;
}

.no-padding {
  padding: 0 !important;
}
</style>
