export function trimString(str: string, size: number) {
  if (str.length > size) {
    return str.slice(0, size) + '...'
  }

  return str
}
