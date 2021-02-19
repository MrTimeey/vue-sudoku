<template>
    <div class="game-container">
      <game-icon class="sudoku-icon"/>
      <b-button @click="startGame(0)">Easy</b-button>
      <b-button @click="startGame(1)">Medium</b-button>
      <b-button @click="startGame(2)">Hard</b-button>
    </div>
</template>

<script>
import GameIcon from "@/components/GameIcon";
import BButton from "@/components/base/BButton";

export default {
  name: "StartPage",
  components: {BButton, GameIcon},
  methods: {
    async startGame(level) {
      this.$store.commit('setLoading', true);
      await this.$store.dispatch('game/initGame');
      this.$store.commit('game/startGame', level);
      this.$store.commit('setLoading', false);
      await this.$router.push({name:'GamePage'});
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