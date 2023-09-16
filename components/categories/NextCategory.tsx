import React from 'react'

const NextCategory = ({ handleViewMore }: { handleViewMore: any }) => {
  return (
    <div className='flex justify-center pb-10'>
      <button
        onClick={handleViewMore}
        className='bg-yellow-500 hover:bg-white border-2 border-transparent hover:border-yellow-500 inline-block px-7 py-2 rounded-full transparent duration-300 text-black hover:text-yellow-500 hover:scale-105'
      >
        View more categories
      </button>
    </div>
  )
}

export default NextCategory
