'use client'

import Card from '@/components/movie/Card'
import NavBreaker from '@/components/navbar/NavBreaker'
import Topbar from '@/components/navbar/Topbar'
import Padding from '@/components/responsive/Padding'
import useLikedContent from '@/hooks/useLikedContent'
import { findMultipleMovies } from '@/services/api'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const client = new QueryClient()

export default function ClientLikedProvider() {
  return (
    <QueryClientProvider client={client}>
      <ClientLiked />
    </QueryClientProvider>
  )
}

function ClientLiked() {
  const { likedContent } = useLikedContent()

  const { data: liked } = useQuery({
    queryKey: ['liked', likedContent],
    queryFn: () => findMultipleMovies(likedContent),
  })

  console.log({ liked })

  return (
    <main className='w-screen h-screen bg-neutral-950 flex flex-col'>
      <Topbar />
      <NavBreaker top={true} />
      <Padding height='100%'>
        <div className='py-3.5 mb-4'></div>
        <h1 className='text-white text-2xl mb-5'>Your choices</h1>

        {liked && liked.length > 0 && (
          <div className='w-full h-[80%] overflow-y-auto flex flex-wrap justify-evenly gap-2'>
            {liked.map((result) => {
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
        )}
      </Padding>
    </main>
  )
}
