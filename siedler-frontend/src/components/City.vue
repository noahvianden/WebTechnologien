<template>
    <div class="city-piece" :style="{ backgroundColor: color }"></div>
  </template>
  
  <script>
  export default {
    name: 'CityPiece',
    props: {
      color: String // Farbe der Stadt, z.B. Spielerfarbe
    }
  };
  </script>
  
  <style scoped>
  .city-piece {
    --city-height: 40px;
    --city-width: calc(var(--city-height) * 1.2);
    background-image: url('../assets/city.png'); /* Hintergrundbild für die Stadt */
    background-size: cover; /* Bildgröße anpassen */
    padding: 10px; /* Innenabstand */
    text-align: center; /* Zentrierte Ausrichtung */
    position: relative; /* Relative Positionierung */
    top: 32%; /* Positionierung am oberen Rand */
    left: 38.5%; /* Positionierung am linken Rand */
    width: var(--city-width); /* Breite des Status-Tabs */
    height: var(--city-height); /* Höhe des Status-Tabs */
  }
  </style>
  