import ClientMovie from '@/pages/ClientMovie'
import {
  findUniqueMovie,
  getRecomendationsFrom,
  getSimilarMoviesFrom,
} from '@/services/api'

type Props = {
  params: {
    id: string
  }
}

export default async function ServerMovie({ params }: Props) {
  const { id } = params
  const movieDetails = await findUniqueMovie(Number(id))
  const similarMovies = await getSimilarMoviesFrom(Number(id), 1)

  const recomendations = await getRecomendationsFrom(Number(id), 1)

  return (
    <ClientMovie
      movieDetails={movieDetails}
      similarMovies={similarMovies}
      recomendations={recomendations}
    />
  )
}
