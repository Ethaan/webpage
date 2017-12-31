<template lang="jade">
  .github-item
    {{ cardWidth }}
    .github-user-card
      div(class="github-card" data-github="ethaan" data-width="400" data-height="" data-theme="medium")
    .github-item-repos
      .github-item-repo(v-for="repo in repos")
        div(
          class="github-card"
          data-width="300"
          data-height="296"
          data-theme="medium"
          v-bind:data-github="repo"
        )
</template>

<script>
export default {
  name: 'githubItem',
  mounted() {
    const script = document.createElement('script');
    script.src = '//cdn.jsdelivr.net/github-cards/latest/widget.js';
    document.head.appendChild(script);
  },
  data: () => ({
    repos: [
      'Ethaan/vuexpresso',
      'Ethaan/teamspeak-bot',
      'Ethaan/medivia-python-api',
      'Ethaan/tibia-python-api',
      'Ethaan/nodejs-tibia-api',
      'Ethaan/playground',
      'Ethaan/simple-uploadFS',
      'Ethaan/Meteorjs-sample-map',
      'Ethaan/react-map',
    ],
  }),
};
</script>

<style lang="stylus" scoped>
@import '~css/imports/breakpoints'

.github-user-card
  text-align: center
  margin-bottom: 3em

.github-item-repos
  display: flex
  flex-wrap: wrap

.github-item-repo
  width: 33%
  flex-grow: 1

@media $breakpoints-max.xl
  .github-user-card
    margin-top: 5em

  .github-item-repo
    padding: 1em

@media $breakpoints-max.lg
  .github-item-repo
    width: 50%
    text-align: center

@media $breakpoints-max.md
  .github-item-repos
    flex-wrap: nowrap
    flex-direction: column

  .github-item-repo
    width: 100%

@media $breakpoints-max.sm
  .github-user-card
    margin-top: 5em

  .github-item-repo
    padding: 1em
</style>
