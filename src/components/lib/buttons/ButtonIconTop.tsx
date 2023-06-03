import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  text: string
  icon: React.ReactNode
}

export default function ButtonIconTop({ text, icon, ...rest }: Props) {
  return (
    <button
      {...rest}
      className='flex items-center flex-col gap-y-1 text-neutral-400'
    >
      {icon}
      <p className='text-[0.7rem] font-normal'>{text}</p>
    </button>
  )
}
