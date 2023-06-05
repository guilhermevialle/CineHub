import ClientFoundGenreResults from '@/pages/ClientFoundGenreResults'
import { findMoviesByGenre } from '@/services/api'
import { getGenreId } from '@/utils/get-genre'

type Props = {
  params: {
    genre: string
  }
}

export default async function ServerFoundGenreResults({ params }: Props) {
  const { genre } = params
  const genreId = getGenreId(genre)

  let movies
  if (genreId) {
    movies = await findMoviesByGenre(genreId)
  }

  return <ClientFoundGenreResults genre={genre} movies={movies} />
}
