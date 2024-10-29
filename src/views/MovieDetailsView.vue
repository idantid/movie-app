<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useMovieDetails } from '@/composables/useMovieDetails';
import Loader from '@/components/layout/LoaderLayout.vue';
import CardLayout from '@/components/layout/CardLayout.vue';
import MoviePoster from '@/components/MoviePoster.vue';

const route = useRoute();
const movieId = Number(route.params.id);
const { data: movie, isLoading, error } = useMovieDetails(movieId);
</script>

<template>
  <CardLayout>
    <Loader v-if="isLoading" />
    <div v-else-if="error">
      <p class="error">Oops... something went wrong</p>
      <RouterLink to="/">Go Back</RouterLink>
    </div>
    <div v-else>
      <h1>{{ movie?.title }}</h1>
      <MoviePoster
        :src="`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`"
        :alt="movie?.title || ''"
      />
      <p>{{ movie?.overview }}</p>
      <p>Genres: {{ movie?.genres.map(g => g.name).join(', ') || 'N/A' }}</p>
    </div>
  </CardLayout>
</template>
