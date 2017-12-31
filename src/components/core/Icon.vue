<template lang="jade">
  Icon(v-bind:name="name" v-bind:scale="scale")
</template>

<script>
import Icon from 'vue-awesome/components/Icon';

export default {
  name: 'icon',
  components: { Icon },
  props: {
    name: {
      type: String,
      required: true,
    },
    scale: {
      type: Number,
      default: 2,
    },
  },
};
</script>

<style lang="stylus">/style>
