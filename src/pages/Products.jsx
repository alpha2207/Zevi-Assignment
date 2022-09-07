import React from 'react'
import Filters from '../components/Filters/Filters'
import ProductList from '../components/ProductList/ProductList'
import { SearchBar } from '../components/Searchbar/SearchBar'

export default function Products() {
  return (
    <div>
        <SearchBar/>
        <Filters/>
        <ProductList/>
    </div>
  )
}
