<template>
  <div class="result-container">
    <h1>{{ result }}</h1>
    <figure class="image">
      <img :src="gifUrl" :alt="result">
    </figure>
    <v-btn
        class="back-btn mx-2"
        fab
        dark
        @click="returnToGame"
    >
      <v-icon dark>
        keyboard_arrow_left
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "ResultPage",
  computed: {
    result() {
      return this.$store.getters['game/gameState'] ? 'Success!' : 'Failed!';
    },
    gifUrl() {
      if (this.$store.getters['game/gameState']) {
        return 'https://media.giphy.com/media/1yiPWNsQ1vq7V90fRY/giphy.gif'
      }
      return 'https://media.giphy.com/media/EXHHMS9caoxAA/giphy.gif';
    },
  },
  methods: {
    returnToGame() {
      this.$router.push({name: 'GamePage'});
    }
  }
}
</script>

<style scoped lang="scss">

.result-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin-bottom: 20px;
}

.back-btn {
  margin-top: 20px;
}

img {
  width: 500px;
}

@media screen and (max-width: 768px) {
  img {
    width: 300px !important;
  }
}

</style>