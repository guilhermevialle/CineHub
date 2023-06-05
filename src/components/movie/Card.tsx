/* eslint-disable @next/next/no-img-element */
'use client'

import { poster_size } from '@/services/api'
import { Result } from '@/types'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ImSpinner3 } from 'react-icons/im'

type Props = {
  result: Result
}

export default function Card({ result }: Props) {
  const router = useRouter()
  const [clicked, setClick] = useState<boolean>(false)

  return (
    <div
      className='flex-none w-[130px] h-[174px] bg-neutral-900 rounded-md relative'
      onClick={() => {
        setClick(() => true)
        router.push(`/movie/${result.id}`)
      }}
    >
      {clicked && (
        <div className='w-full h-full bg-black bg-opacity-60 absolute flex justify-center items-center'>
          <i className='text-white animate-spin transition-all'>
            <ImSpinner3 size={20} />
          </i>
        </div>
      )}

      <img
        src={poster_size + result?.poster_path}
        className='object-cover rounded-md'
        loading='lazy'
      />
    </div>
  )
}
