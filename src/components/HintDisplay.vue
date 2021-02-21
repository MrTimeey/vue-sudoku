<template>
  <v-btn
      class="hint-btn mx-2"
      fab
      :ripple="false"
      :disabled="this.$store.state.hint.currentAmount === 0"
      :color="this.$store.getters['hint/hintModeActivated']? 'primary' : 'lightgrey'"
      @click="$store.commit('hint/toogleHintMode')"
  >
    <v-icon dark v-if="this.$store.state.hint.currentAmount === 0">
      lightbulb
    </v-icon>
    <v-badge :content="this.$store.state.hint.currentAmount" color="red" v-else>
      <v-icon dark>
        lightbulb
      </v-icon>
    </v-badge>
  </v-btn>
</template>

<script>
export default {
  name: "HintDisplay",
  computed: {
  },
}
</script>

<style scoped>

</style>