<template>
    <div class="road-piece" :style="{ backgroundColor: color }"></div>
  </template>
  
  <script>
  export default {
    name: 'RoadPiece',
    props: {
      color: String // Farbe der Straße, z.B. Spielerfarbe
    }
  };
  </script>
  
  <style scoped>
  .road-piece {
    --road-height: 20px;
    --road-width: calc(var(--road-height) * 5);
    background-image: url('../assets/road.png'); /* Hintergrundbild für die Straße */
    background-size: cover; /* Bildgröße anpassen */
    padding: 5px; /* Innenabstand */
    text-align: center; /* Zentrierte Ausrichtung */
    position: relative; /* Relative Positionierung */
    top: 50%; /* Positionierung am oberen Rand */
    left: 50%; /* Positionierung am linken Rand */
    transform: translate(-50%, -50%); /* Zentrierte Positionierung */
    width: var(--road-width); /* Breite der Straße */
    height: var(--road-height); /* Höhe der Straße */
  }
  </style>
  