import React, { useEffect, useState } from 'react'
import Filters from '../../components/Filters/Filters'
import ProductList from '../../components/ProductList/ProductList'
import { SearchBar } from '../../components/Searchbar/SearchBar';
import '../Products/products.css'

export default function Products() {
  let [itemsList, setItemsList] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    document.body.style.background = 'white';
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setItemsList(json));
    setLoading(false);
  }, []);

  const checkFilterFunction = (value, option) => {
    let updatedArray=itemsList.filter(item => {
      if (item[option] === value) {
        return item;
      }
    }
    )
    setItemsList(updatedArray);
  }

  return (
    <>
      <SearchBar />
      {loading ? "Loading..." : <div className="main-container">
        <Filters checkFilterFunction={checkFilterFunction} />
        <div className="products">
          {itemsList.map(item => {
            return <ProductList key={item.id} data={item} />
          })
          }
        </div>

      </div>}
    </>
  )
}
