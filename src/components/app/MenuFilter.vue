<template>
  <v-menu
    v-model="filterMenu"
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ on, attr }">
      <slot
        name="activator"
        :activator="{ on, attr }"
      >
        <v-btn
          fab
          small
          color="primary"
          v-on="on"
        >
          <v-icon>
            {{ icon }}
          </v-icon>
        </v-btn>
      </slot>
    </template>
    <!-- Filter content -->
    <v-card>
      <!-- Filter title -->
      <v-card-title>
        <span>{{ title }}</span>
      </v-card-title>
      <!-- Filter form -->
      <v-card-text>
        <v-container class="px-0">
          <slot />
        </v-container>
      </v-card-text>
      <!-- Filter actions -->
      <v-card-actions v-if="allowActions">
        <slot
          name="actions"
          :actions="{ onClick, cancelClick }"
        >
          <v-spacer />
          <base-form-action-buttons
            @accept-click="onClick"
            @cancel-click="cancelClick"
          />
        </slot>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: 'Filter',
      },
      icon: {
        type: String,
        default: 'mdi-filter',
      },
      allowActions: {
        type: Boolean,
        default: true,
      },
    },
    data () {
      return {
        filterMenuInternal: false,
      }
    },
    computed: {
      filterMenu: {
        get () {
          if (this.value) {
            return this.value
          } else {
            return this.filterMenuInternal
          }
        },
        set (val) {
          this.filterMenuInternal = val
          this.$emit('input', val)
        },
      },
    },
    methods: {
      onClick () {
        this.filterMenu = false
        this.$emit('click:accept')
      },
      cancelClick () {
        this.filterMenu = false
        this.$emit('click:cancel')
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
