import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../Searchbar/searchbar.css'
import React from 'react'
export const SearchBar = ({setisShowTrending}) => {

  const handleSeachFocus=()=>{
    setisShowTrending();
  }

  return (
    <div className="container">
      <div className='search'>
        <input className='search-input' onFocus={handleSeachFocus} placeholder='Search...' type="text" />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  )
}
