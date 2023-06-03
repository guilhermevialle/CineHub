/* eslint-disable @next/next/no-img-element */

import Button from '@/components/lib/buttons/Button'
import MobileNavbar from '@/components/navbar/MobileNavbar'
import Padding from '@/components/responsive/Padding'
import { backdrop_size } from '@/services/api'
import { TotalMovieDetails } from '@/types'
import formatRuntime from '@/utils/format-runtime'
import { Balancer } from 'react-wrap-balancer'
import { FaBookmark, FaShare, FaHeart } from 'react-icons/fa'
import ButtonIconTop from '@/components/lib/buttons/ButtonIconTop'

type Props = {
  movieDetails: TotalMovieDetails | undefined
}

export default function ClientMovie({ movieDetails }: Props) {
  return (
    <main className='w-screen h-screen bg-neutral-950'>
      <div>
        <img
          className='w-full h-64 object-cover'
          src={backdrop_size + movieDetails?.backdrop_path}
        />
        <div className='text-white w-full h-fit'>
          <Padding>
            <div className='w-full h-full'>
              <h1 className='w-full text-4xl font-bold mt-2 mb-4'>
                <Balancer>{movieDetails?.title}</Balancer>
              </h1>

              <div className='w-full mb-4 flex gap-x-3'>
                <span className='text-neutral-300'>
                  {movieDetails?.release_date &&
                    new Date(movieDetails?.release_date).getFullYear()}
                </span>

                {movieDetails?.adult && (
                  <span className='text-red-500'>+18</span>
                )}

                <span className='text-neutral-400'>
                  {movieDetails?.runtime &&
                    formatRuntime(movieDetails?.runtime)}
                </span>
              </div>

              <Button
                style={{ marginBottom: '16px' }}
                text='Save'
                icon={{
                  asset: <FaBookmark size={16} />,
                  position: 'left',
                }}
              />

              <div className='mb-4'>
                <p>
                  <Balancer>{movieDetails?.overview}</Balancer>
                </p>
              </div>

              <div className='w-full flex'>
                <ButtonIconTop text='Rate' icon={<FaHeart />} />
                <ButtonIconTop text='Share' icon={<FaShare />} />
              </div>
            </div>
          </Padding>
        </div>
      </div>
      <MobileNavbar />
    </main>
  )
}
