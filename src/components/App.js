import React, { useState, useEffect } from 'react'
import { Trending } from './Trending/Trending'
import { SearchBar } from './Searchbar/SearchBar';
import { Home } from '../pages/Home';

import { Routes, Route } from 'react-router-dom';

export default function () {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}
