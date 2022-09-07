import React from 'react';
import '../Filters/filter.css'

export default function Filters() {
    const handleCheck=(e)=>{
        console.log(e.target.name);
    }
  return (
    <div className='filters' onClick={e=>console.log(e.target.parentElement)}>
        <div className='brand'>
            <h2>Category</h2>
            <div className="option">
                <input onChange={handleCheck} type="checkbox" name="men's clothing" id="" />
                <p>Men's Clothing</p>
            </div>
            <div className="option">
                <input type="checkbox" name="jewelery" id="" />
                <p>Jewellery</p>
            </div>
        </div>
        <div className='price-range'>
            <h2>Price Range</h2>
            <div className="option">
                <input type="checkbox" name="100" id="" />
                <p>Under 100</p>
            </div>
            <div className="option">
                <input type="checkbox" name="100plus" id="" />
                <p>Above 100</p>
            </div>
        </div>

        <div className='ratings'>
            <h2>Ratings</h2>
            <div className="option">
                <input type="checkbox" name="1" id="" />
                <p>1 Stars</p>
            </div>
            <div className="option">
                <input type="checkbox" name="2" id="" />
                <p>2 Stars</p>
            </div>
            <div className="option">
                <input type="checkbox" name="3" id="" />
                <p>3 Stars</p>
            </div>
            <div className="option">
                <input type="checkbox" name="4" id="" />
                <p>4 Stars</p>
            </div>
            <div className="option">
                <input type="checkbox" name="5" id="" />
                <p>5 Stars</p>
            </div>
        </div>

    </div>
  )
}
