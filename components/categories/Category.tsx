import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faCircleStop,
} from '@fortawesome/free-solid-svg-icons'
type AllCategoryItemsProps = {
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}

const Category = ({
  allCategoryItems,
}: {
  allCategoryItems: AllCategoryItemsProps
}) => {
  return (
    <div className='hover:bg-gray-600 hover:scale-105 animation duration-300 cursor-pointer py-12 group rounded-lg'>
      <div className='w-32 mx-auto'>
        <Image
          className='w-full'
          src={allCategoryItems.strCategoryThumb}
          alt=''
          width={400}
          height={400}
        />
      </div>
      <h5 className='text-center font-semibold group-hover:text-white'>
        {allCategoryItems.strCategory}
      </h5>
      <p className='text-sm text-center text-gray-500 group-hover:text-white px-7'>
        {allCategoryItems.strCategoryDescription.slice(0, 100)}...
      </p>
    </div>
  )
}

export default Category
