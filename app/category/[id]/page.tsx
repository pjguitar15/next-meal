import CategoryItems from '@/components/category-page/CategoryItems'
import FirstSection from '@/components/category-page/FirstSection'
import React from 'react'

const page = ({ params }: any) => {
  const { id } = params
  return (
    <div>
      <FirstSection paramsValue={id} />
      <div className='py-12'>
        <CategoryItems paramsValue={id} />
      </div>
    </div>
  )
}

export default page
