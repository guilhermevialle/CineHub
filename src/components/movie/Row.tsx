import Padding from '../responsive/Padding'
import Slider from './Slider'

export default function Row() {
  return (
    <div className='w-full'>
      <Padding>
        <h1 className='text-white text-2xl mb-2'>Popular movies</h1>

        <Slider />
      </Padding>
    </div>
  )
}
