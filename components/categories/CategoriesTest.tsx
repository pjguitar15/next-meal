'use client'
import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const CategoriesTest = () => {
  return (
    <section className='py-12'>
      <div className='container mx-auto'>
        <h1 className='text-2xl'>Carousel Test</h1>
        {/* Carousel here */}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div className='bg-zinc-500 text-white py-12'>Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-zinc-500 text-white py-12'>Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-zinc-500 text-white py-12'>Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-zinc-500 text-white py-12'>Slide 1</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default CategoriesTest
