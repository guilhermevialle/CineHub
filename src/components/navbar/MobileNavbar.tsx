import Padding from '../responsive/Padding'

export default function () {
  return (
    <nav className='w-full h-[120px] border-2 flex items-center fixed bottom-0 left-0'>
      <Padding>
        <button>Home</button>
        <button>Explore</button>
        <button>Saved</button>
        <button>Account</button>
      </Padding>
    </nav>
  )
}
