'use client'

import { useRouter } from 'next/navigation'
import ButtonIconTop from '../lib/buttons/ButtonIconTop'
import Padding from '../responsive/Padding'
import {
  RiHomeLine,
  RiBookmarkLine,
  RiSettings2Line,
  RiSearchLine,
} from 'react-icons/ri'
import { useState } from 'react'

type NavButtonOption = 'Home' | 'Saves' | 'Explore' | 'Config'

export default function MobileNavbar() {
  const router = useRouter()
  const [activeNavButton, setActiveNavButton] =
    useState<NavButtonOption>('Home')

  const navButtons = [
    {
      icon: <RiHomeLine size={22} />,
      text: 'Home',
      width: '25%',
      click: () => router.push(`/`),
    },
    {
      icon: <RiBookmarkLine size={22} />,
      text: 'Saves',
      width: '25%',
    },
    {
      icon: <RiSearchLine size={22} />,
      text: 'Explore',
      width: '25%',
    },
    {
      icon: <RiSettings2Line size={22} />,
      text: 'Preferences',
      width: '25%',
    },
  ]

  return (
    <nav className='w-full h-[74px] fixed bottom-0 left-0 bg-woodsmoke-950 z-30'>
      <Padding height='100%'>
        <div className='w-full h-full flex items-center justify-between text-white'>
          {navButtons.map((bt) => {
            return (
              <ButtonIconTop
                key={bt.text}
                onClick={() => {
                  setActiveNavButton(() => bt.text as NavButtonOption)
                  bt.click && bt.click()
                }}
                text={bt.text}
                active={activeNavButton == bt.text}
                icon={bt.icon}
                style={{ width: bt.width }}
              />
            )
          })}
        </div>
      </Padding>
    </nav>
  )
}
