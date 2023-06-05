'use client'

import { useRouter } from 'next/navigation'
import Padding from '../responsive/Padding'
import { BiArrowBack } from 'react-icons/bi'

type Props = {
  home?: boolean
  fade?: boolean
}

export default function Topbar({ home, fade }: Props) {
  const router = useRouter()

  return (
    <nav
      className={`w-full h-[64px] fixed top-0 left-0 ${
        fade ? 'bg-gradient-to-b from-woodsmoke-950' : 'bg-woodsmoke-950'
      } z-30`}
    >
      <Padding height='100%'>
        <div className='w-full h-full flex items-center'>
          {!home && (
            <button className='text-white' onClick={() => router.back()}>
              <BiArrowBack size={24} />
            </button>
          )}
        </div>
      </Padding>
    </nav>
  )
}
