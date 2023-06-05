/* eslint-disable @next/next/no-img-element */

import { movieGenres } from '@/components/contexts/genres'
import Genre from '@/components/genre/Genre'
import Search from '@/components/lib/inputs/Search'
import Card from '@/components/movie/Card'
import MobileNavbar from '@/components/navbar/MobileNavbar'
import NavBreaker from '@/components/navbar/NavBreaker'
import Topbar from '@/components/navbar/Topbar'
import Padding from '@/components/responsive/Padding'
import { TotalResultsWithPages } from '@/types'

type Props = {
  movies: TotalResultsWithPages | undefined
  genre: string
}

export default function ClientFoundGenreResults({ genre, movies }: Props) {
  return (
    <main className='w-screen h-fit bg-neutral-950 flex flex-col'>
      <Topbar />
      <NavBreaker top={true} />
      <Padding height='100%'>
        <div className='py-3.5 mb-4'></div>
        <h1 className='text-white text-2xl mb-5'>{genre}</h1>
        <div className='w-full h-full overflow-y-scroll flex flex-wrap justify-evenly gap-2'>
          {movies?.results.map((result) => {
            return (
              <Card
                key={result.id}
                style={{
                  flex: '1 1 auto',
                }}
                result={result}
              />
            )
          })}
        </div>
      </Padding>
      <NavBreaker />
    </main>
  )
}
