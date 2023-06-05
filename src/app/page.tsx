import ClientHome from '@/pages/ClientHome'
import {
  findUniqueMovie,
  getBannerMovie,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from '@/services/api'
import { TotalMovieDetails } from '@/types'
import random from '@/utils/random'

export default async function ServerHome() {
  const popularMovies = await getPopularMovies(1)
  const topRatedMovies = await getTopRatedMovies(1)
  const upcomingMovies = await getUpcomingMovies(1)
  const trendingMovies = await getTrendingMovies('week', 1)
  const foundBannerMovie = await getBannerMovie()

  return (
    <ClientHome
      PopularMovies={popularMovies}
      TopRatedMovies={topRatedMovies}
      UpcomingMovies={upcomingMovies}
      TrendingMovies={trendingMovies}
      bannerMovie={foundBannerMovie}
    />
  )
}
