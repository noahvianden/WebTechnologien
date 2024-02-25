<template>
    <div class="status-tab">
      <p>Status: {{ gameStatus }}</p>
    </div>
  </template>
  
  <script>
  export default {
  };
  </script>
  
  <style scoped>
  .status-tab {
  background-color: #ffffff; /* Dunkelroter Ton, der zu "Die Siedler von Catan" passt */
  color: black; /* Textfarbe des Headers */
  padding: 10px; /* Innenabstand des Headers */
  height: 20px; /* Höhe des Headers */
  width: 100%; /* Breite des Headers */
  position: fixed; /* Festes Positionieren des Headers */
  top: 0; /* An der oberen Seite des Viewports positionieren */
}
  </style>
  