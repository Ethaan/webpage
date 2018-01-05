<template lang="jade">
  .about-item
    .about-item-info
      h1.title Ethan Escareño Rosano
      h3.subtitle Software Developer | Reynosa, Tamaulipas, Mexico.
      .badges
        a(href="https://stackoverflow.com/users/3961546/ethaan" target="_blank")
          img(
            alt="profile for Ethaan at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
            src="https://stackoverflow.com/users/flair/3961546.png?theme=dark"
            width="208"
            height="58"
            title="profile for Ethaan at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
          )
        a(href="https://www.codewars.com/users/Ethaan" target="_blank")
          img(src="https://www.codewars.com/users/Ethaan/badges/micro")
    .about-item-description
      .images-gallery
        img(v-for="image in ethanImages" v-bind:src="image")
      div
        p.text Been a software developer since {{ yearsFromStart }} and working on the IT field since
          | {{ yearsFromStartCorning }}, self-learning dude, with a passion for open source things
          | i do love to say that im the "eternal n00b" A.K.A the guys how always learning
          | Right now im {{ avaiblity }}, there is not much stuff on the web about me
          | But the most related information can be found on this website or give a look to
          |  #[a(href="https://github.com/Ethaan" target="_blank") Github], #[a(href="https://angel.co/ethaan" target="_blank") Angelist],
          |  #[a(href="https://mx.linkedin.com/in/ethaan-escare%C3%B1o-809042b5" target="_blank") Linkedin ]
          |  or #[a(href="https://stackoverflow.com/users/3961546/ethaan" target="_blank") StackOverflow].
        p.text on my {{ yearsFromStartOnlyYears }} years of working as a Software Developer, i've learning
          | many, way to many things, but i thing the most valuable skill i did learn was that
          |  #[span.emphasis I do really learn fast] and #[span.emphasis Not afraid to any new stuff]
        p.text You can also find my #[a(href="https://stackoverflow.com/users/story/3961546" target="_blank") Developer Story] or my
          |  (not updated) #[a(href="https://stackoverflow.com/cv/ethaancv" target="_blank") CV Online], also i like to ocatioanlly
          |  publish content on #[a(href="https://medium.com/@ethaanescareo" target="_blank") Medium] and #[a(href="https://twitter.com/easywithethan" target="_blank") Twitter]
          |  You can also download my CV #[a(href="https://drive.google.com/uc?export=download&id=1GpasFddh3mG6ERMHZVra28LeHj93P494" download) Here]
</template>

<script>
import moment from 'moment';
import EthanImages from '@/utils/images';
import Icon from '@/components/core/Icon';

export default {
  name: 'aboutItem',
  components: { Icon },
  computed: {
    avaiblity() {
      return 'Not looking for work, atleast its a very good offer ';
    },
    yearsFromStart() {
      return moment('01/05/2015', 'MM/DD/YYYY').month(0).from(moment().month(0));
    },
    yearsFromStartOnlyYears() {
      return moment('01/05/2015', 'YYYY').month(0).from(moment().month(0));
    },
    yearsFromStartCorning() {
      return moment('10/01/2013', 'MM/DD/YYYY').month(0).from(moment().month(0));
    },
  },
  data: () => ({ ethanImages: EthanImages }),
};
</script>

<style lang="stylus" scoped>
@import '~css/imports/breakpoints'

.about-item
  display: flex
  margin-top: 1em

.about-item-info > img
  margin-top: .8em

.badges
  display: flex
  flex-direction: column
  align-items:center
  margin-top: 2em

.title
  font-size: 5em
  font-family: 'Helvetica Neue', sans-serif

.title::first-letter
  color: #111
  font-size: 275px
  font-weight: bold
  letter-spacing: -1px
  line-height: 1

.about-item-description
  padding: 5em
  margin-left: 2em

.text
  font-size: 2em
  line-height: 1.5em

.images-gallery
  display: flex
  margin-bottom: 1em
  > img
    flex 1
    width: 10%
    height: @width

@media $breakpoints-max.md
  .title
    margin-top: none

  .about-item
    flex-direction:column

  .about-item-description
    padding: 1em
    margin-left: 0
    margin-top: 4em

@media $breakpoints-max.sm
  .title
    text-align: center
    font-size: 2em
    margin-top: 5em

  .subtitle
    font-size: 1em
    margin-top: .8em
    text-align: center

  .text
    font-size: 1.5em

  .title::first-letter
    font-size: 1em
</style>
