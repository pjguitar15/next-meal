'use client'
import React, { useState } from 'react'
import Category from './Category'
import ViewMoreCategories from './NextCategory'

const Categories = ({ allCategories }: { allCategories: Object[] }) => {
  const [categorySize, setCategorySize] = useState([0, 5])
  const handleViewMore = () => {
    if (categorySize[1] < 15) {
      setCategorySize([categorySize[0] + 5, categorySize[1] + 5])
    } else {
      setCategorySize([0, 5])
    }
  }
  return (
    <section className='bg-zinc-100'>
      <div className='container mx-auto pt-10'>
        <div className='grid grid-cols-5'>
          {allCategories
            .slice(categorySize[0], categorySize[1])
            .map((item: any, index: number) => (
              <Category key={index} allCategoryItems={item} />
            ))}
        </div>
        <ViewMoreCategories handleViewMore={handleViewMore} />
      </div>
    </section>
  )
}

export default Categories
