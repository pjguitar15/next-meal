import React from 'react'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselComponent = () => {
  return (
    <div className='bg-gray-200 p-8'>
      <div className='max-w-screen-xl mx-auto'>
        <Carousel showArrows={true} infiniteLoop={true} showThumbs={false}>
          <div>
            <div className='w-32 mx-auto'>
              <Image
                className='w-full'
                src='https://www.themealdb.com/images/category/beef.png'
                alt=''
                width={400}
                height={400}
              />
            </div>
          </div>
          <div>
            <div className='w-32 mx-auto'>
              <Image
                className='w-full'
                src='https://www.themealdb.com/images/category/beef.png'
                alt=''
                width={400}
                height={400}
              />
            </div>
          </div>
          <div>
            <div className='w-32 mx-auto'>
              <Image
                className='w-full'
                src='https://www.themealdb.com/images/category/beef.png'
                alt=''
                width={400}
                height={400}
              />
            </div>
          </div>
          {/* Add more carousel items as needed */}
        </Carousel>
      </div>
    </div>
  )
}

export default CarouselComponent
