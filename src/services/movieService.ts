import apiClient from './apiClient';

export async function getPopularMovies(page: number) {
  const response = await apiClient.get('/movie/popular', {
    params: { page },
  });
  return response.data;
}

export async function getMovieDetails(id: number) {
  const response = await apiClient.get(`/movie/${id}`);
  return response.data;
}
