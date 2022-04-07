<template>
  <v-toolbar
    flat
  >
    <v-toolbar-title>{{ name }}</v-toolbar-title>
    <v-divider
      class="mx-4"
      inset
      vertical
    />
    <slot name="append-to-title" />
    <v-spacer />
    <v-btn
      v-if="allowReload"
      class="mr-1"
      color="primary"
      fab
      dark
      middle
      right
      small
      @click="reloadClick"
    >
      <v-icon>mdi-reload</v-icon>
    </v-btn>
    <v-btn
      v-if="allowAdd"
      class="mr-1"
      color="primary"
      fab
      dark
      middle
      right
      small
      @click="addClick"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-btn
      v-if="allowInterruct"
      class="mr-1"
      color="primary"
      fab
      dark
      middle
      right
      small
      @click="interruptClick"
    >
      <v-icon>mdi-table-cancel</v-icon>
    </v-btn>

    <slot name="extracontent" />

    <slot />
  </v-toolbar>
</template>

<script>
  export default {
    name: 'DataTableToolbar',
    props: {
      search: {
        type: String,
        default: '',
      },
      allowAdd: {
        type: Boolean,
        default: true,
      },
      allowReload: {
        type: Boolean,
        default: true,
      },
      allowInterruct: {
        type: Boolean,
        default: false,
      },
      name: {
        type: String,
        default: 'Tabla',
      },
    },
    computed: {
      searchComputed: {
        get () {
          return this.search
        },
        set (val) {
          this.$emit('update:search', val)
        },
      },
    },
    methods: {
      reloadClick () {
        this.$emit('reload-click')
      },
      addClick () {
        this.$emit('add-click')
      },
      interruptClick () {
        this.$emit('interrupt-click')
      },
    },
  }
</script>
