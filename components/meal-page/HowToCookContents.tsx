'use client'
import React, { useState, useEffect } from 'react'
import YoutubePlayer from './YoutubePlayer'

type incredientsObjectProps = {
  ingredient: string
  measure: string
}

type HowToCookContentsProps = {
  videoId: string
  mealName: string
  procedure: string
  ingredientsArr: incredientsObjectProps[]
  country: string
}

const HowToCookContents = ({
  videoId,
  mealName,
  procedure,
  ingredientsArr,
  country,
}: HowToCookContentsProps) => {
  const [procedureList, setProcedureList] = useState<string[]>([])

  useEffect(() => {
    const strToArr: string[] = procedure.split('.')
    setProcedureList(strToArr)
  }, [procedure])
  return (
    <section className='bg-zinc-100 py-12'>
      <div className='container mx-auto'>
        <div className='mb-8'>
          <YoutubePlayer videoId={videoId} />
        </div>
        <h1 className='text-4xl font-bold mb-4'>{mealName}</h1>
        <div className='border-2 border-blue-200 bg-blue-100 text-black font-semibold inline-block px-5 py-1 rounded text-sm mb-4'>
          {country}
        </div>

        <div className='flex flex-col'>
          {/* Ingredients */}
          <div className='ms-0 mb-8'>
            <h3 className='text-2xl font-semibold mb-2'>Ingredients:</h3>
            <ol className='list-decimal list-inside'>
              {ingredientsArr
                .filter((item) => item.ingredient !== '')
                .map((item, index) => (
                  <li className='mb-2' key={index}>
                    {item.ingredient} ({item.measure})
                  </li>
                ))}
            </ol>
          </div>

          {/* Procedure */}
          <div>
            <h3 className='text-2xl font-semibold mb-2'>
              How to Prepare {mealName}
            </h3>
            <ol className='list-decimal list-inside'>
              {procedureList
                .slice(0, procedureList.length - 1)
                .map((item, index) => (
                  <li className='mb-2' key={index}>
                    {item}.
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToCookContents
