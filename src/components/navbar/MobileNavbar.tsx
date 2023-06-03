import ButtonIconTop from '../lib/buttons/ButtonIconTop'
import Padding from '../responsive/Padding'
import {
  HiHome,
  HiBookmark,
  HiCog6Tooth,
  HiMagnifyingGlass,
} from 'react-icons/hi2'

const navButtons = [
  {
    icon: <HiHome size={26} />,
    text: 'Home',
    width: '25%',
  },
  {
    icon: <HiBookmark size={26} />,
    text: 'Saves',
    width: '25%',
  },
  {
    icon: <HiCog6Tooth size={26} />,
    text: 'Explore',
    width: '25%',
  },
  {
    icon: <HiMagnifyingGlass size={26} />,
    text: 'Config',
    width: '25%',
  },
]

export default function MobileNavbar() {
  return (
    <nav className='w-full h-[90px] fixed bottom-0 left-0 bg-woodsmoke-950'>
      <Padding height='100%'>
        <div className='w-full h-full flex items-center justify-between text-white'>
          {navButtons.map((bt) => {
            return (
              <ButtonIconTop
                text={bt.text}
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
