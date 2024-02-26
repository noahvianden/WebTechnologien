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
      <input type="text" v-model="victoryPoints" class="vp-count-input" disabled>
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
    <div class="bottom-bar">
      <div class="bottom-bar-item">
        <input type="text" v-model="settlements" class="bottom-bar-count" disabled>
        <img src="../assets/settlement.png" alt="Settlement" class="bottom-bar-icon">
      </div>
      <div class="bottom-bar-item">
        <input type="text" v-model="cities" class="bottom-bar-count" disabled>
        <img src="../assets/city.png" alt="City" class="bottom-bar-icon">
      </div>
      <div class="bottom-bar-item">
        <input type="text" v-model="roads" class="bottom-bar-count" disabled>
        <img src="../assets/road.png" alt="Road" class="bottom-bar-icon">
      </div>
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
      enlargedCardType: null,
      victoryPoints: 0, // Hier wird die Anzahl der Siegpunkte gespeichert
      settlements: 0,
      cities: 0,
      roads: 0
    };
  },
  methods: {
    handleEnlarge(type) {
      console.log(type);
      console.log(this.data);
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
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.vp-icon {
  width: 50px;
  height: auto;
}

.vp-count-input {
  width: 10px;
  margin-left: 40px;
  border: none;
  background-color: transparent;
  pointer-events: none;
  font-size: 16px;
  font-weight: bold;
  color: black;
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
  margin-left: 40px;
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

.action-bar {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.action-icon {
  width: 40px;
  height: auto;
  margin-right: 10px;
}

.action-text-input {
  width: 100px; /* Breite des Textfelds anpassen */
  margin-left: 10px;
  border: none;
  background-color: transparent;
  pointer-events: none;
  font-size: 16px;
  font-weight: bold;
  color: black;
}

.bottom-bar {
  display: flex;
  background-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  position: absolute;
  bottom: 5%;
  left: 35%;
  right: 100px;
  width: 600px;
}

.bottom-bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
}

.bottom-bar-icon {
  width: 100px;
  height: auto;
  margin-bottom: 5px;
}

.bottom-bar-count {
  width: 20px;
  margin: 0;
  border: none;
  background-color: transparent;
  pointer-events: none;
  font-size: 30px;
  font-weight: bold;
  color: black;
  text-align: center;
}
</style>