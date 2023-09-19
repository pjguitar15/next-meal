import React from 'react'
import Image from 'next/image'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Category from './Category'

const CarouselComponent = ({ allCategories }: any) => {
  return (
    <div className='select-none'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        breakpoints={{
          0: { slidesPerView: 1 },
          // 420: { slidesPerView: 1 },
          780: { slidesPerView: 2 },
          968: { slidesPerView: 3 },
          1224: { slidesPerView: 4 },
          1400: { slidesPerView: 4 },
        }}
        autoplay
        pagination={{ clickable: true }}
      >
        {allCategories.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <Category allCategoryItems={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CarouselComponent
