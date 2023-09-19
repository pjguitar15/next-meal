'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const MealPageCrumbs = ({ allCurrentData }: any) => {
  const router = useRouter()
  const backHandler = () => {
    router.back()
  }
  return (
    <div className='bg-gray-800 text-white py-3'>
      <div className='container mx-auto flex gap-3 text-sm'>
        <Link
          href='/'
          className='cursor-pointer text-gray-400 hover:text-gray-100 transition duration-300'
        >
          Home
        </Link>
        <span className='cursor-pointer text-gray-400'>/</span>
        <span
          onClick={backHandler}
          className='cursor-pointer text-gray-400 hover:text-gray-100 transition duration-300'
        >
          Categories
        </span>
        <span className='cursor-pointer text-gray-400'>/</span>
        <span className='cursor-pointer text-gray-100'>
          {allCurrentData.strMeal}
        </span>
      </div>
    </div>
  )
}

export default MealPageCrumbs
