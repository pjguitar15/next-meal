import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed w-full py-4 z-50'>
      <div className='container mx-auto'>
        <h2 className='text-white text-2xl font-semibold'>
          Ingredient <span className='text-yellow-500'>Savvy</span>
        </h2>
      </div>
    </nav>
  )
}

export default Navbar
