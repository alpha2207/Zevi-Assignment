import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

// import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import '../ProductList/productlist.css';


export default function ProductList({data}) {
  const [isHeartFilled, setisHeartFilled] = useState(false);
  const handleHeartClick=()=>{
    setisHeartFilled(!isHeartFilled);
  }
  return (
    <div className="product-item">
      <div className="product-image" style={{ background: "url('https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=383&q=80')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className="heart">
          {isHeartFilled ? <FontAwesomeIcon onClick={handleHeartClick} icon={solidHeart} style={{color:'red'}} /> : <FontAwesomeIcon onClick={handleHeartClick} icon={faHeart}  /> }
        </div>
        <div className="popup">
          <p>View Product</p>
        </div>
      </div>
      <h3>{data.title}</h3>
      <h3 className='price'><span className='strike-price'>Rs. {Math.floor(data.price * 1.3)} </span> Rs. {data.price}</h3>
      <p>Rating: {data.rating.rate}</p>
    </div>
  )
}
