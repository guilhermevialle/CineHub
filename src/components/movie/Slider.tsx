import { Result } from '@/types'
import Card from './Card'

type Props = {
  results: Result[] | undefined
}

export default function Slider({ results }: Props) {
  return (
    <div className='flex h-fit gap-x-2  overflow-y-hidden overflow-x-auto'>
      {results?.map((result) => {
        return <Card key={result.id} result={result} />
      })}
    </div>
  )
}
