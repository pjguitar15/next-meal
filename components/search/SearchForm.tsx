'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchForm = () => {
  const [input, setInput] = useState('')
  const router = useRouter()
  const submitHandler = (event: any) => {
    event.preventDefault()
    router.push(`/search?q=${input}`)
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='py-2 lg:py-4 w-full px-8 outline-0 border rounded-full'
          type='text'
          placeholder='Search for an ingredient'
        />
      </form>
    </div>
  )
}

export default SearchForm
