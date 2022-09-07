import React from 'react'
import { SearchBar } from '../components/Searchbar/SearchBar'
import { Trending } from '../components/Trending/Trending'

export const Home = () => {
  return (
    <div>
        <SearchBar/>
        <Trending/>
    </div>
  )
}
