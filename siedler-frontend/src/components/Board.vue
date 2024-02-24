<template>
    <div class="game-board">
      <!-- Hexagons für das Spielbrett -->
      <div
        v-for="(hexagon, index) in hexagons"
        :key="index"
        class="hexagon"
        :class="hexagon.resource"
        :style="hexagon.style"
      >
        <!-- Anzeige der Ressource oder Nummer (falls vorhanden) -->
        <span v-if="hexagon.resource !== 'desert'">{{ hexagon.resource }}</span>
        <span v-else>Wüste</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "GameBoard",
    data() {
      return {
        // Liste der Hexagons mit den verschiedenen Ressourcen und Positionen
        hexagons: [
          { id: 1, resource: "mountain", style: { top: "100px", left: "200px" } },
          { id: 2, resource: "pasture", style: { top: "100px", left: "300px" } },
          { id: 3, resource: "forest", style: { top: "100px", left: "400px" } },
          { id: 4, resource: "field", style: { top: "200px", left: "150px" } },
          { id: 5, resource: "hill", style: { top: "200px", left: "250px" } },
          { id: 6, resource: "pasture", style: { top: "200px", left: "350px" } },
          { id: 7, resource: "hill", style: { top: "200px", left: "450px" } },
          { id: 8, resource: "field", style: { top: "300px", left: "100px" } },
          { id: 9, resource: "forest", style: { top: "300px", left: "200px" } },
          { id: 10, resource: "desert", style: { top: "300px", left: "300px" } },
          { id: 11, resource: "forest", style: { top: "300px", left: "400px" } },
          { id: 12, resource: "mountain", style: { top: "300px", left: "500px" } },
          { id: 13, resource: "forest", style: { top: "400px", left: "150px" } },
          { id: 14, resource: "mountain", style: { top: "400px", left: "250px" } },
          { id: 15, resource: "field", style: { top: "400px", left: "350px" } },
          { id: 16, resource: "pasture", style: { top: "400px", left: "450px" } },
          { id: 17, resource: "hill", style: { top: "500px", left: "200px" } },
          { id: 18, resource: "field", style: { top: "500px", left: "300px" } },
          { id: 19, resource: "pasture", style: { top: "500px", left: "400px" } },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Stil für das Spielbrett */
  .game-board {
    position: relative;
    width: 600px;
    height: 600px;
  }
  
  /* Stil für die Hexagons */
  .hexagon {
    width: 100px; /* Verwendung einer CSS-Variable für die Breite */
    height: 125px; /* Berechnung der Höhe basierend auf der Breite */
    background-color: #ccc;
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
  }
  
  /* Stil für die verschiedenen Ressourcentypen */
  .forest {
    background-color: #228b22;
  }
  .pasture {
    background-color: #90ee90;
  }
  .field {
    background-color: #ffd700;
  }
  .hill {
    background-color: #8b4513;
  }
  .mountain {
    background-color: #808080;
  }
  .desert {
    background-color: #d2b48c;
  }
  </style>
  