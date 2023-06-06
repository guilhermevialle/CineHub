import { movieGenres } from '@/components/contexts/genres'

export function getGenreId(name: string) {
  if (name) {
    const genre = movieGenres.find(
      (genre) => genre.name.toLowerCase() === name.toLowerCase()
    )
    return genre ? genre.id : null
  }
}
