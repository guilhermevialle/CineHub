'use client'

import Search from '@/components/lib/inputs/Search'
import ContainerProvider from '@/components/movie/container/ContainerProvider'
import NavBreaker from '@/components/navbar/NavBreaker'
import Topbar from '@/components/navbar/Topbar'
import Padding from '@/components/responsive/Padding'
import { findManyMovies } from '@/services/api'
import { TotalResultsWithPages } from '@/types'
import { useEffect, useState } from 'react'

type Props = {
  query: string
  foundResults: TotalResultsWithPages | undefined
}

export default function ClientFoundResults({ foundResults, query }: Props) {
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

  const infiniteQueryFunction = async (page: number) =>
    await findManyMovies(query, page)

  const queryConfig = {
    infiniteQueryFunction,
    key: query + 'movies',
    isReaching,
  }

  return (
    <main className='w-screen h-fit bg-neutral-950 flex flex-col'>
      <Topbar />
      <NavBreaker top={true} />
      <Padding height='100%'>
        <div className='py-3.5 mb-4'>
          <Search />
        </div>
        <h1 className='text-white text-2xl mb-5'>{query}</h1>
        <ContainerProvider
          queryConfig={queryConfig}
          foundResults={foundResults}
        />
      </Padding>
      <NavBreaker />
    </main>
  )
}
