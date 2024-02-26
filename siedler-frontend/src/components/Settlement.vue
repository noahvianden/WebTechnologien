<template>
    <div class="settlement-piece" :style="{ backgroundColor: color }"></div>
  </template>
  
  <script>
  export default {
    name: 'SettlementPiece',
    props: {
      color: String // Farbe der Siedlung, z.B. Spielerfarbe
    }
  };
  </script>
  
  <style scoped>
  .settlement-piece {
    --settlement-height: 30px;
    --settlement-width: calc(var(--settlement-height) * 1.1);
    background-image: url('../assets/settlement.png');
    background-size: cover;
    padding: 10px; /* Innenabstand */
    text-align: center; /* Zentrierte Ausrichtung */
    position: fixed; /* Fixierte Positionierung */
    top: 32%; /* Positionierung am oberen Rand */
    left: 38.5%; /* Positionierung am linken Rand */
    width: var(--settlement-width); /* Breite des Status-Tabs */
    height: var(--settlement-height); /* Volle Höhe des Bildschirms */
  }
  </style>
  