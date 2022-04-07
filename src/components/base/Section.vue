<template>
  <section v-bind="$attrs" class="mt-20" v-on="$listeners">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'BaseSection',
}
</script>
<style>
.mt-20 {
  margin-top: 80px;
}
</style>
