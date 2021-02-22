<template>
  <Ribbon id="ribbon"
          v-bind="ribbonOptions"
  ></Ribbon>
</template>

<script>

export default {
  name: "ForkMeBanner",
  computed: {
    ribbonOptions() {
      return {
        text: this.$t('banner'),
        linkUrl: 'https://github.com/MrTimeey/vue-sudoku',
        fixed: true,
        left: true,
        bottom: true,
      }
    }
  }
}
</script>

<style scoped>

</style>