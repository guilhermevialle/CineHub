import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  text: string
  icon?: {
    asset: React.ReactNode
    position: 'left' | 'right'
  }
}

export default function Button({ icon, text, ...rest }: Props) {
  return (
    <button
      {...rest}
      type='button'
      className='w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-white text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all text-lg dark:focus:ring-offset-gray-800'
    >
      {icon && icon.position == 'left' && icon.asset}
      {text}
      {icon && icon.position == 'right' && icon.asset}
    </button>
  )
}
