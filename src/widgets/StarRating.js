import React, {useState} from 'react'
// styling
import './style/star.css'
// component
const Star = ({ selected = false, size }) => (
  <div className={selected ? "star selected" : "star"} style={{width:`${size}px`, height:`${size}px`}} />
);

const StarRating = ({ initialValue, size }) => {
  const [starsSelected] = useState(initialValue);
  return (
    <div className="star-rating">
      {[...Array(5)].map((n, i) => (
        <Star
          key={i}
          selected={i < starsSelected}
          size={size}
        /> 
      ))}
    </div>
  );
};

export default StarRating
