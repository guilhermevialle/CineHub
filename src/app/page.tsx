import ClientHome from '@/pages/ClientHome'
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '@/services/api'

export default async function ServerHome() {
  const popularMovies = await getPopularMovies(1)
  const topRatedMovies = await getTopRatedMovies(1)
  const upcomingMovies = await getUpcomingMovies(1)

  return (
    <ClientHome
      PopularMovies={popularMovies}
      TopRatedMovies={topRatedMovies}
      UpcomingMovies={upcomingMovies}
    />
  )
}
