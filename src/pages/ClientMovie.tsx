/* eslint-disable @next/next/no-img-element */

import Button from '@/components/lib/buttons/Button'
import MobileNavbar from '@/components/navbar/MobileNavbar'
import Padding from '@/components/responsive/Padding'
import {
  backdrop_size,
  getRecomendationsFrom,
  getSimilarMoviesFrom,
} from '@/services/api'
import { TotalMovieDetails } from '@/types'
import formatRuntime from '@/utils/format-runtime'
import { Balancer } from 'react-wrap-balancer'
import { RiHeart3Line, RiShareForwardLine } from 'react-icons/ri'
import ButtonIconTop from '@/components/lib/buttons/ButtonIconTop'
import { AiOutlineVerticalAlignMiddle } from 'react-icons/ai'
import Row from '@/components/movie/Row'
import NavBreaker from '@/components/navbar/NavBreaker'

type Props = {
  movieDetails: TotalMovieDetails | undefined
}

export default async function ClientMovie({ movieDetails }: Props) {
  let similarMovies
  let recomendations
  if (movieDetails?.id) {
    similarMovies = await getSimilarMoviesFrom(movieDetails.id)

    recomendations = await getRecomendationsFrom(movieDetails.id)
  }

  return (
    <main className='w-screen h-fit bg-neutral-950'>
      <div>
        <img
          className='w-full h-64 object-cover'
          loading='lazy'
          src={backdrop_size + movieDetails?.backdrop_path}
        />
        <div className='text-white w-full h-fit'>
          <Padding>
            <div className='w-full h-full'>
              <h1 className='w-full text-4xl font-bold mt-3 mb-4'>
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
                  className={`w-fit text-[15px] px-1.5 rounded text-black font-bold flex items-center gap-x-1.5 ${
                    movieDetails?.vote_average &&
                    movieDetails?.vote_average >= 7
                      ? 'bg-green-400'
                      : movieDetails?.vote_average &&
                        movieDetails?.vote_average >= 5
                      ? 'bg-yellow-400'
                      : 'bg-red-400'
                  }`}
                >
                  <AiOutlineVerticalAlignMiddle />
                  {(
                    movieDetails?.vote_average &&
                    movieDetails?.vote_average * 10
                  )?.toFixed(0)}
                </span>
              </div>

              <div className='mb-4'>
                <Button
                  style={{
                    height: '50px',
                  }}
                  text='Save'
                />
              </div>

              <div className='mb-6'>
                <p className='text-sm text-zinc-200 mb-2'>
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
                title='Similar movies'
                totalResultsWithPages={similarMovies}
              />
              <Row
                title='Recomendations'
                totalResultsWithPages={recomendations}
              />
            </div>
            <NavBreaker />
          </Padding>
        </div>
      </div>
      <MobileNavbar />
    </main>
  )
}
