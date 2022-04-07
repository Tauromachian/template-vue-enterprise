<template>
  <v-menu
    ref="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        :label="label"
        :rules="rules"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      />
    </template>
    <v-date-picker
      v-model="date"
      no-title
      scrollable
    >
      <v-spacer />
      <v-btn
        text
        color="primary"
        @click="menu = false"
      >
        Cancel
      </v-btn>
      <v-btn
        text
        color="primary"
        @click="$refs.menu.save(date)"
      >
        OK
      </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
  export default {
    name: 'DatePicker',
    props: {
      value: {
        type: String,
        default: '',
      },
      rules: {
        type: Array,
        default: () => [],
      },
      label: {
        type: String,
        default: 'Date',
      },
    },
    computed: {
      date: {
        get () {
          return this.value
        },
        set (val) {
          this.$emit('input', val)
        },
      },
    },
  }
</script>

<style>

</style>
