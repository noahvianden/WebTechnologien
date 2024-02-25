<template>
    <div class="player-dashboard">
        <div class="hand-title">
            <h3>Victory Points</h3>
        </div>
      <div class="victory-points">
        <img src="../assets/victory-points-icon.png" alt="Victory Points" class="vp-icon">
      </div>
      <div class="hand-title">
        <h3>Your Hand</h3>
      </div>
      <div class="resources">
        <div class="resource" v-for="(resource, index) in resources" :key="index">
          <div :class="resource.class"></div>
        </div>
      </div>
      <div class="hand-title">
            <h3>Development Cards</h3>
      </div>
      <div class="development-cards">
        <!-- Placeholder for development cards -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PlayerDashboard',
    data() {
      return {
        resources: [
          { class: 'resource wood' },
          { class: 'resource brick' },
          { class: 'resource wheat' },
          { class: 'resource sheep' },
          { class: 'resource ore' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
 .player-dashboard {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  border-radius: 10px;
  width: 10%;
  height: 80%;
  margin-top: 2%;
  margin-left: 2%;
}
  
 
.victory-points {
  margin-bottom: 20px;
}

.vp-icon {
  width: 50px;
  height: auto;
}

  .resources {
    margin-bottom: 20px;
  }
  
  .resource {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
    background-size: cover;
  }
  
  .resource.wood {
    background-image: url('@/assets/wood.png');
  }
  
  .resource.brick {
    background-image: url('@/assets/brick.png');
  }
  
  .resource.wheat {
    background-image: url('@/assets/wheat.png');
  }
  
  .resource.sheep {
    background-image: url('@/assets/sheep.png');
  }
  
  .resource.ore {
    background-image: url('@/assets/ore.png');
  }
  
  .development-cards {
    margin-top: 20px;
  }
  </style>
  