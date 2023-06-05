import NavBreaker from '@/components/navbar/NavBreaker'
import Padding from '@/components/responsive/Padding'

export default function Loading() {
  const skeletonData = Array.from('123456789')

  return (
    <main className='w-screen h-screen bg-neutral-950 py-4'>
      <NavBreaker top={true} />
      <Padding>
        <div className='w-full h-11 text-neutral-200 flex items-center bg-neutral-900 rounded shadow-sm animate-pulse'></div>
        <div className='w-full h-fit mt-6'>
          <h1 className='w-[130px] h-6 mb-3 bg-neutral-900 rounded-md'></h1>
          <div className='w-full h-[600px] overflow-y-scroll flex flex-col gap-y-4'>
            {skeletonData.map((_, index) => {
              return (
                <div
                  className='w-full h-full flex items-center gap-x-6'
                  key={index}
                >
                  <div className='w-[100px] h-[60px] bg-neutral-900 rounded-md animate-pulse' />
                  <div className='text-white text-lg bg-neutral-900 h-5 w-1/2 animate-pulse' />
                  <div className='text-white bg-neutral-900 h-5 w-5 animate-pulse' />
                </div>
              )
            })}
          </div>
        </div>
      </Padding>
    </main>
  )
}
