/* eslint-disable @next/next/no-img-element */

'use client'

import { RiHeart3Line, RiShareForwardLine } from 'react-icons/ri'
import { Balancer } from 'react-wrap-balancer'
import Button from '@/components/lib/buttons/Button'
import ButtonIconTop from '@/components/lib/buttons/ButtonIconTop'
import MobileNavbar from '@/components/navbar/MobileNavbar'
import NavBreaker from '@/components/navbar/NavBreaker'
import Padding from '@/components/responsive/Padding'
import Row from '@/components/movie/Row'
import Topbar from '@/components/navbar/Topbar'
import {
  backdrop_size,
  getRecomendationsFrom,
  getSimilarMoviesFrom,
} from '@/services/api'
import { TotalMovieDetails, TotalResultsWithPages } from '@/types'
import formatRuntime from '@/utils/format-runtime'
import useLikedContent from '@/hooks/useLikedContent'

type Props = {
  movieDetails: TotalMovieDetails | undefined
  similarMovies: TotalResultsWithPages | undefined
  recomendations: TotalResultsWithPages | undefined
}

export default function ClientMovie({
  movieDetails,
  recomendations,
  similarMovies,
}: Props) {
  const getSimilarMoviesInterceptor = async (page: number) => {
    if (movieDetails?.id) {
      return await getSimilarMoviesFrom(movieDetails?.id, page)
    } else {
      return undefined
    }
  }

  const getRecomendationsInterceptor = async (page: number) => {
    if (movieDetails?.id) {
      return await getRecomendationsFrom(movieDetails?.id, page)
    }
  }

  const { updateLikedArray, isLiked, removeLikedItem } = useLikedContent()

  return (
    <main className='w-screen h-fit bg-neutral-950'>
      <NavBreaker top={true} />
      <Padding>
        <div>
          <img
            className='w-full h-64 md:h-96 2xl:h-[460px] object-cover'
            loading='lazy'
            src={backdrop_size + movieDetails?.backdrop_path}
          />
          <div className='text-white w-full h-fit'>
            <div className='w-full h-full'>
              <h1 className='w-full text-3xl font-bold mt-3 mb-4'>
                <Balancer>{movieDetails?.title}</Balancer>
              </h1>

              <div className='w-full mb-4 flex gap-x-3 items-center'>
                <span className='text-[15px] text-neutral-300'>
                  {movieDetails?.release_date &&
                    new Date(movieDetails?.release_date).getFullYear()}
                </span>

                {movieDetails?.adult ? (
                  <span className='text-[15px] px-0.5 rounded bg-red-500 font-semibold'>
                    +18
                  </span>
                ) : (
                  <span className='text-[15px] px-2 rounded bg-green-500 font-semibold'>
                    L
                  </span>
                )}

                <span className='text-[15px] text-neutral-400'>
                  {movieDetails?.runtime &&
                    formatRuntime(movieDetails?.runtime)}
                </span>

                <span
                  className={`w-fit text-[15px] px-1.5 rounded text-white font-bold flex items-center gap-x-1.5 text-shadow ${
                    movieDetails?.vote_average &&
                    movieDetails?.vote_average >= 7
                      ? 'bg-emerald-600'
                      : movieDetails?.vote_average &&
                        movieDetails?.vote_average >= 5
                      ? 'bg-yellow-600'
                      : 'bg-red-600'
                  }`}
                >
                  {(
                    movieDetails?.vote_average &&
                    movieDetails?.vote_average * 10
                  )?.toFixed(0)}
                </span>
              </div>

              <div className='my-6'>
                <Button
                  onClick={() => {
                    if (movieDetails?.id) {
                      if (isLiked(movieDetails.id))
                        return removeLikedItem(movieDetails.id)
                      updateLikedArray(movieDetails.id)
                    }
                  }}
                  style={{
                    height: '40px',
                  }}
                  text={
                    movieDetails?.id && isLiked(movieDetails.id)
                      ? 'Remove from list'
                      : 'Save'
                  }
                />
              </div>

              <div className='mb-6'>
                <p className='text-sm lg:text-base text-zinc-200 mb-2'>
                  <Balancer>{movieDetails?.overview}</Balancer>
                </p>

                <p className='font-semibold text-sm text-neutral-400'>
                  {movieDetails?.genres.map((genre, index) => {
                    return (
                      <span key={genre.id + genre.name}>
                        <Balancer>
                          {index < 1 ? (
                            <span>{genre.name}</span>
                          ) : (
                            <span>, {genre.name}</span>
                          )}
                        </Balancer>
                      </span>
                    )
                  })}
                </p>
              </div>

              <div className='w-full flex gap-x-8 justify-around'>
                <ButtonIconTop text='Rate' icon={<RiHeart3Line size={24} />} />
                <ButtonIconTop
                  text='Share'
                  icon={<RiShareForwardLine size={24} />}
                />
              </div>
            </div>

            <div className='mt-10'></div>

            <div className='space-y-6'>
              <Row
                interceptorFunction={getSimilarMoviesInterceptor}
                queryKey='similarMovies'
                title='Similar movies'
                totalResultsWithPages={similarMovies}
              />
              <Row
                interceptorFunction={getRecomendationsInterceptor}
                queryKey='recomendations'
                title='Recomendations'
                totalResultsWithPages={recomendations}
              />
            </div>
            <NavBreaker />
          </div>
        </div>
        <Topbar />
        <MobileNavbar />
      </Padding>
    </main>
  )
}
