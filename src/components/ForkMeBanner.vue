<template>
  <Ribbon id="ribbon"
          v-bind="ribbonOptions"
  ></Ribbon>
</template>

<script>
export default {
  name: "ForkMeBanner",
  data: () => ({
    ribbonOptions: {
      text: 'Fork me on GitHub',
      linkUrl: 'https://github.com/MrTimeey/vue-sudoku',
      fixed: true,
      left: true,
      bottom: true,
    }
  })
}
</script>

<style scoped>

</style>