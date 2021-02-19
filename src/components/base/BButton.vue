<template>
  <v-btn
      class="b-btn font-weight-bold ma-2"
      :loading="this.$store.state.isLoading"
      :disabled="this.$store.state.isLoading"
      depressed
      v-on="$listeners"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: "BButton"
}
</script>

<style scoped lang="scss">
.b-btn {
  width: 200px;
}
</style>