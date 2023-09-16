import React from 'react'
import CategoryItem from './CategoryItem'

const CategoryItems = () => {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-5 gap-12'>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  )
}

export default CategoryItems
