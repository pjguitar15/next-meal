import React from 'react'
import SearchComponent from '../search/SearchComponent'

const HeroSection = () => {
  return (
    <div className='hero relative'>
      <div className='container mx-auto pt-36 py-20'>
        <h1 className='text-center text-5xl text-white'>Discover Great Food</h1>
        <SearchComponent />
      </div>
    </div>
  )
}

export default HeroSection
