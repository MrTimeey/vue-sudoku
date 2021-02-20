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
  data: () => ({
    successGifs: [
      'https://media.giphy.com/media/4wnrJ7cWFluAZVkHBU/giphy.gif',
      'https://media.giphy.com/media/Ajhi3tsHaGBB6/giphy.gif',
      'https://media.giphy.com/media/efHpdducCDKUMMyzte/giphy.gif',
      'https://media.giphy.com/media/5WJ0ScEwkgbfa9fKj2/giphy.gif',
      'https://media.giphy.com/media/B3qf8KjgUFJbWUoj1i/giphy.gif',
      'https://media.giphy.com/media/917Ve5cLpoB3Nhd1xh/giphy.gif',
      'https://media.giphy.com/media/YKtTiAiiMyUc8/giphy.gif',
      'https://media.giphy.com/media/1zkMbX7k4nd1AM4i4k/giphy.gif',
      'https://media.giphy.com/media/3kD720zFVu22rfIA0s/giphy.gif',
      'https://media.giphy.com/media/l4JySAWfMaY7w88sU/giphy.gif',
    ],
    failGifs: [
      'https://media.giphy.com/media/EXHHMS9caoxAA/giphy.gif',
      'https://media.giphy.com/media/7yP4UMJWApTnq/giphy.gif',
      'https://media.giphy.com/media/ljtfkyTD3PIUZaKWRi/giphy.gif',
      'https://media.giphy.com/media/UtVMrybfkugSN8sHwA/giphy.gif',
      'https://media.giphy.com/media/ujgPAqiRnY9gKZg9B1/giphy.gif',
      'https://media.giphy.com/media/26ybwvTX4DTkwst6U/giphy.gif',
      'https://media.giphy.com/media/NQL7Wuo2JSQSY/giphy.gif',
      'https://media.giphy.com/media/nKN7E76a27Uek/giphy.gif',
      'https://media.giphy.com/media/AAnIjZPUhrUM8/giphy.gif',
      'https://media.giphy.com/media/iVhLISAEmtpFS/giphy.gif',
    ],
    gameOverGifs: [
      'https://media.giphy.com/media/3oEjHG1F6oSXYmgRJC/giphy.gif',
      'https://media.giphy.com/media/fxHIX1aE6Pu4pydWTk/giphy.gif',
      'https://media.giphy.com/media/4wnrJ7cWFluAZVkHBU/giphy.gif',
      'https://media.giphy.com/media/ps7LTYiX2eMzwXE90Y/giphy.gif',
      'https://media.giphy.com/media/1ZDysdjIWUkXwSEWDv/giphy.gif',
      'https://media.giphy.com/media/l3vRhaxVcQ1i0CZlC/giphy.gif',
      'https://media.giphy.com/media/3o7TKNFxAjTwUEDurS/giphy.gif',
      'https://media.giphy.com/media/3og0INyCmHlNylks9O/giphy.gif',
      'https://media.giphy.com/media/9hBW9Ay4pW10Y/giphy.gif',
      'https://media.giphy.com/media/3oz8xsuGvBn03H1boY/giphy.gif',
    ]
  }),
  mounted() {
    if (!this.gameState) {
      this.$store.commit('life/reduceByOne');
    }
  },
  computed: {
    gameState() {
      return this.$store.getters['game/gameState'];
    },
    result() {
      return this.gameState ? 'Success!' : this.$store.getters['life/isGameOver'] ? 'Game over!' : 'Failed!';
    },
    gifUrl() {
      if (this.gameState) {
        return this.getRandomGif(this.successGifs);
      } else if (this.$store.getters['life/isGameOver']) {
        return this.getRandomGif(this.gameOverGifs);
      }
      return this.getRandomGif(this.failGifs);
    },
  },
  methods: {
    returnToGame() {
      this.$router.push({name: 'GamePage'});
    },
    getRandomGif(arr) {
      return arr[Math.floor(Math.random() * arr.length)]
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