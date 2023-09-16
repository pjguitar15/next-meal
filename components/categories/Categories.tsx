'use client'
import React from 'react'
import CarouselComponent from './CarouselComponent'

const Categories = ({ allCategories }: { allCategories: Object[] }) => {
  return (
    <section className='bg-zinc-100'>
      <div className='container mx-auto py-10'>
        <CarouselComponent allCategories={allCategories} />
      </div>
    </section>
  )
}

export default Categories
