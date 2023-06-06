'use client'

/* eslint-disable @next/next/no-img-element */

import ContainerProvider from '@/components/movie/container/ContainerProvider'
import NavBreaker from '@/components/navbar/NavBreaker'
import Topbar from '@/components/navbar/Topbar'
import Padding from '@/components/responsive/Padding'
import { findMoviesByGenre } from '@/services/api'
import { TotalResultsWithPages } from '@/types'
import { getGenreId } from '@/utils/get-genre'
import { useEffect, useState } from 'react'

type Props = {
  movies: TotalResultsWithPages | undefined
  genre: string
}

export default function ClientFoundGenreResults({ genre, movies }: Props) {
  const [isReaching, setLimit] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement

      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100
      const threshold = 80

      if (scrollPercentage >= threshold) {
        setLimit(true)
      } else {
        setLimit(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const genreId = getGenreId(genre)

  if (!genreId) return

  const infiniteQueryFunction = async (page: number) =>
    await findMoviesByGenre(genreId, page)

  const queryConfig = {
    infiniteQueryFunction,
    key: genre + 'movies',
    isReaching,
  }

  return (
    <main className='w-screen h-fit bg-neutral-950 flex flex-col'>
      <Topbar />
      <NavBreaker top={true} />
      <Padding height='100%'>
        <div className='py-3.5 mb-4'></div>
        <h1 className='text-white text-2xl mb-5'>{genre}</h1>
        <ContainerProvider queryConfig={queryConfig} foundResults={movies} />
      </Padding>
      <NavBreaker />
    </main>
  )
}
