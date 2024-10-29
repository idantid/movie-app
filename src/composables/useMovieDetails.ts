import { useQuery } from '@tanstack/vue-query';
import { getMovieDetails } from '@/services/movieService';
import { Movie } from '@/types/Movie';

export function useMovieDetails(movieId: number) {
  return useQuery<Movie>({
    queryKey: ['movieDetails', movieId],
    queryFn: () => getMovieDetails(movieId),
  });
}
