'use client'

import { TotalResultsWithPages } from '@/types'
import { QueryClient, QueryClientProvider } from 'react-query'
import Container from './Container'

const client = new QueryClient()

type Props = {
  queryConfig: {
    infiniteQueryFunction: (
      page: number
    ) => Promise<TotalResultsWithPages | undefined>
    key: string
    isReaching: boolean
  }
  foundResults: TotalResultsWithPages | undefined
}

export default function ContainerProvider({
  foundResults,
  queryConfig,
}: Props) {
  return (
    <QueryClientProvider client={client}>
      <Container foundResults={foundResults} queryConfig={queryConfig} />
    </QueryClientProvider>
  )
}
