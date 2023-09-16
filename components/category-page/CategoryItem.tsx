import React from 'react'
import Image from 'next/image'

type CategoryItemProps = {
  imageUrl: string
  mealName: string
  mealLink: string
}

const CategoryItem = ({ imageUrl, mealName, mealLink }: CategoryItemProps) => {
  return (
    <div className='hover:scale-105 animation duration-200 cursor-pointer group'>
      <Image
        className='rounded-full group-hover:shadow-lg'
        src={imageUrl}
        alt='test'
        width={500}
        height={500}
      />
      <h6 className='text-center text-md mt-3 font-semibold'>{mealName}</h6>
    </div>
  )
}

export default CategoryItem
