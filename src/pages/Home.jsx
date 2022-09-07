import React,{useEffect, useState} from 'react'
import { SearchBar } from '../components/Searchbar/SearchBar'
import { Trending } from '../components/Trending/Trending'

export const Home = () => {
  const [isShowTrending, setisShowTrending] = useState(false);
  const setisShowTrendingFunction = () => {
    setisShowTrending(true);
  }
  useEffect(()=>{
    document.body.style.background="url('https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80') no-repeat center";
    document.body.style.backgroundSize='cover';

  },[])
  return (
    <>
        <SearchBar setisShowTrending={setisShowTrendingFunction} />
        {isShowTrending && <Trending />}
    </>
  )
}
