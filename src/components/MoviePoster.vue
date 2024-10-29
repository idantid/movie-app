<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
}>();
</script>

<template>
  <img :src="src" :alt="alt" class="poster" loading="lazy" />
</template>

<style scoped>
.poster {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;
  align-self: center;
}

@media (min-width: 768px) {
  .poster {
    max-width: 400px;
  }
}

@media (min-width: 1024px) {
  .poster {
    max-width: 500px;
  }
}
</style>
