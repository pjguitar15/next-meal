'use client'
import React, { useState } from 'react'

const SearchForm = () => {
  const [input, setInput] = useState('')
  const submitHandler = (event: any) => {
    event.preventDefault()
    alert(input)
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='py-4 w-full px-8 outline-0 border rounded-full'
          type='text'
          placeholder='Search for an ingredient'
        />
      </form>
    </div>
  )
}

export default SearchForm
