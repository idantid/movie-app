<script setup lang="ts">
import MovieRecord from '@/components/MovieRecord.vue';
import { defineProps } from 'vue';
import { Movie } from '@/types/Movie';
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps<{ movies: Movie[] }>();

const goToMovieDetails = (id: number) => {
  router.push({ name: 'MovieDetails', params: { id } });
};
</script>

<template>
  <div class="movie-list">
    <MovieRecord
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      :onClick="() => goToMovieDetails(movie.id)"
    />
  </div>
</template>

<style scoped>
.movie-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  justify-content: center;
}

@media (min-width: 768px) {
  .movie-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .movie-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
