import React from 'react'
import Image from 'next/image'

const CategoryItem = () => {
  return (
    <div className=''>
      <Image
        className='rounded-full'
        src='https://www.themealdb.com/images/media/meals/1548772327.jpg'
        alt='test'
        width={500}
        height={500}
      />
      <h6 className='text-center text-lg mt-3 font-semibold'>
        Baked salmon with fennel & tomatoes
      </h6>
    </div>
  )
}

export default CategoryItem
