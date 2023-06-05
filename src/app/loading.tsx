import Padding from '@/components/responsive/Padding'

export default function Loading() {
  return (
    <main className='w-screen h-screen bg-neutral-950'>
      <Padding>
        <div className='w-full h-[65vh] p-4'>
          <div className='w-full h-full p-8 bg-neutral-900 animate-pulse flex flex-col justify-end gap-y-8'>
            <div className='space-y-4 px-10'>
              <div className='w-full h-6 rounded-md animate-pulse bg-neutral-800'></div>
              <div className='w-full h-6 rounded-md animate-pulse bg-neutral-800'></div>
            </div>
            <div className='w-full h-4 flex gap-x-5'>
              <span className='w-20 h-4 rounded-md animate-pulse bg-neutral-800'></span>
              <span className='w-20 h-4 rounded-md animate-pulse bg-neutral-800'></span>
              <span className='w-20 h-4 rounded-md animate-pulse bg-neutral-800'></span>
            </div>
            <div className='w-full h-24 rounded-md animate-pulse bg-neutral-800'></div>
            <div className='flex justify-center mt-8 gap-x-12'>
              <div className='w-10 h-10 rounded-md animate-pulse bg-neutral-800'></div>
              <div className='w-10 h-10 rounded-md animate-pulse bg-neutral-800'></div>
            </div>
          </div>
          <div className='w-full h-fit animate-pulse bg-neutral-900 mt-16 flex rounded-md p-2 gap-x-2'>
            <div className='w-28 h-[140px] animate-pulse bg-neutral-800 mt-16'></div>
            <div className='w-28 h-[140px] animate-pulse bg-neutral-800 mt-16'></div>
            <div className='w-28 h-[140px] animate-pulse bg-neutral-800 mt-16'></div>
            <div className='w-28 h-[140px] animate-pulse bg-neutral-800 mt-16'></div>
          </div>
        </div>
      </Padding>
    </main>
  )
}
