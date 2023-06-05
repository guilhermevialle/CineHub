'use client'

import { MovieGenre } from '@/types'
import { useRouter } from 'next/navigation'
import { FiChevronRight } from 'react-icons/fi'

type Props = {
  genre: MovieGenre
}

export default function Genre({ genre }: Props) {
  const router = useRouter()

  return (
    <div
      className='w-full h-fit flex items-center gap-x-6 py-1 rounded-md hover:bg-black px-1 transition-all'
      onClick={() => router.push(`/find/genre/${genre.name}`)}
    >
      <div className='w-[100px] h-[60px] rounded-md bg-neutral-900'>
        <img
          className='w-[100px] h-[60px]
        object-cover rounded-md object-top shadow-sm'
          loading='lazy'
          src={genre.poster}
        />
      </div>

      <h1 className='text-neutral-300 text-base'>{genre.name}</h1>
      <i className='text-neutral-300'>
        <FiChevronRight size={22} />
      </i>
    </div>
  )
}
