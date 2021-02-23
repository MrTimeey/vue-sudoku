export default {
    computed: {
        gameFinished() {
            return this.$store.getters['life/isGameOver'] || this.$store.state.game.gameFinished;
        }
    },
}
