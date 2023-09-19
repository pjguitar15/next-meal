'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const listenScrollEvent = (event: any) => {
    if (window.scrollY < 73) {
      return setIsScrolled(false)
    } else if (window.scrollY > 70) {
      return setIsScrolled(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)

    return () => window.removeEventListener('scroll', listenScrollEvent)
  }, [])
  return (
    <nav className={`fixed w-full py-4 z-50 ${isScrolled && 'bg-gray-800'}`}>
      <div className='container mx-auto'>
        <Link href='/'>
          <h2 className='text-white text-2xl font-semibold'>
            Ingredient <span className='text-yellow-500'>Savvy</span>
          </h2>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
