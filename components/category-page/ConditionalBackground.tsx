import React from 'react'
import Image from 'next/image'

const BACKGROUNDS = {
  beef: `https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
  chicken: `https://images.unsplash.com/photo-1567529854970-ce2c4207e242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80`,
  dessert: `https://plus.unsplash.com/premium_photo-1691495104875-0aa42b123d06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
  lamb: `https://images.unsplash.com/photo-1514944617518-12c7891ec602?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
  miscellaneous: `https://images.unsplash.com/photo-1641919098042-4412ccbbaa2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
  pasta: `https://plus.unsplash.com/premium_photo-1663851517320-48d7f7d09688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
  pork: `https://images.unsplash.com/photo-1691410065039-25bdbb56c23b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
  seafood: `https://images.unsplash.com/photo-1651323018466-b36b7df1d2b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80`,
  side: `https://images.unsplash.com/photo-1625938144755-652e08e359b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80`,
  starter: `https://images.unsplash.com/photo-1626200925953-ad20a07e1aa7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1928&q=80`,
  vegan: `https://images.unsplash.com/photo-1524859330668-c357331384f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80`,
  vegetarian: `https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80`,
  breakfast: `https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80`,
  goat: `https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80`,
}

const ConditionalBackground = ({ paramsValue }: any) => {
  console.log(paramsValue)
  return (
    <div className='absolute inset-0 w-full h-full object-cover -z-10'>
      {paramsValue === 'beef' && (
        <Image
          className='w-full h-full object-cover'
          src={BACKGROUNDS.beef}
          alt='Category Image'
          width={500}
          height={500}
        />
      )}

      {paramsValue === 'chicken' && (
        <Image
          src={BACKGROUNDS.chicken}
          className='w-full h-full object-cover'
          alt='Category Image'
          width={500}
          height={500}
        />
      )}

      {paramsValue === 'dessert' && (
        <Image
          src={BACKGROUNDS.dessert}
          className='w-full h-full object-cover'
          alt='Category Image'
          width={500}
          height={500}
        />
      )}

      {paramsValue === 'lamb' && (
        <Image
          src={BACKGROUNDS.lamb}
          className='w-full h-full object-cover'
          alt='Category Image'
          width={500}
          height={500}
        />
      )}

      {paramsValue === 'miscellaneous' && (
        <Image
          src={BACKGROUNDS.miscellaneous}
          className='w-full h-full object-cover'
          alt='Category Image'
          width={500}
          height={500}
        />
      )}

      {paramsValue === 'pasta' && (
        <Image
          src={BACKGROUNDS.pasta}
          className='w-full h-full object-cover'
          alt='Category Image'
          width={500}
          height={500}
        />
      )}

      {paramsValue === 'pork' && (
        <Image
          src={BACKGROUNDS.pork}
          className='w-full h-full object-cover'
          alt='Category Image'
          width={500}
          height={500}
        />
      )}

      {paramsValue === 'seafood' && (
        <Image
          src={BACKGROUNDS.seafood}
          className='w-full h-full object-cover'
          alt='Category Image'
          width={500}
          height={500}
        />
      )}

      {paramsValue === 'side' && (
        <Image
          src={BACKGROUNDS.side}
          className='w-full h-full object-cover'
          alt='Category Image'
          width={500}
          height={500}
        />
      )}

      {paramsValue === 'starter' && (
        <Image
          src={BACKGROUNDS.starter}
          className='w-full h-full object-cover'
          alt='Category Image'
          width={500}
          height={500}
        />
      )}

      {paramsValue === 'vegan' && (
        <Image
          src={BACKGROUNDS.vegan}
          className='w-full h-full object-cover'
          alt='Category Image'
          width={500}
          height={500}
        />
      )}

      {paramsValue === 'vegetarian' && (
        <Image
          src={BACKGROUNDS.vegetarian}
          className='w-full h-full object-cover'
          alt='Category Image'
          width={500}
          height={500}
        />
      )}

      {paramsValue === 'breakfast' && (
        <Image
          src={BACKGROUNDS.breakfast}
          className='w-full h-full object-cover'
          alt='Category Image'
          width={500}
          height={500}
        />
      )}

      {paramsValue === 'goat' && (
        <Image
          src={BACKGROUNDS.goat}
          className='w-full h-full object-cover'
          alt='Category Image'
          width={500}
          height={500}
        />
      )}
    </div>
  )
}

export default ConditionalBackground
