export default function NavBreaker({ top }: { top?: boolean }) {
  return top ? <div className='py-[32px]'></div> : <div className='py-10'></div>
}
