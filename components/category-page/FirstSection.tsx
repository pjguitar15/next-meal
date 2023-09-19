import React from 'react'
import ConditionalBackground from './ConditionalBackground'

const FirstSection = ({ paramsValue }: { paramsValue?: string }) => {
  return (
    <div className='relative'>
      <ConditionalBackground paramsValue={paramsValue} />
      <div className='black-overlay'></div>
      <div className='container mx-auto py-48 z-10'>
        <h1 className='text-center text-5xl text-white capitalize'>
          {paramsValue}
        </h1>
      </div>
    </div>
  )
}

export default FirstSection
