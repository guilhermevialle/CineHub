import ButtonIconTop from '../lib/buttons/ButtonIconTop'
import Padding from '../responsive/Padding'
import {
  RiHomeLine,
  RiBookmarkLine,
  RiSettings2Line,
  RiSearchLine,
} from 'react-icons/ri'

const navButtons = [
  {
    icon: <RiHomeLine size={22} />,
    text: 'Home',
    width: '25%',
  },
  {
    icon: <RiBookmarkLine size={22} />,
    text: 'Saves',
    width: '25%',
  },
  {
    icon: <RiSettings2Line size={22} />,
    text: 'Explore',
    width: '25%',
  },
  {
    icon: <RiSearchLine size={22} />,
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
                key={bt.text}
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
