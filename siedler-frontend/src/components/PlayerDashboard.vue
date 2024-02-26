<template>
  <div class="player-dashboard">
    <div class="hand-title">
      <h2>Player Dashboard</h2>
    </div>
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
      <div class="resource-container" v-for="(resource, index) in resources" :key="index">
        <div class="resource">
          <div :class="resource.class"></div>
        </div>
        <input type="text" v-model="resource.count" class="resource-count-input">
      </div>
    </div>
    <div class="hand-title">
      <h3>Development Cards</h3>
    </div>
    <div class="development-cards">
      <DevelopmentCard
        v-for="(type, index) in developmentCardTypes"
        :key="index"
        :type="type"
        :isLarge="type === enlargedCardType"
        @enlarge="handleEnlarge"
      />
    </div>
  </div>
</template>

<script>
import DevelopmentCard from '@/components/DevelopmentCard.vue';

export default {
  name: 'PlayerDashboard',
  components: {
    DevelopmentCard
  },
  data() {
    return {
      resources: [
        { class: 'resource wood', count: 0 },
        { class: 'resource brick', count: 0 },
        { class: 'resource wheat', count: 0 },
        { class: 'resource sheep', count: 0 },
        { class: 'resource ore', count: 0 }
      ],
      developmentCardTypes: ['chapel', 'knight', 'library', 'market', 'monopoly', 'palace', 'road-building', 'year-of-plenty'],
      enlargedCardType: null 
    };
  },
  methods: {
    handleEnlarge(type) {
      console.log(type)
      console.log(this.data)
      if (this.enlargedCardType === type) {
        this.enlargedCardType = null; 
      } else {
        this.enlargedCardType = type; 
      }
    }
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
  width: 20%;
  height: 80%;
  margin-top: 4%;
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
.resource-container {
  display: flex;
  align-items: center;
}

.resource-count-input {
  width: 10px; /* Breite auf 20px (etwa 1 Zeichen) begrenzen */
  margin-bottom: 5px;
  margin-left: 10px;
  border: none; /* Kein Rahmen */
  background-color: transparent; /* Transparenter Hintergrund */
  pointer-events: none; /* Verhindert, dass das Feld bearbeitet werden kann */
  font-size: 16px; /* Größe des Textes */
  font-weight: bold; /* Fettschrift */
  color: black; /* Farbe des Textes */
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
  display: flex;
  flex-wrap: wrap; /* Karten können bei Bedarf umbrechen */
  margin-top: 20px;
}

.development-card {
  height: 150px; /* Festlegen der Höhe der Karten */
  margin-right: 10px;
  margin-bottom: 10px;
}

.development-card-image {
  width: auto; /* Automatische Breite basierend auf der Höhe */
  height: 100%;
}
</style>
