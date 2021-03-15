<template>
  <v-app id="app">
    <router-view></router-view>
    <language-switch/>
  </v-app>
</template>

<script>
import LanguageSwitch from "@/components/LanguageSwitch";
import i18n from '@/plugins/i18n'

const countapi = require('countapi-js');

export default {
  name: 'App',
  components: {LanguageSwitch},
  mounted() {
    if (localStorage.locale) {
      i18n.locale = localStorage.locale;
    }
    countapi.hit('sudoku.mrtimeey.de', 'total').then((result) => { console.log(result.value) });
    countapi.event('totalSudokuVisits').then((result) => { console.log(result.value) });

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 90px;
  font-family: 'Montserrat', sans-serif;
}
</style>
