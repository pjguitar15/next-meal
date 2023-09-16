'use client'
import React, { useState } from 'react'
import Category from './Category'
import CarouselComponent from './CarouselComponent'

const Categories = ({ allCategories }: { allCategories: Object[] }) => {
  return (
    <section className='bg-zinc-100'>
      <div className='container mx-auto pt-10'>
        <div className='hidden xl:block'>
          <CarouselComponent numOfSlides={5} allCategories={allCategories} />
        </div>
        <div className='hidden lg:block xl:hidden'>
          <CarouselComponent numOfSlides={4} allCategories={allCategories} />
        </div>
        <div className='hidden md:block lg:hidden xl:hidden'>
          <CarouselComponent numOfSlides={3} allCategories={allCategories} />
        </div>
        <div className='hidden sm:block md:hidden'>
          <CarouselComponent numOfSlides={2} allCategories={allCategories} />
        </div>

        <div className='sm:hidden'>
          <CarouselComponent numOfSlides={1} allCategories={allCategories} />
        </div>
      </div>
    </section>
  )
}

export default Categories
