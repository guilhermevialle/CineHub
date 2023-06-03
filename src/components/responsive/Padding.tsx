import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  height?: string
  stretch?: boolean
}

export default function Padding({ children, height, stretch, ...rest }: Props) {
  const stretchedPaddings =
    'w-full px-4 md:px-8 lg:px-32 xl:px-52 2xl:px-64 3xl:px-72'

  return (
    <div
      {...rest}
      className={
        stretch
          ? stretchedPaddings
          : 'w-full px-4 sm:20 md:px-32 lg:px-48 xl:px-64 2xl:px-80 3xl:px-96'
      }
      style={{
        height,
      }}
    >
      {children}
    </div>
  )
}
