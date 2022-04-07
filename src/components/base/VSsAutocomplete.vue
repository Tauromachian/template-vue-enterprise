<template>
  <v-autocomplete
    v-bind="$attrs"
    v-on="$listeners"
    @keydown="keydownDebounced"
  >
    <template
      v-if="!disableNextPage"
      v-slot:append-item
    >
      <div
        v-if="button"
        class="d-flex justify-center"
      >
        <v-btn
          color="primary"
          @click="onIntersect"
        >
          {{ button }}
        </v-btn>
      </div>
      <v-skeleton-loader
        v-else
        v-intersect="onIntersect"
        class="mx-auto"
        max-width="300"
        type="list-item"
      />
    </template>
  </v-autocomplete>
</template>

<script>
  // import { VAutocomplete } from 'vuetify/lib'
  import debounce from 'basic-debouncer'

  export default {
    name: 'VSsAutocomplete',
    props: {
      disableNextPage: {
        type: Boolean,
        default: false,
      },
      button: {
        type: String,
        default: '',
      },
    },
    data () {
      return {
        isIntersecting: false,
        isLastPage: false,
      }
    },
    methods: {
      onIntersect () {
        if (this.disableNextPage) return
        this.$emit('next-page')
      },
      keydownDebounced (val) {
        debounce(() => {
          this.$emit('keydown:debounced', val)
        }, 350)
      },
    },
  }
</script>
