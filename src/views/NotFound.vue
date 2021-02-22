<template>
  <v-main>
    <v-container>
      <div class="block text-center notFound">
        <v-icon x-large>
          report_problem
        </v-icon>
        <h2>{{ $t('notFound.title') }}</h2>
        <p>{{ $t('notFound.description') }}</p>
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>

</style>