'use client'

import { likedContentAtom } from '@/components/contexts/likedContentAtom'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

export default function useLikedContent() {
  const [likedContent, setLikedContent] = useAtom(likedContentAtom)

  useEffect(() => {
    const storedLikedContent = localStorage.getItem('liked')

    if (!storedLikedContent) {
      localStorage.setItem('liked', '[]')
      setLikedContent([])
    } else {
      setLikedContent(JSON.parse(storedLikedContent))
    }
  }, [])

  console.log(likedContent)

  function updateLikedArray(id: number) {
    if (!localStorage.getItem('liked')) {
      localStorage.setItem('liked', '[]')
    }

    setLikedContent((prev) => [...prev, id])
    localStorage.setItem('liked', JSON.stringify([...likedContent, id]))
  }

  function removeLikedItem(id: number) {
    setLikedContent((prev) => prev.filter((itemId) => itemId !== id))
    const storedLikedContent = JSON.stringify(
      likedContent.filter((itemId) => itemId !== id)
    )
    localStorage.setItem('liked', storedLikedContent)
  }

  function isLiked(id: number) {
    if (likedContent.includes(id)) return true
    return false
  }

  return { likedContent, updateLikedArray, removeLikedItem, isLiked }
}
