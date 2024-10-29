<script setup lang="ts">
import { defineProps } from 'vue';
import { Movie } from '@/types/Movie';
import MoviePoster from './MoviePoster.vue';

defineProps<{ movie: Movie }>();
</script>

<template>
  <div class="movie-record">
    <MoviePoster
      :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
      :alt="movie.title"
    />
    <h3>{{ movie.title }}</h3>
    <p>Release Date: {{ movie.release_date }}</p>
  </div>
</template>

<style scoped>
.movie-record {
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.movie-record:hover {
  transform: scale(1.02);
}
</style>
