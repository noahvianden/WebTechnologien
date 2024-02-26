<template>
    <div class="opponent-dashboard">
      <h3>{{ opponent.name }}</h3>
      <div class="opponent-info">
        <p><strong>Victory Points:</strong> {{ opponent.victoryPoints }}</p>
        <p><strong>Roads:</strong> {{ opponent.roads }}</p>
        <p><strong>Settlements:</strong> {{ opponent.settlements }}</p>
        <p><strong>Cities:</strong> {{ opponent.cities }}</p>
        <p><strong>Development Cards:</strong> {{ opponent.developmentCards }}</p>
        <p><strong>Resource Cards:</strong> {{ opponent.resourceCards }}</p>
        <p><strong>Longest Road Length:</strong> {{ opponent.longestRoadLength }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OpponentDashboard',
    props: {
      opponent: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>

  .opponent-info p {
    margin: 5px 0;
  }
  </style>
  