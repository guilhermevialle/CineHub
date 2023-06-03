import { TotalResultsWithPages } from '@/types'
import Padding from '../responsive/Padding'
import Slider from './Slider'

type Props = {
  title: string
  totalResultsWithPages: TotalResultsWithPages | null | undefined
}

export default function Row({ title, totalResultsWithPages }: Props) {
  return (
    <div className='w-full'>
      <Padding>
        <h1 className='text-white text-2xl mb-2 font-bold'>{title}</h1>
        <Slider results={totalResultsWithPages?.results} />
      </Padding>
    </div>
  )
}
