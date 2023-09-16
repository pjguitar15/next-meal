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

const CarouselComponent = ({ numOfSlides, allCategories }: any) => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={numOfSlides}
        autoplay
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
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
