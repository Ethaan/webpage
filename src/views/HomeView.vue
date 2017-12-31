<template lang="jade">
  .home-view
    Sidebar.sidebar(v-bind:items="items" @selectItem="onSelectItem")
    ItemDisplay.content(v-bind:item="itemVisible")
</template>

<script>
import Sidebar from '@/components/about/Sidebar';
import ItemDisplay from '@/components/about/ItemDisplay';
import { ITEM_VISIBLE_DEFAULT, SIDEBAR_ITEMS } from '@/utils/constants';

const findSideBarItemByName = name => SIDEBAR_ITEMS.find(item => item.name === name);

export default {
  name: 'homeView',
  components: { Sidebar, ItemDisplay },
  methods: {
    onSelectItem(name) {
      this.itemVisible = findSideBarItemByName(name);
    },
  },
  data: () => ({
    items: SIDEBAR_ITEMS,
    itemVisible: findSideBarItemByName(ITEM_VISIBLE_DEFAULT),
  }),
};
</script>

<style lang="stylus" scoped>
@import '~css/imports/breakpoints'

.content
  flex: 1
  padding: 3em
  margin-left: 5em

.sidebar
  order: -1
  flex: 0 0 12em

@media $breakpoints-max.sm
  .content
    padding: 0
    margin-left: 0
</style>
