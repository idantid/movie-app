import { useQuery } from '@tanstack/vue-query';
import { getPopularMovies } from '@/services/movieService';
import { Movie } from '@/types/Movie';

export function usePopularMovies(page: number = 1) {
  return useQuery<Movie[]>({
    queryKey: ['popularMovies', page],
    queryFn: async () => {
      const data = await getPopularMovies(page);
      return data.results;
    },
  });
}
