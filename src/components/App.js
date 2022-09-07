import React, { useState, useEffect } from 'react'
import { Trending } from './Trending/Trending'
import { SearchBar } from './Searchbar/SearchBar';
import { Home } from '../pages/Home';

import { Routes, Route } from 'react-router-dom';
import Products from '../pages/Products';

export default function () {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />

        </Routes>
    )
}
