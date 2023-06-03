import ClientMovie from '@/pages/ClientMovie'
import { findUniqueMovie } from '@/services/api'

type Props = {
  params: {
    id: string
  }
}

export default async function ServerMovie({ params }: Props) {
  const { id } = params
  const movieDetails = await findUniqueMovie(Number(id))

  return <ClientMovie movieDetails={movieDetails} />
}
