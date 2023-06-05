'use client'

import { Result, TotalResultsWithPages } from '@/types'
import Card from './Card'
import {
  getPopularMovies,
  getRecomendationsFrom,
  getSimilarMoviesFrom,
  getTopRatedMovies,
  getUpcomingMovies,
} from '@/services/api'
import { QueryClientProvider, QueryClient, useInfiniteQuery } from 'react-query'
import { useState } from 'react'
import { ImSpinner3 } from 'react-icons/im'

const queryClient = new QueryClient()

type Props = {
  results: Result[] | undefined
  queryKey: string
  interceptorFunction:
    | ((page: number) => Promise<TotalResultsWithPages | undefined>)
    | undefined
}

export default function SliderProvider({
  results,
  queryKey,
  interceptorFunction,
}: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Slider
        interceptorFunction={interceptorFunction}
        results={results}
        queryKey={queryKey}
      />
    </QueryClientProvider>
  )
}

const queryFunctions = [
  {
    key: 'popularMovies',
    function: getPopularMovies,
  },
  {
    key: 'topRatedMovies',
    function: getTopRatedMovies,
  },
  {
    key: 'upcomingMovies',
    function: getUpcomingMovies,
  },
  {
    key: 'similarMovies',
    function: getSimilarMoviesFrom,
  },
  {
    key: 'recomendations',
    function: getRecomendationsFrom,
  },
]

function Slider({ results, queryKey, interceptorFunction }: Props) {
  const [end, setEnd] = useState<boolean>(false)
  let fetchRowData: (page: number) => Promise<TotalResultsWithPages | undefined>

  queryFunctions.find((opt) => {
    if (opt.key == queryKey) {
      fetchRowData = opt.function
    }
  })

  const { data, isSuccess, hasNextPage, fetchNextPage } = useInfiniteQuery(
    queryKey,
    async ({ pageParam = 1 }) =>
      interceptorFunction
        ? await interceptorFunction(pageParam)
        : fetchRowData(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1
        return nextPage
      },
    }
  )

  return (
    <div className='relative'>
      <div
        className='flex h-fit gap-x-2 overflow-y-hidden overflow-x-auto '
        onScroll={async (e) => {
          const { scrollWidth, scrollLeft, clientWidth } = e.currentTarget
          const isScrollAtEnd = scrollLeft >= scrollWidth - clientWidth

          if (isScrollAtEnd && hasNextPage) {
            setEnd(() => true)
            await fetchNextPage()
            await setEnd(() => false)
          }
        }}
      >
        {isSuccess && data?.pages && data.pages.length > 2
          ? data.pages.map((page) => {
              return page?.results.map((result) => {
                return <Card key={result.id} result={result} />
              })
            })
          : results?.map((result) => {
              return <Card key={result.id} result={result} />
            })}
      </div>

      <div className='w-12 h-full top-0 right-0 absolute bg-gradient-to-r from-transparent to-neutral-950 z-30 flex justify-center items-center'>
        {end && (
          <i className='text-white animate-spin transition-all'>
            <ImSpinner3 />
          </i>
        )}
      </div>
    </div>
  )
}
