'use client'

import { BiSearch } from 'react-icons/bi'
import { HTMLAttributes, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface Props extends HTMLAttributes<HTMLFormElement> {}

export default function Search({ ...rest }: Props) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (inputRef.current) {
      const input = inputRef.current
      const query = input.value

      console.log(query)

      if (query && query.length > 2) {
        router.push(`/find/${query}`)
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      {...rest}
      className='w-full h-11 text-neutral-200 flex items-center bg-neutral-800 rounded border-[1px] border-neutral-700 shadow-sm'
    >
      <i className='px-5'>
        <BiSearch size={15} />
      </i>
      <input
        ref={inputRef}
        autoComplete='off'
        className='flex-auto bg-transparent h-full outline-none overflow-hidden placeholder:text-sm text-sm placeholder:text-zinc-500'
        type='text'
        placeholder='Find movies and series'
      />
    </form>
  )
}
