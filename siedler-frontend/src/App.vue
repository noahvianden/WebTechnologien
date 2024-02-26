<template>
  <div id="app">
    <!-- Header -->
    <Board />
    <SettlementPiece />
    <BuildingCostCard />
    <StatusTab />
    <PlayerDashboard />
    <Dice />
    <DragDrop />
  </div>
</template>

<script>
import StatusTab from "./components/StatusTab.vue";
import Board from './components/Board.vue';
import SettlementPiece from './components/Settlement.vue';
import BuildingCostCard from './components/BuildingCostCard.vue';
import PlayerDashboard from './components/PlayerDashboard.vue';
import Dice from './components/Dice.vue';
import DragDrop from './components/DragDrop';

export default {
  name: 'App',
  components: {
    Board,
    StatusTab,
    SettlementPiece,
    BuildingCostCard,
    PlayerDashboard,
    Dice,
    DragDrop
  },
  data() {
    return {
      gameStatus: "Spiel läuft...",
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-image: url('../src/assets/tabletop.jpg');
  background-size: cover; /* Das Bild wird so skaliert, dass es den gesamten Bildschirm bedeckt */
  background-position: center; /* Das Bild wird zentriert */
  margin: 0; /* Setze den Außenabstand des body-Elements auf 0, um sicherzustellen, dass das Hintergrundbild den gesamten Bildschirm bedeckt */
  padding: 0; /* Setze das padding auf 0, um sicherzustellen, dass das Hintergrundbild den gesamten Bildschirm bedeckt */
}
</style>
