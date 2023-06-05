import { findManyMovies } from '@/services/api'

type Props = {
  params: {
    query: string
  }
}

export default async function ServerResultsFound({ params }: Props) {
  const { query } = params

  const data = await findManyMovies(query, 1)

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
