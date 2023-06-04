'use client'

import { RiInformationLine } from 'react-icons/ri'
import ButtonIconTop from '../lib/buttons/ButtonIconTop'
import { useRouter } from 'next/navigation'

export default function SeeMore({ id }: { id: number | undefined }) {
  const router = useRouter()

  if (!id) return null

  return (
    <ButtonIconTop
      onClick={() => router.push(`/movie/${id}`)}
      text='More'
      icon={<RiInformationLine size={24} />}
    />
  )
}
