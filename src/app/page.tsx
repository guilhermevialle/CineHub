import ClientHome from '@/pages/ClientHome'
import {
  findUniqueMovie,
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
  const trendingPagesForBanner = await getTrendingMovies('week', random(0, 10))
  const selectedMovieId =
    trendingPagesForBanner &&
    trendingPagesForBanner?.results[
      random(0, trendingPagesForBanner?.results.length)
    ].id

  let foundBannerMovie

  if (selectedMovieId) {
    foundBannerMovie = await findUniqueMovie(selectedMovieId)
  }

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
