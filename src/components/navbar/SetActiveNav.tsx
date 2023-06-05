'use client'

import { activeNavItemAtom } from '../contexts/activeNavItemAtom'
import { useAtom } from 'jotai'

export default function SetActiveNav({ active }: { active: string }) {
  const [, setActiveNavItem] = useAtom(activeNavItemAtom)

  setActiveNavItem(active)

  return null
}
