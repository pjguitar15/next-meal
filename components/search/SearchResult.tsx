'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { CircleFlag } from 'next-circle-flags'
import Link from 'next/link'

type SearchResultProps = {
  item: {
    idMeal: string
    strMeal: string
    strCategory: string
    strArea: string
    strMealThumb: string
    strTags: string
    strIngredient1: string
    strIngredient2: string
    strIngredient3: string
    strIngredient4: string
    strIngredient5: string
    strIngredient6: string
    strIngredient7: string
    strIngredient8: string
    strIngredient9: string
    strIngredient10: string
    strIngredient11: string
    strIngredient12: string
    strIngredient13: string
    strIngredient14: string
    strIngredient15: string
    strIngredient16: string
    strIngredient17: string
    strIngredient18: string
    strIngredient19: string
    strIngredient20: string
  }
}

const SearchResult = ({ item }: SearchResultProps) => {
  const [countryCode, setCountryCode] = useState('')
  useEffect(() => {
    switch (item.strArea) {
      case 'Filipino':
        setCountryCode('ph')
        break
      case 'Egyptian':
        setCountryCode('eg')
        break
      case 'Chinese':
        setCountryCode('cn')
        break
      case 'Italian':
        setCountryCode('it')
        break
      case 'French':
        setCountryCode('fr')
        break
      case 'British':
        setCountryCode('gb')
        break
      case 'Malaysian':
        setCountryCode('my')
        break
      case 'Portuguese':
        setCountryCode('pt')
        break
      case 'Mexican':
        setCountryCode('mx')
        break
      case 'American':
        setCountryCode('us')
        break
      case 'Canadian':
        setCountryCode('ca')
        break
      case 'Thai':
        setCountryCode('th')
        break
      case 'Indian':
        setCountryCode('in')
        break
      case 'Tunisian':
        setCountryCode('tn')
        break
      case 'Croatian':
        setCountryCode('hr')
        break
      case 'Dutch':
        setCountryCode('nl')
        break
      case 'Greek':
        setCountryCode('gr')
        break
      case 'Irish':
        setCountryCode('ie')
        break
      case 'Jamaican':
        setCountryCode('jm')
        break
      case 'Japanese':
        setCountryCode('jp')
        break
      case 'Kenyan':
        setCountryCode('ke')
        break
      case 'Moroccan':
        setCountryCode('ma')
        break
      case 'Polish':
        setCountryCode('pl')
        break
      case 'Russian':
        setCountryCode('ru')
        break
      case 'Vietnamese':
        setCountryCode('vn')
        break

      default:
        break
    }
  }, [item])
  const ingredientsArray = [
    item.strIngredient1,
    item.strIngredient2,
    item.strIngredient3,
    item.strIngredient4,
    item.strIngredient5,
    item.strIngredient6,
    item.strIngredient7,
    item.strIngredient8,
    item.strIngredient9,
    item.strIngredient10,
    item.strIngredient11,
    item.strIngredient12,
    item.strIngredient13,
    item.strIngredient14,
    item.strIngredient15,
    item.strIngredient16,
    item.strIngredient17,
    item.strIngredient18,
    item.strIngredient19,
    item.strIngredient20,
  ]
  return (
    <div className='border flex bg-white'>
      <Image
        className='w-1/2 object-cover h-72 lg:h-auto'
        src={item.strMealThumb}
        alt=''
        width={500}
        height={500}
      />

      <div className='pt-6 pb-7 px-5 flex flex-col'>
        <div className='flex justify-between'>
          <h3 className='text-lg font-semibold mb-2'>{item.strMeal}</h3>
          <div className='flex items-center gap-1'>
            <CircleFlag
              className='mb-2'
              countryCode={countryCode}
              height={25}
              width={25}
            />
          </div>
        </div>

        <span className='bg-green-100 px-3 py-1 border border-green-600 text-green-900 font-semibold rounded text-xs mx-auto ms-0 mb-3'>
          {item.strCategory}
        </span>

        <div className='mb-1 mt-1'>
          <span className='py-1 text-gray-900 font-semibold rounded text-xs italic'>
            {item.strTags}
          </span>
        </div>
        {/* <hr /> */}
        <h6 className='text-sm font-semibold mt-2'>Ingredients</h6>
        <ul className='mb-2 ps-2 text-xs italic border-l-2 border-yellow-300 ms-1 mt-2'>
          <li>
            {ingredientsArray.map((item, index) => (
              <span key={index}>
                {item && (
                  <>
                    {item.length > 0 && item}
                    {item.length > 0 && index < item.length && ', '}
                  </>
                )}
              </span>
            ))}
          </li>
        </ul>
        <Link
          href={`/meal/${item.idMeal}`}
          className='mt-auto mb-0 ms-0 bg-gray-600 hover:bg-gray-700 animation duration-200 text-white text-sm py-1 rounded mx-auto px-4'
        >
          Click to learn
        </Link>
      </div>
    </div>
  )
}

export default SearchResult
