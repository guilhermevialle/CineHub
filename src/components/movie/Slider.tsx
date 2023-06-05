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
import { useState, useRef } from 'react'
import { ImSpinner3 } from 'react-icons/im'
import useMobile from '@/hooks/useMobile'
import { BsChevronCompactLeft } from 'react-icons/bs'

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
  const { isMobile } = useMobile()
  const [end, setEnd] = useState<boolean>(false)
  const sliderRef = useRef<HTMLDivElement | null>(null)
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

  function moveScrollPosition(target: HTMLDivElement, pos: number) {
    if (target) {
      const newPosition =
        pos >= 0
          ? target.scrollLeft + pos
          : Math.max(target.scrollLeft + pos, 0)
      target.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className='relative'>
      <div
        ref={sliderRef}
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

      {!isMobile && (
        <div className='w-12 h-full top-0 -left-14 absolute bg-gradient-to-r from-transparent to-neutral-950 z-30 flex justify-center items-center'>
          <i
            className='text-neutral-800 hover:text-neutral-300 hover:scale-125 hover:-translate-x-3 transition-all cursor-pointer'
            onClick={() =>
              sliderRef?.current && moveScrollPosition(sliderRef.current, -300)
            }
          >
            <BsChevronCompactLeft size={42} />
          </i>
        </div>
      )}

      {!isMobile && (
        <div className='w-12 h-full top-0 -right-14 absolute bg-gradient-to-r from-transparent to-neutral-950 z-30 flex justify-center items-center'>
          <i
            className='text-neutral-800 hover:text-neutral-300 hover:scale-125 hover:translate-x-3 transition-all rotate-180 cursor-pointer'
            onClick={() =>
              sliderRef?.current && moveScrollPosition(sliderRef.current, 300)
            }
          >
            <BsChevronCompactLeft size={42} />
          </i>
        </div>
      )}

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
