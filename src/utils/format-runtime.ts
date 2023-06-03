export default function formatRuntime(runtime: number): string {
  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60
  let formattedRuntime = ''

  if (hours > 0) {
    formattedRuntime += `${hours}h`
  }
  if (minutes > 0) {
    formattedRuntime += `${minutes}m`
  }
  return formattedRuntime
}
