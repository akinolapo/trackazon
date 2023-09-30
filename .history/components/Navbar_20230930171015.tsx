import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='nav'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/assets/icons/logo.svg'
            width={27}
            height={27}
            alt='logo'
          />

          <p className='nav-logo'>
            Track<span className='text-primary'>Azon</span>
          </p>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar