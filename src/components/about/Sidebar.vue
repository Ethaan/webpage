<template lang="jade">
  nav.sidebar
    .sidebar-item(
      v-for="item in items"
      v-bind:style="{ color: item.color, 'background-color': item.backgroundColor }"
      @click="$emit('selectItem', item.name)"
    )
      Icon.sidebar-icon(v-bind:name="item.icon")
</template>

<script>
// Emits:
// selectItem, name

import Icon from '@/components/core/Icon';

export default {
  name: 'sidebar',
  components: { Icon },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="stylus">
@import '~css/imports/breakpoints'

.sidebar
  height: 100%
  display: flex
  position: fixed
  flex-wrap: wrap
  flex-direction: column

.sidebar-item
  flex: 1
  width: 5em
  cursor: pointer
  min-width: 2em
  transition: .3s
  border-top: 3px solid #F48024
  &:hover
    width: 8em
    flex-grow: 2
    transition: .5s

.sidebar-icon
  margin-top: .1em

@media $breakpoints-max.sm
  .sidebar
    width: 100%
    height: 4.5%
    flex-direction: row

  .sidebar-item
    width: 50%
</style>
