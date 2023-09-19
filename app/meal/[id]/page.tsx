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

  const ingredientsArr = [
    {
      ingredient: allCurrentData.strIngredient1,
      measure: allCurrentData.strMeasure1,
    },
    {
      ingredient: allCurrentData.strIngredient2,
      measure: allCurrentData.strMeasure2,
    },
    {
      ingredient: allCurrentData.strIngredient3,
      measure: allCurrentData.strMeasure3,
    },
    {
      ingredient: allCurrentData.strIngredient4,
      measure: allCurrentData.strMeasure4,
    },
    {
      ingredient: allCurrentData.strIngredient5,
      measure: allCurrentData.strMeasure5,
    },
    {
      ingredient: allCurrentData.strIngredient5,
      measure: allCurrentData.strMeasure5,
    },
    {
      ingredient: allCurrentData.strIngredient6,
      measure: allCurrentData.strMeasure6,
    },
    {
      ingredient: allCurrentData.strIngredient7,
      measure: allCurrentData.strMeasure7,
    },
    {
      ingredient: allCurrentData.strIngredient8,
      measure: allCurrentData.strMeasure8,
    },
    {
      ingredient: allCurrentData.strIngredient9,
      measure: allCurrentData.strMeasure9,
    },
    {
      ingredient: allCurrentData.strIngredient10,
      measure: allCurrentData.strMeasure10,
    },
    {
      ingredient: allCurrentData.strIngredient11,
      measure: allCurrentData.strMeasure11,
    },
    {
      ingredient: allCurrentData.strIngredient12,
      measure: allCurrentData.strMeasure12,
    },
    {
      ingredient: allCurrentData.strIngredient13,
      measure: allCurrentData.strMeasure13,
    },
    {
      ingredient: allCurrentData.strIngredient14,
      measure: allCurrentData.strMeasure14,
    },
    {
      ingredient: allCurrentData.strIngredient15,
      measure: allCurrentData.strMeasure15,
    },
    {
      ingredient: allCurrentData.strIngredient16,
      measure: allCurrentData.strMeasure16,
    },
    {
      ingredient: allCurrentData.strIngredient17,
      measure: allCurrentData.strMeasure17,
    },
    {
      ingredient: allCurrentData.strIngredient18,
      measure: allCurrentData.strMeasure18,
    },
    {
      ingredient: allCurrentData.strIngredient19,
      measure: allCurrentData.strMeasure19,
    },
    {
      ingredient: allCurrentData.strIngredient20,
      measure: allCurrentData.strMeasure20,
    },
  ]

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
        procedure={allCurrentData.strInstructions}
        ingredientsArr={ingredientsArr}
        country={allCurrentData.strArea}
      />
    </>
  )
}

export default page
