/* eslint-disable @next/next/no-img-element */

import ButtonIconTop from '@/components/lib/buttons/ButtonIconTop'
import Row from '@/components/movie/Row'
import MobileNavbar from '@/components/navbar/MobileNavbar'
import NavBreaker from '@/components/navbar/NavBreaker'
import Padding from '@/components/responsive/Padding'
import { TotalMovieDetails, TotalResultsWithPages } from '@/types'
import Balancer from 'react-wrap-balancer'
import { RiAddLine } from 'react-icons/ri'
import { poster_size } from '@/services/api'
import formatRuntime from '@/utils/format-runtime'
import { trimString } from '@/utils/trim-string'
import SeeMore from '@/components/banner/SeeMore'

type Props = {
  PopularMovies?: TotalResultsWithPages | undefined
  TopRatedMovies?: TotalResultsWithPages | undefined
  UpcomingMovies?: TotalResultsWithPages | undefined
  TrendingMovies?: TotalResultsWithPages | undefined
  bannerMovie: TotalMovieDetails | undefined
}

export default function ClientHome({
  PopularMovies,
  TopRatedMovies,
  UpcomingMovies,
  TrendingMovies,
  bannerMovie,
}: Props) {
  return (
    <main className='w-screen h-fit bg-neutral-950'>
      <div className='w-full h-[65vh] relative'>
        <img
          className='w-full h-full absolute object-cover brightness-50'
          src={poster_size + bannerMovie?.poster_path}
          alt={bannerMovie?.title}
        />
        <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-black'></div>
        <Padding height='100%'>
          <div className='w-full h-full'>
            <div className='w-full h-full relative z-10 flex items-center justify-end flex-col'>
              <h1 className='w-[75%] text-center text-[32px] font-bold text-white mb-6'>
                <Balancer>{bannerMovie?.title}</Balancer>
              </h1>
              <div className='text-neutral-200 flex items-center gap-x-5 mb-4'>
                <span className='text-neutral-300'>
                  {bannerMovie?.genres[0].name}
                </span>
                <div className='w-[1px] bg-gray-600 h-[50%]'></div>
                <span
                  className={`w-fit text-[15px] px-1.5 rounded text-white font-bold flex items-center gap-x-1.5 text-shadow ${
                    bannerMovie?.vote_average && bannerMovie?.vote_average >= 7
                      ? 'bg-green-400'
                      : bannerMovie?.vote_average &&
                        bannerMovie?.vote_average >= 5
                      ? 'bg-yellow-400'
                      : 'bg-red-400'
                  }`}
                >
                  {(
                    bannerMovie?.vote_average && bannerMovie?.vote_average * 10
                  )?.toFixed(0)}
                </span>
                <div className='w-[1px] bg-gray-500 h-[50%]'></div>
                <span className='text-neutral-400'>
                  {bannerMovie?.runtime && formatRuntime(bannerMovie?.runtime)}
                </span>
              </div>
              <div className='text-neutral-300 mb-2'>
                <p className='text-sm lg:text-lg text-zinc-300'>
                  <Balancer>
                    {bannerMovie?.overview &&
                      trimString(bannerMovie.overview, 205)}
                  </Balancer>
                </p>
              </div>
            </div>
          </div>
        </Padding>
        <div className='w-full bg-black h-24 text-white flex items-center justify-center gap-x-16'>
          <SeeMore id={bannerMovie?.id} />
        </div>
      </div>

      <div className='w-full h-32'></div>
      <Padding>
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
      </Padding>

      <NavBreaker />
      <MobileNavbar />
      <div className='py-3'></div>
    </main>
  )
}
