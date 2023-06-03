import ClientHome from '@/pages/ClientHome'
import { getPopularMovies } from '@/services/api'

export default async function ServerHome() {
  const data = await getPopularMovies(1)

  return <ClientHome />
}
