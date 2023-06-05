/* eslint-disable @next/next/no-img-element */

import { movieGenres } from '@/components/contexts/genres'
import Genre from '@/components/genre/Genre'
import Search from '@/components/lib/inputs/Search'
import MobileNavbar from '@/components/navbar/MobileNavbar'
import NavBreaker from '@/components/navbar/NavBreaker'
import Topbar from '@/components/navbar/Topbar'
import Padding from '@/components/responsive/Padding'

export default function ClientFind() {
  return (
    <main className='w-screen h-screen bg-neutral-950 py-4'>
      <NavBreaker top={true} />
      <Padding height='100%'>
        <div className='w-full h-[8%]'>
          <Search />
        </div>

        <div className='w-full h-[84%] overflow-y-scroll mt-6'>
          <h1 className='text-white text-2xl mb-5'>Categories</h1>
          <div className='w-full h-full   flex flex-col gap-y-4'>
            {movieGenres.map((genre) => {
              return <Genre key={genre.id} genre={genre} />
            })}
            <NavBreaker />
          </div>
        </div>
      </Padding>
      <Topbar />
      <MobileNavbar />
    </main>
  )
}
