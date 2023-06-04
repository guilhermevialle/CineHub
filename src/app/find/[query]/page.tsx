import { findManyMovies } from '@/services/api'

type Props = {
  params: {
    query: string
  }
}

export default async function ServerFoundMovies({ params }: Props) {
  const { query } = params
  const movies = await findManyMovies(query, 1)

  return (
    <main>
      <pre>{JSON.stringify(movies, null, 2)}</pre>
    </main>
  )
}
