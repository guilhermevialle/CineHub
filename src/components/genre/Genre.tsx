'use client'

import { MovieGenre } from '@/types'
import { useRouter } from 'next/navigation'
import { FiChevronRight } from 'react-icons/fi'
import { useState } from 'react'
import { ImSpinner3 } from 'react-icons/im'

type Props = {
  genre: MovieGenre
}

export default function Genre({ genre }: Props) {
  const [focused, setFocus] = useState<boolean>(false)
  const router = useRouter()

  return (
    <button
      className='w-full h-fit flex items-center gap-x-6 py-1 rounded-md hover:bg-black px-1 transition-all justify-between'
      onClick={() => {
        setFocus(() => true)
        router.push(`/find/genre/${genre.name}`)
      }}
      onBlur={() => setFocus(() => false)}
    >
      <div className='w-full h-fit flex items-center gap-x-6 py-1 rounded-md hover:bg-black'>
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
      <i className='px-5 animate-spin transition-all text-zinc-600'>
        {focused && <ImSpinner3 size={20} />}
      </i>
    </button>
  )
}
