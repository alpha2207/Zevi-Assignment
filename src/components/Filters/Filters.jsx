import React from 'react';
import '../Filters/filter.css'

export default function Filters({ checkFilterFunction }) {
    const handleCheck = (e) => {
        if (e.target.checked) checkFilterFunction(e.target.name, e.target.parentElement.parentElement.id);
    }
    return (
        <div className='filters'>
            <div className='brand' id='category'>
                <h2>Category</h2>
                <div className="option">
                    <input onChange={handleCheck} type="checkbox" name="men's clothing" id="" />
                    <p>Men's Clothing</p>
                </div>
                <div className="option">
                    <input onChange={handleCheck} type="checkbox" name="jewelery" id="" />
                    <p>Jewellery</p>
                </div>
            </div>
            <div className='price-range' id='price'>
                <h2>Price Range</h2>
                <div className="option">
                    <input onChange={handleCheck} type="checkbox" name="100" id="" />
                    <p>Under 100</p>
                </div>
                <div className="option">
                    <input onChange={handleCheck} type="checkbox" name="100plus" id="" />
                    <p>Above 100</p>
                </div>
            </div>

            <div className='ratings' id='rating'>
                <h2>Ratings</h2>
                <div className="option">
                    <input onChange={handleCheck} type="checkbox" name="1" id="" />
                    <p>1 Stars</p>
                </div>
                <div className="option">
                    <input onChange={handleCheck} type="checkbox" name="2" id="" />
                    <p>2 Stars</p>
                </div>
                <div className="option">
                    <input onChange={handleCheck} type="checkbox" name="3" id="" />
                    <p>3 Stars</p>
                </div>
                <div className="option">
                    <input onChange={handleCheck} type="checkbox" name="4" id="" />
                    <p>4 Stars</p>
                </div>
                <div className="option">
                    <input onChange={handleCheck} type="checkbox" name="5" id="" />
                    <p>5 Stars</p>
                </div>
            </div>

        </div>
    )
}
