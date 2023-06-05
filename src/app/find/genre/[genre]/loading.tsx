import NavBreaker from '@/components/navbar/NavBreaker'
import Topbar from '@/components/navbar/Topbar'
import Padding from '@/components/responsive/Padding'

export default function Loading() {
  return (
    <main className='w-screen h-fit bg-neutral-950 flex flex-col'>
      <NavBreaker top={true} />
      <Padding height='100%'>
        <div className='py-3.5 mb-6'>{/* <Search /> */}</div>
        <div className='py-3.5 mb-4 bg-neutral-900 animate-pulse h-4 w-44 rounded-md'></div>
        <div className='w-full h-full overflow-y-scroll flex flex-wrap justify-evenly gap-2'>
          <div className='flex-auto w-[130px] h-[174px] bg-neutral-900 rounded-md relative shadow-md animate-pulse'></div>
          <div className='flex-auto w-[130px] h-[174px] bg-neutral-900 rounded-md relative shadow-md animate-pulse'></div>
          <div className='flex-auto w-[130px] h-[174px] bg-neutral-900 rounded-md relative shadow-md animate-pulse'></div>
          <div className='flex-auto w-[130px] h-[174px] bg-neutral-900 rounded-md relative shadow-md animate-pulse'></div>
          <div className='flex-auto w-[130px] h-[174px] bg-neutral-900 rounded-md relative shadow-md animate-pulse'></div>
          <div className='flex-auto w-[130px] h-[174px] bg-neutral-900 rounded-md relative shadow-md animate-pulse'></div>
        </div>
      </Padding>
      <NavBreaker />
    </main>
  )
}
