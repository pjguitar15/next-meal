import React from 'react'
import CategoryItem from './CategoryItem'

const CategoryItems = async ({ paramsValue }: { paramsValue: string }) => {
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${paramsValue}`
  )
  const res = await data.json()
  const allMeals = res.meals

  return (
    <div className='container mx-auto'>
      <div className='grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-20'>
        {allMeals.map((item: any, index: number) => (
          <CategoryItem
            key={index}
            imageUrl={item.strMealThumb}
            mealName={item.strMeal}
            mealLink={item.idMeal}
          />
        ))}
      </div>
    </div>
  )
}

export default CategoryItems
