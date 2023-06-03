/* eslint-disable @next/next/no-img-element */
'use client'

import { poster_size } from '@/services/api'
import { Result } from '@/types'
import { useRouter } from 'next/navigation'

type Props = {
  result: Result
}

export default function Card({ result }: Props) {
  const router = useRouter()

  return (
    <div
      className='flex-none w-[130px] h-[174px] bg-neutral-900 rounded relative'
      onClick={() => router.push(`/movie/${result.id}`)}
    >
      <img
        src={poster_size + result?.poster_path}
        className='object-cover'
        loading='lazy'
      />
    </div>
  )
}
