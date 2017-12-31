<template lang="jade">
  .app
    router-view.container
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="stylus" scoped>
.app
  display: flex
  min-height: 100vh
  flex-direction: column

.container
  flex: 1
  display: flex
</style>
