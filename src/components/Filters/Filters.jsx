import React from 'react';
import '../Filters/filter.css'

export default function Filters() {
    const handleCheck=(e)=>{
        console.log(e.target.name);
    }
  return (
    <div className='filters'>
        <div className='brand'>
            <h2>Brands</h2>
            <div className="option">
                <input onChange={handleCheck} type="checkbox" name="h&m" id="" />
                <p>H&M</p>
            </div>
            <div className="option">
                <input type="checkbox" name="mango" id="" />
                <p>Mango</p>
            </div>
        </div>
        <div className='price-range'>
            <h2>Price Range</h2>
            <div className="option">
                <input type="checkbox" name="" id="" />
                <p>Under 500</p>
            </div>
            <div className="option">
                <input type="checkbox" name="" id="" />
                <p>1000 to 3000</p>
            </div>
        </div>

    </div>
  )
}
