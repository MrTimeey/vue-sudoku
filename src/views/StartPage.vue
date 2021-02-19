<template>
  <div>
    <game-icon/>
    <div class="difficulty-container">
      <b-button @click="startGame(0)">Easy</b-button>
      <b-button @click="startGame(1)">Medium</b-button>
      <b-button @click="startGame(2)">Hard</b-button>
    </div>
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

.difficulty-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  width: 100%;
}
</style>