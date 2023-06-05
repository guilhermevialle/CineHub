import { MovieGenre } from '@/types'
import { FiChevronRight } from 'react-icons/fi'

type Props = {
  genre: MovieGenre
}

export default function Genre({ genre }: Props) {
  return (
    <div
      key={genre.id}
      className='w-full h-fit flex items-center gap-x-6 py-1 rounded-md hover:bg-black px-1 transition-all'
    >
      <img
        className='w-[100px] h-[60px]
                     object-cover rounded-md object-top'
        loading='lazy'
        src={genre.poster}
      />

      <h1 className='text-neutral-300 text-base'>{genre.name}</h1>
      <i className='text-neutral-300'>
        <FiChevronRight size={22} />
      </i>
    </div>
  )
}
