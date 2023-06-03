import Padding from '../responsive/Padding'
import {
  HiHome,
  HiBookmark,
  HiCog6Tooth,
  HiMagnifyingGlass,
} from 'react-icons/hi2'

export default function () {
  return (
    <nav className='w-full h-[90px] fixed bottom-0 left-0 bg-woodsmoke-950'>
      <Padding height='100%'>
        <div className='w-full h-full flex items-center justify-between text-white'>
          <button className='w-[25%] flex items-center flex-col gap-y-1 text-white'>
            <HiHome size={28} />
            <p className='text-[0.8rem] font-normal'>Home</p>
          </button>
          <button className='w-[25%] flex items-center flex-col gap-y-1 text-neutral-400'>
            <HiBookmark size={28} />
            <p className='text-[0.8rem] font-normal'>Saves</p>
          </button>
          <button className='w-[25%] flex items-center flex-col gap-y-1 text-neutral-400'>
            <HiMagnifyingGlass size={28} />
            <p className='text-[0.8rem] font-normal'>Explore</p>
          </button>
          <button className='w-[25%] flex items-center flex-col gap-y-1 text-neutral-400'>
            <HiCog6Tooth size={28} />
            <p className='text-[0.8rem] font-normal'>Config</p>
          </button>
        </div>
      </Padding>
    </nav>
  )
}
