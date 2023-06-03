/* eslint-disable @next/next/no-img-element */

import ButtonIconTop from '@/components/lib/buttons/ButtonIconTop'
import Row from '@/components/movie/Row'
import MobileNavbar from '@/components/navbar/MobileNavbar'
import NavBreaker from '@/components/navbar/NavBreaker'
import Padding from '@/components/responsive/Padding'
import { TotalResultsWithPages } from '@/types'
import Balancer from 'react-wrap-balancer'
import { RiAddLine, RiInformationLine } from 'react-icons/ri'
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '@/services/api'

type Props = {
  PopularMovies?: TotalResultsWithPages | undefined
  TopRatedMovies?: TotalResultsWithPages | undefined
  UpcomingMovies?: TotalResultsWithPages | undefined
  TrendingMovies?: TotalResultsWithPages | undefined
}

export default function ClientHome({
  PopularMovies,
  TopRatedMovies,
  UpcomingMovies,
  TrendingMovies,
}: Props) {
  const banner = 'https://wallpapercave.com/wp/wp4152026.jpg'

  return (
    <main className='w-screen h-fit bg-neutral-950'>
      <div className='w-full h-[65vh] relative'>
        <img
          className='w-full h-full absolute object-cover brightness-50'
          src={banner}
          alt='THE EQUALIZER'
        />
        <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-black'></div>
        <Padding height='100%'>
          <div className='w-full h-full'>
            <div className='w-full h-full relative z-10 flex items-center justify-end flex-col'>
              <h1 className='w-[75%] text-center text-[32px] font-bold text-white mb-6'>
                <Balancer>The Equalizer No Long Way to Die</Balancer>
              </h1>
              <div className='text-neutral-200 flex items-center gap-x-5 mb-4'>
                <span>Sci-fi</span>
                <div className='w-[1px] bg-gray-500 h-[50%]'></div>
                <span>8.5</span>
                <div className='w-[1px] bg-gray-500 h-[50%]'></div>
                <span>1h37min</span>
              </div>
              <div className='text-neutral-300 mb-2'>
                <p className='text-sm text-zinc-300'>
                  <Balancer>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor neque rerum tempora eveniet minima debitis. Accusamus
                    dolorum impedit et ad eveniet cupiditate, quidem, laboriosam
                    vitae facilis culpa, nobis architecto quod!
                  </Balancer>
                </p>
              </div>
            </div>
          </div>
        </Padding>
        <div className='w-full bg-black h-24 text-white flex items-center justify-center gap-x-16'>
          <ButtonIconTop text='Save' icon={<RiAddLine size={24} />} />
          <ButtonIconTop text='Save' icon={<RiInformationLine size={24} />} />
        </div>
      </div>

      <div className='w-full h-32'></div>
      <div className='space-y-7'>
        <Row
          queryKey='popularMovies'
          title='Popular movies'
          totalResultsWithPages={PopularMovies}
        />
        <Row
          title='Top rated movies'
          queryKey='topRatedMovies'
          totalResultsWithPages={TopRatedMovies}
        />
        <Row
          queryKey='upcomingMovies'
          title='Upcoming'
          totalResultsWithPages={UpcomingMovies}
        />
        <Row
          queryKey='trending'
          title='Trending'
          totalResultsWithPages={TrendingMovies}
        />
      </div>

      <NavBreaker />
      <MobileNavbar />
      <div className='py-3'></div>
    </main>
  )
}
