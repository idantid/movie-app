<script setup lang="ts">
import { usePopularMovies } from '@/composables/usePopularMovies';
import MovieList from '@/components/MovieList.vue';

const { data: movies, isLoading, error } = usePopularMovies();
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <p v-if="error" class="error">{{ error.message }}</p>
  <MovieList v-else :movies="movies || []" />
</template>

