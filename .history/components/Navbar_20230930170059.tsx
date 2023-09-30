import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='nav'>
        <Link href='/'>
          <Image/>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar