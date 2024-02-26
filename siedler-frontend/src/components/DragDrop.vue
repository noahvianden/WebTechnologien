<template>
    <div>
      <div
        class="drag-item"
        draggable="true"
        @dragstart="dragStart"
        @dragend="dragEnd"
      >
      </div>
      <div
        class="drop-zone"
        :class="{ visible: isDragging }"
        @dragover.prevent
        @drop="dropItem"
      >
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDragging: false
      };
    },
    methods: {
      dragStart(event) {
        event.dataTransfer.setData('text', event.target.id);
        this.isDragging = true;
      },
      dragEnd() {
        this.isDragging = false;
      },
      dropItem(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData('text');
        const draggedItem = document.getElementById(data);
        event.target.appendChild(draggedItem);
        this.isDragging = false;
      }
    }
  };
  </script>
  
  <style>
  .drag-item {
    cursor: pointer;
  }
  
  .drop-zone {
    width: 100px;
    height: 100px;
    border: 0px dashed #ccc;
    background-color: rgba(255, 255, 255, 1);
    visibility: visible;
  }
  
  .drop-zone.visible {
    visibility: visible;
  }
  </style>
  