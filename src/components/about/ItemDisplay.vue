<template lang="jade">
  .item-display
    component(v-bind:is="item.component")
</template>

<script>
export default {
  name: 'itemDisplay',
  props: {
    item: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
};
</script>

<style lang="stylus">
.item-display
  background-color: #fafafa
</style>
