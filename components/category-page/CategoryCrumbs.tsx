'use client'
import React from 'react'
import Link from 'next/link'

const CategoryCrumbs = () => {
  return (
    <div className='bg-gray-800 text-white py-3'>
      <div className='container mx-auto flex gap-3 text-sm'>
        <Link
          href='/'
          className='cursor-pointer text-gray-400 hover:text-gray-100 transition duration-300'
        >
          Home
        </Link>
        <span className='text-gray-400'>/</span>
        <span className='text-gray-100 transition duration-300 font-bold'>
          Category
        </span>
      </div>
    </div>
  )
}

export default CategoryCrumbs
