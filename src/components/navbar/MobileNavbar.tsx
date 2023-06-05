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
import { useAtom } from 'jotai'
import { activeNavItemAtom } from '../contexts/activeNavItemAtom'
import { memo } from 'react'

type NavButtonOption = 'Home' | 'Saves' | 'Explore' | 'Config'

function MobileNavbar() {
  const router = useRouter()
  const [activeNavItem, setActiveNavItem] = useAtom(activeNavItemAtom)

  const navButtons = [
    {
      icon: <RiHomeLine size={22} />,
      text: 'Home',
      width: '25%',
      click: () => router.push(`/`),
    },
    {
      icon: <RiBookmarkLine size={22} />,
      text: 'Your choices',
      width: '25%',
      click: () => router.push(`/liked`),
    },
    {
      icon: <RiSearchLine size={22} />,
      text: 'Explore',
      width: '25%',
      click: () => router.push(`/find`),
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
                  setActiveNavItem(() => bt.text as NavButtonOption)
                  bt.click && bt.click()
                }}
                text={bt.text}
                icon={bt.icon}
                style={{
                  width: bt.width,
                  color: activeNavItem == bt.text ? '#fff' : '',
                }}
              />
            )
          })}
        </div>
      </Padding>
    </nav>
  )
}

export default memo(MobileNavbar)
