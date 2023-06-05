import ClientFind from '@/pages/ClientFind'
import { findManyMovies } from '@/services/api'

type Props = {}

export default async function ServerFind({}: Props) {
  const movies = await findManyMovies('action', 1)

  return <ClientFind />
}
