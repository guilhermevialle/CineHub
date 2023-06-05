import { Result, TotalResultsWithPages } from '@/types'

export default function filterNonNullResults(data: TotalResultsWithPages) {
  const nonNullResults = data.results.reduce((acc: Result[], movie) => {
    if (movie.poster_path && movie.backdrop_path) {
      acc.push(movie)
    }
    return acc
  }, [])

  return nonNullResults
}
