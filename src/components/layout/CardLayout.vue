<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card:hover {
  transform: scale(1.02);
}
</style>
