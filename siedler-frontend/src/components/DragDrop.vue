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
      console.log('dragStart method called');
      event.dataTransfer.setData('text', event.target.id);
      this.isDragging = true;
    },
    dragEnd() {
      console.log('dragEnd method called');
      this.isDragging = false;
    },
    dropItem(event) {
      console.log('dropItem method called');
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
</style>
