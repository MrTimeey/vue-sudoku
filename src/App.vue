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
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 90px;
}
</style>
