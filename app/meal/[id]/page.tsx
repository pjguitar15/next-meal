import React from 'react'
import Image from 'next/image'
import HowToCookContents from '@/components/meal-page/HowToCookContents'
import Link from 'next/link'
import MealPageCrumbs from '@/components/meal-page/MealPageCrumbs'

const page = async ({ params }: { params: any }) => {
  const { id } = params
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  )
  const res = await data.json()
  const allCurrentData = res.meals[0]
  console.log(res.meals[0])

  return (
    <>
      <div className='relative'>
        <div className='absolute inset-0 w-full h-full object-cover -z-10'>
          <Image
            className='w-full h-full object-cover'
            src={allCurrentData.strMealThumb}
            alt='Category Image'
            width={500}
            height={500}
          />
        </div>
        <div className='black-overlay'></div>
        <div className='container mx-auto py-52 z-10'>
          <h1 className='text-center text-5xl text-white capitalize'>
            {allCurrentData.strMeal}
          </h1>
        </div>
      </div>
      {/* Content */}
      <MealPageCrumbs allCurrentData={allCurrentData} />
      <HowToCookContents
        videoId={allCurrentData.strYoutube.slice(-11)}
        mealName={allCurrentData.strMeal}
      />
    </>
  )
}

export default page
