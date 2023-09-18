import React from 'react'
import Image from 'next/image'
import SearchResults from '@/components/search/SearchResults'
import SearchComponent from '@/components/search/SearchComponent'

interface SearchParamsProps {
  searchParams: { q: string }
}

const page = async ({ searchParams }: SearchParamsProps) => {
  const BACKGROUND_URL = `https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80`

  // Fetch
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParams.q}`
  )

  const res = await data.json()
  const allSearchResults = res.meals
  console.log(allSearchResults)
  return (
    <>
      <div className='relative'>
        <div className='absolute inset-0 w-full h-full object-cover -z-10'>
          <Image
            className='w-full h-full object-center object-cover'
            src={BACKGROUND_URL}
            alt=''
            width={500}
            height={500}
          />
        </div>
        <div className='relative'>
          <div className='black-overlay'></div>
          <div className='container mx-auto pt-36 py-32 z-10'>
            <SearchComponent />
          </div>
        </div>
      </div>
      <SearchResults
        searchParams={searchParams.q}
        allSearchResults={allSearchResults}
      />
    </>
  )
}

export default page
