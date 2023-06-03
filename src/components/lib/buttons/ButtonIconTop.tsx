import { useRouter } from 'next/navigation'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  text: string
  icon: React.ReactNode
  active?: boolean
}

export default function ButtonIconTop({ text, icon, active, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`flex items-center flex-col gap-y-1 rounded p-1 ${
        active ? 'text-white ' : ' text-neutral-400 '
      }`}
    >
      {icon}
      <p className='text-[0.7rem] font-normal'>{text}</p>
    </button>
  )
}
