import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  text: string
  icon: React.ReactNode
}

export default function ButtonIconTop({ text, icon }: Props) {
  return (
    <button className='flex items-center flex-col gap-y-1 text-neutral-400'>
      {icon}
      <p className='text-[0.8rem] font-normal'>{text}</p>
    </button>
  )
}
