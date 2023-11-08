import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <>
      <nav className='flex justify-between items-center'>
        <div>
        <h1>Help Desk</h1>
        </div>
        {/* <div className='mr-5 ml-6'>/ */}
          {/* <Link href='/'>Dashboard</Link> */}
          <Link href='/tickets'>Tickets</Link>
          <Link href='/signup'>Sign Up</Link>
          <Link href='/login'>Login</Link>
          <ThemeToggle />
          {/* </div> */}
        </nav>
    </>
  )
}
