<template>
    <div class="dice-container">
      <img :src="dice1Src" @click="rollDice" class="dice-icon" alt="Dice 1">
      <img :src="dice2Src" @click="rollDice" class="dice-icon" alt="Dice 2">
    </div>
  </template>
  
  <script>
  export default {
    name: "DiceIcons",
    data() {
      return {
        diceFaces: ['dice-1.png', 'dice-2.png', 'dice-3.png', 'dice-4.png', 'dice-5.png', 'dice-6.png'],
        dice1Index: 0,
        dice2Index: 0
      };
    },
    computed: {
      dice1Src() {
        return require(`../assets/${this.diceFaces[this.dice1Index]}`);
      },
      dice2Src() {
        return require(`../assets/${this.diceFaces[this.dice2Index]}`);
      }
    },
    methods: {
      rollDice() {
        this.dice1Index = Math.floor(Math.random() * this.diceFaces.length);
        this.dice2Index = Math.floor(Math.random() * this.diceFaces.length);
      }
    }
  };
  </script>
  
  <style scoped>
  .dice-container {
    position: fixed;
    top: 10%;
    right: 20%;
    display: flex;
    flex-direction: row;
  }
  
  .dice-icon{
    width: 75x;
    height: 75px;
    margin-bottom: 10px;
    background-size: cover;
    margin-right: 20px;
    border-radius: 10px;
  }
  </style>
  