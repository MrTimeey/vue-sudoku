<template>
  <div class="game-container">
    <fork-me-banner/>
    <game-icon class="sudoku-icon"/>
    <b-button @click="startGame(0)">{{ $t('start.easy') }}</b-button>
    <b-button @click="startGame(1)">{{ $t('start.medium') }}</b-button>
    <b-button @click="startGame(2)">{{ $t('start.hard') }}</b-button>
  </div>
</template>

<script>
import GameIcon from "@/components/GameIcon";
import BButton from "@/components/base/BButton";
import ForkMeBanner from "@/components/ForkMeBanner";
import i18n from '@/plugins/i18n';

export default {
  name: "StartPage",
  components: {ForkMeBanner, BButton, GameIcon},
  methods: {
    async startGame(level) {
      this.$store.commit('setLoading', true);
      this.$store.commit('life/init');
      this.$store.commit('hint/init');
      this.$store.commit('game/setGameFinished', false);
      await this.$store.dispatch('game/initGame');
      this.$store.commit('game/startGame', level);
      this.$store.commit('setLoading', false);
      await this.$router.push({name: 'GamePage'});
    },
    changeLocale(locale) {
      i18n.locale = locale;
      this.$router.push({
        params: { lang: locale }
      })
    }
  }
}
</script>

<style scoped lang="scss">

.game-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.sudoku-icon {
  margin-bottom: 20px;
}

@media screen and (max-width: 768px) {
  .sudoku-icon {
    width: 300px !important;
  }
}
</style>