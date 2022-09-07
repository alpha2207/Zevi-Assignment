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
      <div className="product-image" style={{ background: `url(${data.image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
        <div className="heart">
          {isHeartFilled ? <FontAwesomeIcon onClick={handleHeartClick} icon={solidHeart} style={{color:'red'}} /> : <FontAwesomeIcon onClick={handleHeartClick} icon={faHeart}  /> }
        </div>
        <div className="popup">
          <p>View Product</p>
        </div>
      </div>
      <h2>{data.title}</h2>
      <h3 className='price'><span className='strike-price'>Rs. {Math.floor(data.price * 1.3)} </span> Rs. {data.price}</h3>
      <p>Rating: {data.rating.rate}</p>
    </div>
  )
}
