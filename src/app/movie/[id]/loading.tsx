export default function Loading() {
  return (
    <main className='w-screen h-screen bg-neutral-950'>
      <div>
        <div className='w-full h-64 bg-neutral-800 animate-pulse'></div>
        <div className='text-white w-full h-fit'>
          <div className='p-4'>
            <div className='w-full h-full'>
              <div className='w-full text-3xl font-bold mt-3 mb-4 rounded-md bg-neutral-800 animate-pulse'></div>

              <div className='w-full h-6 rounded-md bg-neutral-800 animate-pulse mb-8'></div>
              <div className='w-full mb-4 flex gap-x-3 items-center'>
                <span className='text-[15px] text-neutral-300 rounded-md bg-neutral-800 animate-pulse w-12 h-4'></span>
                <span className='text-[15px] px-0.5 rounded bg-red-500 font-semibold w-6 h-4'></span>
                <span className='text-[15px] text-neutral-400 rounded-md bg-neutral-800 animate-pulse w-16 h-4'></span>
                <span className='text-[15px] px-1.5 text-white font-bold flex items-center gap-x-1.5 rounded-md bg-neutral-800 animate-pulse w-8 h-4'></span>
              </div>

              <div className='my-10'>
                <div className='h-28 text-sm text-neutral-900 rounded-md bg-neutral-800 animate-pulse'></div>
                <div className='font-semibold text-sm text-neutral-400'>
                  <span className='rounded-md bg-neutral-800 animate-pulse w-12 h-4'></span>
                </div>
              </div>

              <div className='w-full flex gap-x-8 justify-around'>
                <div className='rounded-md bg-neutral-800 animate-pulse w-16 h-10'></div>
                <div className='rounded-md bg-neutral-800 animate-pulse w-16 h-10'></div>
              </div>
            </div>

            <div className='mt-10'></div>

            <div className='space-y-6'>
              <div className='rounded-md bg-neutral-800 animate-pulse w-full h-3'></div>
              <div className='rounded-md bg-neutral-800 animate-pulse w-full h-3'></div>
              <div className='rounded-md bg-neutral-800 animate-pulse w-full h-3'></div>
              <div className='rounded-md bg-neutral-800 animate-pulse w-full h-3'></div>
              <div className='rounded-md bg-neutral-800 animate-pulse w-full h-3'></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
