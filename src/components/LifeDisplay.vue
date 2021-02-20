<template>
  <v-rating
      empty-icon="favorite_border"
      full-icon="favorite"
      readonly
      background-color="red lighten-3"
      color="red"
      :length="this.$store.state.life.maximum"
      :value="this.$store.state.life.currentAmount"
  ></v-rating>
</template>

<script>
export default {
  name: "LifeDisplay"
}
</script>

<style scoped>

</style>