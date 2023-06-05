'use client'

import { BiSearch } from 'react-icons/bi'
import { HTMLAttributes, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { ImSpinner3 } from 'react-icons/im'
import { useState } from 'react'

interface Props extends HTMLAttributes<HTMLFormElement> {}

export default function Search({ ...rest }: Props) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const [loading, setLoad] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (inputRef.current) {
      const input = inputRef.current
      const query = input.value

      if (query && query.length > 2) {
        setLoad(true)
        router.push(`/find/${query}`)
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      {...rest}
      className='w-full h-12 xl:h-14 text-neutral-200 flex items-center bg-neutral-900 rounded border-[1px] border-neutral-800 shadow-md'
    >
      <i className='px-5 text-zinc-600'>
        <BiSearch size={15} />
      </i>
      <input
        ref={inputRef}
        autoComplete='off'
        className='flex-auto bg-transparent h-full outline-none overflow-hidden placeholder:text-sm text-sm placeholder:text-zinc-600'
        type='text'
        placeholder='Find something'
      />
      <i className='px-5 animate-spin transition-all text-zinc-600'>
        {loading && <ImSpinner3 size={15} />}
      </i>
    </form>
  )
}
