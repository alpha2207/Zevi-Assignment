import React from 'react'
import { Trending } from './Trending/Trending'
import { SearchBar } from './Searchbar/SearchBar';

export default function () {
    return (
        <div>
            <>
                <SearchBar />
                <Trending />
            </>
        </div>
    )
}
