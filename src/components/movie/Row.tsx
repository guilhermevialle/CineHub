import { TotalResultsWithPages } from '@/types'
import Padding from '../responsive/Padding'
import SliderProvider from './Slider'

type Props = {
  title: string
  totalResultsWithPages: TotalResultsWithPages | undefined
  queryKey: string
  interceptorFunction?: (
    page: number
  ) => Promise<TotalResultsWithPages | undefined>
}

export default function Row({
  title,
  queryKey,
  totalResultsWithPages,
  interceptorFunction,
}: Props) {
  if (
    totalResultsWithPages?.results &&
    totalResultsWithPages.results.length > 0
  ) {
    return (
      <div className='w-full'>
        <Padding>
          <h1 className='text-white text-xl mb-3 font-bold'>{title}</h1>
          <SliderProvider
            queryKey={queryKey}
            results={totalResultsWithPages.results}
            interceptorFunction={interceptorFunction}
          />
        </Padding>
      </div>
    )
  } else {
    return null
  }
}
