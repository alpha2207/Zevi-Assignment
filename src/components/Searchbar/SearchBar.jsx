import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import '../Searchbar/searchbar.css'
export const SearchBar = ({ setisShowTrending }) => {

  const handleSeachFocus = () => {
    setisShowTrending();
  }

  return (
    <div className="container">
      <div className='search'>
        <input className='search-input' onFocus={handleSeachFocus} placeholder='Search...' type="text" />
        <Link to='/products'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
      </div>
    </div>
  )
}
