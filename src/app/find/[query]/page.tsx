import ClientFoundResults from '@/pages/ClientFoundResults'
import { findManyMovies } from '@/services/api'

type Props = {
  params: {
    query: string
  }
}

export default async function ServerFoundResults({ params }: Props) {
  const { query } = params
  const foundResults = await findManyMovies(query, 1)

  return <ClientFoundResults query={query} foundResults={foundResults} />
}
