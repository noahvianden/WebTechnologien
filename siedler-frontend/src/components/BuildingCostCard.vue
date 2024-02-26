<template>
    <div class="building-cost-card">
    </div>
  </template>
  
  <script>
  export default {
    name: 'BuildingCostCard',
  };
  </script>
  
  <style scoped>
  .building-cost-card {
    background-image: url('../assets/building-costs.png');
    background-size: cover;
    padding: 10px; /* Innenabstand */
    text-align: center; /* Zentrierte Ausrichtung */
    position: fixed; /* Fixierte Positionierung */
    bottom: 5%; /* Positionierung am oberen Rand */
    right: 3%; /* Positionierung am linken Rand */
    width: 290px;
    height: 380px
  }

  </style>
  