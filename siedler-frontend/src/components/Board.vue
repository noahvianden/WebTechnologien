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
            <span v-else class="desert-tile"></span>
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
          { id: 1, resource: "mountain", style: {   top: "calc(((var(--board-height) + var(--hexagon-height)) / 2) - var(--hexagon-height) * 1.5)", 
                                                    left: "calc(((var(--board-width) + var(--hexagon-width)) / 2) - var(--hexagon-width))" } },
          { id: 2, resource: "pasture", style: {    top: "calc(((var(--board-height) + var(--hexagon-height)) / 2) - var(--hexagon-height) * 1.5)", 
                                                    left: "calc((var(--board-width) + var(--hexagon-width)) / 2)" } },
          { id: 3, resource: "forest", style: {     top: "calc(((var(--board-height) + var(--hexagon-height)) / 2) - var(--hexagon-height) * 1.5)", 
                                                    left: "calc(((var(--board-width) + var(--hexagon-width)) / 2) + var(--hexagon-width))" } },

          { id: 4, resource: "field", style: {      top: "calc(((var(--board-height) + var(--hexagon-height)) / 2) - var(--hexagon-height) / 1.335)", 
                                                    left: "calc(((var(--board-width) + var(--hexagon-width)) / 2) - var(--hexagon-width) * 1.5)" } },
          { id: 5, resource: "hill", style: {       top: "calc(((var(--board-height) + var(--hexagon-height)) / 2) - var(--hexagon-height) / 1.335)", 
                                                    left: "calc(((var(--board-width) + var(--hexagon-width)) / 2) - var(--hexagon-width) * 0.5)" } },
          { id: 6, resource: "pasture", style: {    top: "calc(((var(--board-height) + var(--hexagon-height)) / 2) - var(--hexagon-height) / 1.335)", 
                                                    left: "calc(((var(--board-width) + var(--hexagon-width)) / 2) + var(--hexagon-width) * 0.5)" } },
          { id: 7, resource: "hill", style: {       top: "calc(((var(--board-height) + var(--hexagon-height)) / 2) - var(--hexagon-height) / 1.335)", 
                                                    left: "calc(((var(--board-width) + var(--hexagon-width)) / 2) + var(--hexagon-width) * 1.5)" } },

          { id: 8, resource: "field", style: {      top: "calc((var(--board-height) + var(--hexagon-height)) / 2)", 
                                                    left: "calc(((var(--board-width) + var(--hexagon-width)) / 2) - var(--hexagon-width) * 2)" } },
          { id: 9, resource: "forest", style: {     top: "calc((var(--board-height) + var(--hexagon-height)) / 2)", 
                                                    left: "calc(((var(--board-width) + var(--hexagon-width)) / 2) - var(--hexagon-width))" } },
          { id: 10, resource: "desert", style: {    top: "calc((var(--board-height) + var(--hexagon-height)) / 2)", 
                                                    left: "calc((var(--board-width) + var(--hexagon-width)) / 2)" } },
          { id: 11, resource: "forest", style: {    top: "calc((var(--board-height) + var(--hexagon-height)) / 2)", 
                                                    left: "calc(((var(--board-width) + var(--hexagon-width)) / 2) + var(--hexagon-width))" } },
          { id: 12, resource: "mountain", style: {  top: "calc((var(--board-height) + var(--hexagon-height)) / 2)", 
                                                    left: "calc(((var(--board-width) + var(--hexagon-width)) / 2) + var(--hexagon-width) * 2)" } },

          { id: 13, resource: "forest", style: {    top: "calc(((var(--board-height) + var(--hexagon-height)) / 2) + var(--hexagon-height) / 1.335)", 
                                                    left: "calc(((var(--board-width) + var(--hexagon-width)) / 2) - var(--hexagon-width) * 1.5)" } },
          { id: 14, resource: "mountain", style: {  top: "calc(((var(--board-height) + var(--hexagon-height)) / 2) + var(--hexagon-height) / 1.335)", 
                                                    left: "calc(((var(--board-width) + var(--hexagon-width)) / 2) - var(--hexagon-width) * 0.5)" } },
          { id: 15, resource: "field", style: {     top: "calc(((var(--board-height) + var(--hexagon-height)) / 2) + var(--hexagon-height) / 1.335)", 
                                                    left: "calc(((var(--board-width) + var(--hexagon-width)) / 2) + var(--hexagon-width) * 0.5)" } },
          { id: 16, resource: "pasture", style: {   top: "calc(((var(--board-height) + var(--hexagon-height)) / 2) + var(--hexagon-height) / 1.335)", 
                                                    left: "calc(((var(--board-width) + var(--hexagon-width)) / 2) + var(--hexagon-width) * 1.5)" } },
            
          { id: 17, resource: "hill", style: {   top: "calc(((var(--board-height) + var(--hexagon-height)) / 2) + var(--hexagon-height) * 1.5)", 
                                                    left: "calc(((var(--board-width) + var(--hexagon-width)) / 2) - var(--hexagon-width))" } },
          { id: 18, resource: "field", style: {    top: "calc(((var(--board-height) + var(--hexagon-height)) / 2) + var(--hexagon-height) * 1.5)", 
                                                    left: "calc((var(--board-width) + var(--hexagon-width)) / 2)" } },
          { id: 19, resource: "pasture", style: {     top: "calc(((var(--board-height) + var(--hexagon-height)) / 2) + var(--hexagon-height) * 1.5)", 
                                                    left: "calc(((var(--board-width) + var(--hexagon-width)) / 2) + var(--hexagon-width))" } },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Stil für das Spielbrett */
  .game-board {
  --board-width: 600px;
  --board-height: 600px;
  position: absolute;
  top: 30%;
  left: 40%;
  transform: translate(-50%, -50%);
  width: var(--board-width);
  height: var(--board-height);
}
  
  /* Stil für die Hexagons */
.hexagon {
  --hexagon-width: 180px; /* Breite eines Hexagons */
  --hexagon-height: calc(var(--hexagon-width) * 1.1547); /* Höhe eines Hexagons */
  width: var(--hexagon-width);
  height: var(--hexagon-height);
  background-color: #ccc;
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  position: absolute;
}

/* Stil für die verschiedenen Ressourcentypen */
.mountain {
  background-image: url('../assets/mountain.png');
  background-size: cover;
}

.pasture {
  background-image: url('../assets/pasture.png');
  background-size: cover;
}

.forest {
  background-image: url('../assets/forest.png');
  background-size: cover;
}

.field {
  background-image: url('../assets/field.png');
  background-size: cover;
}
    
.hill {
  background-image: url('../assets/hill.png');
  background-size: cover;
}

.desert {
  background-image: url('../assets/desert.png');
  background-size: cover;
}

/* Verstecke den Text innerhalb der Hexagons */
.hexagon span {
  display: none;
}
</style>