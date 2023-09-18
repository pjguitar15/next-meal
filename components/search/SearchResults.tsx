import React from 'react'
import SearchResult from './SearchResult'

interface SearchResultsProps {
  searchParams: string
  allSearchResults: any
}

const SearchResults = ({
  searchParams,
  allSearchResults,
}: SearchResultsProps) => {
  return (
    <section className='bg-zinc-100'>
      <div className='container mx-auto py-7'>
        <h6 className='mb-4'>
          Search Results for: <strong>{searchParams}</strong>
        </h6>

        <div className='grid lg:grid-cols-2 gap-3'>
          {allSearchResults && (
            <>
              {allSearchResults.map((item: any, index: number) => (
                <SearchResult key={index} item={item} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default SearchResults
