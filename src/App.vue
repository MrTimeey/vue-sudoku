<template>
  <v-app id="app">
    <router-view></router-view>
    <language-switch/>
  </v-app>
</template>

<script>

import LanguageSwitch from "@/components/LanguageSwitch";
export default {
  name: 'App',
  components: {LanguageSwitch},
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
