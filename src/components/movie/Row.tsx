import { TotalResultsWithPages } from '@/types'
import Padding from '../responsive/Padding'
import SliderProvider from './Slider'

type Props = {
  title: string
  totalResultsWithPages: TotalResultsWithPages | undefined
  queryKey: string
}

export default function Row({ title, queryKey, totalResultsWithPages }: Props) {
  if (
    totalResultsWithPages?.results &&
    totalResultsWithPages.results.length > 0
  ) {
    return (
      <div className='w-full'>
        <Padding>
          <h1 className='text-white text-2xl mb-2 font-bold'>{title}</h1>
          <SliderProvider
            queryKey={queryKey}
            results={totalResultsWithPages.results}
          />
        </Padding>
      </div>
    )
  } else {
    return null
  }
}
