<template>
  <div 
    class="development-card"
    :class="{ 'large': isLarge }"
    @click="toggleSize"
  >
    <img :src="imageUrl" :alt="type" class="development-card-image">
  </div>
</template>

<script>
export default {
  name: 'DevelopmentCard',
  props: {
    type: String // Typ der Entwicklungskarte (z.B. 'chapel', 'knight', etc.)
  },
  data() {
    return {
      isLarge: false // Zustand, der angibt, ob die Karte groß angezeigt wird
    };
  },
  methods: {
    toggleSize() {
      if (!this.isLarge) {
        this.$emit('enlarge', this.type); // Event auslösen und den Kartentyp übergeben
      }
      this.isLarge = !this.isLarge; // Zustand umschalten
    },
    resetSize() {
      this.isLarge = false; // Alle Karten auf Normalgröße setzen
    }
  },
  computed: {
    imageUrl() {
      return require(`@/assets/dc-${this.type}.png`);
    }
  }
};
</script>

<style scoped>
.development-card {
  width: 100px; /* oder entsprechend anpassen */
  height: auto; /* oder entsprechend anpassen */
}

.development-card.large {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 400px; /* Breite der großen Karte */
  height: auto; /* Höhe der großen Karte */
}

.development-card-image {
  width: 100%;
  height: 100%;
}
</style>
