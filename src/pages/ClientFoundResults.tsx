import Card from '@/components/movie/Card'
import NavBreaker from '@/components/navbar/NavBreaker'
import Padding from '@/components/responsive/Padding'
import { TotalResultsWithPages } from '@/types'

type Props = {
  query: string
  foundResults: TotalResultsWithPages | undefined
}

export default function ClientFoundResults({ foundResults, query }: Props) {
  return (
    <main className='w-screen h-fit bg-neutral-950 flex flex-col'>
      <Padding height='100%'>
        <h1 className='text-white text-2xl mb-5'>{query}</h1>
        <div className='w-full h-full overflow-y-scroll flex flex-wrap justify-evenly gap-2'>
          {foundResults?.results.map((result) => {
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
