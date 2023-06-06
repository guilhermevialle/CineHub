'use client'

import { TotalResultsWithPages } from '@/types'
import Card from '../Card'
import { useInfiniteQuery } from 'react-query'
import { useEffect } from 'react'

type Props = {
  foundResults: TotalResultsWithPages | undefined
  queryConfig: {
    infiniteQueryFunction: (
      page: number
    ) => Promise<TotalResultsWithPages | undefined>
    key: string
    isReaching: boolean
  }
}

export default function Container({ foundResults, queryConfig }: Props) {
  const { data, isSuccess, hasNextPage, fetchNextPage, isLoading, isFetching } =
    useInfiniteQuery(
      queryConfig.key,
      async ({ pageParam = 1 }) =>
        await queryConfig.infiniteQueryFunction(pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          const nextPage = allPages.length + 1
          return nextPage
        },
      }
    )

  useEffect(() => {
    if (!isFetching) {
      fetchNextPage()
    }
  }, [queryConfig.isReaching])

  console.log({ data })

  return (
    <div className='w-full h-full overflow-y-scroll flex flex-wrap justify-evenly gap-2'>
      {data?.pages && data?.pages?.length < 2
        ? foundResults?.results.map((result) => {
            return (
              <Card
                key={result.id}
                style={{
                  flex: '1 1 auto',
                }}
                result={result}
              />
            )
          })
        : data?.pages.map((page) => {
            return page?.results.map((result) => {
              return (
                <Card
                  key={result.id}
                  style={{
                    flex: '1 1 auto',
                  }}
                  result={result}
                />
              )
            })
          })}
    </div>
  )
}
