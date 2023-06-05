'use client'

import NavBreaker from '@/components/navbar/NavBreaker'
import Topbar from '@/components/navbar/Topbar'
import Padding from '@/components/responsive/Padding'
import useLikedContent from '@/hooks/useLikedContent'

export default function ClientLiked() {
  const { likedContent } = useLikedContent()

  return (
    <main className='w-screen h-fit bg-neutral-950 flex flex-col'>
      <Topbar />
      <NavBreaker top={true} />
      <Padding height='100%'>
        <div className='py-3.5 mb-4'></div>
        <h1 className='text-white text-2xl mb-5'>Your choices</h1>
        <div className='w-full h-full overflow-y-auto flex flex-wrap justify-evenly gap-2'></div>
      </Padding>
    </main>
  )
}
