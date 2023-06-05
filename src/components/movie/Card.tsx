/* eslint-disable @next/next/no-img-element */
'use client'

import { poster_size } from '@/services/api'
import { Result, TotalMovieDetails } from '@/types'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ImSpinner3 } from 'react-icons/im'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  result: Result | TotalMovieDetails
}

export default function Card({ result, ...rest }: Props) {
  const router = useRouter()
  const [focused, setFocus] = useState<boolean>(false)

  return (
    <button
      {...rest}
      className='flex-none w-[130px] sm:w-[160px] sm:h-[204px] md:w-[190px] md:h-[234px] h-[174px] bg-neutral-900 rounded-md relative shadow-md outline-none hover:brightness-[50%] transition-all'
      onClick={() => {
        router.push(`/movie/${result.id}`)
      }}
      onFocus={() => setFocus(() => true)}
      onBlur={() => setFocus(() => false)}
    >
      {focused && (
        <div className='w-full h-full bg-black bg-opacity-60 absolute flex justify-center items-center'>
          <i className='text-white animate-spin transition-all'>
            <ImSpinner3 size={18} />
          </i>
        </div>
      )}

      <div className='w-full h-full bg-neutral-900 rounded-md '>
        <img
          src={poster_size + result?.poster_path}
          className='w-full h-full object-cover rounded-md skeleton-screen'
          loading='lazy'
        />
      </div>
    </button>
  )
}
